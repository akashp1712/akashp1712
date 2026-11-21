export default function Intro() {
  return (
    <section id="home" className="home-col portfolio-hero">
      <div className="profile-greeting">
        <div>
          <h1>Hi, I’m Akash</h1>
          <p>AI systems engineer at Salesforce. I build <mark className="ink-highlight">agent runtimes</mark>, real-time voice products, and the services behind them.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/akash-headshot-tshirt.jpg" alt="Akash Panchal" width={96} height={96} />
      </div>
      <div className="profile-about">
        <h2>About</h2>
        <p>I’m based in Bengaluru and open to roles in the UK, Ireland and Australia. Across ten years at Salesforce, Amazon and McAfee, I’ve worked on messaging, app infrastructure and voice AI. Today I lead development of the agent runtime for Marketing Cloud Content Studio. <a className="ed-link" href="/CV.pdf">View CV</a> or <a className="ed-link" href="#contact">get in touch</a>.</p>
      </div>
    </section>
  );
}
