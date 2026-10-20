import ToolBrand from "./tool-brand";
const capabilities = [
  { title: "Agent infrastructure", description: "Conversation state, memory, tool execution, and human approval.", tools: ["Mastra", "AI SDK", "Python", "TypeScript"], evidence: "Agentic Content Studio at Salesforce" },
  { title: "Voice systems", description: "Real-time conversations, interruptions, and reliable actions.", tools: ["LiveKit", "WebRTC", "Streaming STT / TTS"], evidence: "Evercall · Ready to onboard customers" },
  { title: "Product engineering", description: "From a customer problem to an interface and the services behind it.", tools: ["React", "Next.js", "FastAPI", "Node.js"], evidence: "OneCue, VibeFrames & AI SDK Patterns" },
  { title: "Backend & infrastructure", description: "Distributed services, messaging, data, and cloud infrastructure.", tools: ["AWS", "Java", "Kafka", "Redis", "Terraform", "SQL / NoSQL"], evidence: "Production systems at Salesforce, Amazon & McAfee" },
];
export default function Skills() {
  return <section id="skills" className="home-col portfolio-skills">
    <div className="section-intro"><h2>What I build with</h2><p>The tools change. Designing dependable systems is the throughline.</p></div>
    <div className="capability-grid">{capabilities.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p><ul>{item.tools.map(tool => <li key={tool}><ToolBrand name={tool} /></li>)}</ul><small>{item.evidence}</small></article>)}</div>
    <a className="harness-invite" href="/harness"><span><strong>Explore my engineering harness</strong><span>See how my skills, tools, and experience fit together.</span></span><span aria-hidden="true">↗</span></a>
  </section>;
}
