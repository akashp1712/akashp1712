import { NextRequest, NextResponse } from "next/server";
import { prefersMarkdown } from "./lib/accept";

export function middleware(request: NextRequest) {
  const markdown = ["GET", "HEAD"].includes(request.method)
    && prefersMarkdown(request.headers.get("accept") || "");
  const headers = new Headers(request.headers);
  // Overwrite client input. The fallback rewrite uses this negotiated preference
  // only after Next has checked real pages, route handlers, and public assets.
  headers.set("x-portfolio-format", markdown ? "markdown" : "html");
  const path = request.nextUrl.pathname;
  let destination: string | undefined;
  if (markdown) {
    if (path === "/") destination = "/about.md";
    else if (path === "/work-with-me") destination = "/work-with-me.md";
    else if (/^\/(articles|tutorials|work)\/[^/.]+\/?$/.test(path)) {
      destination = `/md${path.replace(/\/$/, "")}`;
    }
  }
  const response = destination
    ? NextResponse.rewrite(new URL(destination, request.url), { request: { headers } })
    : NextResponse.next({ request: { headers } });
  // Markdown handlers also set this explicitly. Next 13 overwrites HTML Vary,
  // so the participating HTML pages explicitly use force-dynamic/no-store.
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: ["/((?!api/|_next/|md/|agent-not-found|.*\\.).*)"],
};
