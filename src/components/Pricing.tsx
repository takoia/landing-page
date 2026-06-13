import { useContent } from "../i18n";
import { Reveal } from "./ui/Reveal";

export function Pricing() {
  const content = useContent();
  const { pricing } = content;
  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal as="p" className="eyebrow">{pricing.eyebrow}</Reveal>
        <div className="pricing__head">
          <Reveal as="h2" className="section-title" delay={60}>{pricing.title}</Reveal>
          <Reveal className="pricing__promise" delay={100}>
            {pricing.meterPromise}
          </Reveal>
        </div>

        <div className="pricing__grid">
          {pricing.tiers.map((tier, i) => (
            <Reveal
              className={`card pricing__tier ${tier.featured ? "pricing__tier--featured" : ""}`}
              key={tier.name}
              delay={100 + i * 90}
            >
              {tier.featured && <span className="pricing__badge mono">Most popular</span>}
              <h3 className="pricing__name">{tier.name}</h3>
              <div className="pricing__price">
                <span className="pricing__amount">{tier.price}</span>
                {tier.priceNote && <span className="pricing__pricenote">{tier.priceNote}</span>}
              </div>
              <p className="pricing__tagline">{tier.tagline}</p>
              <ul className="pricing__features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className="pricing__check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${tier.cta.variant === "primary" ? "btn-primary" : "btn-secondary"} pricing__cta`}
                href={tier.cta.href}
                {...(tier.cta.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {tier.cta.label}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="pricing__footnote" delay={140}>
          {pricing.footnote}
        </Reveal>
      </div>
    </section>
  );
}
