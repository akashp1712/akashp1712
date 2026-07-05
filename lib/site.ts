export const siteConfig = {
  name: "Akash Panchal",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://akashpanchal.com",
  author: "Akash Panchal",
  description:
    "Senior AI Software Engineer. Tutorials and notes on building AI agents, voice systems, and scalable platforms.",
} as const;
