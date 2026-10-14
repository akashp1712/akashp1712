import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="mb-24 w-full max-w-3xl scroll-mt-28 px-4 sm:px-6">
      <SectionHeading eyebrow="Selected work">Things I&apos;ve put into the world</SectionHeading>
      <p className="tut-lede mb-8 max-w-2xl text-lg">
        Salesforce work first. Independent products next, kept on a low-touch
        cadence so they stay in production without becoming a second full-time
        job.
      </p>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
