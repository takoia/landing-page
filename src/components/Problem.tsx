import { useContent } from "../i18n";
import { Reveal } from "./ui/Reveal";

export function Problem() {
  const content = useContent();
  const { problem } = content;
  return (
    <section className="section" id="problem">
      <div className="container">
        <Reveal as="p" className="eyebrow">{problem.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={60}>{problem.title}</Reveal>
        <Reveal as="p" className="section-lead" delay={120}>{problem.body}</Reveal>

        <div className="problem__grid">
          {problem.points.map((p, i) => (
            <Reveal className="problem__card" key={p.label} delay={140 + i * 80}>
              <span className="problem__index mono">0{i + 1}</span>
              <h3>{p.label}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
