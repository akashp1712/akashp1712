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
      className="mb-20 max-w-[60rem] mx-auto px-4 sm:px-6 text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Senior Software Engineer</span> specializing in <span className="font-bold">Agentic AI</span> and <span className="font-medium">scalable platforms</span>. With 9+ years of experience across Salesforce, Amazon, and McAfee, I architect systems that serve billions of users. Currently, I am leading the development of multi-turn agent platforms using <span className="font-semibold">Mastra Harness, Python, and React</span>, pushing the boundaries of conversational AI and real-time inference.
      </p>
    </motion.section>
  );
}
