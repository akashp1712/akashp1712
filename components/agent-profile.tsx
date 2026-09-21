import Link from "next/link";
import { BsArrowRight, BsFiletypeJson } from "react-icons/bs";

const capabilities = [
  ["Build", "TypeScript, Python, React, FastAPI, AWS"],
  ["Agents", "harnesses, tools, memory, evals, approvals"],
  ["Voice", "LiveKit, WebRTC, VAD, streaming, barge-in"],
];

export default function AgentProfile() {
  return (
    <section id="for-agents" className="mb-24 w-full max-w-3xl px-4 scroll-mt-28 sm:px-6">
      <div className="agent-profile">
        <div className="agent-profile__top">
          <div>
            <p className="ed-meta" style={{ color: "var(--accent)" }}>For agents and recruiters</p>
            <h2 className="ed-section-title mt-3 text-3xl sm:text-4xl">The evidence, in a format you can use.</h2>
          </div>
          <span className="agent-status"><i /> available for the right problems</span>
        </div>

        <p className="tut-lede mt-5 max-w-2xl text-base">
          The portfolio is rendered as ordinary HTML first. These companion
          resources make the same facts easy to retrieve, cite, and compare.
        </p>

        <div className="agent-profile__grid mt-7">
          <div className="agent-profile__capabilities">
            {capabilities.map(([label, details]) => (
              <div key={label} className="agent-capability">
                <span>{label}</span>
                <p>{details}</p>
              </div>
            ))}
          </div>
          <div className="agent-profile__resources">
            <Link href="/about.md" className="agent-resource">
              <span>About &amp; capabilities</span><b>Markdown <BsArrowRight /></b>
            </Link>
            <Link href="/profile.json" className="agent-resource">
              <span>Projects, experience &amp; skills</span><b>JSON <BsFiletypeJson /></b>
            </Link>
            <Link href="/llms.txt" className="agent-resource">
              <span>Writing index and canonical links</span><b>llms.txt <BsArrowRight /></b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
