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
    default: "Akash Panchal — AI Engineer",
    template: "%s | Akash Panchal",
  },
  description: siteConfig.description,
  keywords: [
    "AI engineer",
    "Mastra",
    "AI agents",
    "voice agents",
    "LLMs",
    "TypeScript",
    "Next.js",
    "Salesforce",
  ],
  authors: [{ name: "Akash Panchal", url: siteConfig.url }],
  creator: "Akash Panchal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Akash Panchal — AI Engineer",
    description: siteConfig.description,
    images: [
      {
        url: "/cover-mastra-series.png",
        width: 1200,
        height: 630,
        alt: "Akash Panchal — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Panchal — AI Engineer",
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
        {/* Warm paper backdrop pinned to the viewport — replaces the old
            gray background + purple/pink gradient blobs. */}
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

