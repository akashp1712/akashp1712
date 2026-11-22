import AuthoredSkills from "@/components/authored-skills";
import AgentWalkthrough from "@/components/agent-walkthrough";
import "./portfolio.css";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import ProfileDock from "@/components/profile-dock";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="portfolio flex flex-col items-center">
      <ProfileDock />
      <Intro />
      <AuthoredSkills />
      <Experience />
      <section className="home-col" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <ul className="grid gap-4">
          {[
            ["NU", "Nirma University, Ahmedabad", "Master’s degree in Computer Science", "2014–2016"],
            ["NS", "NSIT, Jetalpur, Ahmedabad", "Bachelor of Engineering in Computer Science", "2009–2013"],
          ].map(([initials, school, degree, dates]) => (
            <li key={school} className="flex items-center gap-3">
              <span aria-hidden="true" className="profile-employer shrink-0 !text-xs font-semibold text-neutral-700">{initials}</span>
              <div className="profile-role flex-1"><strong>{school}</strong><small>{degree}</small></div>
              <span className="profile-date">{dates}</span>
            </li>
          ))}
        </ul>
      </section>
      <Skills />
      <Projects />
      <AgentWalkthrough />
      <Writing />
      <Contact />
    </main>
  );
}
