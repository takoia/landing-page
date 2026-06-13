import { useEffect, useState } from "react";
import { useContent } from "../i18n";
import { Wordmark } from "./ui/Logo";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";

export function Nav() {
  const content = useContent();
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
        <div className="nav__actions">
          <LanguageSwitcher />
          <a className="btn btn-secondary nav__cta" href={content.nav.cta.href} target="_blank" rel="noreferrer">
            {content.nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
