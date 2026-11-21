import { BsChevronRight } from "react-icons/bs";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="home-col profile-experience">
      <h2>Work experience</h2>
      {experiencesData.map((role) => (
        <details key={role.title}>
          <summary>
            <span className="profile-employer" style={{ color: role.brandColor }}>{role.logo}</span>
            <span className="profile-role">
              <strong>{role.title.slice(role.title.lastIndexOf(", ") + 2)}<BsChevronRight className="role-chevron" aria-hidden /></strong>
              <small>{role.title.split(", ").slice(0, -1).join(", ")}</small>
            </span>
            <span className="profile-date">{role.date}</span>
          </summary>
          <div className="profile-role-detail">
            <p>{role.description}</p>
            <ul>{role.achievements.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </details>
      ))}
    </section>
  );
}
