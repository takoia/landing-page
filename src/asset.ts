/**
 * Resolves a public asset path against Vite's configured base URL.
 *
 * Static assets in `public/` are referenced as data strings (e.g. "/brand/hero.png")
 * which Vite does NOT rewrite. On GitHub Pages the site is served from the
 * `/landing-page/` subpath, so these must be prefixed with `import.meta.env.BASE_URL`
 * (which is "/" in dev and "/landing-page/" in the production build).
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
