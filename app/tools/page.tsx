"use client";

import React from "react";
import Header from "@/components/header";
import { toolsData } from "@/lib/data";
import { FaTools } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 pt-20">
        <section className="max-w-[65rem] mx-auto w-full mb-28 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Link 
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-6 text-sm"
              >
                ← Back to Home
              </Link>
              
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Developer Tools
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A collection of useful utilities I've built to solve common development problems and streamline workflows.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {toolsData.map((tool, index) => (
                <motion.article
                  key={index}
                  className="bg-gray-100 dark:bg-white/10 rounded-lg overflow-hidden border border-black/5 hover:bg-gray-200 dark:hover:bg-white/20 transition group"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                        <FaTools className="text-gray-700 dark:text-gray-300 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {tool.title}
                        </h3>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">● {tool.status}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-black/[0.7] text-white dark:text-white/90 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={tool.url}
                      className="group/btn inline-flex items-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                    >
                      Try Tool
                      <BsArrowRight className="opacity-70 group-hover/btn:translate-x-1 transition" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 dark:bg-white/10 rounded-xl p-8 max-w-2xl mx-auto border border-black/5">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  More Coming Soon
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Building new tools to solve real-world problems. Check back for updates.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/akashp1712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors duration-200 font-medium text-sm"
                  >
                    Follow on GitHub
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium text-sm text-gray-700 dark:text-gray-300"
                  >
                    Suggest a Tool
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
