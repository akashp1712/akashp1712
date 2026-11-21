import { projectsData } from "@/lib/data";
import Project from "./project";
import { Underline } from "./portfolio-motion";

export default function Projects() {
  return (
    <section id="projects" className="home-col profile-projects">
      <header className="template-heading">
        <span>My projects</span>
        <h2>Selected <Underline>work</Underline></h2>
        <p>Voice agents, coding tools, and open-source patterns I’ve built.</p>
      </header>
      <div className="profile-project-grid">
        {projectsData.map((project) => <Project key={project.title} {...project} />)}
      </div>
    </section>
  );
}
