import { useContent } from "../i18n";
import { Logo } from "./ui/Logo";

export function Footer() {
  const content = useContent();
  const { footer } = content;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="wordmark" aria-label={content.a11y.home}>
            <Logo size={80} />
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
        <span className="mono footer__tako">{content.brand.motif} 🐙</span>
      </div>
    </footer>
  );
}
