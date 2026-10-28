import { siteConfig } from "./site";

export const hiring = {
  title: "Discuss an AI engineering role",
  description: "Work with Akash Panchal on agent runtimes, voice AI, and end-to-end AI products. Explore relevant work and start a conversation about your engineering role.",
  introduction: "I’m Akash Panchal, an AI Software Engineer at Salesforce with ten years of engineering experience across Salesforce, Amazon, and McAfee. I build the systems that turn model output into useful product behavior.",
  email: "akashp1712@gmail.com",
  scopes: [
    { title: "AI engineer · Agent infrastructure", description: "Multi-turn runtimes with thread state, tool execution, memory, skills, evaluation, and human approval points.", evidence: "/harness", label: "Explore my engineering harness" },
    { title: "Voice AI engineer", description: "Voice applications using LiveKit, WebRTC, voice activity detection, interruption handling, and streaming speech services.", evidence: "/work/evercall", label: "Read the Evercall project brief" },
    { title: "AI product engineer", description: "TypeScript, Python, React, Next.js, and FastAPI across the interface, agent runtime, and backend. From a conversation to an editable product artifact.", evidence: "/work/vibeframes", label: "Read the VibeFrames project brief" },
  ],
  contactNote: "Tell me what you’re building, the role’s scope, location or remote arrangement, and expected timeline. We can discuss fit and availability directly.",
} as const;

// Project briefs use only existing portfolio claims and linked public evidence.
// Keep status separate from the product's intended workflow or unmeasured impact.
export const caseStudies = [
  {
    slug: "vibeframes",
    name: "VibeFrames",
    title: "VibeFrames: an agent that builds editable videos",
    description: "An independent video workspace connecting a Mastra agent harness to typed compositions and Remotion rendering.",
    status: "Independent project · v0.1, as described in the public repository",
    sections: [
      { title: "The problem", text: "A video brief needs to become a concrete sequence of scenes. VibeFrames explores a conversational workflow where the agent assembles a composition that can be inspected and rendered." },
      { title: "What I built", text: "An agentic video workspace with a Mastra harness, observable tool calls, and editable Remotion compositions. The public implementation connects the Director agent to scene tools, streams activity to the studio, and previews the resulting composition." },
      { title: "The engineering decision", text: "The agent and renderer meet at typed composition JSON. Scene tools write that representation; Remotion reads it for preview and MP4 rendering. This keeps creative decisions in the agent and frame rendering in deterministic React components." },
      { title: "What the evidence shows", text: "The repository documents the prompt-to-composition-to-preview-to-MP4 loop and the code paths behind it. This is implementation evidence; customer adoption, rendering throughput, and business impact are not quantified here." },
    ],
    sources: [
      { label: "Source code and architecture", url: "https://github.com/akashp1712/vibeframes" },
      { label: "VibeFrames website", url: "https://vibeframes.vercel.app" },
    ],
  },
  {
    slug: "evercall",
    name: "Evercall",
    title: "Evercall: voice AI for missed plumbing calls",
    description: "An independent AI call handler for Australian emergency plumbers, ready to onboard customers.",
    status: "Independent product · ready to onboard customers (build log, 20 October 2026)",
    sections: [
      { title: "The problem", text: "An emergency plumber can miss an incoming call while working. Evercall is designed to capture the caller’s request and turn it into a useful follow-up for the business." },
      { title: "What I’m building", text: "An AI call handler that captures missed calls, triages jobs, books follow-up, and sends the owner an SMS. It brings voice interaction and business workflow into one product." },
      { title: "The engineering context", text: "The build log records work on the DID-to-SIP-to-Neon path and a live browser agent in August 2026. My related technical writing covers LiveKit, WebRTC, interruption handling, streaming speech, and tool execution. Those articles explain my engineering approach rather than serve as a claim about every component deployed in Evercall." },
      { title: "Current status", text: "The 20 October 2026 build log says Evercall is ready to onboard customers. Customer counts, revenue, booked-job conversion, and latency results are not published in this brief." },
    ],
    sources: [
      { label: "Evercall website", url: "https://evercall.app" },
      { label: "Dated build log", url: `${siteConfig.url}/building-evercall` },
      { label: "Voice agent engineering notes", url: `${siteConfig.url}/articles/voice-agents-hard-problems` },
    ],
  },
] as const;

export function buildHiringMarkdown() {
  return `# ${hiring.title}

${hiring.introduction}

## Relevant engineering work

${hiring.scopes.map(s => `### ${s.title}

${s.description}

[${s.label}](${siteConfig.url}${s.evidence})`).join("\n\n")}

## Start a conversation

${hiring.contactNote}

Email: ${hiring.email}

[Résumé](${siteConfig.url}/CV.pdf) · [Structured profile](${siteConfig.url}/profile.json)
`;
}

export function buildCaseMarkdown(project: (typeof caseStudies)[number]) {
  return `# ${project.title}

${project.description}

Status: ${project.status}

${project.sections.map(s => `## ${s.title}

${s.text}`).join("\n\n")}

## Sources

${project.sources.map(s => `- [${s.label}](${s.url})`).join("\n")}

Author: Akash Panchal
Canonical: ${siteConfig.url}/work/${project.slug}
`;
}
