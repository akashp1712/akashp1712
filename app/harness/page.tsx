import HarnessLayers from "@/components/harness-layers";
import Header from "@/components/header";
import { siteConfig } from "@/lib/site";
import "../portfolio.css";
import "./harness.css";

export const metadata = {
  title: "My engineering harness",
  description: "Explore how Akash Panchal combines engineering skills, tools, and experience to build AI systems. An interactive portfolio.",
  alternates: { canonical: `${siteConfig.url}/harness` },
};
export default function HarnessPage() {
  return <main className="portfolio harness-page"><Header /><div className="home-col"><a className="harness-back" href="/">Back to portfolio</a><header className="harness-heading"><p>Akash Panchal / Engineering harness</p><h1>One engineer.<br />A system of capabilities.</h1><p>Think of me as the harness: I connect the context, skills, and tools needed to turn a problem into working software.</p><span>An interactive map of my experience. Select a layer to explore its capabilities and supporting work.</span></header><HarnessLayers /></div></main>;
}
