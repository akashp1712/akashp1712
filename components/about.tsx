"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-28 sm:px-6"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading eyebrow="01 / About">The short version</SectionHeading>
      <div className="tut-prose text-lg" style={{ lineHeight: 1.7 }}>
        <p>
          I build <span className="ed-strong">agentic AI systems</span> and
          write about how they actually work. At{" "}
          <span className="ed-strong">Salesforce</span> I lead a multi-turn
          agent platform built on the{" "}
          <span className="ed-strong">Mastra Harness</span> — per-thread state,
          tool catalogs, human-in-the-loop, image generation — the connective
          tissue that turns a model in a loop into something people depend on.
        </p>
        <p>
          Nine-plus years and a few platforms deep —{" "}
          <span className="ed-strong">Salesforce, Amazon, McAfee</span> — I&apos;ve
          shipped systems that serve billions of messages and hundreds of
          thousands of apps. But the work I care most about now is the part most
          tutorials skip: the <span className="ed-strong">hard problems</span>.
          Streaming to a real UI, grounding an agent in your own docs, keeping
          long-running agents alive, proving they&apos;re any good, and the
          brutal timing of voice. I publish deep dives on all of it — with
          runnable code and real output, no hand-waving.
        </p>
      </div>
    </motion.section>
  );
}
