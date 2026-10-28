// Next 13 overwrites HTML Vary headers. Avoid shared-cache variant collisions
// on URLs that also negotiate Markdown; explicit .md routes stay cacheable.
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import { caseStudies } from "@/lib/work";
import { siteConfig } from "@/lib/site";
import "../../portfolio.css";

type Props = { params: { slug: string } };
export function generateStaticParams() { return caseStudies.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const project = caseStudies.find(p => p.slug === params.slug);
  if (!project) return {};
  const url = `${siteConfig.url}/work/${project.slug}`;
  return {
    title: project.title, description: project.description,
    alternates: { canonical: url, types: { "text/markdown": `${url}.md` } },
    openGraph: { title: project.title, description: project.description, url, type: "article", authors: [siteConfig.author] },
    twitter: { card: "summary", title: project.title, description: project.description },
  };
}
export default function ProjectBrief({ params }: Props) {
  const project = caseStudies.find(p => p.slug === params.slug);
  if (!project) notFound();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: project.title, description: project.description,
    url: `${siteConfig.url}/work/${project.slug}`,
    author: { "@id": `${siteConfig.url}/#person` },
    citation: project.sources.map(s => s.url),
  };
  return (
    <main className="portfolio">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article className="home-col pb-24">
        <header className="portfolio-hero">
          <p className="tut-kicker mb-5">Akash Panchal / Project brief</p>
          <h1>{project.title}</h1><p className="hero-summary">{project.description}</p>
          <p className="tut-meta mt-6">{project.status}</p>
        </header>
        <div className="max-w-3xl space-y-10">{project.sections.map(section => <section key={section.title} className="section-intro"><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
        <section aria-labelledby="project-sources" className="section-intro mt-12"><h2 id="project-sources">Explore the evidence</h2><ul className="mt-5 space-y-3">{project.sources.map(source => <li key={source.url}><a className="ed-link" href={source.url}>{source.label} →</a></li>)}</ul></section>
        <nav aria-label="Project next steps" className="hero-actions"><a className="ed-link" href="/work-with-me">Discuss an engineering role</a><a className="ed-link" href={`/work/${project.slug}.md`}>Read as Markdown</a><a className="ed-link" href="/#projects">All selected work</a></nav>
      </article>
    </main>
  );
}
