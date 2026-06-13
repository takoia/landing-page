import { useContent } from "../../i18n";

/**
 * Takoia mark — the real octopus (tako) emblem, generated/owned in the brand set.
 * Rendered as a small rounded "chip" so the emblem's gradient reads as an app icon.
 */
export function Logo({ size = 30 }: { size?: number }) {
  const content = useContent();
  return (
    <span className="logo" aria-hidden="true" style={{ width: size, height: size }}>
      <img src={content.brand.assets.mark} alt="" width={size} height={size} />
    </span>
  );
}

export function Wordmark() {
  return (
    <a href="#top" className="wordmark" aria-label="Takoia — home">
      <Logo />
      <span>Takoia</span>
    </a>
  );
}
