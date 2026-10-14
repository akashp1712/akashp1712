import React from "react";
import Link from "next/link";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer
      className="ed-meta mx-auto mb-12 w-full max-w-3xl px-4 sm:px-6"
      style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem" }}
    >
      <nav className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/about.md" className="ed-link">
          about.md
        </Link>
        <Link href="/profile.json" className="ed-link">
          profile.json
        </Link>
        <Link href="/llms.txt" className="ed-link">
          llms.txt
        </Link>
        <Link href="/tutorials" className="ed-link">
          Tutorials
        </Link>
        <Link href="/articles" className="ed-link">
          Articles
        </Link>
        <a href="/rss.xml" className="ed-link">
          RSS
        </a>
      </nav>
      <small className="block">
        &copy; {getYear()} Akash Panchal. Built with Next.js, TypeScript &
        Tailwind.
      </small>
    </footer>
  );
}
