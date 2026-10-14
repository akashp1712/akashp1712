import { NextResponse } from "next/server";
import { buildAboutMarkdown } from "@/lib/profile";

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(buildAboutMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
