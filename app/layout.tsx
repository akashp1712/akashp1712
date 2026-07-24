import Header from "@/components/header";
import "./globals.css";
import "./_reading/reading.css";
import { fraunces, jetbrainsMono, hankenGrotesk } from "./_reading/fonts";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Akash Panchal — AI Systems Engineer & Founder",
    template: "%s | Akash Panchal",
  },
  description: siteConfig.description,
  keywords: [
    "AI Systems Engineer",
    "Agentic AI Systems",
    "Mastra AI",
    "Mastra Harness",
    "Voice AI",
    "OneCue",
    "Evercall",
    "VibeFrames",
    "Paymint",
    "AI SDK Patterns",
    "Vercel AI SDK",
    "Salesforce AI Engineer",
    "AI Founder",
    "LLM Runtimes",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Akash Panchal", url: siteConfig.url }],
  creator: "Akash Panchal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Akash Panchal — AI Systems Engineer & Founder",
    description: siteConfig.description,
    images: [
      {
        url: "/cover-mastra-series.png",
        width: 1200,
        height: 630,
        alt: "Akash Panchal — AI Systems Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Panchal — AI Systems Engineer & Founder",
    description: siteConfig.description,
    creator: "@akashp1712",
    images: ["/cover-mastra-series.png"],
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
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
      name: "Akash Panchal",
      jobTitle: "AI Software Engineer & Founder",
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
        "Agentic AI Systems",
        "Mastra AI Framework",
        "Voice AI",
        "LLM Runtimes",
        "Vercel AI SDK",
        "High-Throughput Distributed Systems",
        "TypeScript",
        "Next.js",
        "Python",
      ],
      sameAs: [
        "https://github.com/akashp1712",
        "https://www.linkedin.com/in/akashp1712",
        "https://twitter.com/akashp1712",
      ],
      url: siteConfig.url,
      description:
        "Senior AI Software Engineer at Salesforce specializing in multi-turn agent platforms, Mastra harness runtimes, voice AI systems, and founder tools.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Akash Panchal — AI Engineering & Agent Systems",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "OneCue",
      url: "https://onecue.app",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web",
      description:
        "OneCue is a capture app for founders that surfaces one saved insight when context matches — not a notes app.",
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Evercall",
      url: "https://evercall.app",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "An after-hours AI receptionist for Australian emergency trades. Forward your line, and the AI answers instantly, triages emergencies, books jobs, and sends SMS summaries.",
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      name: "VibeFrames",
      url: "https://vibeframes.vercel.app",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      description:
        "A Mastra Harness agent that generates Remotion videos by mutating timeline state and streaming real-time UI updates.",
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Paymint",
      url: "https://paymint.dev",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description:
        "A drop-in Paddle payments integration for indie developers that handles checkout, webhooks, and subscription state.",
      author: { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${fraunces.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable} reading-root relative pt-28 sm:pt-36 overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Warm paper backdrop pinned to the viewport */}
        <div aria-hidden className="reading-backdrop" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

