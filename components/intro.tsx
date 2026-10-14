import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsFiletypeJson } from "react-icons/bs";
import headshot from "@/public/akash-headshot-tshirt.jpg";

const proof = ["Salesforce", "Amazon", "McAfee", "10 years"];

const quietLinks = [
  { label: "Articles", href: "/articles" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "GitHub", href: "https://github.com/akashp1712" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akashp1712" },
  { label: "X", href: "https://twitter.com/akashp1712" },
  { label: "about.md", href: "/about.md" },
];

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-[100rem] sm:mb-8 sm:px-6"
    >
      <p className="ed-eyebrow mb-6">
        <span className="ed-eyebrow-label">Akash Panchal / engineer</span>
        <span className="ed-eyebrow-rule" />
      </p>

      <div className="hero-identity">
        <div>
          <h1 className="ed-section-title text-5xl leading-[1.0] sm:text-7xl">
            Akash Panchal
          </h1>
          <p
            className="mt-4 font-mono text-sm uppercase sm:text-base"
            style={{ letterSpacing: "0.14em", color: "var(--accent)" }}
          >
            AI systems engineer · Salesforce
          </p>
        </div>
        <Image
          src={headshot}
          alt="Akash Panchal"
          className="hero-headshot"
          priority
          quality={85}
          sizes="(max-width: 640px) 88px, 132px"
        />
      </div>

      <p className="hero-statement mt-8 max-w-2xl text-3xl sm:text-4xl">
        I design and ship the systems behind production agents.
      </p>

      <p className="tut-lede mt-7 max-w-2xl text-lg sm:text-xl">
        Ten years of backend and product engineering. Day job: agent runtimes
        for Marketing Cloud. Independently I keep shipping{" "}
        <span className="ed-strong">Evercall</span>,{" "}
        <span className="ed-strong">OneCue</span>,{" "}
        <span className="ed-strong">VibeFrames</span>, and{" "}
        <span className="ed-strong">AI SDK Patterns</span> on a low-touch
        cadence.
      </p>

      <ul className="proof-strip mt-8" aria-label="Career snapshot">
        {proof.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-4">
        <a
          href="/CV.pdf"
          download
          className="ed-btn group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
        >
          Résumé
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </a>
        <Link
          href="#experience"
          className="ed-btn-ghost inline-flex items-center px-6 py-3 text-sm font-medium"
        >
          Experience
        </Link>
        <Link
          href="/profile.json"
          className="ed-btn-ghost inline-flex items-center px-6 py-3 text-sm font-medium"
        >
          <BsFiletypeJson className="mr-2" /> profile.json
        </Link>
      </div>

      <nav className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 ed-meta">
        {quietLinks.map((l, i) => (
          <React.Fragment key={l.label}>
            {i > 0 && <span style={{ color: "var(--line)" }}>·</span>}
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              className="ed-link"
            >
              {l.label}
            </a>
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
}
