import { useContent } from "../../i18n";
import { withBase } from "../../asset";

/**
 * Takoia mark — the real octopus (tako) emblem, generated/owned in the brand set.
 * Rendered as a small rounded "chip" so the emblem's gradient reads as an app icon.
 */
export function Logo({ size }: { size?: number }) {
  const content = useContent();
  // When a size is given, lock it inline (footer). When omitted, CSS controls it
  // (the nav, so it can shrink on scroll).
  const style = size ? { width: size, height: size } : undefined;
  return (
    <span className="logo" aria-hidden="true" style={style}>
      <img
        src={withBase(content.brand.assets.mark)}
        alt=""
        {...(size ? { width: size, height: size } : {})}
      />
    </span>
  );
}

export function Wordmark() {
  const content = useContent();
  // The brand name is baked into the logo image, so no separate text label.
  return (
    <a href="#top" className="wordmark" aria-label={content.a11y.home}>
      <Logo />
    </a>
  );
}
