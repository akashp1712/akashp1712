"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight, BsCalendar3, BsClock, BsEye } from "react-icons/bs";
import Image from "next/image";
import SectionHeading from "./section-heading";

interface BlogPost {
  title: string;
  slug: string;
  brief: string;
  coverImage?: string;
  publishedAt: string;
  readTime?: number;
  views?: number;
  totalReactions?: number;
  tags?: Array<{ name: string }>;
}

export default function BlogPosts() {
  const { ref } = useSectionInView("Blog", 0.2);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/hashnode");
        const data = await response.json();
        if (data.error) {
          console.error("API Error:", data.error);
        }
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section
        ref={ref}
        id="blog"
        className="mb-28 max-w-[60rem] mx-auto px-4 sm:px-6 scroll-mt-28 sm:mb-40"
      >
        <SectionHeading>Latest Articles</SectionHeading>
        <div className="text-gray-600 dark:text-gray-400">Loading articles...</div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      ref={ref}
      id="blog"
      className="mb-28 max-w-[60rem] mx-auto px-4 sm:px-6 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Latest Articles</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="bg-gray-100 dark:bg-white/10 rounded-lg overflow-hidden border border-black/5 hover:bg-gray-200 dark:hover:bg-white/20 transition group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={`https://blog.akashpanchal.com/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {post.coverImage && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.brief}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <BsCalendar3 />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <BsClock />
                        {post.readTime} min
                      </span>
                    )}
                  </div>
                  {post.views && post.views > 0 && (
                    <span className="flex items-center gap-1">
                      <BsEye />
                      {post.views}
                    </span>
                  )}
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag.name}
                        className="px-3 py-1 text-xs uppercase tracking-wider rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white/90 font-medium"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition">
                  Read more <BsArrowRight className="ml-1" />
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <a
          href="https://blog.akashpanchal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition"
        >
          View All Articles
          <BsArrowRight />
        </a>
      </motion.div>
    </section>
  );
}
