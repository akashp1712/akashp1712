import { fraunces, jetbrainsMono } from "./fonts";
import "./reading.css";

/**
 * Shared editorial reading theme for /tutorials and /blog.
 * Applies the display + mono fonts and the warm-paper backdrop,
 * scoped under .reading-root so the rest of the site is untouched.
 */
export function ReadingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${jetbrainsMono.variable} reading-root`}>
      <div aria-hidden className="reading-backdrop" />
      {children}
    </div>
  );
}
