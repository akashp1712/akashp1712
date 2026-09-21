import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsFiletypeJson } from "react-icons/bs";
import headshot from "@/public/akash-headshot-tshirt.jpg";

// Quiet, mono, underline-on-hover text links — the "engineer, not vendor"
// treatment. Replaces the old row of social pill buttons + resume CTA.
const quietLinks = [
  { label: "Articles", href: "/articles" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "GitHub", href: "https://github.com/akashp1712" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akashp1712" },
  { label: "X", href: "https://twitter.com/akashp1712" },
  { label: "Résumé", href: "/CV.pdf" },
];

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-[100rem] sm:mb-8 sm:px-6"
    >
      <p className="ed-eyebrow mb-6">
        <span className="ed-eyebrow-label">Akash Panchal / portfolio</span>
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
            Engineer · agentic products · production software
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
        I build the systems behind useful agents.
      </p>

      <p
        className="tut-lede mt-7 max-w-2xl text-lg sm:text-xl"
      >
        I solve messy product and systems problems, then turn the answer into
        software people can use. I build agent runtimes at Salesforce and
        independent apps such as <span className="ed-strong">Evercall</span>{" "}
        and <span className="ed-strong">VibeFrames</span>.
      </p>

      {/* Primary path: read the series. */}
      <div
        className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
      >
        <Link
          href="#projects"
          className="ed-btn group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
        >
          Browse selected apps
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>
        <Link
          href="/about.md"
          className="ed-btn-ghost inline-flex items-center px-6 py-3 text-sm font-medium"
        >
          <BsFiletypeJson className="mr-2" /> Readable profile
        </Link>
      </div>

      {/* Quiet text links — no pills, no icons-as-buttons. */}
      <nav
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 ed-meta"
      >
        {quietLinks.map((l, i) => (
          <React.Fragment key={l.label}>
          {i > 0 && <span style={{ color: "var(--line)" }}>·</span>}
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              {...(l.label === "Résumé" ? { download: true } : {})}
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
