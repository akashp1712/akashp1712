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
    "Evercall",
    "Voice AI",
    "LiveKit",
    "Production agents",
    "Voice agents",
    "Salesforce AI Engineer",
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
    title: "Akash Panchal — AI Systems Engineer & Founder",
    description: siteConfig.description,
    images: [
      {
        url: "/cover-voice-agents.png",
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
    images: ["/cover-voice-agents.png"],
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
      jobTitle: "AI Systems Engineer & Founder",
      worksFor: [
        {
          "@type": "Organization",
          name: "Evercall",
          sameAs: "https://evercall.app",
        },
        {
          "@type": "Organization",
          name: "Salesforce",
          sameAs: "https://www.salesforce.com",
        },
      ],
      alumniOf: [
        { "@type": "Organization", name: "Amazon" },
        { "@type": "Organization", name: "McAfee" },
      ],
      knowsAbout: [
        "Voice AI",
        "LiveKit",
        "Production agents",
        "Evercall",
        "TypeScript",
        "Python",
        "Next.js",
      ],
      sameAs: [
        "https://github.com/akashp1712",
        "https://www.linkedin.com/in/akashp1712",
        "https://twitter.com/akashp1712",
      ],
      url: siteConfig.url,
      description:
        "AI systems engineer building Evercall — when an Australian emergency plumber can't answer, we book the job. Day job: agent runtimes at Salesforce.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Akash Panchal — Voice Agents & Evercall",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Evercall",
      url: "https://evercall.app",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "When an Australian emergency plumber can't answer, Evercall books the job. Divert, triage, book, SMS the owner.",
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

