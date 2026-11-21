import type { projectsData } from "@/lib/data";
import Link from "next/link";
import { ProjectDetail } from "./portfolio-motion";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project(project: ProjectProps) {
  const { title, description, contribution, hyperlink, tags, kind, imageUrl } = project;
  const isEvercall = title === "Evercall";

  return (
    <article className="project-panel">
      <figure className="project-panel__preview">
        <figcaption>{new URL(hyperlink).hostname}</figcaption>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={"imageAlt" in project ? project.imageAlt : `${title} product screenshot`} loading="lazy" decoding="async" />
      </figure>
      <div className="project-panel__copy">
        <p className="project-panel__kind">{kind}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjectDetail title={title}>
          {contribution.lead}<mark className="ink-highlight">{contribution.focus}</mark>{" "}{contribution.detail}
        </ProjectDetail>
        <ul aria-label="Technologies">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-panel__links">
          {isEvercall && <Link href="/building-evercall">Read the case study</Link>}
          {"source" in project && <a href={project.source}>View source</a>}
          <a href={hyperlink} target="_blank" rel="noopener noreferrer">Visit {title} <BsArrowUpRight aria-hidden /></a>
        </div>
      </div>
    </article>
  );
}
