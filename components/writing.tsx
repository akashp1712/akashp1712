import Link from "next/link";
import { articles } from "#site/content";
const series = [
  ["mcp-project-memory", "MCP"],
  ["a2a-editorial-handoff", "A2A"],
  ["personal-agent-protocol", "Poppy"],
] as const;

export default function Writing() {
  const selected = series.map(([slug, kind]) => {
    const article = articles.find(post => !post.draft && post.slugAsParams === slug);
    return { article, kind, summary: article?.description };
  });
  return <section id="blog" className="home-col portfolio-writing">
    <div className="section-intro"><h2>Engineering notes</h2><p>Three illustrated guides to connecting tools, delegating tasks and acting for a customer.</p></div>
    <div className="notes-list">{selected.map(({article, kind, summary}) => article ? <article key={article.url}><div className="note-meta"><span>{kind}</span><time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("en-US", {month:"short", year:"numeric", timeZone:"UTC"})}</time></div><div><h3><Link href={article.url}>{article.title}</Link></h3><p>{summary}</p><Link className="note-read" href={article.url} aria-label={`Read ${article.title}`}>Read article <span aria-hidden="true">↗</span></Link></div></article> : null)}</div>
    <div className="notes-links"><Link href="/articles">All articles</Link><Link href="/tutorials">All tutorials</Link></div>
  </section>;
}
