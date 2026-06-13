import { useEffect, useRef, useState } from "react";
import { LOCALES, useContent, useLanguage, type Locale } from "../../i18n";

/**
 * Accessible language switcher. Auto-detection sets the initial language;
 * picking one here persists the choice (localStorage). Closes on outside
 * click and on Escape.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const { a11y } = useContent();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const entries = Object.entries(LOCALES) as [Locale, (typeof LOCALES)[Locale]][];

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${a11y.language}: ${LOCALES[locale].label}`}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        <span className="lang__current mono">{LOCALES[locale].short}</span>
        <span className="lang__caret" aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="lang__menu" role="listbox" aria-label={a11y.languageMenu}>
          {entries.map(([code, meta]) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                className={`lang__option ${code === locale ? "is-active" : ""}`}
                onClick={() => choose(code)}
              >
                <span className="mono lang__option-short">{meta.short}</span>
                <span>{meta.label}</span>
                {code === locale && <span className="lang__check" aria-hidden="true">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
