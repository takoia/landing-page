import type { Verdict } from "../../content";

const GLYPH: Record<Verdict, string> = {
  yes: "✓",
  partial: "~",
  no: "✕",
  unknown: "?",
};

const LABEL: Record<Verdict, string> = {
  yes: "Yes",
  partial: "Partial",
  no: "No",
  unknown: "To verify",
};

/** Renders a ✓ / ~ / ✕ / ? verdict cell with an accessible label. */
export function VerdictMark({ value }: { value: Verdict }) {
  return (
    <span className={`verdict verdict--${value}`} role="img" aria-label={LABEL[value]}>
      {GLYPH[value]}
    </span>
  );
}
