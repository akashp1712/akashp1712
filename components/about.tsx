import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-28 sm:px-6"
      id="about"
    >
      <SectionHeading eyebrow="About">The short version</SectionHeading>
      <div className="tut-prose text-lg" style={{ lineHeight: 1.7 }}>
        <p>
          Right now I am building <span className="ed-strong">Evercall</span>:
          when an Australian emergency plumber can&apos;t answer, we book the
          job. Divert the line, triage, book, SMS the owner. The demo is easy.
          The hard problems are latency, barge-in, tool timing, and a write
          that must not lie.
        </p>
        <p>
          At <span className="ed-strong">Salesforce</span>, I build Agentic
          Content Studio for Marketing Cloud: a multi-turn workspace that
          helps marketers move from a goal to campaign content. My work is in
          the runtime beneath it — per-thread state, observational memory,
          skills, tools, image generation, and human approval points — so
          agents can act usefully without becoming a black box.
        </p>
      </div>
    </section>
  );
}
