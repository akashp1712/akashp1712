"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experiencesData } from "@/lib/data";

function ExperienceItem({
  experience,
  startOpen = false,
}: {
  experience: (typeof experiencesData)[number];
  startOpen?: boolean;
}) {
  const [open, setOpen] = useState(startOpen);

  return (
    <details
      className="experience-row group"
      open={open}
      onToggle={(event) => {
        setOpen((event.currentTarget as HTMLDetailsElement).open);
      }}
    >
      <summary>
        <div className="experience-row__logo" style={{ color: experience.brandColor }}>
          {experience.logo}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3>{experience.title}</h3>
            <span className="experience-row__chevron" aria-hidden>
              <FaChevronDown className="group-open:hidden" />
              <FaChevronUp className="hidden group-open:inline" />
            </span>
          </div>
          <p className="experience-row__meta">
            {startOpen && <span className="experience-row__now">Now</span>}
            <span>{experience.date}</span>
            <span>{experience.location}</span>
          </p>
          <p className="experience-row__lede">{experience.description}</p>
        </div>
      </summary>
      <div className="experience-row__body">
        {experience.achievements && (
          <ul>
            {experience.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        )}
        {experience.technologies && (
          <div className="experience-row__stack">
            {experience.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Experience">Work experience</SectionHeading>
      <p className="tut-lede mb-8 text-lg">
        Salesforce now. Amazon and McAfee before that.
      </p>
      <div className="experience-list">
        {experiencesData.map((experience, index) => (
          <ExperienceItem
            key={experience.title}
            experience={experience}
            startOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
