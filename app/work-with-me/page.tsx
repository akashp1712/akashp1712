// Next 13 overwrites HTML Vary headers. Avoid shared-cache variant collisions
// on URLs that also negotiate Markdown; explicit .md routes stay cacheable.
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Header from "@/components/header";
import { hiring } from "@/lib/work";
import { siteConfig } from "@/lib/site";
import "../portfolio.css";

export const metadata: Metadata = {
  title: "AI engineering roles · Work with me",
  description: hiring.description,
  alternates: { canonical: `${siteConfig.url}/work-with-me`, types: { "text/markdown": `${siteConfig.url}/work-with-me.md` } },
  openGraph: { title: hiring.title, description: hiring.description, url: `${siteConfig.url}/work-with-me`, type: "website" },
  twitter: { card: "summary", title: hiring.title, description: hiring.description },
};

export default function WorkWithMe() {
  return (
    <main className="portfolio">
      <Header />
      <div className="home-col pb-24">
        <header className="portfolio-hero">
          <p className="tut-kicker mb-5">Akash Panchal / Work with me</p>
          <h1>{hiring.title}</h1>
          <p className="hero-summary">{hiring.introduction}</p>
          <div className="hero-actions"><a className="portfolio-button" href={`mailto:${hiring.email}?subject=AI%20engineering%20role`}>Start a conversation</a><a href="/CV.pdf">View résumé</a><a href="/">Explore the portfolio</a></div>
        </header>
        <section aria-labelledby="role-scope" className="portfolio-skills">
          <div className="section-intro"><h2 id="role-scope">Where my experience fits</h2><p>Engineering scope, with work you can inspect.</p></div>
          <div className="capability-grid">{hiring.scopes.map(scope => <article key={scope.title}><h3>{scope.title}</h3><p>{scope.description}</p><a className="ed-link" href={scope.evidence}>{scope.label} →</a></article>)}</div>
        </section>
        <section className="section-intro" aria-labelledby="contact-role"><h2 id="contact-role">Tell me about the role</h2><p>{hiring.contactNote}</p><p><a className="ed-link" href={`mailto:${hiring.email}`}>{hiring.email}</a></p></section>
        <p className="tut-meta"><a className="ed-link" href="/work-with-me.md">Read as Markdown</a> · <a className="ed-link" href="/profile.json">Structured profile</a></p>
      </div>
    </main>
  );
}
