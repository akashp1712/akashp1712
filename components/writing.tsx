import Link from "next/link";
import { CoverImage } from "@/components/cover-image";
import { tutorials, articles } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import {
  FEATURED_ARTICLE_SLUG,
  FEATURED_TUTORIAL_SLUG,
  WEBRTC_ARTICLE_SLUG,
} from "@/lib/content-focus";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Writing() {
  const voiceArticle = articles.find(
    (a) => !a.draft && a.slugAsParams === FEATURED_ARTICLE_SLUG
  );
  const livekitTutorial = tutorials.find(
    (t) => !t.draft && t.slugAsParams === FEATURED_TUTORIAL_SLUG
  );

  const webrtcArticle = articles.find(
    (a) => !a.draft && a.slugAsParams === WEBRTC_ARTICLE_SLUG
  );

  const featured = [
    webrtcArticle
      ? { ...webrtcArticle, kind: "Essay" as const }
      : voiceArticle
        ? { ...voiceArticle, kind: "Essay" as const }
        : null,
    livekitTutorial
      ? { ...livekitTutorial, kind: "Tutorial" as const }
      : null,
  ].filter((x): x is NonNullable<typeof x> => x != null);

  if (featured.length === 0) return null;

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
          Voice, then the rest
        </h2>
        <p className="tut-lede mt-3 max-w-xl text-base">
          Transport, timing, and the engineering that survives a real call.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {featured.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="ed-card group overflow-hidden"
          >
            {item.coverImage && (
              <div
                className="relative h-40 w-full sm:h-48"
                style={{ borderBottom: "1px solid var(--line)" }}
              >
                <CoverImage
                  src={item.coverImage}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="min-w-0 flex-1">
                <div className="ed-meta mb-1.5 flex items-center gap-2.5">
                  <span style={{ color: "var(--accent)" }}>{item.kind}</span>
                  <span style={{ color: "var(--line)" }}>·</span>
                  <span>{formatDate(item.publishedAt)}</span>
                </div>
                <h3
                  className="font-display text-lg sm:text-xl"
                  style={{ color: "var(--ink)", fontWeight: 500 }}
                >
                  {item.title}
                </h3>
              </div>
              <BsArrowRight
                className="hidden shrink-0 transition group-hover:translate-x-1 sm:block"
                style={{ color: "var(--accent)" }}
              />
            </div>
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
