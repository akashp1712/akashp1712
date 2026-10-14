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
          I am an AI systems engineer at{" "}
          <span className="ed-strong">Salesforce</span>, working on the agent
          runtime under Marketing Cloud&apos;s Content Studio: per-thread
          state, observational memory, skills, tools, and human approval
          points. Before that I shipped SMS platforms, app-certification
          systems, and home-network security at Amazon and McAfee.
        </p>
        <p>
          Independently I design and ship agent products:{" "}
          <span className="ed-strong">Evercall</span> (voice),{" "}
          <span className="ed-strong">OneCue</span> (decision memory for
          coding agents), <span className="ed-strong">VibeFrames</span>{" "}
          (agentic video), and{" "}
          <span className="ed-strong">AI SDK Patterns</span> (open-source
          TypeScript). They stay on a low-touch cadence. They are live,
          documented, and still moving.
        </p>
      </div>
    </section>
  );
}
