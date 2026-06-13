import { useContent } from "../i18n";
import { Reveal } from "./ui/Reveal";

export function FinalCta() {
  const content = useContent();
  const { finalCta } = content;
  return (
    <section className="section final">
      <div className="container">
        <Reveal className="final__card">
          <h2 className="final__title">{finalCta.title}</h2>
          <p className="final__body">{finalCta.body}</p>
          <div className="final__ctas">
            {finalCta.ctas.map((c) => (
              <a
                key={c.label}
                className={`btn ${c.variant === "primary" ? "btn-primary" : "btn-secondary"}`}
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {c.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
