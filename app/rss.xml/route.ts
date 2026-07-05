import { tutorials, articles } from "#site/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const base = siteConfig.url;

  const items = [
    ...tutorials.filter((t) => !t.draft).map((t) => ({ ...t, kind: "Tutorial" })),
    ...articles.filter((t) => !t.draft).map((t) => ({ ...t, kind: "Article" })),
  ].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  const body = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${base}${item.url}</link>
      <guid>${base}${item.url}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${item.kind}</category>
      <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${base}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${body}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
