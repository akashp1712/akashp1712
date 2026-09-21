import { NextResponse } from "next/server";

export const dynamic = "force-static";

const profile = {
  name: "Akash Panchal",
  headline: "Engineer building agents and apps that solve operational problems",
  url: "https://akashpanchal.com",
  roles: ["AI Systems Engineer", "Product Engineer", "Founder"],
  skills: {
    languages_and_platforms: ["TypeScript", "Python", "React", "Next.js", "FastAPI", "AWS"],
    agent_systems: ["Agent harnesses", "Tool execution", "Memory", "Evaluation", "Human-in-the-loop"],
    voice: ["LiveKit", "WebRTC", "VAD", "Streaming STT/TTS", "Barge-in"],
  },
  projects: [
    { name: "Content Studio", context: "Salesforce", focus: "Agent runtime for Marketing Cloud", url: "https://www.salesforce.com/marketing/" },
    { name: "Evercall", focus: "AI phone agent for Australian emergency plumbers", url: "https://evercall.app" },
    { name: "VibeFrames", focus: "Agentic Remotion video workspace", url: "https://vibeframes.vercel.app" },
    { name: "OneCue", focus: "Fast idea capture with contextual recall", url: "https://onecue.sh" },
    { name: "AI SDK Patterns · Learn", focus: "Course on building agents from first principles with TypeScript and AI SDK v6", url: "https://ai-sdk-patterns.dev/learn" },
  ],
  experience: ["Salesforce", "Amazon", "McAfee"],
  representations: {
    markdown: "https://akashpanchal.com/about.md",
    llms_txt: "https://akashpanchal.com/llms.txt",
    resume: "https://akashpanchal.com/CV.pdf",
  },
};

export function GET() {
  return NextResponse.json(profile, {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
