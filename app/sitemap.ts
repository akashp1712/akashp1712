import type { MetadataRoute } from "next";
import { tutorials, articles } from "#site/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = ["", "/tutorials", "/articles"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const contentRoutes = [...tutorials, ...articles]
    .filter((t) => !t.draft)
    .map((t) => ({
      url: `${base}${t.url}`,
      lastModified: new Date(t.updatedAt ?? t.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...contentRoutes];
}
