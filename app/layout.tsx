import "./globals.css";
import "./_reading/reading.css";
import { fraunces, jetbrainsMono, hankenGrotesk } from "./_reading/fonts";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { siteConfig } from "@/lib/site";
import { profile } from "@/lib/profile";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Akash Panchal",
  },
  description: siteConfig.description,
  keywords: [
    "AI Systems Engineer",
    "Salesforce",
    "Agent runtimes",
    "Voice AI",
    "LiveKit",
    "OneCue",
    "Evercall",
    "VibeFrames",
    "AI SDK Patterns",
    "TypeScript",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Akash Panchal", url: siteConfig.url }],
  creator: "Akash Panchal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/cover-voice-agents.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@akashp1712",
    images: ["/cover-voice-agents.png"],
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
      "text/markdown": `${siteConfig.url}/about.md`,
      "application/json": `${siteConfig.url}/profile.json`,
      "text/plain": `${siteConfig.url}/llms.txt`,
    },
  },
  other: {
    "llms-txt": `${siteConfig.url}/llms.txt`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: profile.name,
      jobTitle: profile.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: "Salesforce",
        sameAs: "https://www.salesforce.com",
      },
      alumniOf: [
        { "@type": "Organization", name: "Amazon" },
        { "@type": "Organization", name: "McAfee" },
      ],
      knowsAbout: [
        "Agent runtimes",
        "Voice AI",
        "LiveKit",
        "TypeScript",
        "Python",
        "Next.js",
        "Mastra",
        ...profile.projects.map((p) => p.name),
      ],
      sameAs: [
        profile.representations.github,
        profile.representations.linkedin,
        profile.representations.x,
      ],
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "ItemList",
      name: "Selected work",
      itemListElement: profile.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: project.url,
        description: project.focus,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fraunces.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable} reading-root relative pt-24 sm:pt-32 overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Warm paper backdrop pinned to the viewport */}
        <div aria-hidden className="reading-backdrop" />

        <ThemeContextProvider>
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
