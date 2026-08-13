/** Homepage + index pinning. Mastra URLs stay live; they are not the brand. */

export const FEATURED_ARTICLE_SLUG = "voice-agents-hard-problems";
export const FEATURED_TUTORIAL_SLUG = "livekit-voice-agents";

export function isMastraSlug(slugAsParams: string) {
  return slugAsParams.startsWith("mastra-");
}
