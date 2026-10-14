import { NextResponse } from "next/server";
import { buildPublicProfileJson } from "@/lib/profile";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(buildPublicProfileJson(), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
