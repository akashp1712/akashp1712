import Link from "next/link";
import { tutorials, articles } from "#site/content";
import { FEATURED_ARTICLE_SLUG, FEATURED_TUTORIAL_SLUG, WEBRTC_ARTICLE_SLUG } from "@/lib/content-focus";

export default function Writing() {
  const selected = [
    { article: articles.find(a => !a.draft && a.slugAsParams === FEATURED_ARTICLE_SLUG), kind: "Engineering deep dive", summary: "Latency, interruptions, and tool calls: the problems between a voice demo and a useful agent." },
    { article: tutorials.find(a => !a.draft && a.slugAsParams === FEATURED_TUTORIAL_SLUG), kind: "Practical tutorial", summary: "Build a voice workflow with LiveKit’s tasks and task groups, with code you can follow." },
    { article: articles.find(a => !a.draft && a.slugAsParams === WEBRTC_ARTICLE_SLUG), kind: "From first principles", summary: "Understand the transport underneath voice agents: audio packets, jitter, and real-time delivery." },
  ];
  return <section id="blog" className="home-col portfolio-writing">
    <div className="section-intro"><h2>Engineering notes</h2><p>The decisions, failure modes, and fundamentals behind the things I build.</p></div>
    <div className="notes-list">{selected.map(({article, kind, summary}) => article ? <article key={article.url}><div className="note-meta"><span>{kind}</span><time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("en-US", {month:"short", year:"numeric", timeZone:"UTC"})}</time></div><div><h3><Link href={article.url}>{article.title}</Link></h3><p>{summary}</p><Link className="note-read" href={article.url} aria-label={`Read ${article.title}`}>Read article <span aria-hidden="true">↗</span></Link></div></article> : null)}</div>
    <div className="notes-links"><Link href="/articles">All articles</Link><Link href="/tutorials">All tutorials</Link></div>
  </section>;
}
