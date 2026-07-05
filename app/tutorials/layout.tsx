import { ReadingShell } from "../_reading/reading-shell";

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReadingShell>{children}</ReadingShell>;
}
