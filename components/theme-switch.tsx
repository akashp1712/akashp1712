"use client";

import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={
        !mounted
          ? "Toggle theme"
          : theme === "light"
            ? "Switch to dark theme"
            : "Switch to light theme"
      }
      className="fixed bottom-5 right-5 z-40 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      style={{
        background: "color-mix(in oklab, var(--paper-raised) 88%, transparent)",
        border: "1px solid var(--line)",
        color: "var(--ink)",
      }}
      onClick={toggleTheme}
    >
      {mounted && (theme === "light" ? <BsSun /> : <BsMoon />)}
    </button>
  );
}
