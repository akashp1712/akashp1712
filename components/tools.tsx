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
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[65rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-center gap-3 mb-2">
            <div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">● {status}</span>
            </div>
          </div>
          
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          
          <a
            className="group/btn flex mt-4 mb-4 max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={url}
          >
            Try Tool{" "}
            <BsArrowRight className="opacity-70 group-hover/btn:translate-x-1 transition" />
          </a>

          <ul className="flex flex-wrap mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[16rem] object-cover rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:right-[initial] group-even:-left-40
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}

export default function Tools() {
  const { ref } = useSectionInView("Tools", 0.5);

  return (
    <section ref={ref} id="tools" className="scroll-mt-28 mb-20 max-w-[65rem] mx-auto px-4 sm:px-6">
      <SectionHeading>My Tools</SectionHeading>
      <div>
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
