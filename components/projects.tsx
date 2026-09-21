import React from "react";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { projectsData, projectTimelineData } from "@/lib/data";
import Project from "./project";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <section id="projects" className="mb-24 w-full max-w-3xl scroll-mt-28 px-4 sm:px-6">
      <SectionHeading eyebrow="Selected apps">Things I&apos;ve put into the world</SectionHeading>
      <p className="tut-lede mb-8 max-w-2xl text-lg">
        I care about the full path from an unclear problem to a reliable,
        inspectable product. These are the clearest examples.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="ed-meta mb-3" style={{ color: "var(--ink)" }}>
          More shipped work
        </h3>
        <ul
          className="ed-card flex flex-col"
          style={{ borderRadius: 14 }}
        >
          {projectTimelineData.map((item, index) => (
            <li
              key={item.title}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
