import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Building Evercall",
  description:
    "Weekly facts from shipping Evercall — when an Australian emergency plumber can't answer, we book the job.",
  alternates: { canonical: `${siteConfig.url}/building-evercall` },
  openGraph: {
    title: "Building Evercall | Akash Panchal",
    description:
      "Weekly facts from shipping Evercall. No fake weeks.",
    url: `${siteConfig.url}/building-evercall`,
    type: "website",
    images: [{ url: "/cover-voice-agents.png", width: 1200, height: 630 }],
  },
};

const weeks = [
  {
    week: "Week of 13 Aug 2026",
    line: "Closing DID → SIP → Neon. Browser agent is live; the phone wire is the work.",
  },
];

export default function BuildingEvercallPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Link
        href="/"
        className="tut-meta mb-12 inline-flex items-center gap-2 transition hover:text-[var(--accent)]"
      >
        <BsArrowLeft /> Home
      </Link>

      <header className="mb-16">
        <p className="tut-kicker mb-4">Build log</p>
        <h1 className="tut-title text-5xl sm:text-6xl">Building Evercall</h1>
        <p className="tut-lede mt-6 text-lg">
          One line per week that actually shipped. When an Australian emergency
          plumber can&apos;t answer, we book the job.
        </p>
      </header>

      <ol className="flex flex-col gap-8">
        {weeks.map((entry) => (
          <li key={entry.week}>
            <p className="tut-meta mb-2">{entry.week}</p>
            <p className="tut-lede text-lg" style={{ color: "var(--ink)" }}>
              {entry.line}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
}
