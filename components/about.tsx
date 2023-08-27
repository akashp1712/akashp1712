"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Masters degree in{" "}
        <span className="font-medium">Computer Science</span>, I pursued the Software Engineer career at Intel. However, I learned{" "}
        <span className="font-medium">full-stack web development by doing passion-projects</span>.{" "}
        <span className="italic">My favorite part of software enginnering</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.</p>
        
      <p className="mb-3">I am currently building{" "}
        <span className="font-medium">LessenText</span> - a text summarization saas.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching thriller movies. I also enjoy{" "}
        <span className="font-medium">learning history of the old worlds</span>.
      </p>
    </motion.section>
  );
}
