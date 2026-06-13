import { content } from "../content";
import { Reveal } from "./ui/Reveal";

export function Features() {
  const { features } = content;
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal as="p" className="eyebrow">{features.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>{features.title}</Reveal>

        <div className="features__grid">
          {features.cards.map((c, i) => (
            <Reveal className="card feature" key={c.title} delay={80 + i * 60}>
              <span className="feature__dot" aria-hidden="true" />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
