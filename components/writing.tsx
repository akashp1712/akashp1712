import Link from "next/link";
import { tutorials, articles } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import SectionHeading from "./section-heading";
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
    <section id="blog" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Writing">Notes from the work</SectionHeading>
      <div className="work-list">
        {featured.map((item) => (
          <Link key={item.url} href={item.url} className="work-row group">
            <div className="work-row__meta">
              <h3>{item.title}</h3>
              <span>
                {item.kind} · {formatDate(item.publishedAt)}
              </span>
            </div>
            {item.description ? (
              <p className="work-row__desc">{item.description}</p>
            ) : null}
            <BsArrowRight className="work-row__arrow" aria-hidden />
          </Link>
        ))}
      </div>
      <div className="ed-meta mt-8 flex flex-wrap gap-6">
        <Link href="/tutorials" className="ed-link inline-flex items-center gap-1.5">
          Tutorials <BsArrowRight />
        </Link>
        <Link href="/articles" className="ed-link inline-flex items-center gap-1.5">
          Articles <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
