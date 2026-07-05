/**
 * LoopDiagram — a code-native cyclic diagram for "the agent loop".
 * Nodes are laid out on a ring with curved arrows flowing clockwise,
 * back to the start. Theme-aware via CSS variables, crisp at any size.
 */
type Node = { label: string; sub?: string };

export function LoopDiagram({
  nodes,
  caption,
}: {
  nodes: Node[];
  caption?: string;
}) {
  const n = nodes.length;
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 118;
  const nodeR = 46;

  // Position each node evenly around the circle, starting at top (-90°).
  const points = nodes.map((_, i) => {
    const angle = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });

  // Arc from node i to node i+1, slightly inset so it doesn't clip the circles.
  function arcPath(i: number) {
    const a = points[i];
    const b = points[(i + 1) % n];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist;
    const uy = dy / dist;
    // start/end on the rim of each node circle
    const sx = a.x + ux * (nodeR + 4);
    const sy = a.y + uy * (nodeR + 4);
    const ex = b.x - ux * (nodeR + 10);
    const ey = b.y - uy * (nodeR + 10);
    // bow the line outward from the center for a "loop" feel
    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2;
    const outX = mx - cx;
    const outY = my - cy;
    const outLen = Math.sqrt(outX * outX + outY * outY) || 1;
    const bow = 26;
    const qx = mx + (outX / outLen) * bow;
    const qy = my + (outY / outLen) * bow;
    return { d: `M${sx},${sy} Q${qx},${qy} ${ex},${ey}`, ex, ey, qx, qy };
  }

  return (
    <figure className="my-9">
      <div
        className="overflow-x-auto rounded-xl px-6 py-8"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          className="mx-auto block"
          style={{ maxWidth: "100%", color: "var(--accent)" }}
          role="img"
        >
          <defs>
            <marker
              id="loop-arrow"
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

          {nodes.map((_, i) => {
            const { d } = arcPath(i);
            return (
              <path
                key={`arc-${i}`}
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                markerEnd="url(#loop-arrow)"
                opacity="0.7"
              />
            );
          })}

          {points.map((p, i) => (
            <g key={`node-${i}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r={nodeR}
                fill="var(--accent-soft)"
                stroke="color-mix(in oklab, var(--accent) 30%, transparent)"
                strokeWidth="1"
              />
              <text
                x={p.x}
                y={nodes[i].sub ? p.y - 4 : p.y + 4}
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="var(--ink)"
              >
                {nodes[i].label}
              </text>
              {nodes[i].sub && (
                <text
                  x={p.x}
                  y={p.y + 13}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="var(--ink-faint)"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {nodes[i].sub}
                </text>
              )}
            </g>
          ))}
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
