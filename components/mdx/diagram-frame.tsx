/**
 * Shared frame for all code-native MDX diagrams.
 * Keeps background, border, caption, and scroll behavior consistent.
 */
export function DiagramFrame({
  caption,
  children,
  className = "",
}: {
  caption?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className="my-9">
      <div
        className={`overflow-x-auto rounded-xl px-4 py-6 sm:px-6 ${className}`}
        style={{
          background: "var(--paper-raised)",
          border: "1px solid var(--line)",
        }}
      >
        {children}
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
