import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <section id="contact" className="home-col mb-24 sm:mb-32">
      <SectionHeading eyebrow="Contact">Email me</SectionHeading>
      <p className="tut-lede text-lg">
        The résumé is{" "}
        <a className="ed-link" href="/CV.pdf" download>
          here
        </a>
        . Email{" "}
        <a className="ed-link" href="mailto:akashp1712@gmail.com">
          akashp1712@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
