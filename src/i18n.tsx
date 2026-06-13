import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type SiteContent } from "./content";
import { es } from "./locales/es";
import { fr } from "./locales/fr";

/** Supported languages. Add a locale here + a dictionary file to extend. */
export const LOCALES = {
  en: { label: "English", short: "EN", content: en },
  es: { label: "Español", short: "ES", content: es },
  fr: { label: "Français", short: "FR", content: fr },
} satisfies Record<string, { label: string; short: string; content: SiteContent }>;

export type Locale = keyof typeof LOCALES;

const SUPPORTED = Object.keys(LOCALES) as Locale[];
const STORAGE_KEY = "takoia_lang";

function isLocale(v: string | null | undefined): v is Locale {
  return !!v && (SUPPORTED as string[]).includes(v);
}

/** Auto-detect from the browser (langue automatique de base), fallback to English. */
function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    const base = (l || "").toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return "en";
}

/** Stored choice wins; otherwise auto-detect. */
function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* localStorage may be unavailable */
  }
  return detectLocale();
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => initialLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, content: LOCALES[locale].content }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Convenience hook: the active locale's dictionary. */
export function useContent(): SiteContent {
  return useLanguage().content;
}
