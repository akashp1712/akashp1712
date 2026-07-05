/**
 * PipelineDiagram — a code-native SVG diagram (no image files).
 * Renders crisp at any size, theme-aware via CSS variables, and editable
 * as data. This is the proposed pattern for tutorial illustrations.
 */
type Stage = { label: string; sub?: string };

export function PipelineDiagram({
  stages,
  caption,
}: {
  stages: Stage[];
  caption?: string;
}) {
  return (
    <figure className="my-9">
      <div
        className="overflow-x-auto rounded-xl px-6 py-9"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        <div className="flex min-w-max items-stretch justify-center gap-2">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-2">
              <div
                className="flex min-w-[7.5rem] flex-col items-center rounded-lg px-4 py-3 text-center"
                style={{
                  background: "var(--accent-soft)",
                  border:
                    "1px solid color-mix(in oklab, var(--accent) 28%, transparent)",
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {stage.label}
                </span>
                {stage.sub && (
                  <span
                    className="mt-0.5 text-xs"
                    style={{
                      color: "var(--ink-faint)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {stage.sub}
                  </span>
                )}
              </div>
              {i < stages.length - 1 && (
                <svg
                  width="28"
                  height="16"
                  viewBox="0 0 28 16"
                  fill="none"
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                >
                  <path
                    d="M0 8h22m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
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
