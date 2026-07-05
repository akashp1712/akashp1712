"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-24 w-full max-w-3xl px-4 scroll-mt-28 sm:px-6"
    >
      <SectionHeading eyebrow="02 / Toolkit">What I work with</SectionHeading>
      <ul className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            className="ed-chip flex items-center gap-2 px-3.5 py-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.icon && (
              <span className="text-base" style={{ color: "var(--ink-faint)" }}>
                {skill.icon}
              </span>
            )}
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
