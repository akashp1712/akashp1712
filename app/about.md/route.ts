import { NextResponse } from "next/server";

export const dynamic = "force-static";

const about = `# Akash Panchal

> Engineer building agents and apps that solve operational problems.

## Summary

Akash is an AI Systems Engineer and product-minded software builder with 10 years of experience across Salesforce, Amazon, McAfee, and independent products. He works across TypeScript, Python, React, FastAPI, AWS, and agent runtimes.

## What he builds

- Agentic products: reliable multi-turn systems with skills, tools, memory, evaluation, and human approval points.
- Voice agents: low-latency, interruption-safe systems using LiveKit, WebRTC, VAD, streaming STT/TTS, and dependable tool execution.
- Apps: end-to-end products, from ambiguous customer problem through UX and production implementation.

## Selected work

- Content Studio (Salesforce): multi-turn agent workspace for Marketing Cloud. Designed runtime harness primitives for threads, observational memory, skills, tools, image generation, and human-in-the-loop workflows.
- [Evercall](https://evercall.app): AI call handler for Australian emergency plumbers. Captures missed calls, triages jobs, books follow-up, and SMSes the owner.
- [VibeFrames](https://vibeframes.vercel.app): agentic video workspace that changes editable Remotion compositions with observable tool execution.
- [OneCue](https://onecue.sh): a decision layer that surfaces the prior decision a coding-agent change could break, with the reason behind it.
- [AI SDK Patterns · Learn](https://ai-sdk-patterns.dev/learn): a 16-chapter course on building agents from first principles with TypeScript and AI SDK v6.

## Evidence

- Portfolio: https://akashpanchal.com
- Structured profile: https://akashpanchal.com/profile.json
- Writing index: https://akashpanchal.com/llms.txt
- GitHub: https://github.com/akashp1712
- LinkedIn: https://www.linkedin.com/in/akashp1712
`;

export function GET() {
  return new NextResponse(about, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
