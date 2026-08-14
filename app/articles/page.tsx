import { articles } from "#site/content";
import { siteConfig } from "@/lib/site";
import {
  FEATURED_ARTICLE_SLUG,
  VOICE_INTERNALS_SLUGS,
  isVoiceInternalsSlug,
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
    "Voice AI internals — WebRTC, VAD, STT, TTS, asyncio — and field notes from shipping agents.",
  keywords: [
    "voice agents",
    "WebRTC",
    "VAD",
    "STT",
    "TTS",
    "LiveKit",
    "asyncio",
  ],
  alternates: { canonical: `${siteConfig.url}/articles` },
  openGraph: {
    title: "Articles | Akash Panchal",
    description:
      "Voice AI internals — WebRTC, VAD, STT, TTS, asyncio — and field notes from shipping agents.",
    url: `${siteConfig.url}/articles`,
    type: "website",
    images: [{ url: "/cover-asyncio-threads-livekit.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Akash Panchal",
    description:
      "Voice AI internals — WebRTC, VAD, STT, TTS, asyncio — and field notes from shipping agents.",
    images: ["/cover-asyncio-threads-livekit.svg"],
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

  const series = VOICE_INTERNALS_SLUGS.map((slug) =>
    published.find((a) => a.slugAsParams === slug)
  ).filter((a): a is IndexPost => a != null);

  const latest = [...series].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  )[0];

  const signature = published.find(
    (a) => a.slugAsParams === FEATURED_ARTICLE_SLUG
  );

  const rest = published
    .filter(
      (a) =>
        !isVoiceInternalsSlug(a.slugAsParams) &&
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
          Voice first. Internals when the demo stops working — transport,
          hearing, speech, the runtime under the loop.
        </p>
      </header>

      {latest && (
        <FeaturedPost post={latest} kicker="The latest" kind="Essay" />
      )}

      {signature && signature.slugAsParams !== latest?.slugAsParams && (
        <section className="mt-16">
          <p className="tut-kicker mb-3">Start here</p>
          <h2 className="tut-title mb-6 text-2xl sm:text-3xl">
            The signature essay
          </h2>
          <PostRow post={signature} />
        </section>
      )}

      {series.length > 0 && (
        <section className="mt-16">
          <p className="tut-kicker mb-3">Series</p>
          <h2 className="tut-title mb-2 text-2xl sm:text-3xl">
            Voice AI internals
          </h2>
          <p className="tut-lede mb-8 text-base">
            Four essays. WebRTC, then VAD, then the models, then the process
            that has to stay out of the way.
          </p>
          <ul>
            {series.map((post, i) => (
              <li key={post.slug}>
                <PostRow post={post} part={i + 1} />
              </li>
            ))}
          </ul>
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
