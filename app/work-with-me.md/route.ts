import { NextResponse } from "next/server";
import { buildHiringMarkdown } from "@/lib/work";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export function GET() {
  return new NextResponse(buildHiringMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      Link: `<${siteConfig.url}/work-with-me>; rel="canonical"`,
    },
  });
}
