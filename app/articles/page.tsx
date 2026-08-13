import Link from "next/link";
import Image from "next/image";
import { articles } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import { siteConfig } from "@/lib/site";
import { FEATURED_ARTICLE_SLUG } from "@/lib/content-focus";

export const metadata = {
  title: "Articles",
  description:
    "Field notes on production voice agents — latency, barge-in, turn-taking — and the engineering around them.",
  keywords: ["voice agents", "LiveKit", "production agents", "build log"],
  alternates: { canonical: `${siteConfig.url}/articles` },
  openGraph: {
    title: "Articles | Akash Panchal",
    description:
      "Field notes on production voice agents — the hard problems, not the demo.",
    url: `${siteConfig.url}/articles`,
    type: "website",
    images: [{ url: "/cover-voice-agents.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Akash Panchal",
    description:
      "Field notes on production voice agents — the hard problems, not the demo.",
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

function ArticleCard({ post }: { post: (typeof articles)[number] }) {
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

export default function ArticlesPage() {
  const published = articles.filter((t) => !t.draft);
  const featured = published.find((a) => a.slugAsParams === FEATURED_ARTICLE_SLUG);
  const rest = published
    .filter((a) => a.slugAsParams !== FEATURED_ARTICLE_SLUG)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <header className="mb-16">
        <p className="tut-kicker mb-4">Articles</p>
        <h1 className="tut-title text-5xl sm:text-6xl">
          Notes from
          <br />
          the build log.
        </h1>
        <p className="tut-lede mt-6 text-lg">
          Voice first. The rest is field notes from shipping agents — kept
          because they are still true, not because they are the brand.
        </p>
      </header>

      {featured && (
        <ul>
          <li>
            <ArticleCard post={featured} />
          </li>
        </ul>
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
                <ArticleCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
