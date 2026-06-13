import type { Verdict } from "../../content";
import { useContent } from "../../i18n";

const GLYPH: Record<Verdict, string> = {
  yes: "✓",
  partial: "~",
  no: "✕",
  unknown: "?",
};

/** Renders a ✓ / ~ / ✕ / ? verdict cell with a localized accessible label. */
export function VerdictMark({ value }: { value: Verdict }) {
  const { legend } = useContent().comparison;
  return (
    <span className={`verdict verdict--${value}`} role="img" aria-label={legend[value]}>
      {GLYPH[value]}
    </span>
  );
}
