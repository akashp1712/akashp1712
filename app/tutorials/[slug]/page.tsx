import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { tutorials } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-content";
import { TableOfContents } from "@/components/mdx/toc";
import { BsArrowLeft } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

interface Props {
  params: { slug: string };
}

function getTutorial(slug: string) {
  return tutorials.find((t) => t.slugAsParams === slug);
}

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slugAsParams }));
}

export function generateMetadata({ params }: Props) {
  const post = getTutorial(params.slug);
  if (!post) return {};

  const ogImage = post.coverImage ?? "/cover-mastra-tutorial.png";

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.url}${post.url}` },
    authors: [{ name: "Akash Panchal", url: siteConfig.url }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}${post.url}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Akash Panchal"],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@akashp1712",
      images: [ogImage],
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function TutorialPage({ params }: Props) {
  const post = getTutorial(params.slug);
  if (!post || post.draft) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}${post.url}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: "Akash Panchal",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Akash Panchal",
      url: siteConfig.url,
    },
    image: post.coverImage ? `${siteConfig.url}${post.coverImage}` : undefined,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/tutorials"
        className="tut-meta mb-12 inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
      >
        <BsArrowLeft /> Back to Tutorials
      </Link>

      <div className="gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] xl:gap-20">
        <article className="min-w-0">
          <header className="mb-14">
            <p className="tut-kicker mb-4">Tutorial</p>
            <h1 className="tut-title text-4xl sm:text-5xl">{post.title}</h1>
            <p className="tut-lede mt-5 text-xl">{post.description}</p>
            <div className="tut-meta mt-6 flex flex-wrap items-center gap-3">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.order != null && (
                <>
                  <span aria-hidden>·</span>
                  <span style={{ color: "var(--accent)" }}>Part {post.order} of 7</span>
                </>
              )}
            </div>

            {/* Cover image */}
            {post.coverImage && (
              <div
                className="mt-10 overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--line)" }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={630}
                  priority
                  className="h-auto w-full object-contain"
                  style={{ aspectRatio: "1200 / 630", background: "var(--paper-raised)" }}
                />
              </div>
            )}
          </header>

          <div className="tut-prose max-w-none">
            <MDXContent code={post.content} />
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents toc={post.toc} />
          </div>
        </aside>
      </div>
    </main>
  );
}
