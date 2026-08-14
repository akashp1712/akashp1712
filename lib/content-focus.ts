/** Homepage + index pinning. Mastra URLs stay live; they are not the brand. */

export const FEATURED_ARTICLE_SLUG = "voice-agents-hard-problems";
export const FEATURED_TUTORIAL_SLUG = "livekit-voice-agents";

/** Voice AI internals series — listed in reading order. */
export const VOICE_INTERNALS_SLUGS = [
  "webrtc-for-voice-agents",
  "vad-vs-turn-detection",
  "stt-tts-streaming",
  "asyncio-threads-livekit",
] as const;

export function isMastraSlug(slugAsParams: string) {
  return slugAsParams.startsWith("mastra-");
}

export function isVoiceInternalsSlug(slugAsParams: string) {
  return (VOICE_INTERNALS_SLUGS as readonly string[]).includes(slugAsParams);
}

/** Agent-readable twin of an HTML post. `/articles/foo` → `/articles/foo.md` */
export function markdownUrl(htmlUrl: string) {
  return `${htmlUrl}.md`;
}
