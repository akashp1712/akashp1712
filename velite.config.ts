import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

// Rough reading time from raw mdx body (~200 wpm)
function readingTime(raw: string): number {
  const words = raw.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const tutorials = defineCollection({
  name: "Tutorial",
  pattern: "tutorials/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().max(300),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      // Explicit position within a series. Several parts can share a
      // publishedAt date, so sorting by date alone scrambles the order —
      // `order` gives the index a stable 1..N sequence to sort on.
      order: s.number().optional(),
      tags: s.array(s.string()).default([]),
      coverImage: s.string().optional(),
      draft: s.boolean().default(false),
      // velite built-ins
      slug: s.path(),
      toc: s.toc(),
      metadata: s.metadata(), // { readingTime, wordCount }
      content: s.mdx(),
      raw: s.raw(),
    })
    .transform((data) => ({
      ...data,
      // normalize slug: "tutorials/foo" -> "foo"
      slugAsParams: data.slug.split("/").slice(1).join("/") || data.slug,
      url: `/tutorials/${data.slug.split("/").slice(1).join("/") || data.slug}`,
      readingMinutes: readingTime(data.raw),
    })),
});

const articles = defineCollection({
  name: "Article",
  pattern: "articles/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().max(300),
      publishedAt: s.isodate(),
      updatedAt: s.isodate().optional(),
      tags: s.array(s.string()).default([]),
      coverImage: s.string().optional(),
      draft: s.boolean().default(false),
      // velite built-ins
      slug: s.path(),
      toc: s.toc(),
      metadata: s.metadata(), // { readingTime, wordCount }
      content: s.mdx(),
      raw: s.raw(),
    })
    .transform((data) => ({
      ...data,
      // normalize slug: "articles/foo" -> "foo"
      slugAsParams: data.slug.split("/").slice(1).join("/") || data.slug,
      url: `/articles/${data.slug.split("/").slice(1).join("/") || data.slug}`,
      readingMinutes: readingTime(data.raw),
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { tutorials, articles },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { dark: "vitesse-dark", light: "vitesse-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});
