import { useEffect, useState } from "react";
import { content } from "../content";
import { Wordmark } from "./ui/Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Wordmark />
        <nav className="nav__links" aria-label="Primary">
          {content.nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-secondary nav__cta" href={content.nav.cta.href} target="_blank" rel="noreferrer">
          {content.nav.cta.label}
        </a>
      </div>
    </header>
  );
}
