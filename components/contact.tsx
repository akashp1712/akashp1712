import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { PressLink } from "./portfolio-motion";

import CopyEmail from "./copy-email";

const email = "akashp1712@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="home-col recruiter-contact mb-24 sm:mb-32">
      <div className="contact-panel">
        <header className="template-heading"><span>Contact</span><h2>Get in touch</h2><p>Hiring for AI or backend engineering? I’d like to hear about the role.</p></header>
        <div className="hero-actions">
          <PressLink className="portfolio-button" href={`mailto:${email}`}><BsEnvelope aria-hidden /> Email Akash</PressLink>
          <PressLink className="portfolio-button portfolio-button--secondary" href="https://www.linkedin.com/in/akashp1712"><BsLinkedin aria-hidden /> LinkedIn</PressLink>
          <CopyEmail email={email} />
          <a className="hero-work-link" href="/CV.pdf" download>Download CV</a>
        </div>
      </div>
    </section>
  );
}
