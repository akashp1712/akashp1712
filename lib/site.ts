// Match the production redirect target, including when an older deployment
// still supplies the bare production hostname through NEXT_PUBLIC_SITE_URL.
const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.akashpanchal.com"
);
if (["akashpanchal.com", "www.akashpanchal.com"].includes(configuredUrl.hostname)) {
  configuredUrl.protocol = "https:";
  configuredUrl.hostname = "www.akashpanchal.com";
  configuredUrl.port = "";
}

export const siteConfig = {
  name: "Akash Panchal — AI Engineer, Agents & Voice AI",
  url: configuredUrl.origin,
  author: "Akash Panchal",
  description:
    "AI engineer at Salesforce with ten years across Salesforce, Amazon, and McAfee. Builds production agent runtimes, voice AI, and products in TypeScript and Python.",
} as const;
