import { ReadingShell } from "../_reading/reading-shell";

export default function BuildingEvercallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReadingShell>{children}</ReadingShell>;
}
