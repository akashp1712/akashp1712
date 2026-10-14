import Image from "next/image";
import { projectsData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  hyperlink,
  tags,
  kind,
  imageUrl,
}: ProjectProps) {
  return (
    <a
      href={hyperlink}
      target="_blank"
      rel="noopener noreferrer"
      className="work-row work-row--shot group"
    >
      <div className="work-row__shot">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(min-width: 900px) 288px, 92vw"
          quality={70}
        />
      </div>
      <div className="work-row__copy">
        <div className="work-row__meta">
          <h3>{title}</h3>
          <span>{kind}</span>
        </div>
        <p className="work-row__desc">{description}</p>
        <ul className="work-row__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <BsArrowRight className="work-row__arrow" aria-hidden />
    </a>
  );
}
