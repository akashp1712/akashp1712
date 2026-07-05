"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      className="my-4 hidden h-10 w-px sm:block"
      style={{ background: "var(--line)" }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
