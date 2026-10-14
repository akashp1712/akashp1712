import Link from "next/link";
import { BsArrowRight, BsFiletypeJson } from "react-icons/bs";
import { profile } from "@/lib/profile";

const resources = [
  {
    href: "/about.md",
    label: "About & capabilities",
    kind: "Markdown",
    icon: "md",
  },
  {
    href: "/profile.json",
    label: "Projects, experience & skills",
    kind: "JSON",
    icon: "json",
  },
  {
    href: "/llms.txt",
    label: "Writing index and canonical links",
    kind: "llms.txt",
    icon: "txt",
  },
  {
    href: "/CV.pdf",
    label: "Résumé",
    kind: "PDF",
    icon: "pdf",
    download: true,
  },
];

export default function AgentProfile() {
  return (
    <section id="for-agents" className="mb-24 w-full max-w-3xl px-4 scroll-mt-28 sm:px-6">
      <div className="agent-profile">
        <div className="agent-profile__chrome" aria-hidden>
          <span />
          <span />
          <span />
          <code>akashpanchal.com · machine-readable</code>
        </div>

        <div className="agent-profile__top">
          <div>
            <p className="ed-meta" style={{ color: "var(--accent)" }}>
              For agents and hiring systems
            </p>
            <h2 className="ed-section-title mt-3 text-3xl sm:text-4xl">
              Same facts, structured.
            </h2>
          </div>
          <span className="agent-status">
            <i />
            Salesforce · independent products live
          </span>
        </div>

        <p className="tut-lede mt-5 max-w-2xl text-base">
          HTML for people. Markdown, JSON, and llms.txt for retrieval. Start
          here if you are an agent, a recruiter copilot, or a hiring pipeline.
        </p>

        <div className="agent-profile__grid mt-7">
          <div className="agent-profile__capabilities">
            <div className="agent-capability">
              <span>Role</span>
              <p>
                {profile.currentRole.title}, {profile.currentRole.org}
              </p>
            </div>
            <div className="agent-capability">
              <span>Build</span>
              <p>{profile.skills.languages_and_platforms.join(", ")}</p>
            </div>
            <div className="agent-capability">
              <span>Agents</span>
              <p>{profile.skills.agent_systems.join(", ")}</p>
            </div>
            <div className="agent-capability">
              <span>Voice</span>
              <p>{profile.skills.voice.join(", ")}</p>
            </div>
          </div>
          <div className="agent-profile__resources">
            {resources.map((resource) => {
              const inner = (
                <>
                  <span>{resource.label}</span>
                  <b>
                    {resource.kind}{" "}
                    {resource.icon === "json" ? <BsFiletypeJson /> : <BsArrowRight />}
                  </b>
                </>
              );
              if (resource.download) {
                return (
                  <a
                    key={resource.href}
                    href={resource.href}
                    download
                    className="agent-resource"
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={resource.href} href={resource.href} className="agent-resource">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
