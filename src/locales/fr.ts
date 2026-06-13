import type { SiteContent } from "../content";

/**
 * French dictionary. Mirrors the English shape (`SiteContent`).
 * Only visible copy and display prices are translated — hrefs, image paths,
 * competitor ids and verdicts stay identical to the canonical `en` dictionary.
 */
export const fr: SiteContent = {
  brand: {
    name: "Takoia",
    tagline: "Possédez votre expertise IA. Revendez-la.",
    motif: "tako (poulpe)",
    assets: {
      logo: "/brand/takoia-logo.png",
      mark: "/brand/takoia-mark.png",
      hero: "/brand/hero.png",
    },
  },

  a11y: {
    heroImageAlt: "Takoia — capture d'écran du constructeur d'agents (interface en nœuds)",
    primaryNav: "Principale",
    home: "Takoia — accueil",
    language: "Langue",
    languageMenu: "Choisir une langue",
  },

  nav: {
    links: [
      { label: "Problème", href: "#problem" },
      { label: "Comment ça marche", href: "#how-it-works" },
      { label: "Fonctionnalités", href: "#features" },
      { label: "Comparer", href: "#compare" },
      { label: "Tarifs", href: "#pricing" },
    ],
    cta: { label: "Voir sur GitHub", href: "https://github.com/takoia", variant: "secondary" },
  },

  hero: {
    eyebrow: "Open source · auto-hébergé · mémoire permanente",
    h1: "Possédez votre expertise IA. Revendez-la.",
    headline: { lead: "Possédez votre expertise IA.", accent: "Revendez-la." },
    subhead:
      "Takoia est une plateforme d'agents IA personnalisable que vous exécutez sur votre propre machine — même un Mac Mini à la maison. Elle conserve une mémoire permanente de votre expertise et vous permet d'en revendre l'accès, d'agent à agent ou d'humain à humain.",
    pitch:
      "Les autres vous louent des agents qui vivent dans leur cloud. Takoia tourne sur du matériel que vous possédez, retient ce qu'il apprend et vous laisse en vendre l'accès.",
    ctas: [
      { label: "Voir sur GitHub", href: "https://github.com/takoia", variant: "primary" },    ],
  },

  problem: {
    eyebrow: "Le problème",
    title: "Vous louez vos agents. L'expertise n'est jamais la vôtre.",
    body: "Aujourd'hui, vous louez des agents aux hyperscalers. Ils tournent dans leur cloud (verrouillage), coûtent la même chose chaque jour, et l'expertise que vous construisez ne vous appartient jamais — impossible de l'emporter, de l'héberger vous-même ou de la monétiser.",
    points: [
      { label: "Verrouillage cloud", body: "Vos agents vivent dans le centre de données d'un autre, à ses conditions." },
      { label: "Un compteur qui ne s'arrête jamais", body: "Vous payez pareil chaque jour, que le travail prenne de la valeur ou non." },
      { label: "Une expertise que vous ne pouvez pas garder", body: "Ce que l'agent apprend reste prisonnier — ni portable, ni vendable, ni à vous." },
    ],
  },

  triptych: {
    eyebrow: "Pourquoi Takoia",
    title: "Personnalisez-le, laissez-le se souvenir, revendez l'accès.",
    steps: [
      {
        step: "01",
        title: "Personnalisez et exécutez en local",
        body: "Spécialisez un agent sur vos propres données. Il tourne sur votre matériel — un serveur, un ordinateur portable ou un Mac Mini à la maison. Rien ne quitte votre périmètre.",
        image: "/brand/step-local.png",
      },
      {
        step: "02",
        title: "Mémorise (ICM)",
        body: "Mémoire permanente : l'agent accumule une véritable expertise au fil du temps, et cette expertise devient un actif que vous possédez.",
        image: "/brand/step-memory.png",
      },
      {
        step: "03",
        title: "Connectez et revendez l'accès",
        body: "Relié à tous les connecteurs MCP et canaux de notification, et exposé comme un service appelable via les standards ouverts A2A/MCP — consommable d'agent à agent ou d'humain à humain.",
        image: "/brand/step-connect.png",
      },
    ],
  },

  features: {
    eyebrow: "Ce que vous obtenez",
    title: "Une plateforme que vous possédez, de bout en bout.",
    cards: [
      { title: "Exécutez-le sur du matériel que vous possédez", body: "Même un Mac Mini à la maison. Payez la machine une fois, pas au token." },
      { title: "Revendez l'accès à votre instance", body: "Transformez votre expertise en revenus récurrents." },
      { title: "Mémoire permanente (ICM)", body: "Une expertise qui s'accumule à chaque tâche." },
      { title: "Installation locale et souveraineté des données", body: "Vos données restent chez vous (compatible RGPD / NIS2)." },
      { title: "Tous les connecteurs MCP", body: "Branchez-vous aux systèmes que vous utilisez déjà." },
      { title: "Tous les canaux de notification", body: "Discord, WhatsApp, SMS." },
      { title: "Open source et auditable", body: "Inspectez chaque garde-fou." },
    ],
  },

  comparison: {
    eyebrow: "Comparaison honnête",
    title: "Takoia face aux plateformes d'agents",
    competitors: [
      { id: "takoia", name: "Takoia", highlight: true },
      { id: "google", name: "Google", note: "Gemini Enterprise Agent Platform" },
      { id: "microsoft", name: "Microsoft", note: "Copilot / Copilot Studio" },
      { id: "openclaw", name: "OpenClaw" },
      { id: "hermes", name: "Hermes" },
    ],
    legend: {
      yes: "Oui",
      partial: "Partiel",
      no: "Non",
      unknown: "À vérifier",
    },
    tieLabel: "égalité",
    footnote:
      "OpenClaw et Hermes sont des plateformes auto-hébergées et open source : elles partagent donc les atouts de souveraineté et de propriété de Takoia (indiqués par ✓) — nous ne les présentons pas comme exclusifs. Les lignes qui dépendent d'une fonctionnalité produit spécifique — revente intégrée, multi-modèle, mémoire permanente, connecteurs MCP — sont laissées « à vérifier » (?) plutôt que présumées. Les lignes à égalité sont des capacités que les plateformes cloud ont aussi.",
    rows: [
      { label: "Installation locale / on-premise par utilisateur", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Tourne sur du matériel que vous possédez (p. ex. un Mac Mini à la maison)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      {
        label: "Revendre l'accès à votre propre instance",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "unknown", hermes: "unknown" },
        emphasize: true,
        note: "L'auto-hébergement seul n'implique pas une capacité de revente / facturation intégrée — laissé « à vérifier » pour OpenClaw et Hermes.",
      },
      { label: "Souveraineté des données (ne quitte jamais votre périmètre)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Open source / auditable", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Vous possédez votre expertise (portable)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Pas de compteur d'usage (pas de facturation au token / à la conversation)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      {
        label: "Incitations de coût alignées avec vous",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
        note: "Vous possédez la machine ; les modèles locaux ≈ coût marginal quasi nul. (RTK réduit aussi la sortie shell des agents d'exécution.) Google et Microsoft facturent au token ; les pairs auto-hébergés évitent eux aussi le compteur.",
      },
      { label: "Pas de verrouillage cloud / OS", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Multi-modèle (toute IA)", verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" }, tie: true },
      {
        label: "Mémoire permanente",
        verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" },
        tie: true,
        note: "La nôtre est locale / souveraine ; la capacité elle-même n'est pas exclusive.",
      },
      { label: "Connecteurs MCP", verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" }, tie: true },
    ],
  },

  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Une boucle d'agent. La mémoire entre, la valeur sort.",
    loop: [
      { name: "Rappelle la mémoire (ICM)", body: "Charge tout ce que l'agent a appris jusqu'ici." },
      { name: "Analyse", body: "Lit la tâche à la lumière de ce contexte accumulé." },
      { name: "Décide", body: "Choisit la prochaine action dans le cadre de vos garde-fous." },
      { name: "Agit", body: "Appelle les connecteurs MCP, exécute des outils, atteint n'importe quel canal." },
      { name: "Livre", body: "Renvoie le résultat, d'agent à agent ou d'humain à humain." },
      { name: "Mémorise ce qu'il a appris", body: "Réécrit la nouvelle expertise dans la mémoire permanente." },
    ],
    closer: "Installez-le sur un Mac Mini en quelques minutes, exposez l'accès et revendez-le.",
  },

  pricing: {
    eyebrow: "Tarifs",
    title: "Une licence forfaitaire sur du matériel que vous possédez.",
    meterPromise: "Pas de compteur d'usage. Jamais.",
    popularLabel: "Le plus populaire",
    tiers: [
      {
        name: "Community",
        price: "Gratuit",
        tagline:
          "Auto-hébergez où vous voulez du moment que vous le possédez : ordinateur portable, serveur ou Mac Mini à la maison. Agent complet + mémoire permanente (ICM). Aucun compteur d'usage, jamais. Gratuit pour les particuliers et les équipes jusqu'à 20.",
        features: [
          "Agent complet + mémoire permanente (ICM)",
          "Auto-hébergement sur tout matériel que vous possédez",
          "Aucun compteur d'usage, jamais",
          "Particuliers et équipes jusqu'à 20",
        ],
        cta: { label: "Démarrer sur GitHub", href: "https://github.com/takoia", variant: "secondary" },
      },
      {
        name: "Pro",
        price: "$49",
        priceNote: "/ mois par instance · provisoire",
        featured: true,
        tagline:
          "Tout Community, plus la fiche sur la marketplace, l'accès et la facturation intégrés pour revendre vos agents, et le support prioritaire.",
        features: [
          "Fiche marketplace pour vos agents",
          "Accès et facturation intégrés pour revendre",
          "Revendez sur votre propre infra gratuitement — vous gardez vos revenus",
          "Facturation gérée en option : commission à un chiffre (~8–10 %) contre 15–30 % sur les marketplaces classiques",
          "Support prioritaire",
        ],
        cta: { label: "Commencer à vendre l'accès", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Pro", variant: "primary" },
      },
      {
        name: "Enterprise",
        price: "Sur mesure",
        tagline:
          "Tout Pro, plus SLA, cadence de correctifs de sécurité, SSO, journaux d'audit, accompagnement à la conformité RGPD/NIS2 et aide au déploiement. Pour les équipes régulées et les organisations de plus de 20 sièges.",
        features: [
          "SLA et cadence de correctifs de sécurité",
          "SSO et journaux d'audit",
          "Accompagnement conformité RGPD / NIS2",
          "Aide au déploiement",
          "Pour les équipes régulées et plus de 20 sièges",
        ],
        cta: { label: "Parlons-en", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Enterprise", variant: "secondary" },
      },
    ],
    footnote:
      "Contrairement aux copilotes cloud à 20–30 $/utilisateur/mois avec un second compteur d'usage par-dessus, Takoia est une licence forfaitaire et prévisible sur du matériel que vous possédez déjà.",
  },

  finalCta: {
    title: "Exécutez-le. Possédez-le. Revendez-le.",
    body: "Les autres vous louent des agents qui vivent dans leur cloud. Takoia tourne sur du matériel que vous possédez, retient ce qu'il apprend et vous laisse en vendre l'accès.",
    ctas: [
      { label: "Voir sur GitHub", href: "https://github.com/takoia", variant: "primary" },    ],
  },

  footer: {
    blurb: "Open source. Une plateforme d'agents IA personnalisable que vous auto-hébergez en local, avec mémoire permanente. Tout le code est sur GitHub — inspectez-le, forkez-le, exécutez-le vous-même.",
    columns: [
      {
        title: "Open source",
        links: [
          { label: "github.com/takoia", href: "https://github.com/takoia" },
          { label: "Dépôt de la landing page", href: "https://github.com/takoia/landing-page" },
          { label: "Licence", href: "https://github.com/takoia" },
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
