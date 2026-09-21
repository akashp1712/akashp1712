import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Portfolio navigation">
        <Link className="site-mark" href="/#home">AP</Link>
        <ul>
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={`/${link.hash}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
