import { articles } from "#site/content";
import { siteConfig } from "@/lib/site";
import {
  FEATURED_ARTICLE_SLUG,
  WEBRTC_ARTICLE_SLUG,
} from "@/lib/content-focus";
import {
  FeaturedPost,
  PostRow,
  TopicStrip,
  type IndexPost,
} from "@/components/writing-index";

export const metadata = {
  title: "Articles",
  description:
    "Field notes on production voice agents — WebRTC, latency, barge-in, turn-taking — and the engineering around them.",
  keywords: [
    "voice agents",
    "WebRTC",
    "LiveKit",
    "production agents",
    "real-time audio",
  ],
  alternates: { canonical: `${siteConfig.url}/articles` },
  openGraph: {
    title: "Articles | Akash Panchal",
    description:
      "Field notes on production voice agents — the hard problems, not the demo.",
    url: `${siteConfig.url}/articles`,
    type: "website",
    images: [{ url: "/cover-webrtc-for-voice-agents.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Akash Panchal",
    description:
      "Field notes on production voice agents — the hard problems, not the demo.",
    images: ["/cover-webrtc-for-voice-agents.svg"],
  },
};

function asIndex(post: (typeof articles)[number]): IndexPost {
  return {
    slug: post.slug,
    slugAsParams: post.slugAsParams,
    url: post.url,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    readingMinutes: post.readingMinutes,
    tags: post.tags,
    coverImage: post.coverImage,
  };
}

export default function ArticlesPage() {
  const published = articles.filter((t) => !t.draft).map(asIndex);

  const webrtc = published.find((a) => a.slugAsParams === WEBRTC_ARTICLE_SLUG);

  const signature = published.find(
    (a) => a.slugAsParams === FEATURED_ARTICLE_SLUG
  );

  const rest = published
    .filter(
      (a) =>
        a.slugAsParams !== WEBRTC_ARTICLE_SLUG &&
        a.slugAsParams !== FEATURED_ARTICLE_SLUG
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  const topics = Array.from(
    new Set(published.flatMap((p) => p.tags))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <header className="mb-16">
        <p className="tut-kicker mb-4">Articles</p>
        <h1 className="tut-title text-5xl sm:text-6xl">
          Notes from
          <br />
          the build log.
        </h1>
        <p className="tut-lede mt-6 max-w-xl text-lg">
          Voice first. Transport, timing, and the parts that break when a real
          person talks to your agent.
        </p>
      </header>

      {webrtc && (
        <FeaturedPost post={webrtc} kicker="Deep dive" kind="Essay" />
      )}

      {signature && (
        <section className="mt-16">
          <p className="tut-kicker mb-3">Start here</p>
          <h2 className="tut-title mb-6 text-2xl sm:text-3xl">
            The signature essay
          </h2>
          <PostRow post={signature} />
        </section>
      )}

      {rest.length > 0 && (
        <section className="mt-16">
          <p className="tut-kicker mb-3">Also</p>
          <h2 className="tut-title mb-8 text-2xl sm:text-3xl">
            Other field notes
          </h2>
          <ul>
            {rest.map((post) => (
              <li key={post.slug}>
                <PostRow post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <TopicStrip tags={topics} />
    </main>
  );
}
