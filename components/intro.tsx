"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

// Quiet, mono, underline-on-hover text links — the "engineer, not vendor"
// treatment. Replaces the old row of social pill buttons + resume CTA.
const quietLinks = [
  { label: "GitHub", href: "https://github.com/akashp1712" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akashp1712" },
  { label: "X", href: "https://twitter.com/akashp1712" },
  { label: "Résumé", href: "/CV.pdf" },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-[100rem] sm:mb-8 sm:px-6"
    >
      <motion.p
        className="ed-eyebrow mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="ed-eyebrow-label">Portfolio · 2026</span>
        <span className="ed-eyebrow-rule" />
      </motion.p>

      <motion.h1
        className="ed-section-title text-5xl leading-[1.0] sm:text-7xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04 }}
      >
        Akash Panchal
      </motion.h1>

      <motion.p
        className="mt-4 font-mono text-sm uppercase sm:text-base"
        style={{ letterSpacing: "0.14em", color: "var(--accent)" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        AI Software Engineer
      </motion.p>

      <motion.p
        className="tut-lede mt-7 max-w-2xl text-lg sm:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        I build multi-turn agent platforms at{" "}
        <span className="ed-strong">Salesforce</span> — the runtime, tools, and
        memory that turn a model in a loop into something people depend on. On
        the side I ship voice agents and write code-heavy deep dives on how all
        of it actually works: the streaming, grounding, and evals that most
        tutorials skip.
      </motion.p>

      {/* Primary path: read the series. */}
      <motion.div
        className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
      >
        <Link
          href="#blog"
          onClick={() => {
            setActiveSection("Writing");
            setTimeOfLastClick(Date.now());
          }}
          className="ed-btn group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
        >
          Read the Mastra series
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>
        <Link
          href="#projects"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
          className="ed-btn-ghost inline-flex items-center px-6 py-3 text-sm font-medium"
        >
          See what I&apos;ve built
        </Link>
      </motion.div>

      {/* Quiet text links — no pills, no icons-as-buttons. */}
      <motion.nav
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 ed-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.24 }}
      >
        {quietLinks.map((l, i) => (
          <React.Fragment key={l.label}>
            {i > 0 && <span style={{ color: "var(--line)" }}>/</span>}
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
      </motion.nav>
    </section>
  );
}
