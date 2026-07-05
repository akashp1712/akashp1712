import { Fraunces, JetBrains_Mono, Hanken_Grotesk } from "next/font/google";

// Editorial display serif for headings — characterful, high-contrast.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
});

// Refined monospace for code + metadata.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// Body grotesk — warmer and more characterful than Inter, still highly
// readable at long-form length. Used site-wide as the base sans.
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
