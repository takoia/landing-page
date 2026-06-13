import { content } from "../content";
import { Logo } from "./ui/Logo";

export function Footer() {
  const { footer } = content;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="wordmark">
            <Logo />
            <span>Takoia</span>
          </a>
          <p className="footer__blurb">{footer.blurb}</p>
        </div>

        <div className="footer__cols">
          {footer.columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>{footer.license}</span>
        <span className="mono footer__tako">tako 🐙 placeholder</span>
      </div>
    </footer>
  );
}
