import AgentWalkthrough from "@/components/agent-walkthrough";
import "./portfolio.css";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="portfolio flex flex-col items-center">
      <Header />
      <Intro />
      <Projects />
      <AgentWalkthrough />
      <Experience />
      <Skills />
      <Writing />
      <Contact />
    </main>
  );
}
