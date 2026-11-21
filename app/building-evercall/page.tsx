import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Building Evercall",
  description:
    "How I built a real-time voice agent to handle missed calls for Australian emergency plumbers.",
  alternates: { canonical: `${siteConfig.url}/building-evercall` },
  openGraph: {
    title: "Building Evercall | Akash Panchal",
    description:
      "A technical case study on voice calls, booking and SMS follow-up.",
    url: `${siteConfig.url}/building-evercall`,
    type: "website",
    images: [{ url: "/cover-voice-agents.png", width: 1200, height: 630 }],
  },
};

const weeks = [
  {
    week: "20 Oct 2026",
    line: "Evercall is ready to onboard customers.",
  },
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

      <header className="mb-12">
        <p className="tut-kicker mb-4">Independent project</p>
        <h1 className="tut-title text-5xl sm:text-6xl">Building Evercall</h1>
        <p className="tut-lede mt-6 text-lg">
          When an Australian emergency plumber can’t pick up, Evercall answers
          the call, collects the job details, and helps book a follow-up.
        </p>
        <a href="https://evercall.app" className="ed-link mt-4 inline-flex min-h-[44px] items-center">Visit Evercall ↗</a>
      </header>

      <section className="mb-12" aria-labelledby="evercall-flow">
        <h2 id="evercall-flow" className="mb-4 text-2xl font-semibold">From missed call to follow-up</h2>
        <ol className="grid gap-3 sm:grid-cols-3">
          {[
            ["Answer", "A real-time voice agent collects the caller’s details."],
            ["Triage", "It captures the plumbing issue and arranges a follow-up."],
            ["Notify", "The owner gets a text with the job details."],
          ].map(([title, detail], index) => (
            <li key={title} className="rounded-lg border border-[var(--line)] bg-[var(--paper-raised)] p-4">
              <p className="mb-1 font-semibold"><span className="mr-2 text-[var(--accent)]">{index + 1}.</span>{title}</p>
              <p className="text-sm text-[var(--ink-soft)]">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12" aria-labelledby="evercall-engineering">
        <h2 id="evercall-engineering" className="mb-4 text-2xl font-semibold">What I built</h2>
        <p className="tut-lede">
          I built the voice agent with LiveKit, WebRTC and Python. A working browser agent was the
          first milestone. Connecting it to a phone number via SIP brought the same workflow to callers.
        </p>
        <Link href="/#runtime" className="ed-link mt-3 inline-flex min-h-[44px] items-center">Try an example voice-agent trace</Link>
      </section>

      <h2 className="mb-5 text-2xl font-semibold">Build log</h2>
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
