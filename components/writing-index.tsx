import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export type IndexPost = {
  slug: string;
  slugAsParams: string;
  url: string;
  title: string;
  description: string;
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  coverImage?: string;
  order?: number | null;
};

export function formatPostDate(d: string, long = false) {
  return new Date(d).toLocaleDateString("en-US", long
    ? { month: "short", day: "numeric", year: "numeric" }
    : { month: "short", day: "numeric" });
}

export function FeaturedPost({
  post,
  kicker = "The latest",
  kind = "Essay",
}: {
  post: IndexPost;
  kicker?: string;
  kind?: string;
}) {
  return (
    <article className="tut-featured">
      <p className="tut-kicker mb-4">{kicker}</p>
      <p className="tut-meta mb-4">
        {kind} · {formatPostDate(post.publishedAt, true)} · {post.readingMinutes} min
      </p>
      <h2 className="tut-title mb-4 text-3xl sm:text-4xl">
        <Link href={post.url} className="tut-featured-link">
          {post.title}
        </Link>
      </h2>
      <p className="tut-lede mb-5 max-w-2xl text-lg">{post.description}</p>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {post.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="tut-tag">
            {tag}
          </span>
        ))}
        <Link
          href={post.url}
          className="tut-meta ml-auto inline-flex items-center gap-1.5 hover:text-[var(--accent)]"
        >
          Read <BsArrowRight />
        </Link>
      </div>
      {post.coverImage && (
        <Link href={post.url} className="tut-featured-cover block overflow-hidden rounded-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={630}
            priority
            className="h-auto w-full object-contain"
            style={{ aspectRatio: "1200 / 630", background: "var(--paper-raised)" }}
          />
        </Link>
      )}
    </article>
  );
}

export function PostRow({
  post,
  part,
}: {
  post: IndexPost;
  part?: number;
}) {
  return (
    <Link href={post.url} className="tut-index-row group">
      <time className="tut-index-date" dateTime={post.publishedAt}>
        {formatPostDate(post.publishedAt, true)}
      </time>
      <div className="min-w-0">
        <h3 className="tut-index-title">
          {part != null && (
            <span className="tut-index-part">Part {part} · </span>
          )}
          {post.title}
        </h3>
        <p className="tut-index-desc">{post.description}</p>
        <div className="tut-index-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <span className="tut-index-mins">{post.readingMinutes} min</span>
        </div>
      </div>
      <BsArrowRight className="tut-arrow hidden sm:block" />
    </Link>
  );
}

export function TopicStrip({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="tut-topics">
      <p className="tut-kicker mb-4">Topics</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {tags.map((tag) => (
          <li key={tag} className="tut-tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
