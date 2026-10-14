import React from "react";
import Image from "next/image";
import headshot from "@/public/akash-headshot-tshirt.jpg";

const quietLinks = [
  { label: "Résumé", href: "/CV.pdf", download: true },
  { label: "GitHub", href: "https://github.com/akashp1712" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akashp1712" },
  { label: "Writing", href: "/articles" },
];

export default function Intro() {
  return (
    <section
      id="home"
      className="home-col mb-20 scroll-mt-[100rem] sm:mb-28"
    >
      <div className="hero-wide">
        <div>
          <p className="ed-eyebrow mb-6">
            <span className="ed-eyebrow-label">Akash Panchal</span>
            <span className="ed-eyebrow-rule" />
          </p>
          <h1 className="ed-section-title text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            AI systems engineer
          </h1>
          <p
            className="mt-5 font-mono text-sm uppercase"
            style={{ letterSpacing: "0.14em", color: "var(--accent)" }}
          >
            Salesforce · previously Amazon, McAfee
          </p>
        </div>
        <Image
          src={headshot}
          alt="Akash Panchal"
          className="hero-headshot"
          priority
          quality={85}
          sizes="(max-width: 640px) 88px, 140px"
        />
      </div>

      <p className="hero-lede mt-10 text-lg sm:text-xl">
        I design the runtimes behind production agents: state, tools, memory,
        voice, and the human stop before a write. Ten years of backend and
        product engineering. TypeScript, Python, React, FastAPI, AWS.
      </p>

      <nav className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 ed-meta">
        {quietLinks.map((l, i) => (
          <React.Fragment key={l.label}>
            {i > 0 && <span style={{ color: "var(--line)" }}>·</span>}
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              {...(l.download ? { download: true } : {})}
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
