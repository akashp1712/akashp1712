import { BsInfoCircle, BsLightbulb, BsExclamationTriangle } from "react-icons/bs";

type CalloutType = "info" | "tip" | "warn";

const icons: Record<CalloutType, JSX.Element> = {
  info: <BsInfoCircle />,
  tip: <BsLightbulb />,
  warn: <BsExclamationTriangle />,
};

export function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  return (
    <div
      className="my-7 flex gap-3.5 rounded-xl px-5 py-4 text-[0.98rem] leading-relaxed"
      style={{
        background: "var(--accent-soft)",
        border: "1px solid color-mix(in oklab, var(--accent) 22%, transparent)",
      }}
    >
      <span className="mt-1 shrink-0 text-base" style={{ color: "var(--accent)" }}>
        {icons[type]}
      </span>
      <div className="[&>p]:my-0" style={{ color: "var(--ink)" }}>
        {children}
      </div>
    </div>
  );
}
