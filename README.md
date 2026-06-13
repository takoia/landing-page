# Takoia — landing page

> **Open source.** Source: **https://github.com/takoia** · this repo:
> **https://github.com/takoia/landing-page**

Static marketing landing page for **Takoia**: a customizable AI-agent platform you
self-host locally — even on a Mac Mini at home — with permanent memory (ICM), so you
**own your expertise and resell access to it**. The platform is open source — inspect
it, fork it, and run it yourself.

Built with **Bun + TypeScript + React**, bundled by **Vite** for instant Hot Module
Replacement (HMR) and React Fast Refresh in local dev. No backend — it's a static site.

> All copy is in English by design. Brand motif: octopus (*tako*), minimal tech /
> Japanese aesthetic.

## Requirements

- [Bun](https://bun.sh) ≥ 1.1 (used as the package manager and script runner)

## Scripts

```bash
bun install        # install dependencies
bun run dev        # start the local dev server with hot reload (HMR + Fast Refresh)
bun run build      # type-check (tsc) + production build to ./dist
bun run preview    # serve the production build locally to verify it
```

### `bun run dev` — local development (hot reload)

Starts the Vite dev server. **Dev URL: http://localhost:5173**

Editing any component **or** `src/content.ts` is reflected **instantly** — no full page
reload, component state is preserved (HMR + React Fast Refresh).

### `bun run build` — production build

Runs `tsc` (type-check, no emit) then `vite build`. Output goes to `./dist`.

### `bun run preview` — verify the build

Serves `./dist` locally. **Preview URL: http://localhost:4173**

## Editing copy & prices

**All** user-facing copy **and** all prices live in typed dictionaries:

```
src/content.ts        # English (en) — canonical; its structure defines SiteContent
src/locales/es.ts     # Spanish (es)
src/locales/fr.ts     # French (fr)
```

Change text or prices there and the dev server updates instantly. Each locale is typed
as `SiteContent`, so `tsc` fails the build if a translation is missing or the shape drifts.

## Languages (i18n)

Three languages: **English, Spanish, French**. The active language is **auto-detected from
the browser** on first visit (`navigator.languages`), falling back to English. Once the
visitor picks a language from the switcher in the nav, the choice is remembered
(`localStorage`). The `<html lang>` attribute is kept in sync.

- Engine + detection/persistence: `src/i18n.tsx` (`LanguageProvider`, `useContent()`,
  `useLanguage()`).
- Switcher UI: `src/components/ui/LanguageSwitcher.tsx`.
- Add a language: create `src/locales/<code>.ts` exporting a `SiteContent`, then add it to
  the `LOCALES` map in `src/i18n.tsx`.

Only visible copy and display prices are translated; hrefs, image paths, competitor ids
and comparison verdicts stay identical across locales.

## Project structure

```
index.html                 # Vite entry HTML
src/
  main.tsx                  # React entry
  App.tsx                   # section composition (order matches the brief)
  content.ts                # SINGLE SOURCE OF TRUTH — all copy + all prices
  index.css                 # design tokens + global styles
  components/
    components.css          # component / section styles
    Nav.tsx Hero.tsx Problem.tsx Triptych.tsx Features.tsx
    Comparison.tsx HowItWorks.tsx Pricing.tsx FinalCta.tsx Footer.tsx
    ui/
      Reveal.tsx            # IntersectionObserver scroll-reveal (reduced-motion safe)
      Logo.tsx              # placeholder octopus mark + wordmark
      Verdict.tsx           # ✓ / ~ / ✕ comparison cell
public/
  favicon.svg               # placeholder octopus favicon
```

## Sections (in order)

1. Hero — *Own your AI expertise. Resell it.*
2. The problem — you rent agents; the expertise is never yours
3. The killer feature — personalize & run locally → remember (ICM) → connect & resell
4. Features — 7-card grid
5. Comparison — Takoia vs Google vs Microsoft (honest; tie rows kept neutral)
6. How it works — the agent loop
7. Pricing — Community / Pro / Enterprise · **No usage meter. Ever.**
8. Final CTA + footer

## Placeholders

The octopus logo and the hero visual are **placeholders** (clearly marked in the UI and
in `public/favicon.svg` / `src/components/ui/Logo.tsx`). Drop the final assets in when
ready — no fabricated brand assets are shipped.

## Honesty notes (baked into the copy)

- RTK only trims **shell-output tokens** for execution agents — never presented as a
  general cost cut. The resale economics rest on **owned local hardware + local models**.
- Multi-model, permanent memory, and MCP are **not** exclusive (Google/Microsoft have
  them) — those comparison rows are rendered as neutral "tie" rows.
- No fake stats, customer logos, testimonials, or invented competitor prices.
