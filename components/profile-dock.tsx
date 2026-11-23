import Link from "next/link";
import { BsHouse, BsBriefcase, BsGrid, BsJournalText, BsEnvelope, BsGithub } from "react-icons/bs";

const destinations = [
  { href: "/#home", label: "Home", icon: BsHouse },
  { href: "/#experience", label: "Experience", icon: BsBriefcase },
  { href: "/#projects", label: "Projects", icon: BsGrid },
  { href: "/#blog", label: "Writing", icon: BsJournalText },
  { href: "/#contact", label: "Contact", icon: BsEnvelope },
  { href: "https://github.com/akashp1712", label: "GitHub", icon: BsGithub },
];

export default function ProfileDock() {
  return (
    <nav className="profile-dock" aria-label="Portfolio navigation">
      {destinations.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} className={label === "Contact" ? "dock-contact" : undefined} aria-label={label}>
          <Icon aria-hidden />
          <span className="dock-label" aria-hidden="true">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
