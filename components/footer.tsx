import React from "react";
import Link from "next/link";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="ed-meta home-col mb-12" style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem" }}>
      <p className="mb-3">For agents: read my profile and explore the source material.</p>
      <nav aria-label="Profile formats and writing" className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/about.md" className="ed-link">about.md</Link>
        <Link href="/profile.json" className="ed-link">profile.json</Link>
        <Link href="/llms.txt" className="ed-link">llms.txt</Link>
        <Link href="/tutorials" className="ed-link">Tutorials</Link>
        <Link href="/articles" className="ed-link">Articles</Link>
        <a href="/rss.xml" className="ed-link">RSS</a>
      </nav>
      <small className="block">
        &copy; {getYear()} Akash Panchal
      </small>
    </footer>
  );
}
