import React from "react";
import SectionHeading from "./section-heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { experiencesData } from "@/lib/data";

// Helper function to bold numbers and impactful words
function highlightImpact(text: string) {
  // Bold numbers, percentages, and impactful words
  const impactWords = [
    "improved", "reduced", "increased", "optimized", "led", "architected", "designed", "developed", "successfully", "streamlined", "resolved", "spearheaded", "enhanced", "automate", "mentored", "earned", "proposed", "implemented", "collaborated", "engineered", "provided", "achieved", "built", "created", "launched", "delivered", "initiated", "drove", "resulting", "remarkable", "significantly", "exceptional", "key", "core", "critical", "robust", "scalable", "efficient", "seamless", "remarkable", "notable", "notably", "noteworthy", "outstanding", "award", "star", "playbook", "automation", "innovation"
  ];
  // Regex for numbers, percentages, and years
  const numberRegex = /(\b\d+[,.]?\d*\b|\b\d+%|\b\d+\s?(?:years?|months?|weeks?|days?)|\bQ\d{1,2}\s?\d{4})/gi;
  // Regex for impact words
  const impactRegex = new RegExp(`\\b(${impactWords.join("|")})\\b`, "gi");
  // First, bold numbers
  let result = text.replace(numberRegex, (match) => `<strong>${match}</strong>`);
  // Then, bold impact words
  result = result.replace(impactRegex, (match) => `<strong>${match}</strong>`);
  return result;
}

// Sub-component for an individual experience card
function ExperienceItem({ experience }: { experience: (typeof experiencesData)[number] }) {
  return (
    <details className="ed-card experience-item group p-5 sm:p-6">
      <summary className="flex cursor-pointer list-none items-start gap-4">
        <div className="text-3xl sm:text-4xl shrink-0" style={{ color: experience.brandColor }}>
          {experience.logo}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="font-display text-lg leading-snug sm:text-xl"
              style={{ color: "var(--ink)", fontWeight: 500 }}
            >
              {experience.title}
            </h3>
            <span
              className="mt-1 shrink-0 transition group-open:hidden"
              style={{ color: "var(--ink-faint)" }}
            >
              <FaChevronDown />
            </span>
            <span
              className="mt-1 hidden shrink-0 transition group-open:inline"
              style={{ color: "var(--ink-faint)" }}
            >
              <FaChevronUp />
            </span>
          </div>
          <div className="ed-meta mt-1.5 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
            <span style={{ color: "var(--accent)" }}>{experience.date}</span>
            <span className="hidden sm:inline" style={{ color: "var(--line)" }}>·</span>
            <span>{experience.location}</span>
          </div>

        </div>
      </summary>
      <div className="experience-detail pt-4 pl-[3.25rem] sm:pl-[3.75rem]">
        <p className="mb-4" style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>
          {experience.description}
        </p>

        {experience.achievements && (
          <div className="mb-4">
            <h4 className="ed-meta mb-2" style={{ color: "var(--ink)" }}>
              Key achievements
            </h4>
            <ul
              className="list-disc space-y-1.5 pl-5 text-sm"
              style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}
            >
              {experience.achievements.map((achievement, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: highlightImpact(achievement) }} />
              ))}
            </ul>
          </div>
        )}

        {experience.technologies && (
          <div>
            <h4 className="ed-meta mb-2" style={{ color: "var(--ink)" }}>
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="ed-chip px-2.5 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mb-24 w-full max-w-3xl scroll-mt-28 px-4 sm:px-6">
      <SectionHeading eyebrow="Experience">Where I&apos;ve worked</SectionHeading>

      <div className="grid grid-cols-1 gap-4">
        {experiencesData.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
