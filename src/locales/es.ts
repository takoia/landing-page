import type { SiteContent } from "../content";

/**
 * Spanish dictionary. Mirrors the English shape (`SiteContent`).
 * Only visible copy and display prices are translated — hrefs, image paths,
 * competitor ids and verdicts stay identical to the canonical `en` dictionary.
 */
export const es: SiteContent = {
  brand: {
    name: "Takoia",
    tagline: "Posee tu experiencia en IA. Revéndela.",
    motif: "tako (pulpo)",
    assets: {
      logo: "/brand/takoia-logo.png",
      mark: "/brand/takoia-mark.png",
      hero: "/brand/hero.png",
    },
  },

  nav: {
    links: [
      { label: "Problema", href: "#problem" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Características", href: "#features" },
      { label: "Comparar", href: "#compare" },
      { label: "Precios", href: "#pricing" },
    ],
    cta: { label: "Ver en GitHub", href: "https://github.com/takoia", variant: "secondary" },
  },

  hero: {
    eyebrow: "Código abierto · autoalojado · memoria permanente",
    h1: "Posee tu experiencia en IA. Revéndela.",
    subhead:
      "Takoia es una plataforma de agentes de IA personalizable que ejecutas en tu propia máquina — incluso en un Mac Mini en casa. Guarda una memoria permanente de tu experiencia y te permite revender el acceso a ella, de agente a agente o de persona a persona.",
    pitch:
      "Otros te alquilan agentes que viven en su nube. Takoia se ejecuta en hardware que posees, recuerda lo que aprende y te permite vender acceso a ello.",
    ctas: [
      { label: "Ver en GitHub", href: "https://github.com/takoia", variant: "primary" },    ],
  },

  problem: {
    eyebrow: "El problema",
    title: "Alquilas tus agentes. La experiencia nunca es tuya.",
    body: "Hoy alquilas agentes a los hiperescaladores. Se ejecutan en su nube (dependencia), cuestan lo mismo cada día, y la experiencia que construyes nunca te pertenece — no puedes llevártela, alojarla tú mismo ni monetizarla.",
    points: [
      { label: "Dependencia de la nube", body: "Tus agentes viven en el centro de datos de otro, bajo sus condiciones." },
      { label: "Un contador que nunca para", body: "Pagas lo mismo cada día, gane valor o no el trabajo acumulado." },
      { label: "Experiencia que no puedes conservar", body: "Lo que el agente aprende queda atrapado — ni portable, ni vendible, ni tuyo." },
    ],
  },

  triptych: {
    eyebrow: "Por qué Takoia",
    title: "Personalízalo, deja que recuerde, revende el acceso.",
    steps: [
      {
        step: "01",
        title: "Personaliza y ejecuta en local",
        body: "Especializa un agente con tus propios datos. Se ejecuta en tu hardware — un servidor, un portátil o un Mac Mini en casa. Nada sale de tu perímetro.",
        image: "/brand/step-local.png",
      },
      {
        step: "02",
        title: "Recuerda (ICM)",
        body: "Memoria permanente: el agente acumula experiencia real con el tiempo, y esa experiencia se convierte en un activo que posees.",
        image: "/brand/step-memory.png",
      },
      {
        step: "03",
        title: "Conecta y revende el acceso",
        body: "Conectado a todos los conectores MCP y canales de notificación, y expuesto como un servicio invocable sobre estándares abiertos A2A/MCP — consumible de agente a agente o de persona a persona.",
        image: "/brand/step-connect.png",
      },
    ],
  },

  features: {
    eyebrow: "Lo que obtienes",
    title: "Una plataforma que posees, de principio a fin.",
    cards: [
      { title: "Ejecútalo en hardware que posees", body: "Incluso un Mac Mini en casa. Paga el equipo una vez, no por token." },
      { title: "Revende el acceso a tu instancia", body: "Convierte tu experiencia en ingresos recurrentes." },
      { title: "Memoria permanente (ICM)", body: "Experiencia que se acumula con cada tarea." },
      { title: "Instalación local y soberanía de datos", body: "Tus datos se quedan contigo (compatible con RGPD / NIS2)." },
      { title: "Todos los conectores MCP", body: "Conéctate a los sistemas que ya usas." },
      { title: "Todos los canales de notificación", body: "Discord, WhatsApp, SMS." },
      { title: "Código abierto y auditable", body: "Inspecciona cada salvaguarda." },
    ],
  },

  comparison: {
    eyebrow: "Comparación honesta",
    title: "Takoia frente a las plataformas de agentes",
    competitors: [
      { id: "takoia", name: "Takoia", highlight: true },
      { id: "google", name: "Google", note: "Gemini Enterprise Agent Platform" },
      { id: "microsoft", name: "Microsoft", note: "Copilot / Copilot Studio" },
      { id: "openclaw", name: "OpenClaw" },
      { id: "hermes", name: "Hermes" },
    ],
    legend: {
      yes: "Sí",
      partial: "Parcial",
      no: "No",
      unknown: "Por verificar",
    },
    footnote:
      "OpenClaw y Hermes son plataformas autoalojadas y de código abierto, así que comparten los rasgos de soberanía y propiedad de Takoia (mostrados con ✓) — no los presentamos como exclusivos. Las filas que dependen de una funcionalidad de producto específica — reventa integrada, multimodelo, memoria permanente, conectores MCP — se dejan «por verificar» (?) en lugar de darlas por supuestas. Las filas de empate son capacidades que las plataformas en la nube también tienen.",
    rows: [
      { label: "Instalación local / on-premise por usuario", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Se ejecuta en hardware que posees (p. ej. un Mac Mini en casa)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      {
        label: "Revender el acceso a tu propia instancia",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "unknown", hermes: "unknown" },
        emphasize: true,
        note: "Autoalojar por sí solo no implica una capacidad integrada de reventa / facturación — se deja «por verificar» para OpenClaw y Hermes.",
      },
      { label: "Soberanía de datos (nunca sale de tu perímetro)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Código abierto / auditable", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Posees tu experiencia (portable)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Sin contador de uso (sin facturación por token / por conversación)", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      {
        label: "Incentivos de coste alineados contigo",
        verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" },
        emphasize: true,
        note: "Posees el equipo; los modelos locales ≈ coste marginal casi nulo. (RTK también recorta la salida de shell de los agentes de ejecución.) Google y Microsoft facturan por token; los pares autoalojados también evitan el contador.",
      },
      { label: "Sin dependencia de nube / SO", verdicts: { takoia: "yes", google: "no", microsoft: "no", openclaw: "yes", hermes: "yes" }, emphasize: true },
      { label: "Multimodelo (cualquier IA)", verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" }, tie: true },
      {
        label: "Memoria permanente",
        verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" },
        tie: true,
        note: "La nuestra es local / soberana; la capacidad en sí no es exclusiva.",
      },
      { label: "Conectores MCP", verdicts: { takoia: "yes", google: "yes", microsoft: "yes", openclaw: "unknown", hermes: "unknown" }, tie: true },
    ],
  },

  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Un bucle de agente. Entra memoria, sale valor.",
    loop: [
      { name: "Recupera memoria (ICM)", body: "Carga todo lo que el agente ha aprendido hasta ahora." },
      { name: "Analiza", body: "Lee la tarea frente a ese contexto acumulado." },
      { name: "Decide", body: "Elige la siguiente acción dentro de tus salvaguardas." },
      { name: "Actúa", body: "Llama a conectores MCP, ejecuta herramientas, alcanza cualquier canal." },
      { name: "Entrega", body: "Devuelve el resultado, de agente a agente o de persona a persona." },
      { name: "Guarda lo aprendido", body: "Escribe la nueva experiencia de vuelta en la memoria permanente." },
    ],
    closer: "Instálalo en un Mac Mini en minutos, expón el acceso y revéndelo.",
  },

  pricing: {
    eyebrow: "Precios",
    title: "Una licencia plana en hardware que posees.",
    meterPromise: "Sin contador de uso. Nunca.",
    tiers: [
      {
        name: "Community",
        price: "Gratis",
        tagline:
          "Autoaloja donde poseas: portátil, servidor o un Mac Mini en casa. Agente completo + memoria permanente (ICM). Sin medición de uso, nunca. Gratis para particulares y equipos de hasta 20.",
        features: [
          "Agente completo + memoria permanente (ICM)",
          "Autoalojamiento en cualquier hardware que poseas",
          "Sin medición de uso, nunca",
          "Particulares y equipos de hasta 20",
        ],
        cta: { label: "Empezar en GitHub", href: "https://github.com/takoia", variant: "secondary" },
      },
      {
        name: "Pro",
        price: "$49",
        priceNote: "/ mes por instancia · provisional",
        featured: true,
        tagline:
          "Todo lo de Community, más listado en el marketplace, acceso y facturación integrados para revender tus agentes, y soporte prioritario.",
        features: [
          "Listado en el marketplace para tus agentes",
          "Acceso y facturación integrados para revender",
          "Revende en tu propia infraestructura gratis — te quedas con tus ingresos",
          "Facturación gestionada opcional: comisión de un solo dígito (~8–10%) frente al 15–30% de los marketplaces típicos",
          "Soporte prioritario",
        ],
        cta: { label: "Empezar a vender acceso", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Pro", variant: "primary" },
      },
      {
        name: "Enterprise",
        price: "A medida",
        tagline:
          "Todo lo de Pro, más SLA, cadencia de parches de seguridad, SSO, registros de auditoría, soporte de cumplimiento RGPD/NIS2 y asistencia de despliegue. Para equipos regulados y organizaciones de más de 20 asientos.",
        features: [
          "SLA y cadencia de parches de seguridad",
          "SSO y registros de auditoría",
          "Soporte de cumplimiento RGPD / NIS2",
          "Asistencia de despliegue",
          "Para equipos regulados y más de 20 asientos",
        ],
        cta: { label: "Hablemos", href: "mailto:contact@rtk-ai.app?subject=Takoia%20Enterprise", variant: "secondary" },
      },
    ],
    footnote:
      "A diferencia de los copilotos en la nube de 20–30 $/usuario/mes con un segundo contador de uso encima, Takoia es una licencia plana y predecible en hardware que ya posees.",
  },

  finalCta: {
    title: "Ejecútalo. Poséelo. Revéndelo.",
    body: "Otros te alquilan agentes que viven en su nube. Takoia se ejecuta en hardware que posees, recuerda lo que aprende y te permite vender acceso a ello.",
    ctas: [
      { label: "Ver en GitHub", href: "https://github.com/takoia", variant: "primary" },    ],
  },

  footer: {
    blurb: "Código abierto. Una plataforma de agentes de IA personalizable que autoalojas en local, con memoria permanente. Todo el código está en GitHub — inspecciónalo, bifúrcalo y ejecútalo tú mismo.",
    columns: [
      {
        title: "Código abierto",
        links: [
          { label: "github.com/takoia", href: "https://github.com/takoia" },
          { label: "Repo de la landing", href: "https://github.com/takoia/landing-page" },
          { label: "Licencia", href: "https://github.com/takoia" },
        ],
      },
      {
        title: "Contacto",
        links: [{ label: "contact@rtk-ai.app", href: "mailto:contact@rtk-ai.app" }],
      },
    ],
    license: "Código abierto · github.com/takoia · © Takoia / RTK.",
  },
};
