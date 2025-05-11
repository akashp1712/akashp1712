"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 max-w-[53rem] mx-auto px-4 sm:px-6">
      <SectionHeading>Professional Experience</SectionHeading>
      
      <div className="grid grid-cols-1 gap-6">
        {experiencesData.map((experience, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-black/5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl" style={{ color: experience.brandColor }}>
                    {experience.logo}
                  </div>
                  <h3 className="font-semibold text-lg">{experience.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{experience.location}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-white/70 mb-3">{experience.date}</p>
                
                <p className="text-gray-700 dark:text-white/70 mb-4">{experience.description}</p>
                
                {experience.achievements && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white/90 mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-white/75 space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {experience.technologies && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white/90 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white/90 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}