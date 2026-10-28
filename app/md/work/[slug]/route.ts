import { NextResponse } from "next/server";
import { caseStudies, buildCaseMarkdown } from "@/lib/work";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export function generateStaticParams() { return caseStudies.map(p => ({ slug: p.slug })); }
export function GET(_request: Request, { params }: { params: { slug: string } }) {
  const project = caseStudies.find(p => p.slug === params.slug);
  if (!project) return new NextResponse("# Page not found\n\nThis page does not exist. Browse [the agent index](/llms.txt) or [the sitemap](/sitemap.xml).", { status: 404, headers: { "Content-Type": "text/markdown; charset=utf-8" } });
  return new NextResponse(buildCaseMarkdown(project), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      Link: `<${siteConfig.url}/work/${project.slug}>; rel="canonical"`,
    },
  });
}
