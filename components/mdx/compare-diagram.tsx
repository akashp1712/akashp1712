/**
 * CompareDiagram — side-by-side before/after panels.
 * Sized to fit the ~680px prose column without stacking awkwardly.
 */
import { DiagramFrame } from "./diagram-frame";

type Item = { label: string; sub?: string; mono?: boolean };
type Panel = {
  title: string;
  subtitle?: string;
  variant?: "bad" | "good" | "neutral";
  items: Item[];
};

export function CompareDiagram({
  left,
  right,
  caption,
}: {
  left: Panel;
  right: Panel;
  caption?: string;
}) {
  const panelStyle = (variant: Panel["variant"]) => {
    if (variant === "bad") {
      return {
        background: "color-mix(in oklab, #ef4444 6%, var(--paper-raised))",
        border: "1px solid color-mix(in oklab, #ef4444 22%, var(--line))",
        titleColor: "var(--ink)",
      };
    }
    if (variant === "good") {
      return {
        background: "var(--accent-soft)",
        border: "1px solid color-mix(in oklab, var(--accent) 28%, transparent)",
        titleColor: "var(--ink)",
      };
    }
    return {
      background: "color-mix(in oklab, var(--ink) 4%, transparent)",
      border: "1px solid var(--line)",
      titleColor: "var(--ink)",
    };
  };

  function PanelCard({ panel }: { panel: Panel }) {
    const style = panelStyle(panel.variant ?? "neutral");
    return (
      <div
        className="min-w-0 rounded-lg px-3 py-3 sm:px-4 sm:py-4"
        style={{ background: style.background, border: style.border }}
      >
        <div className="mb-2.5">
          <div
            className="text-[13px] font-semibold leading-snug"
            style={{ color: style.titleColor }}
          >
            {panel.title}
          </div>
          {panel.subtitle && (
            <div
              className="mt-0.5 text-[11px] leading-snug"
              style={{ color: "var(--ink-faint)" }}
            >
              {panel.subtitle}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          {panel.items.map((item) => (
            <div
              key={item.label}
              className="rounded-md px-2.5 py-2 sm:px-3 sm:py-2.5"
              style={{
                background: "var(--paper-raised)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                className="break-words text-[11px] font-medium leading-snug sm:text-xs"
                style={{
                  color: "var(--ink)",
                  fontFamily: item.mono
                    ? "var(--font-mono), monospace"
                    : undefined,
                }}
              >
                {item.label}
              </div>
              {item.sub && (
                <div
                  className="mt-1 break-words text-[10px] leading-relaxed sm:text-[11px]"
                  style={{
                    color: "var(--ink-faint)",
                    fontFamily: "var(--font-mono), monospace",
                  }}
                >
                  {item.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DiagramFrame caption={caption} className="px-3 py-5 sm:px-5">
      <div className="relative mx-auto max-w-3xl">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
          <PanelCard panel={left} />
          <PanelCard panel={right} />
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest shadow-sm"
          style={{
            color: "var(--ink-faint)",
            background: "var(--paper-raised)",
            border: "1px solid var(--line)",
          }}
        >
          VS
        </div>
      </div>
    </DiagramFrame>
  );
}
