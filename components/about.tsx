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
          Right now I am building <span className="ed-strong">Evercall</span>:
          when an Australian emergency plumber can&apos;t answer, we book the
          job. Divert the line, triage, book, SMS the owner. The demo is easy.
          The hard problems are latency, barge-in, tool timing, and a write
          that must not lie.
        </p>
        <p>
          Day job is agent runtimes at{" "}
          <span className="ed-strong">Salesforce</span>. Nine-plus years
          across Salesforce, Amazon, and McAfee — SMS at billions of messages,
          app certification at hundreds of thousands of apps. The writing is
          the part most tutorials skip, with runnable code and real output.
        </p>
      </div>
    </motion.section>
  );
}
