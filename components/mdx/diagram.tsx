export function Diagram({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-8 rounded-xl px-6 py-8 text-center text-sm leading-7"
      style={{
        background: "var(--paper-raised)",
        border: "1px solid var(--line)",
        color: "var(--ink-soft)",
        fontFamily: "var(--font-mono), monospace",
      }}
    >
      {children}
    </div>
  );
}
