/**
 * LayerDiagram — stacked horizontal layers (e.g. a runtime stack, a
 * three-layer memory system, router → service → repository).
 * Top layer renders first. Theme-aware via CSS variables.
 */
type Layer = { label: string; sub?: string; accent?: boolean };

export function LayerDiagram({
  layers,
  caption,
}: {
  layers: Layer[];
  caption?: string;
}) {
  return (
    <figure className="my-9">
      <div
        className="rounded-xl px-5 py-6 sm:px-8"
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        <div className="mx-auto flex max-w-md flex-col gap-2.5">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="flex items-center justify-between rounded-lg px-4 py-3.5"
              style={{
                background: layer.accent
                  ? "var(--accent-soft)"
                  : "color-mix(in oklab, var(--ink) 4%, transparent)",
                border: layer.accent
                  ? "1px solid color-mix(in oklab, var(--accent) 30%, transparent)"
                  : "1px solid var(--line)",
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {layer.label}
              </span>
              {layer.sub && (
                <span
                  className="ml-3 text-right text-xs"
                  style={{
                    color: "var(--ink-faint)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {layer.sub}
                </span>
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
