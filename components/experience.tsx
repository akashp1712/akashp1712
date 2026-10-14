import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Experience">Work experience</SectionHeading>
      <p className="tut-lede mb-8 text-lg">
        Salesforce now. Amazon and McAfee before that.
      </p>
      <div className="experience-list">
        {experiencesData.map((experience, index) => (
          <article key={experience.title} className="experience-row">
            <div className="experience-row__heading">
              <div
                className="experience-row__logo"
                style={{ color: experience.brandColor }}
              >
                {experience.logo}
              </div>
              <div className="min-w-0 flex-1">
                <h3>{experience.title}</h3>
                <p className="experience-row__meta">
                  {index === 0 && (
                    <span className="experience-row__now">Now</span>
                  )}
                  <span>{experience.date}</span>
                  <span>{experience.location}</span>
                </p>
                <p className="experience-row__lede">{experience.description}</p>
              </div>
            </div>
            <div className="experience-row__body">
              {experience.achievements && (
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
              {experience.technologies && (
                <div className="experience-row__stack">
                  {experience.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
