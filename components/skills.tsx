const tools = ["TypeScript", "Python", "Java", "React", "Next.js", "FastAPI", "Mastra", "LiveKit", "WebRTC", "AWS", "Kafka", "Redis", "Terraform"];

export default function Skills() {
  return (
    <section id="skills" className="home-col">
      <h2>Skills</h2>
      <ul className="flex flex-wrap gap-1.5">
        {tools.map((tool) => <li key={tool} className="rounded-md bg-[var(--ink)] px-2 py-1 text-xs font-semibold text-[var(--paper)]">{tool}</li>)}
      </ul>
      <a className="ed-link mt-3 inline-block" href="/harness">Explore my engineering harness ↗</a>
    </section>
  );
}
