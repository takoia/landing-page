import { content } from "../content";
import { Reveal } from "./ui/Reveal";

export function HowItWorks() {
  const { howItWorks } = content;
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <Reveal as="p" className="eyebrow">{howItWorks.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>{howItWorks.title}</Reveal>

        <ol className="loop">
          {howItWorks.loop.map((step, i) => (
            <Reveal as="li" className="loop__step" key={step.name} delay={80 + i * 70}>
              <span className="loop__num mono">{i + 1}</span>
              <div>
                <h3>{step.name}</h3>
                <p>{step.body}</p>
              </div>
              {i < howItWorks.loop.length - 1 && (
                <span className="loop__connector" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className="loop__closer" delay={140}>
          <span className="loop__closer-mark mono" aria-hidden="true">↻</span>
          <p>{howItWorks.closer}</p>
        </Reveal>
      </div>
    </section>
  );
}
