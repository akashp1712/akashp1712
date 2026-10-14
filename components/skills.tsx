import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="home-col mb-24 scroll-mt-28">
      <SectionHeading eyebrow="Skills">The stack</SectionHeading>
      <p className="tut-lede mb-10 text-lg">
        Agent runtimes and voice systems now. Before that: SMS platforms,
        app certification, home-network security, Android.
      </p>
      <dl className="skill-list">
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-row">
            <dt>{group.name}</dt>
            <dd>
              <p>{group.detail}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
