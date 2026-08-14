import { NextResponse } from "next/server";
import { articles, tutorials } from "#site/content";

export const dynamic = "force-static";

type Kind = "articles" | "tutorials";

const collections = {
  articles,
  tutorials,
} as const;

export function generateStaticParams() {
  return [
    ...articles
      .filter((p) => !p.draft)
      .map((p) => ({ kind: "articles" as const, slug: p.slugAsParams })),
    ...tutorials
      .filter((p) => !p.draft)
      .map((p) => ({ kind: "tutorials" as const, slug: p.slugAsParams })),
  ];
}

export function GET(
  _req: Request,
  { params }: { params: { kind: string; slug: string } }
) {
  if (params.kind !== "articles" && params.kind !== "tutorials") {
    return new NextResponse("Not found", { status: 404 });
  }

  const kind = params.kind as Kind;
  const post = collections[kind].find((p) => p.slugAsParams === params.slug);
  if (!post || post.draft) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(post.raw, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
