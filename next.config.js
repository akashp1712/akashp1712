/** @type {import('next').NextConfig} */

// Run Velite once during the Next.js build/dev startup.
// (Guarded so it only initializes a single watcher in dev.)
const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = require("velite");
  build({ watch: isDev, clean: !isDev });
}

const nextConfig = {
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
};

module.exports = nextConfig;
