import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "#site/content";
import { MDXContent } from "@/components/mdx/mdx-content";
import { TableOfContents } from "@/components/mdx/toc";
import { BsArrowLeft } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

interface Props {
  params: { slug: string };
}

function getArticle(slug: string) {
  return articles.find((t) => t.slugAsParams === slug);
}

export function generateStaticParams() {
  return articles.map((t) => ({ slug: t.slugAsParams }));
}

export function generateMetadata({ params }: Props) {
  const post = getArticle(params.slug);
  if (!post) return {};

  const ogImage = post.coverImage ?? "/cover-mastra-series.png";

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

export default function ArticlePage({ params }: Props) {
  const post = getArticle(params.slug);
  if (!post || post.draft) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
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
        href="/articles"
        className="tut-meta mb-12 inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
      >
        <BsArrowLeft /> Back to Articles
      </Link>

      <div className="gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] xl:gap-20">
        <article className="min-w-0">
          <header className="mb-14">
            <p className="tut-kicker mb-4">Essay</p>
            <h1 className="tut-title text-4xl sm:text-5xl">{post.title}</h1>
            <p className="tut-lede mt-5 text-xl">{post.description}</p>
            <div className="tut-meta mt-6 flex flex-wrap items-center gap-3">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tut-tag">
                  {tag}
                </span>
              ))}
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
