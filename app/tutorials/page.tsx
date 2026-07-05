import Link from "next/link";
import Image from "next/image";
import { tutorials } from "#site/content";
import { BsArrowRight } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Tutorials",
  description:
    "Long-form, code-heavy tutorials on building AI agents, voice agents, observability, and more with Mastra, TypeScript, and the Vercel AI SDK.",
  keywords: ["AI tutorials", "Mastra tutorial", "AI agents", "TypeScript", "LLMs", "voice agents"],
  alternates: { canonical: `${siteConfig.url}/tutorials` },
  openGraph: {
    title: "Tutorials | Akash Panchal",
    description:
      "Long-form, code-heavy tutorials on building AI agents, voice agents, observability, and more.",
    url: `${siteConfig.url}/tutorials`,
    type: "website",
    images: [{ url: "/cover-mastra-tutorial.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorials | Akash Panchal",
    description:
      "Long-form, code-heavy tutorials on building AI agents, voice agents, and more.",
    images: ["/cover-mastra-tutorial.png"],
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TutorialsPage() {
  // Sort by explicit series `order` when present (so Parts 1..7 read in
  // sequence even when they share a publish date); fall back to newest-first.
  const posts = tutorials
    .filter((t) => !t.draft)
    .sort((a, b) => {
      if (a.order != null && b.order != null) return a.order - b.order;
      if (a.order != null) return -1;
      if (b.order != null) return 1;
      return +new Date(b.publishedAt) - +new Date(a.publishedAt);
    });

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
          Long-form, code-heavy deep dives on AI agents, voice systems, and
          observability — the kind of writing I wish existed when I was figuring
          this out.
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
                {post.order != null && (
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
          </li>
        ))}
      </ul>
    </main>
  );
}
