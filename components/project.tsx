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
  outcome,
  cta,
  imageUrl,
}: ProjectProps) {
  return (
    <article className="ed-card project-card group mb-8 overflow-hidden last:mb-0 flex flex-col">
      {/* Text block */}
      <div className="flex flex-col p-6 sm:p-8">
        <p className="ed-meta" style={{ color: "var(--accent)" }}>{kind}</p>
        <h3
          className="font-display text-2xl"
          style={{ color: "var(--ink)", fontWeight: 500 }}
        >
          {title}
        </h3>
        <p
          className="mt-3 flex-1 text-[0.95rem]"
          style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}
        >
          {description}
        </p>

        <p className="project-outcome mt-5 text-sm">{outcome}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li key={index} className="ed-chip px-2.5 py-1 text-xs">
              {tag}
            </li>
          ))}
        </ul>

        <div className="ed-meta mt-6 flex items-center gap-5">
          <a
            href={hyperlink}
            target="_blank"
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
          className="relative w-full aspect-video block overflow-hidden cursor-pointer"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            quality={75}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-contain object-top transition duration-500 group-hover:scale-[1.015]"
          />
        </a>
      ) : (
        <div className="project-private" aria-label="Product screenshots are not public">
          <span>Product work</span>
          <p>Screenshots are not public. The implementation details and role are documented above.</p>
        </div>
      )}
    </article>
  );
}
