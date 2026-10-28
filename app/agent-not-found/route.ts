import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export function GET() {
  return new NextResponse(`# Page not found\n\nThis URL does not exist. Find Akash Panchal’s profile, projects, and writing at [the portfolio](${siteConfig.url}), [agent index](${siteConfig.url}/llms.txt), or [sitemap](${siteConfig.url}/sitemap.xml).\n`, {
    status: 404,
    headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept", "Cache-Control": "no-store" },
  });
}
