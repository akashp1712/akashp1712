import About from "@/components/about";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import AgentProfile from "@/components/agent-profile";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <About />
      <Projects />
      <AgentProfile />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}
