import Link from "next/link";
import Image from "next/image";
import { tutorials } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import { siteConfig } from "@/lib/site";
import { FEATURED_TUTORIAL_SLUG, isMastraSlug } from "@/lib/content-focus";

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
    images: [{ url: "/cover-voice-agents.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorials | Akash Panchal",
    description:
      "Long-form tutorials on production voice agents — LiveKit and the hard parts of a real call.",
    images: ["/cover-voice-agents.png"],
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function TutorialCard({
  post,
}: {
  post: (typeof tutorials)[number];
}) {
  return (
    <Link href={post.url} className="tut-card group block py-8">
      {post.coverImage && (
        <div
          className="mb-5 overflow-hidden rounded-xl"
          style={{ border: "1px solid var(--line)" }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={450}
            className="w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="tut-meta mb-3 flex items-center gap-3">
        <span>{formatDate(post.publishedAt)}</span>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min</span>
        {post.order != null && isMastraSlug(post.slugAsParams) && (
          <>
            <span aria-hidden>·</span>
            <span style={{ color: "var(--accent)" }}>Part {post.order}</span>
          </>
        )}
      </div>
      <h2 className="tut-card-title mb-2 text-2xl">{post.title}</h2>
      <p className="tut-lede mb-4">{post.description}</p>
      <div className="flex items-center gap-3">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tut-tag">
            {tag}
          </span>
        ))}
        <BsArrowRight className="tut-arrow ml-auto text-lg" />
      </div>
    </Link>
  );
}

export default function TutorialsPage() {
  const published = tutorials.filter((t) => !t.draft);

  const featured = published
    .filter((t) => !isMastraSlug(t.slugAsParams))
    .sort((a, b) => {
      if (a.slugAsParams === FEATURED_TUTORIAL_SLUG) return -1;
      if (b.slugAsParams === FEATURED_TUTORIAL_SLUG) return 1;
      return +new Date(b.publishedAt) - +new Date(a.publishedAt);
    });

  const mastraArchive = published
    .filter((t) => isMastraSlug(t.slugAsParams))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <header className="mb-16">
        <p className="tut-kicker mb-4">Tutorials</p>
        <h1 className="tut-title text-5xl sm:text-6xl">
          Building things,
          <br />
          explained slowly.
        </h1>
        <p className="tut-lede mt-6 text-lg">
          Voice first — LiveKit, latency, barge-in, the parts that break on a
          real call. Earlier agent-runtime notes live below.
        </p>
      </header>

      <ul>
        {featured.map((post) => (
          <li key={post.slug}>
            <TutorialCard post={post} />
          </li>
        ))}
      </ul>

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
                <TutorialCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
