const groups = [
  { name: "Agent engineering", tools: ["Context optimization", "Tool calling", "Agent skills", "Evals"] },
  { name: "Languages", tools: ["TypeScript", "Python", "Java"] },
  { name: "Frameworks", tools: ["React", "Next.js", "FastAPI", "Mastra"] },
  { name: "Real-time voice", tools: ["LiveKit", "WebRTC"] },
  { name: "Infrastructure", tools: ["AWS", "Kafka", "Redis", "Terraform"] },
];

export default function Skills() {
  return (
    <section id="skills" className="home-col">
      <h2>Skills</h2>
      <dl className="profile-facts">
        {groups.map(({ name, tools }) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd><ul className="flex flex-wrap gap-1.5">{tools.map(tool => (
              <li key={tool} className="rounded-md border border-[var(--line)] px-2 py-1 text-xs">{tool}</li>
            ))}</ul></dd>
          </div>
        ))}
      </dl>
      <a className="ed-link mt-3 inline-block" href="/harness">Explore my engineering harness ↗</a>
    </section>
  );
}
