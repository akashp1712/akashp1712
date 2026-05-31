"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { toolsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

type ToolProps = (typeof toolsData)[number];

function Tool({ title, description, url, tags, status, imageUrl }: ToolProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group h-full"
    >
      <section className="bg-gray-100 dark:bg-white/10 border border-black/5 rounded-2xl p-5 hover:bg-gray-200 dark:hover:bg-white/20 transition flex flex-col h-full min-h-[16rem]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-black/20 flex items-center justify-center shadow-sm overflow-hidden p-1 shrink-0">
            <Image src={imageUrl} alt={title} className="rounded-lg object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white leading-tight">{title}</h3>
            <span className="text-[10px] text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              {status}
            </span>
          </div>
        </div>
        
        <p className="text-sm leading-relaxed text-gray-600 dark:text-white/60 flex-grow mb-4">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
          <ul className="flex flex-wrap gap-1.5">
            {tags.slice(0, 2).map((tag, index) => (
              <li
                className="bg-black/5 dark:bg-white/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 rounded-md"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            className="group/btn flex items-center justify-center space-x-1.5 rounded-full bg-black dark:bg-white px-3 py-1.5 text-xs font-medium text-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm"
            href={url}
          >
            <span>Try</span>
            <BsArrowRight className="opacity-70 group-hover/btn:translate-x-1 transition" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}

export default function Tools() {
  const { ref } = useSectionInView("Tools", 0.5);

  return (
    <section ref={ref} id="tools" className="scroll-mt-28 mb-20 max-w-[65rem] mx-auto px-4 sm:px-6">
      <SectionHeading>My Tools</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {toolsData.map((tool, index) => (
          <React.Fragment key={index}>
            <Tool {...tool} />
          </React.Fragment>
        ))}
      </div>
      
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a
          href="/tools"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition"
        >
          View All Tools
          <BsArrowRight />
        </a>
      </motion.div>
    </section>
  );
}
