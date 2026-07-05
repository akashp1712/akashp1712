/**
 * LatencyBar — stacked horizontal bars for a latency / cost budget.
 * Each segment is sized by its value; optionally show a "before vs after"
 * comparison (e.g. sequential vs streaming). Theme-aware via CSS variables.
 */
type Segment = { label: string; ms: number };
type Row = { name: string; segments: Segment[] };

function sum(segs: Segment[]) {
  return segs.reduce((t, s) => t + s.ms, 0);
}

export function LatencyBar({
  rows,
  caption,
  unit = "ms",
}: {
  rows: Row[];
  caption?: string;
  unit?: string;
}) {
  const max = Math.max(...rows.map((r) => sum(r.segments)));

  return (
    <figure className="my-9">
      <div
        className="rounded-xl px-5 py-6 sm:px-7"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        <div className="flex flex-col gap-6">
          {rows.map((row) => {
            const total = sum(row.segments);
            return (
              <div key={row.name}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {row.name}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: "var(--ink-faint)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {total}
                    {unit}
                  </span>
                </div>
                <div
                  className="flex h-8 overflow-hidden rounded-md"
                  style={{ width: `${(total / max) * 100}%`, minWidth: "30%" }}
                >
                  {row.segments.map((seg, i) => (
                    <div
                      key={seg.label}
                      className="flex items-center justify-center px-1"
                      style={{
                        flexGrow: seg.ms,
                        flexBasis: 0,
                        background: `color-mix(in oklab, var(--accent) ${
                          18 + i * 16
                        }%, transparent)`,
                        borderRight:
                          i < row.segments.length - 1
                            ? "1px solid var(--paper-raised)"
                            : undefined,
                      }}
                      title={`${seg.label}: ${seg.ms}${unit}`}
                    >
                      <span
                        className="truncate text-[10px]"
                        style={{
                          color: "var(--ink)",
                          fontFamily: "var(--font-mono), monospace",
                        }}
                      >
                        {seg.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
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
