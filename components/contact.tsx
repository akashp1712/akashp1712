import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { PressLink } from "./portfolio-motion";

import CopyEmail from "./copy-email";

const email = "akashp1712@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="home-col recruiter-contact mb-24 sm:mb-32">
      <div className="contact-panel">
        <header className="template-heading"><span>Contact</span><h2>Get in touch</h2><p>Hiring an engineer for AI agents or real-time voice? Tell me what your team is building.</p></header>
        <p className="contact-result">At Amazon, I cut data retrieval time for the app details API by <strong>50%</strong>. <a className="ed-link" href="/CV.pdf">See my CV</a></p>
        <div className="hero-actions">
          <PressLink className="portfolio-button" href={`mailto:${email}`}><BsEnvelope aria-hidden /> Email Akash</PressLink>
        </div>
        <div className="contact-alternatives">
          <PressLink className="hero-work-link" href="https://www.linkedin.com/in/akashp1712"><BsLinkedin aria-hidden /> LinkedIn</PressLink>
          <CopyEmail email={email} />
        </div>
      </div>
    </section>
  );
}
