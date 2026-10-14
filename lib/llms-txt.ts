import { articles, tutorials } from "#site/content";
import { siteConfig } from "@/lib/site";
import {
  FEATURED_ARTICLE_SLUG,
  FEATURED_TUTORIAL_SLUG,
  WEBRTC_ARTICLE_SLUG,
  isMastraSlug,
  markdownUrl,
} from "@/lib/content-focus";

function line(
  title: string,
  path: string,
  description?: string
) {
  const html = `${siteConfig.url}${path}`;
  const md = `${siteConfig.url}${markdownUrl(path)}`;
  const desc = description ? `: ${description}` : "";
  return `- [${title}](${html})${desc}\n  - Markdown: ${md}`;
}

/** llmstxt.org — signpost, not a second website. */
export function buildLlmsTxt() {
  const featuredArticle = articles.find(
    (a) => !a.draft && a.slugAsParams === FEATURED_ARTICLE_SLUG
  );
  const featuredTutorial = tutorials.find(
    (t) => !t.draft && t.slugAsParams === FEATURED_TUTORIAL_SLUG
  );
  const webrtcArticle = articles.find(
    (a) => !a.draft && a.slugAsParams === WEBRTC_ARTICLE_SLUG
  );

  const otherArticles = articles
    .filter(
      (a) =>
        !a.draft &&
        a.slugAsParams !== FEATURED_ARTICLE_SLUG &&
        a.slugAsParams !== WEBRTC_ARTICLE_SLUG
    )
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  const otherTutorials = tutorials.filter(
    (t) =>
      !t.draft &&
      t.slugAsParams !== FEATURED_TUTORIAL_SLUG &&
      !isMastraSlug(t.slugAsParams)
  );

  const mastra = tutorials
    .filter((t) => !t.draft && isMastraSlug(t.slugAsParams))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const featured = [
    webrtcArticle
      ? line(
          webrtcArticle.title,
          webrtcArticle.url,
          webrtcArticle.description
        )
      : "",
    featuredArticle
      ? line(
          featuredArticle.title,
          featuredArticle.url,
          featuredArticle.description
        )
      : "",
    featuredTutorial
      ? line(
          featuredTutorial.title,
          featuredTutorial.url,
          featuredTutorial.description
        )
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const also = [
    ...otherArticles.map((a) => line(a.title, a.url, a.description)),
    ...otherTutorials.map((t) => line(t.title, t.url, t.description)),
  ].join("\n");

  const optional = mastra
    .map((t) => line(t.title, t.url, t.description))
    .join("\n");

  return `# Akash Panchal

> ${siteConfig.description}

- [Home](${siteConfig.url}): AI systems engineer at Salesforce. Independent agent products on a low-touch cadence.
- [Profile JSON](${siteConfig.url}/profile.json): Structured career, skills, and selected work.
- [About Markdown](${siteConfig.url}/about.md): Concise profile for agent retrieval.
- [Résumé](${siteConfig.url}/CV.pdf)
- [Evercall](https://evercall.app): AI call handler for Australian emergency plumbers.
- [OneCue](https://onecue.sh): Decision memory that surfaces the prior decision a coding-agent change could break.
- [VibeFrames](https://vibeframes.vercel.app): Agentic video workspace for editable Remotion compositions.
- [AI SDK Patterns](https://ai-sdk-patterns.dev): Open-source TypeScript patterns, composer, and a 16-chapter learn track.
- [Building Evercall](${siteConfig.url}/building-evercall): One line per week that actually shipped.
- [Articles](${siteConfig.url}/articles)
- [Tutorials](${siteConfig.url}/tutorials)
- [RSS](${siteConfig.url}/rss.xml)

Canonical HTML is at the paths below. Each piece also has a \`.md\` URL for agents.

## Writing

${featured}

## Also

${also}

## Optional

Earlier Mastra series. URLs stay live; this is not what I am building now.

${optional}
`;
}
