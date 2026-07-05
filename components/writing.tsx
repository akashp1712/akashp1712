import Link from "next/link";
import Image from "next/image";
import { tutorials, articles } from "#site/content";
import { BsArrowRight } from "react-icons/bs";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

// "Mastra, Part 3: The Harness" -> { n: 3, label: "The Harness" }
function seriesPart(title: string) {
  const m = title.match(/Part\s+(\d+):\s*(.+)$/i);
  if (!m) return { n: null as number | null, label: title };
  // Drop any trailing " — subtitle" for a tight chip label.
  const label = m[2].split(" — ")[0].trim();
  return { n: Number(m[1]), label };
}

export default function Writing() {
  // The Mastra series: tutorials that carry an explicit `order`, in sequence.
  const series = tutorials
    .filter((t) => !t.draft && t.order != null)
    .sort((a, b) => (a.order as number) - (b.order as number))
    .map((t) => ({ ...seriesPart(t.title), url: t.url }));

  // Standalone articles — the essays, newest first.
  const standalone = articles
    .filter((a) => !a.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  if (series.length === 0 && standalone.length === 0) return null;

  return (
    <section
      id="blog"
      className="mb-28 w-full max-w-3xl scroll-mt-28 px-4 sm:mb-40 sm:px-6"
    >
      <div className="mb-10">
        <p className="ed-eyebrow mb-4">
          <span className="ed-eyebrow-label">04 / Writing</span>
          <span className="ed-eyebrow-rule" />
        </p>
        <h2 className="ed-section-title text-3xl sm:text-4xl">
          Latest deep dives
        </h2>
      </div>

      {/* The Mastra series, grouped into a single card with a part-list. */}
      {series.length > 0 && (
        <div className="ed-card mb-4 overflow-hidden">
          {/* Series banner image */}
          <div className="relative h-40 w-full sm:h-48" style={{ borderBottom: "1px solid var(--line)" }}>
            <Image
              src="/cover-mastra-series.png"
              alt="The Mastra Series"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-7">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h3
                className="font-display text-xl"
                style={{ color: "var(--ink)", fontWeight: 500 }}
              >
                The Mastra Series
              </h3>
              <span className="ed-meta shrink-0">
                {series.length}-part · runnable code
              </span>
            </div>
            <ol className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {series.map((p) => (
                <li key={p.url}>
                  <Link
                    href={p.url}
                    className="ed-series-item group flex items-baseline gap-3"
                  >
                    <span className="ed-meta shrink-0" style={{ color: "var(--accent)" }}>
                      {String(p.n).padStart(2, "0")}
                    </span>
                    <span style={{ color: "var(--ink-soft)" }}>{p.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Standalone articles — compact rows with small cover thumbnails. */}
      <div className="flex flex-col gap-2">
        {standalone.map((a) => (
          <Link
            key={a.url}
            href={a.url}
            className="ed-card group flex items-center gap-4 p-4 sm:p-5"
          >
            {/* Thumbnail */}
            {a.coverImage && (
              <div className="hidden sm:block shrink-0 overflow-hidden rounded-lg" style={{ width: 80, height: 52 }}>
                <Image
                  src={a.coverImage}
                  alt={a.title}
                  width={80}
                  height={52}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="ed-meta mb-1 flex items-center gap-2.5">
                <span style={{ color: "var(--accent)" }}>Essay</span>
                <span style={{ color: "var(--line)" }}>·</span>
                <span>{formatDate(a.publishedAt)}</span>
              </div>
              <h3
                className="truncate font-display text-base"
                style={{ color: "var(--ink)", fontWeight: 500 }}
              >
                {a.title}
              </h3>
            </div>
            <BsArrowRight
              className="hidden shrink-0 transition group-hover:translate-x-1 sm:block"
              style={{ color: "var(--accent)" }}
            />
          </Link>
        ))}
      </div>

      <div className="ed-meta mt-8 flex flex-wrap gap-6">
        <Link href="/tutorials" className="ed-link inline-flex items-center gap-1.5">
          All tutorials <BsArrowRight />
        </Link>
        <Link href="/articles" className="ed-link inline-flex items-center gap-1.5">
          All articles <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
