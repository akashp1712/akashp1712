import { tutorials } from "#site/content";
import { siteConfig } from "@/lib/site";
import { FEATURED_TUTORIAL_SLUG, isMastraSlug } from "@/lib/content-focus";
import {
  FeaturedPost,
  PostRow,
  TopicStrip,
  type IndexPost,
} from "@/components/writing-index";

export const metadata = {
  title: "Tutorials",
  description:
    "Long-form tutorials on production voice agents — LiveKit, latency, barge-in, and the engineering that survives a real call.",
  keywords: [
    "voice agents",
    "LiveKit",
    "AI tutorials",
    "production agents",
    "TypeScript",
    "Python",
  ],
  alternates: { canonical: `${siteConfig.url}/tutorials` },
  openGraph: {
    title: "Tutorials | Akash Panchal",
    description:
      "Long-form tutorials on production voice agents — LiveKit and the hard parts of a real call.",
    url: `${siteConfig.url}/tutorials`,
    type: "website",
    images: [{ url: "/cover-livekit-voice-agents.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorials | Akash Panchal",
    description:
      "Long-form tutorials on production voice agents — LiveKit and the hard parts of a real call.",
    images: ["/cover-livekit-voice-agents.svg"],
  },
};

function asIndex(post: (typeof tutorials)[number]): IndexPost {
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
    order: post.order,
  };
}

export default function TutorialsPage() {
  const published = tutorials.filter((t) => !t.draft).map(asIndex);

  const featured =
    published.find((t) => t.slugAsParams === FEATURED_TUTORIAL_SLUG) ??
    published
      .filter((t) => !isMastraSlug(t.slugAsParams))
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))[0];

  const other = published
    .filter(
      (t) =>
        !isMastraSlug(t.slugAsParams) &&
        t.slugAsParams !== featured?.slugAsParams
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  const mastraArchive = published
    .filter((t) => isMastraSlug(t.slugAsParams))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const topics = Array.from(
    new Set(
      published
        .filter((t) => !isMastraSlug(t.slugAsParams))
        .flatMap((p) => p.tags)
    )
  ).sort((a, b) => a.localeCompare(b));

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <header className="mb-16">
        <p className="tut-kicker mb-4">Tutorials</p>
        <h1 className="tut-title text-5xl sm:text-6xl">
          Building things,
          <br />
          explained slowly.
        </h1>
        <p className="tut-lede mt-6 max-w-xl text-lg">
          Voice first — LiveKit, latency, barge-in, the parts that break on a
          real call. Earlier agent-runtime notes live below.
        </p>
      </header>

      {featured && (
        <FeaturedPost post={featured} kicker="Start here" kind="Tutorial" />
      )}

      {other.length > 0 && (
        <section className="mt-16">
          <p className="tut-kicker mb-3">Also</p>
          <h2 className="tut-title mb-8 text-2xl sm:text-3xl">
            More walkthroughs
          </h2>
          <ul>
            {other.map((post) => (
              <li key={post.slug}>
                <PostRow post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {mastraArchive.length > 0 && (
        <section className="mt-20">
          <p className="tut-kicker mb-3">Earlier</p>
          <h2 className="tut-title mb-2 text-2xl sm:text-3xl">
            Building with Mastra
          </h2>
          <p className="tut-lede mb-8 text-base">
            A 7-part series from 2026. Kept because the URLs still get hits —
            not because it is what I am building now.
          </p>
          <ul>
            {mastraArchive.map((post) => (
              <li key={post.slug}>
                <PostRow post={post} part={post.order ?? undefined} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <TopicStrip tags={topics} />
    </main>
  );
}
