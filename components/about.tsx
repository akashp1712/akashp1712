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
      className="mb-20 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate <span className="font-medium">Software Engineer</span> with a strong background in building scalable platforms and impactful products. With experience at <span className="font-semibold">Salesforce</span>, <span className="font-semibold">Amazon</span>, <span className="font-semibold">McAfee</span>, and <span className="font-semibold">Broadcom</span>, I've led and contributed to projects that serve <span className="font-bold">millions of users</span> and process <span className="font-bold">billions of messages</span>.
      </p>
      <p className="mb-3">
        My expertise spans <span className="font-medium">cloud infrastructure, backend and Android development, distributed systems, and automation</span>. I thrive on solving complex problems, driving innovation, and mentoring the next generation of engineers. I believe in the power of <span className="font-medium">collaboration</span> and <span className="font-medium">continuous learning</span> to deliver exceptional results.
      </p>
      <p className="mb-3">
        Currently, I'm building agentic AI for <span className="font-medium">voice and video support</span>, pushing the boundaries of conversational and multimodal AI.
      </p>
    </motion.section>
  );
}
