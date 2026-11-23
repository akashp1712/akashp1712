import { PressLink } from "./portfolio-motion";

export default function Intro() {
  return (
    <section id="home" className="home-col portfolio-hero">
      <div className="profile-greeting">
        <div>
          <div className="profile-byline">Akash Panchal · AI systems engineer at Salesforce</div>
          <h1>I build AI agent harnesses for <mark className="ink-highlight">content generation</mark> and voice.</h1>
          <p>My agents turn video briefs into editable scenes and phone calls into booked jobs.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/akash-headshot-tshirt.jpg" alt="Akash Panchal" width={96} height={96} />
      </div>
      <div className="profile-about">
        <h2>About</h2>
        <dl className="profile-facts">
          <div><dt>Open to</dt><dd>AI agent and voice engineering roles.</dd></div>
          <div><dt>Experience</dt><dd>Ten years across Salesforce, Amazon and McAfee.</dd></div>
          <div><dt>Today</dt><dd>I lead development of the agent runtime for Salesforce Marketing Cloud Content Studio.</dd></div>
        </dl>
        <div className="hero-actions">
          <PressLink className="portfolio-button" href="#contact">Get in touch</PressLink>
          <PressLink className="portfolio-button portfolio-button--secondary" href="/CV.pdf">View CV</PressLink>
        </div>
      </div>
    </section>
  );
}
