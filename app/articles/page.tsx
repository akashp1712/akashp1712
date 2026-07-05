import Link from "next/link";
import Image from "next/image";
import { articles } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Articles",
  description:
    "Opinions, experiments, and post-mortems on the tools I actually ship with — the AI SDK, agent frameworks, sandboxes, and voice. Less tutorial, more field notes.",
  keywords: ["AI articles", "agent frameworks", "AI SDK", "voice agents", "build log"],
  alternates: { canonical: `${siteConfig.url}/articles` },
  openGraph: {
    title: "Articles | Akash Panchal",
    description:
      "Opinionated writing on the AI SDK, agent frameworks, sandboxes, and the hard parts of shipping LLM systems.",
    url: `${siteConfig.url}/articles`,
    type: "website",
    images: [{ url: "/cover-voice-agents.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Akash Panchal",
    description:
      "Opinionated writing on the AI SDK, agent frameworks, sandboxes, and the hard parts of shipping LLM systems.",
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

export default function ArticlesPage() {
  const posts = articles
    .filter((t) => !t.draft)
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
          Opinions, experiments, and post-mortems on the tools I actually ship
          with — the AI SDK, agent frameworks, sandboxes, and voice. Less
          tutorial, more field notes.
        </p>
      </header>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.url} className="tut-card group block py-8">
              {/* Cover image */}
              {post.coverImage && (
                <div className="mb-5 overflow-hidden rounded-xl" style={{ border: "1px solid var(--line)" }}>
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
          </li>
        ))}
      </ul>
    </main>
  );
}
