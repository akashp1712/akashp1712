type TocEntry = {
  title: string;
  url: string;
  items?: TocEntry[];
};

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (!toc?.length) return null;
  return (
    <nav className="tut-toc text-sm">
      <p className="tut-toc-label mb-4">On this page</p>
      <ul className="flex flex-col gap-2.5">
        {toc.map((entry) => (
          <li key={entry.url}>
            <a href={entry.url} className="block pl-3 leading-snug">
              {entry.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
