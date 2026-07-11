"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project(props: ProjectProps) {
  const { title, description, hyperlink, tags, imageUrl } = props;
  const githubUrl = "githubUrl" in props ? props.githubUrl : undefined;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: opacityProgess, y: yProgress }}
      className="ed-card group mb-8 overflow-hidden last:mb-0 flex flex-col"
    >
      {/* Text block */}
      <div className="flex flex-col p-6 sm:p-8">
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
            Visit
            <BsArrowRight className="transition group-hover/link:translate-x-0.5" />
          </a>
          {githubUrl && (
            <a
              href={githubUrl as string}
              target="_blank"
              className="ed-link inline-flex items-center gap-1.5"
            >
              <FaGithub />
              Source
            </a>
          )}
        </div>
      </div>

      {/* Image column — full-width, framed under the text and clickable */}
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
          quality={95}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-contain object-top transition duration-500 group-hover:scale-[1.015]"
        />
      </a>
    </motion.div>
  );
}
