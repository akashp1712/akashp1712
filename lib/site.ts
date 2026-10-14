export const siteConfig = {
  name: "Akash Panchal — AI Systems Engineer",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://akashpanchal.com",
  author: "Akash Panchal",
  description:
    "AI systems engineer at Salesforce. Ten years at Salesforce, Amazon, and McAfee. Agent runtimes, voice systems, TypeScript, Python, React, FastAPI, and AWS.",
} as const;
