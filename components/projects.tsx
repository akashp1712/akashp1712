"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData, projectTimelineData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-24 w-full max-w-3xl scroll-mt-28 px-4 sm:px-6">
      <SectionHeading eyebrow="03 / Selected work">Things I&apos;ve built</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="ed-meta mb-3" style={{ color: "var(--ink)" }}>
          Also shipped
        </h3>
        <ul
          className="ed-card flex flex-col"
          style={{ borderRadius: 14 }}
        >
          {projectTimelineData.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                borderTop: index === 0 ? "none" : "1px solid var(--line-soft)",
              }}
            >
              <Link
                href={item.hyperlink}
                target={item.hyperlink.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition"
              >
                <div className="min-w-0">
                  <span className="font-medium" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </span>
                  <span style={{ color: "var(--ink-faint)" }}> — </span>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>
                    {item.description}
                  </span>
                </div>
                <BsArrowRight
                  className="hidden shrink-0 transition group-hover:translate-x-1 sm:block"
                  style={{ color: "var(--accent)" }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
