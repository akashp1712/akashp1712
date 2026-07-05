import About from "@/components/about";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
    </main>
  );
}
