export const siteConfig = {
  name: "Akash Panchal — AI Systems Engineer & Founder",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://akashpanchal.com",
  author: "Akash Panchal",
  description:
    "I build production AI agents and document the hard engineering problems. Currently: Evercall — when an Australian emergency plumber can't answer, we book the job.",
} as const;
