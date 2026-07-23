export const siteConfig = {
  name: "Akash Panchal — AI Systems Engineer & Founder",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://akashpanchal.com",
  author: "Akash Panchal",
  description:
    "AI Systems Engineer at Salesforce. Creator of OneCue, Evercall, and VibeFrames. Tutorials & deep dives on Mastra harness runtimes, agentic systems, and voice AI.",
} as const;
