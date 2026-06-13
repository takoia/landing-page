import { useContent } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { withBase } from "../asset";

export function Hero() {
  const content = useContent();
  const { hero } = content;
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <Reveal as="p" className="eyebrow">
          {hero.eyebrow}
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={60}>
          {hero.headline.lead} <span className="gradient-text">{hero.headline.accent}</span>
        </Reveal>

        <Reveal as="p" className="hero__subhead" delay={120}>
          {hero.subhead}
        </Reveal>

        <Reveal className="hero__pitch" delay={180}>
          <span className="hero__pitch-bar" aria-hidden="true" />
          <p>{hero.pitch}</p>
        </Reveal>

        <Reveal className="hero__ctas" delay={240}>
          {hero.ctas.map((c) => (
            <a
              key={c.label}
              className={`btn ${c.variant === "primary" ? "btn-primary" : "btn-secondary"}`}
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {c.label}
            </a>
          ))}
        </Reveal>

        {/* Hero visual generated from the Takoia logo via Vertex AI (style-matched). */}
        <Reveal className="hero__visual" delay={300}>
          <div className="hero__visual-frame">
            <img
              className="hero__visual-img"
              src={withBase(content.brand.assets.hero)}
              alt={content.a11y.heroImageAlt}
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
