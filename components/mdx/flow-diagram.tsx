/**
 * FlowDiagram — a small left-to-right node/edge graph for architecture and
 * decision flows (e.g. router → service → store, or a branch on a condition).
 * Lay out nodes in columns; draw arrows between them by id. Theme-aware.
 */
type FNode = { id: string; label: string; sub?: string; col: number; accent?: boolean };
type FEdge = { from: string; to: string; label?: string };

export function FlowDiagram({
  nodes,
  edges,
  caption,
}: {
  nodes: FNode[];
  edges: FEdge[];
  caption?: string;
}) {
  const cols = Math.max(...nodes.map((n) => n.col)) + 1;
  // Wider column pitch than node width leaves a clear gutter between boxes so
  // edge labels have room to sit without overlapping the node rectangles.
  const colW = 210;
  const nodeW = 132;
  const nodeH = 56;
  const gapY = 28;
  const padX = 20;
  const padY = 24;
  // Rough label width for the background pill (mono ~5.6px/char at 10px).
  const labelW = (s: string) => Math.max(24, s.length * 5.6 + 12);

  // group nodes by column to stack them vertically + centered
  const byCol: FNode[][] = Array.from({ length: cols }, () => []);
  nodes.forEach((n) => byCol[n.col].push(n));
  const maxRows = Math.max(...byCol.map((c) => c.length));
  const height = padY * 2 + maxRows * nodeH + (maxRows - 1) * gapY;
  // Columns are spaced colW apart but the last node is nodeW wide, so the
  // right edge sits at (cols-1)*colW + nodeW — using nodeW alone clips it.
  const width = padX * 2 + (cols - 1) * colW + nodeW;

  function pos(id: string) {
    const n = nodes.find((x) => x.id === id)!;
    const colNodes = byCol[n.col];
    const idx = colNodes.findIndex((x) => x.id === id);
    const colHeight = colNodes.length * nodeH + (colNodes.length - 1) * gapY;
    const startY = (height - colHeight) / 2;
    return {
      x: padX + n.col * colW,
      y: startY + idx * (nodeH + gapY),
    };
  }

  return (
    <figure className="my-9">
      <div
        className="overflow-x-auto rounded-xl px-4 py-6 sm:px-6"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="mx-auto block"
          style={{ maxWidth: "100%", color: "var(--accent)" }}
          role="img"
        >
          <defs>
            <marker
              id="flow-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 0L10 5L0 10z" fill="currentColor" />
            </marker>
          </defs>

          {edges.map((e, i) => {
            const a = pos(e.from);
            const b = pos(e.to);
            const sx = a.x + nodeW;
            const sy = a.y + nodeH / 2;
            const ex = b.x;
            const ey = b.y + nodeH / 2;
            const midX = (sx + ex) / 2;
            const d = `M${sx},${sy} C${midX},${sy} ${midX},${ey} ${ex - 8},${ey}`;
            // Place the label at the curve's midpoint. For a same-row edge the
            // curve is a flat line, so lift the label above it; otherwise centre
            // it on the vertical run. A paper-coloured pill sits behind it so
            // it never reads as overlapping the connector or a node box.
            const sameRow = Math.abs(sy - ey) < 1;
            const lx = midX;
            const ly = sameRow ? sy - 9 : (sy + ey) / 2;
            const lw = e.label ? labelW(e.label) : 0;
            return (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  markerEnd="url(#flow-arrow)"
                  opacity="0.75"
                />
                {e.label && (
                  <>
                    <rect
                      x={lx - lw / 2}
                      y={ly - 8}
                      width={lw}
                      height={15}
                      rx="4"
                      fill="var(--paper-raised)"
                    />
                    <text
                      x={lx}
                      y={ly + 3}
                      textAnchor="middle"
                      fontSize="10"
                      fill="var(--ink-faint)"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      {e.label}
                    </text>
                  </>
                )}
              </g>
            );
          })}

          {nodes.map((n) => {
            const p = pos(n.id);
            return (
              <g key={n.id}>
                <rect
                  x={p.x}
                  y={p.y}
                  width={nodeW}
                  height={nodeH}
                  rx="10"
                  fill={n.accent ? "var(--accent-soft)" : "color-mix(in oklab, var(--ink) 4%, transparent)"}
                  stroke={
                    n.accent
                      ? "color-mix(in oklab, var(--accent) 32%, transparent)"
                      : "var(--line)"
                  }
                  strokeWidth="1"
                />
                <text
                  x={p.x + nodeW / 2}
                  y={n.sub ? p.y + nodeH / 2 - 4 : p.y + nodeH / 2 + 4}
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="var(--ink)"
                >
                  {n.label}
                </text>
                {n.sub && (
                  <text
                    x={p.x + nodeW / 2}
                    y={p.y + nodeH / 2 + 12}
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="var(--ink-faint)"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {n.sub}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      {caption && (
        <figcaption
          className="mt-3 text-center text-sm"
          style={{ color: "var(--ink-faint)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
