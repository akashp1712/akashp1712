const catalogue = "https://github.com/akashp1712/skills";

const skills = [
  ["onecue", "Remember project decisions and surface them when they matter."],
  ["agent-ready-nextjs", "Give AI assistants a readable index of a Next.js site."],
  ["carousel-press", "Turn a text file into PDF or image slides for a carousel."],
  ["prompt-guard", "Review agent instructions for prompt injection risks."],
  ["next-loading-skeleton", "Create loading placeholders for Next.js routes."],
  ["next-error-tsx", "Add retryable error boundaries to Next.js routes."],
  ["amazon-writing", "Draft and review one-pagers, six-pagers and PR/FAQs."],
  ["four-answers", "Answer factual questions directly and flag follow-ups."],
  ["workspace-disk-cleanup", "Identify disk cleanup opportunities in a development workspace."],
  ["zero-to-hero", "Build a learning guide with diagrams and worked examples."],
] as const;

function SkillList({ items }: { items: ReadonlyArray<(typeof skills)[number]> }) {
  return (
    <ul className="divide-y divide-[var(--line)]">
      {items.map(([name, description]) => (
        <li key={name}>
          <a href={catalogue + "/tree/HEAD/" + name} className="group block py-2">
            <strong className="font-mono text-sm group-hover:underline">{name} ↗</strong>
            <span className="block text-sm text-[var(--ink-soft)]">{description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function AuthoredSkills() {
  return (
    <section className="home-col" id="agent-skills">
      <h2>Agent skills I built</h2>
      <SkillList items={skills.slice(0, 3)} />
      <a className="portfolio-button portfolio-button--secondary my-3" href={catalogue}>
        See all {skills.length} agent skills <span aria-hidden="true">↗</span>
      </a>
      <details className="build-detail">
        <summary>More skills ({skills.length - 3})<span aria-hidden className="build-chevron">⌄</span></summary>
        <SkillList items={skills.slice(3)} />
      </details>
    </section>
  );
}
