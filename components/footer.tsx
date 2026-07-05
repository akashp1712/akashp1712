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
      <nav className="mb-4 flex items-center gap-5">
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
