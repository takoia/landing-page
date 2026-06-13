/**
 * content.ts — SINGLE SOURCE OF TRUTH (English / canonical shape)
 *
 * All user-facing copy AND all prices live here so they are trivial to edit and
 * localize. Components must not hard-code copy or prices — they read the active
 * locale's dictionary via the `useContent()` hook (see src/i18n.tsx).
 *
 * English (`en`) is the canonical dictionary; its structure defines `SiteContent`.
 * Spanish (`es`) and French (`fr`) live in src/locales/ and must match this shape.
 * The active language is auto-detected from the browser, then remembered.
 */

export type Cta = {
  label: string;
  href: string;
  /** Visual weight. "primary" = filled accent, "secondary" = outline/ghost. */
  variant: "primary" | "secondary";
};

/** A cell in the comparison table. "unknown" (?) = not yet verified. */
export type Verdict = "yes" | "partial" | "no" | "unknown";

/** A competitor column. `id` is referenced by each row's `verdicts` map. */
export type Competitor = {
  id: string;
  name: string;
  /** Sub-label under the column name (product line). */
  note?: string;
  /** Highlight this column (our product). */
  highlight?: boolean;
};

export type ComparisonRow = {
  label: string;
  /** Verdict per competitor id. Missing id => rendered as "unknown". */
  verdicts: Record<string, Verdict>;
  /** Optional clarifying note shown under the row label. */
  note?: string;
  /** When true, the vendors are equivalent — render neutrally ("tie"). */
  tie?: boolean;
  /** When true, this is one of our differentiated rows — emphasize visually. */
  emphasize?: boolean;
};

export type PricingTier = {
  name: string;
  /** Display price string (kept as a string so "Free"/"Custom" work too). */
  price: string;
  /** Sub-label under the price, e.g. cadence or "placeholder". */
  priceNote?: string;
  tagline: string;
  features: string[];
  cta: Cta;
  /** Highlight this tier visually. */
  featured?: boolean;
};

export type FeatureCard = {
  title: string;
  body: string;
};

export type TriptychStep = {
  step: string;
  title: string;
  body: string;
  /** Brand visual for this step (generated from the logo via Vertex AI). */
  image: string;
};

export type SiteContent = typeof en;

export const en = {
  brand: {
    name: "Takoia",
    tagline: "Own your AI expertise. Resell it.",
    /** Octopus = "tako" in Japanese. Minimal tech / Japanese aesthetic. */
    motif: "tako (octopus)",
    /** Brand assets (the logo, plus visuals generated from it via Vertex AI). */
    assets: {
      logo: "/brand/takoia-logo.png", // full emblem + "Takoia" wordmark
      mark: "/brand/takoia-mark.png", // emblem only (no text)
      hero: "/brand/hero.png",
    },
  },

  // Accessibility / screen-reader labels (alt text, aria-labels).
  a11y: {
    heroImageAlt: "Takoia — luminous octopus emblem in the brand's Japanese ink style",
    primaryNav: "Primary",
    home: "Takoia — home",
    language: "Language",
    languageMenu: "Choose a language",
  },

  nav: {
    links: [
      { label: "Problem", href: "#problem" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Compare", href: "#compare" },
      { label: "Pricing", href: "#pricing" },
    ],
    cta: { label: "View on GitHub", href: "https://github.com/takoia", variant: "secondary" } as Cta,
  },

  // 1) HERO
  hero: {
    eyebrow: "Open-source · self-hosted · permanent memory",
    h1: "Own your AI expertise. Resell it.",
    // Split headline so the accent half can carry the gradient in the UI.
    headline: { lead: "Own your AI expertise.", accent: "Resell it." },
    subhead:
      "Takoia is a customizable AI-agent platform you run on your own machine — even a Mac Mini at home. It keeps a permanent memory of your expertise and lets you resell access to it, agent-to-agent or human-to-human.",
    pitch:
      "Others rent you agents that live in their cloud. Takoia runs on hardware you own, remembers what it learns, and lets you sell access to it.",
    ctas: [
      { label: "View on GitHub", href: "https://github.com/takoia", variant: "primary" },    ] as Cta[],
  },

  // 2) THE PROBLEM
  problem: {
    eyebrow: "The problem",
    title: "You rent your agents. The expertise is never yours.",
    body: "Today you rent agents from the hyperscalers. They run in their cloud (lock-in), cost the same every single day, and the expertise you build never belongs to you — you can't take it with you, host it yourself, or monetize it.",
    points: [
      { label: "Cloud lock-in", body: "Your agents live in someone else's data center, on their terms." },
      { label: "A meter that never stops", body: "You pay the same every day, whether the work compounds in value or not." },
      { label: "Expertise you can't keep", body: "What the agent learns stays trapped — not portable, not sellable, not yours." },
    ],
  },

  // 3) THE KILLER FEATURE — triptych
  triptych: {
    eyebrow: "Why Takoia",
    title: "Personalize it, let it remember, resell access.",
    steps: [
      {
        step: "01",
        title: "Personalize & run locally",
        body: "Specialize an agent on your own data. It runs on your hardware — a server, a laptop, or a Mac Mini at home. Nothing leaves your perimeter.",
        image: "/brand/step-local.png",
      },
      {
        step: "02",
        title: "Remember (ICM)",
        body: "Permanent memory: the agent accumulates real expertise over time, and that expertise becomes an asset you own.",
        image: "/brand/step-memory.png",
      },
      {
        step: "03",
        title: "Connect & resell access",
        body: "Wired to every MCP connector and notification channel, and exposed as a callable service over open A2A/MCP standards — consumable agent-to-agent or human-to-human.",
        image: "/brand/step-connect.png",
      },
    ] as TriptychStep[],
  },

  // 4) FEATURES — grid of 7
  features: {
    eyebrow: "What you get",
    title: "A platform you own, end to end.",
    cards: [
      {
        title: "Run it on hardware you own",
        body: "Even a Mac Mini at home. Pay for the box once, not per token.",
      },
      {
        title: "Resell access to your instance",
        body: "Turn your owned expertise into recurring revenue.",
      },
      {
        title: "Permanent memory (ICM)",
        body: "Expertise that compounds with every task.",
      },
      {
        title: "Local install & data sovereignty",
        body: "Your data stays with you (GDPR / NIS2 friendly).",
      },
      {
        title: "Every MCP connector",
        body: "Plug into the systems you already use.",
      },
      {
        title: "Every notification channel",
        body: "Discord, WhatsApp, SMS.",
      },
      {
        title: "Open-source & auditable",
        body: "Inspect every guardrail.",
      },
    ] as FeatureCard[],
  },

  // 5) COMPARISON
  comparison: {
    eyebrow: "Honest comparison",
    title: "Takoia vs. the agent platforms",
    // Competitor columns. Add/remove here — the table renders from this list.
    competitors: [
      { id: "takoia", name: "Takoia", highlight: true },
      { id: "google", name: "Google", note: "Gemini Enterprise Agent Platform" },
      { id: "microsoft", name: "Microsoft", note: "Copilot / Copilot Studio" },
      { id: "openclaw", name: "OpenClaw" },
      { id: "hermes", name: "Hermes" },
    ] as Competitor[],
    legend: {
      yes: "Yes",
      partial: "Partial",
      no: "No",
      unknown: "To verify",
    },
    tieLabel: "tie",
    footnote:
      "OpenClaw and Hermes are self-hosted, open-source platforms, so they share Takoia's sovereignty and ownership traits (shown ✓) — we don't claim those as exclusive. Rows that depend on a specific product feature — built-in resale, multi-model, permanent memory, MCP connectors — are left “to verify” (?) for them rather than assumed. Tie rows are capabilities the cloud platforms also have.",
    rows: [
      {
        label: "Local / on-prem install per user",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "Runs on hardware you own (e.g. a Mac Mini at home)",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "Resell access to your own instance",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "unknown", hermes: "unknown" },
        emphasize: true,
        note: "Self-hosting alone doesn't imply a built-in resale / billing capability — left “to verify” for OpenClaw and Hermes.",
      },
      {
        label: "Data sovereignty (never leaves your perimeter)",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "Open-source / auditable",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "You own your expertise (portable)",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "No usage meter (no per-token / per-conversation billing)",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "Cost incentives aligned with you",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
        note: "Own the box; local models ≈ near-zero marginal cost. (RTK also trims shell output for execution agents.) Google and Microsoft bill per token; self-hosted peers also avoid the meter.",
      },
      {
        label: "No cloud / OS lock-in",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
      },
      {
        label: "Multi-model (any AI)",
        verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" },
        tie: true,
      },
      {
        label: "Permanent memory",
        verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" },
        tie: true,
        note: "Ours is local / sovereign; the capability itself is not exclusive.",
      },
      {
        label: "MCP connectors",
        verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" },
        tie: true,
      },
    ] as ComparisonRow[],
  },

  // 6) HOW IT WORKS
  howItWorks: {
    eyebrow: "How it works",
    title: "One agent loop. Memory in, value out.",
    loop: [
      { name: "Recall memory (ICM)", body: "Load everything the agent has learned so far." },
      { name: "Analyze", body: "Read the task against that accumulated context." },
      { name: "Decide", body: "Choose the next action within your guardrails." },
      { name: "Act", body: "Call MCP connectors, run tools, reach any channel." },
      { name: "Deliver", body: "Return the result, agent-to-agent or human-to-human." },
      { name: "Store what it learned", body: "Write new expertise back to permanent memory." },
    ],
    closer: "Install on a Mac Mini in minutes, expose access, and resell it.",
  },

  // 7) PRICING
  pricing: {
    eyebrow: "Pricing",
    title: "A flat license on hardware you own.",
    // CRITICAL: no usage meter, anywhere.
    meterPromise: "No usage meter. Ever.",
    popularLabel: "Most popular",
    tiers: [
      {
        name: "Community",
        price: "Free",
        tagline:
          "Self-host anywhere you own: laptop, server, or a Mac Mini at home. Full agent + permanent memory (ICM). No usage metering, ever. Free for individuals and teams up to 20.",
        features: [
          "Full agent + permanent memory (ICM)",
          "Self-host on any hardware you own",
          "No usage metering, ever",
          "Individuals and teams up to 20",
        ],
        cta: { label: "Get started on GitHub", href: "https://github.com/takoia", variant: "secondary" },
      },
      {
        name: "Pro",
        price: "$49",
        priceNote: "/ month per instance · placeholder",
        featured: true,
        tagline:
          "Everything in Community, plus marketplace listing, built-in access & billing to resell your agents, and priority support.",
        features: [
          "Marketplace listing for your agents",
          "Built-in access & billing to resell",
          "Resell on your own infra for free — you keep your revenue",
          "Managed billing optional: single-digit fee (~8–10%) vs 15–30% on typical marketplaces",
          "Priority support",
        ],
        cta: { label: "Start selling access", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Pro", variant: "primary" },
      },
      {
        name: "Enterprise",
        price: "Custom",
        tagline:
          "Everything in Pro, plus SLA, security-patch cadence, SSO, audit logs, GDPR/NIS2 compliance support, and deployment assistance. For regulated teams and orgs over 20 seats.",
        features: [
          "SLA & security-patch cadence",
          "SSO and audit logs",
          "GDPR / NIS2 compliance support",
          "Deployment assistance",
          "For regulated teams and 20+ seats",
        ],
        cta: { label: "Talk to us", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Enterprise", variant: "secondary" },
      },
    ] as PricingTier[],
    footnote:
      "Unlike $20–30/user/month cloud copilots with a second usage meter on top, Takoia is a flat, predictable license on hardware you already own.",
  },

  // 8) FINAL CTA + FOOTER
  finalCta: {
    title: "Run it. Own it. Resell it.",
    body: "Others rent you agents that live in their cloud. Takoia runs on hardware you own, remembers what it learns, and lets you sell access to it.",
    ctas: [
      { label: "View on GitHub", href: "https://github.com/takoia", variant: "primary" },    ] as Cta[],
  },

  footer: {
    blurb: "Open source. A customizable AI-agent platform you self-host locally, with permanent memory. The full source lives on GitHub — inspect it, fork it, run it yourself.",
    columns: [
      {
        title: "Open source",
        links: [
          { label: "github.com/takoia", href: "https://github.com/takoia" },
          { label: "Landing page repo", href: "https://github.com/takoia/landing-page" },
          { label: "License", href: "https://github.com/takoia" },
        ],
      },
      {
        title: "Contact",
        links: [{ label: "contact@rtk-ai.app", href: "mailto:contact@rtk-ai.app" }],
      },
    ],
    license: "Open source · github.com/takoia · © Takoia / RTK.",
  },
};
