# Takoia — landing page

Static marketing landing page for **Takoia**: a customizable AI-agent platform you
self-host locally — even on a Mac Mini at home — with permanent memory (ICM), so you
**own your expertise and resell access to it**.

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

**All** user-facing copy **and** all prices live in a single typed file:

```
src/content.ts
```

Change text or prices there and the dev server updates instantly. The typed shape
(`SiteContent`) makes it straightforward to wrap in a per-locale map for translation later.

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
