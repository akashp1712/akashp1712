import { projectsData } from "@/lib/data";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  hyperlink,
  tags,
  kind,
  cadence,
  outcome,
  cta,
  imageUrl,
}: ProjectProps) {
  return (
    <article className="ed-card project-card group overflow-hidden flex flex-col">
      <div className="flex flex-col p-5 sm:p-6">
        <div className="ed-meta flex items-center gap-2" style={{ color: "var(--accent)" }}>
          <span>{kind}</span>
          <span style={{ color: "var(--line)" }}>·</span>
          <span>{cadence}</span>
        </div>
        <h3
          className="mt-2 font-display text-xl"
          style={{ color: "var(--ink)", fontWeight: 500 }}
        >
          {title}
        </h3>
        <p
          className="mt-2 flex-1 text-[0.92rem]"
          style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}
        >
          {description}
        </p>

        <p className="project-outcome mt-4 text-sm">{outcome}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="ed-chip px-2.5 py-1 text-xs">
              {tag}
            </li>
          ))}
        </ul>

        <div className="ed-meta mt-5">
          <a
            href={hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="ed-link group/link inline-flex items-center gap-1.5"
          >
            {cta}
            <BsArrowRight className="transition group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>

      {imageUrl ? (
        <a
          href={hyperlink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-preview relative block overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            quality={75}
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </a>
      ) : (
        <div className="project-private" aria-label="Product screenshots are not public">
          <span>Internal</span>
          <p>Screenshots stay inside Salesforce. Role and implementation are above.</p>
        </div>
      )}
    </article>
  );
}
