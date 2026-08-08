# Diagram design system

Diagrams in tutorials and articles are hand-built SVG React components in
`components/mdx/`, dropped inline in MDX. They are theme-aware, versionable in
git, and readable in a diff — which is why they aren't images.

This document is the shared contract: which component to reach for, the rules
that keep a diagram legible, and how to verify one before publishing.

## Picking a component

| Component | Shape it draws | Reach for it when |
| --- | --- | --- |
| `PipelineDiagram` | Linear stages, left to right | A fixed sequence with no branching |
| `FlowDiagram` | Nodes on a column grid, arbitrary edges | A path that branches, rejoins, or loops back |
| `StateDiagram` | Vertical spine + one side branch | Lifecycle states with named transitions |
| `SequenceDiagram` | Actor lanes with messages between them | Who calls whom, in what order, over time |
| `LayerDiagram` | Stacked bands | Layering or ownership, not flow |
| `LoopDiagram` | A cycle | Something that repeats until a condition |
| `CompareDiagram` | Two panels, good vs bad | Contrasting an approach with its alternative |
| `LatencyBar` | Stacked time segments | A budget where the proportions are the point |

Every component takes a `caption`, and every diagram should set one. The caption
carries the claim; the drawing only supports it.

## Layout rules

These are not style preferences. Each one comes from a diagram that shipped
broken.

**State position explicitly; never infer it from a name.** `StateDiagram` used
to place a side branch by looking up a state whose id was literally `"run"`,
falling back to row 1. It worked only because the one diagram using it happened
to have that id, and would have silently misplaced the next one. Branch rows are
now derived from the transitions that connect the node — from real structure,
not a guessed name.

**Put a branch next to the node it branches from.** Edge labels are placed at the
midpoint of the edge. An edge spanning two columns puts its label squarely on
whatever sits between, so a `Waitlist` node two columns from `Stay` printed
"sold out" across the `Room` node's subtitle. Adjacent nodes keep the label in
empty space. This also keeps the diagram honest: distance implies sequence, so a
branch drawn late reads as happening late.

**Keep one row grid so the main path is straight.** `FlowDiagram` originally
centred each column independently, so adding a second node to one column shoved
that column's neighbour off-axis and the happy path became a staircase. Nodes
now take an optional `row`; when any node sets one, all columns share a single
grid. Without `row`, columns still centre independently, which is what fan-out
diagrams want.

**Route backward edges above the flow.** Regression and retry edges hop over the
top, leaving the space below the main row free for branch nodes. Two edges both
wanting the space under the spine is how diagrams tangle.

**Separate parallel edges in both path and label.** Two transitions between the
same pair of nodes drew on the same line at the same label position, rendering
"needs tool" and "approved" on top of each other as unreadable pulp. A request
and its response now ride at ±11px with labels above and below.

**Reserve gutters for anything that routes around a node.** A return lane needs
horizontal room outside the node column, or its label lands on the node it was
routing around.

## Visual tokens

Never hardcode a colour. Everything reads from the reading theme in
`app/_reading/reading.css`, so diagrams follow light and dark automatically:

- `--ink` node titles, `--ink-faint` subtitles and edge labels
- `--line` node borders, `--paper-raised` label pill fill
- `--accent` / `--accent-soft` for the one or two nodes that carry the point

Conventions that keep the set feeling like one family: node titles at 12.5px
semibold, subtitles at 9.5px mono, edge labels at 10px mono on a filled pill so
they stay readable where they cross a line, and arrowheads via a per-instance
`<marker>` id from `useId()` so two diagrams on a page can't collide.

Accent is a spotlight. When most nodes are accented, none are.

## Verify before publishing

Read the rendered output. Both bugs above survived review because the JSX looked
correct — coordinate math fails visually, not logically.

The components are server-rendered, so you can pull the finished SVG straight out
of the page HTML and rasterize it without a browser session:

```python
# render one diagram from the dev server to a PNG
import re, subprocess, sys, urllib.request

path, needle, out = sys.argv[1], sys.argv[2], sys.argv[3]
html = urllib.request.urlopen(f"http://localhost:3000{path}").read().decode()
svg = next(s for s in re.findall(r"<svg\b.*?</svg>", html, re.S) if needle in s)

w = int(re.search(r'width="(\d+)"', svg).group(1))
h = int(re.search(r'height="(\d+)"', svg).group(1))
open("/tmp/wrap.html", "w").write(
    f'<body style="margin:0"><div style="--ink:#0f172a;--ink-faint:#64748b;'
    f'--line:rgba(15,23,42,.08);--paper-raised:#fff;--accent:#0f172a;'
    f'--accent-soft:rgba(15,23,42,.05)">{svg}</div>'
)
subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                "--headless", "--disable-gpu", f"--screenshot={out}",
                f"--window-size={w},{h}", "file:///tmp/wrap.html"])
```

Check three things in the image: no text overlapping another element, the main
path reading as one line, and every label sitting in empty space. Then check it
at phone width — diagrams scroll inside their frame rather than overflowing the
page, so a wide diagram is allowed, but the first screenful should still make
the point.

When you change a shared component, re-render a diagram that *doesn't* use the
new feature too. The row grid and the branch anchor were both built to leave the
existing call sites on their original code path, and that's only worth anything
if you confirm it.
