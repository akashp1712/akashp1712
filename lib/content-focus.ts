/** Homepage + index pinning. Mastra URLs stay live; they are not the brand. */

export const FEATURED_ARTICLE_SLUG = "voice-agents-hard-problems";
export const FEATURED_TUTORIAL_SLUG = "livekit-voice-agents";

/** Standalone deep dive — featured on articles index and homepage writing block. */
export const WEBRTC_ARTICLE_SLUG = "webrtc-for-voice-agents";

export function isMastraSlug(slugAsParams: string) {
  return slugAsParams.startsWith("mastra-");
}

/** Agent-readable twin of an HTML post. `/articles/foo` → `/articles/foo.md` */
export function markdownUrl(htmlUrl: string) {
  return `${htmlUrl}.md`;
}
