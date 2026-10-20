import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Work">Selected work</SectionHeading>
      <p className="tut-lede mb-8 text-lg">
        Agent infrastructure, independent products, and open-source tools.
      </p>
      <article className="featured-work">
        <div><span>Salesforce · Current work</span><h3>Agentic Content Studio</h3><p>Building the runtime behind a multi-turn workspace for Marketing Cloud.</p></div>
        <div><h4>My contribution</h4><p>Runtime architecture for per-thread state, observational memory, skills, tool APIs, image generation, and human approval points.</p><a href="#experience">Explore my experience</a></div>
      </article>
      <div className="work-list">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
