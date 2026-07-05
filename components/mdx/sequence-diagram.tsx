/**
 * SequenceDiagram — actor lifelines with ordered messages between them.
 * Good for request/response flows (FE ↔ agent ↔ tools, SSE event streams).
 * Code-native SVG, theme-aware, scrolls horizontally inside its frame.
 */
type Actor = { id: string; label: string };
type Step = { from: string; to: string; label: string; dashed?: boolean };

export function SequenceDiagram({
  actors,
  steps,
  caption,
}: {
  actors: Actor[];
  steps: Step[];
  caption?: string;
}) {
  const colW = 150;
  const padX = 40;
  const headH = 44;
  const rowH = 52;
  const topPad = 20;
  const width = padX * 2 + colW * (actors.length - 1) + 80;
  const height = topPad + headH + rowH * steps.length + 30;

  const colX = (id: string) => {
    const i = actors.findIndex((a) => a.id === id);
    return padX + 40 + colW * i;
  };

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
              id="seq-arrow"
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

          {/* lifelines + actor heads */}
          {actors.map((a) => {
            const x = colX(a.id);
            return (
              <g key={a.id}>
                <line
                  x1={x}
                  y1={topPad + headH}
                  x2={x}
                  y2={height - 20}
                  stroke="var(--line)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
                <rect
                  x={x - 56}
                  y={topPad}
                  width="112"
                  height={headH - 8}
                  rx="8"
                  fill="var(--accent-soft)"
                  stroke="color-mix(in oklab, var(--accent) 30%, transparent)"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={topPad + headH / 2}
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="600"
                  fill="var(--ink)"
                >
                  {a.label}
                </text>
              </g>
            );
          })}

          {/* messages */}
          {steps.map((s, i) => {
            const y = topPad + headH + rowH * i + rowH / 2;
            const x1 = colX(s.from);
            const x2 = colX(s.to);
            const ltr = x2 >= x1;
            const midX = (x1 + x2) / 2;
            return (
              <g key={i}>
                <text
                  x={midX}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--ink-soft)"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {s.label}
                </text>
                <line
                  x1={x1 + (ltr ? 4 : -4)}
                  y1={y}
                  x2={x2 + (ltr ? -8 : 8)}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray={s.dashed ? "5 4" : undefined}
                  markerEnd="url(#seq-arrow)"
                  opacity={s.dashed ? 0.6 : 0.85}
                />
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
