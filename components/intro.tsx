export default function Intro() {
  return (
    <section id="home" className="home-col portfolio-hero">
      <div className="hero-identity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/akash-headshot-tshirt.jpg" alt="Akash Panchal" width={64} height={64} />
        <div><p>Akash Panchal</p><span>Salesforce · previously Amazon & McAfee</span></div>
      </div>
      <h1>Software engineer building production AI systems.</h1>
      <p className="hero-summary">I build agent runtimes, voice applications, and the backend systems behind them. Ten years of engineering, from messaging platforms at scale to tools that turn a conversation into action.</p>
      <div className="hero-actions"><a className="portfolio-button" href="#projects">Explore my work</a><a href="/CV.pdf">View résumé</a><a href="mailto:akashp1712@gmail.com">Get in touch</a></div>
      <div className="hero-context"><span>Currently building agent infrastructure at Salesforce</span><a href="/harness">My harness</a><a href="https://github.com/akashp1712">GitHub</a><a href="https://www.linkedin.com/in/akashp1712">LinkedIn</a></div>
    </section>
  );
}
