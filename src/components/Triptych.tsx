import { useContent } from "../i18n";
import { Reveal } from "./ui/Reveal";
import { withBase } from "../asset";

export function Triptych() {
  const content = useContent();
  const { triptych } = content;
  return (
    <section className="section" id="why">
      <div className="container">
        <Reveal as="p" className="eyebrow">{triptych.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>{triptych.title}</Reveal>

        <div className="triptych">
          {triptych.steps.map((s, i) => (
            <Reveal className="triptych__step card" key={s.step} delay={120 + i * 100}>
              <div className="triptych__media">
                <img src={withBase(s.image)} alt="" loading="lazy" />
              </div>
              <span className="triptych__num mono">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {i < triptych.steps.length - 1 && (
                <span className="triptych__arrow" aria-hidden="true">→</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
