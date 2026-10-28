/** @type {import('next').NextConfig} */

// Run Velite once during the Next.js build/dev startup.
// (Guarded so it only initializes a single watcher in dev.)
const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
let contentBuild;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = require("velite");
  contentBuild = build({ watch: isDev, clean: !isDev });
}

const nextConfig = {
  // Keep the browser stylesheet; avoid an unbounded external fetch at build time.
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return { beforeFiles: [
      { source: "/work/:slug.md", destination: "/md/work/:slug" },
      {
        source: "/articles/:slug.md",
        destination: "/md/articles/:slug",
      },
      {
        source: "/tutorials/:slug.md",
        destination: "/md/tutorials/:slug",
      },
      {
        source: "/.well-known/llms.txt",
        destination: "/llms.txt",
      },
      {
        source: "/index.md",
        destination: "/about.md",
      },
    ], fallback: [{
      source: "/:path*",
      has: [{ type: "header", key: "x-portfolio-format", value: "markdown" }],
      destination: "/agent-not-found",
    }] };
  },
};

module.exports = async () => {
  await contentBuild;
  return nextConfig;
};
