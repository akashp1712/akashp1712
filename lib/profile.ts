import { experiencesData } from "./data";

export const profile = {
  name: "Akash Panchal",
  headline: "AI systems engineer at Salesforce. Ten years shipping production software.",
  url: "https://akashpanchal.com",
  jobTitle: "AI Systems Engineer",
  currentRole: {
    title: "AI Software Engineer",
    org: "Salesforce",
    focus: "Agent runtime for Marketing Cloud Content Studio",
  },
  yearsExperience: 10,
  employers: ["Salesforce", "Amazon", "McAfee"],
  summary:
    "Akash is an AI systems engineer with 10 years of experience across Salesforce, Amazon, and McAfee. He builds agent runtimes, voice agents, and independent products in TypeScript, Python, React, FastAPI, and AWS.",
  skills: {
    agent_systems: [
      "Harnesses",
      "Tool execution",
      "Observational memory",
      "Skills catalogs",
      "Evals",
      "Human-in-the-loop",
      "Mastra",
    ],
    voice: ["LiveKit", "WebRTC", "VAD", "Barge-in", "Streaming STT/TTS"],
    languages: ["TypeScript", "Python", "Java"],
    frontend: ["React", "Next.js"],
    backend: ["FastAPI", "Node.js", "Kafka", "Redis", "Microservices"],
    cloud_and_data: ["AWS", "Terraform", "Lambda", "DynamoDB", "Cassandra", "MySQL", "MongoDB"],
    mobile: ["Android", "Java", "AOSP"],
  },
  projects: [
    {
      name: "Content Studio",
      context: "Salesforce",
      focus:
        "Multi-turn agent workspace for Marketing Cloud. Harness primitives for threads, memory, skills, tools, and approvals.",
      url: "https://www.salesforce.com/marketing/",
      status: "day-job" as const,
    },
    {
      name: "OneCue",
      focus:
        "Decision layer for coding agents. Surfaces the prior decision a change could break, with the reason, then stays silent when nothing applies.",
      url: "https://onecue.sh",
      status: "independent" as const,
    },
    {
      name: "AI SDK Patterns",
      focus:
        "Open-source TypeScript patterns for the AI SDK, a composer that turns them into a Next.js app, and a 16-chapter learn track.",
      url: "https://ai-sdk-patterns.dev",
      github: "https://github.com/akashp1712/ai-sdk-patterns",
      status: "open-source" as const,
    },
    {
      name: "VibeFrames",
      focus:
        "Agentic video workspace. A Mastra harness turns a brief into an editable Remotion composition with observable tool calls.",
      url: "https://vibeframes.vercel.app",
      github: "https://github.com/akashp1712/vibeframes",
      status: "independent" as const,
    },
    {
      name: "Evercall",
      focus:
        "AI call handler for Australian emergency plumbers, ready to onboard customers. Captures missed calls, triages jobs, books follow-up, SMSes the owner.",
      url: "https://evercall.app",
      status: "independent" as const,
    },
  ],
  representations: {
    markdown: "https://akashpanchal.com/about.md",
    json: "https://akashpanchal.com/profile.json",
    llms_txt: "https://akashpanchal.com/llms.txt",
    resume: "https://akashpanchal.com/CV.pdf",
    github: "https://github.com/akashp1712",
    linkedin: "https://www.linkedin.com/in/akashp1712",
    x: "https://twitter.com/akashp1712",
  },
} as const;

export type ProfileProject = (typeof profile.projects)[number];

export function cadenceLabel(status: ProfileProject["status"]) {
  if (status === "day-job") return "Day job";
  if (status === "open-source") return "Open source";
  return "Independent";
}

export function buildAboutMarkdown() {
  const independent = profile.projects
    .map((p) => {
      const link = p.url.startsWith("http") ? `[${p.name}](${p.url})` : p.name;
      const ctx = "context" in p && p.context ? ` (${p.context})` : "";
      return `- ${link}${ctx}: ${p.focus}`;
    })
    .join("\n");

  return `# ${profile.name}

> ${profile.headline}

## Summary

${profile.summary}

## What he builds

- Agentic products: multi-turn systems with skills, tools, memory, evaluation, and human approval points.
- Voice agents: low-latency, interruption-safe systems using LiveKit, WebRTC, VAD, streaming STT/TTS, and dependable tool execution.
- Apps: end-to-end products, from an unclear customer problem through UX and production implementation.

## Selected work

${independent}

## Experience

${experiencesData.map((role) => `### ${role.title}
${role.date}

${role.description}

${role.achievements.map((item) => `- ${item}`).join("\n")}`).join("\n\n")}

## Contact

Email: akashp1712@gmail.com

## Machine-readable

- Portfolio: ${profile.url}
- Structured profile: ${profile.representations.json}
- Writing index: ${profile.representations.llms_txt}
- Résumé: ${profile.representations.resume}
- GitHub: ${profile.representations.github}
- LinkedIn: ${profile.representations.linkedin}
`;
}

export function buildPublicProfileJson() {
  return {
    name: profile.name,
    headline: profile.headline,
    url: profile.url,
    job_title: profile.jobTitle,
    current_role: profile.currentRole,
    years_experience: profile.yearsExperience,
    roles: ["AI Systems Engineer", "Product Engineer"],
    employers: profile.employers,
    experience: experiencesData.map((role) => ({
      title: role.title,
      dates: role.date,
      summary: role.description,
      contributions: role.achievements,
      technologies: role.technologies,
    })),
    contact: { email: "akashp1712@gmail.com" },
    skills: profile.skills,
    projects: profile.projects.map((p) => {
      const row: {
        name: string;
        focus: string;
        url: string;
        status: typeof p.status;
        cadence: string;
        github?: string;
        context?: string;
      } = {
        name: p.name,
        focus: p.focus,
        url: p.url,
        status: p.status,
        cadence: cadenceLabel(p.status),
      };
      if ("github" in p) row.github = p.github;
      if ("context" in p) row.context = p.context;
      return row;
    }),
    representations: profile.representations,
  };
}
