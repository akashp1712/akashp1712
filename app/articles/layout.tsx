import { ReadingShell } from "../_reading/reading-shell";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReadingShell>{children}</ReadingShell>;
}
