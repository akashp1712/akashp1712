import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Work">Side projects</SectionHeading>
      <p className="tut-lede mb-8 text-lg">
        Independent products I still run, on a low-touch cadence.
      </p>
      <div className="work-list">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
