// Internationalization strings EN/ES

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export const I18N = {
  en: {
    nav: {
      home: "Home", distribution: "Distribution", logistics: "Logistics",
      gov: "Government", brands: "Our Brands", quote: "Request a Quote", contact: "Contact",
    },
    hero: {
      eyebrow: "DISTRIBUTION · LOGISTICS · GOVERNMENT SUPPLY",
      title_a: "Mission-critical supply,",
      title_b: "from Miami to the Americas.",
      sub: "For 20+ years, Kobe Trading USA has connected leading manufacturers with government agencies, defense contractors, and commercial distributors across the United States and Latin America.",
      cta1: "Request a Quote",
      cta2: "Explore our Brands",
      chip1: "SAM.gov Active",
      chip2: "10,000 sq ft · Doral, FL",
      chip3: "Bilingual Team",
    },
    services: {
      eyebrow: "WHAT WE DO",
      title: "Three capabilities. One trusted partner.",
      sub: "From authorized brand distribution to in-bond warehousing to federal procurement — we handle the full supply chain so you don't have to.",
    },
    brands: {
      eyebrow: "MANUFACTURER PARTNERS",
      title: "Brands we carry.",
      sub: "We are authorized distributors and dealers for leading manufacturers across defense, professional audio, lighting, safety, IAQ, cleaning, and building materials. Contact us for full product availability.",
      viewAll: "View full catalog",
      authorized: "Authorized Partner",
      filterAll: "All Categories",
    },
    industries: {
      eyebrow: "INDUSTRIES WE SERVE",
      title: "Built for buyers who can't compromise.",
      sub: "Whether you're issuing an RFQ for a federal agency or consolidating a container for LATAM, our team knows your workflow.",
    },
    latam: {
      eyebrow: "COVERAGE MAP",
      title: "Americas-wide distribution from our Miami hub.",
      sub: "FOB Miami with consolidated shipping to the entire Latin American region. Bilingual documentation, customs coordination, and direct-to-destination logistics.",
      countries: "15+ countries served",
      hub: "Miami, FL — Primary Hub",
    },
    trust: {
      eyebrow: "WHY KOBE",
      title: "The credentials buyers ask for.",
      sub: "Two decades building relationships with manufacturers, agencies, and distributors — and the paperwork to back it up.",
    },
    cta: {
      title: "Ready to get started?",
      sub: "Request a wholesale quote, schedule a warehouse tour, or discuss your federal requirement.",
      primary: "Request a Quote",
      secondary: "Contact our team",
    },
    footer: {
      tagline: "Your trusted partner for distribution, logistics, and government supply since 2015.",
      address: "7384 NW 56th St, Miami, FL 33166",
      hours: "Mon–Fri · 9AM–5PM EST",
      dist: "Distribution", services: "Services", company: "Company", contact: "Contact",
    },
    quote: {
      title: "Request a Quote",
      sub: "Tell us what you need — our team responds within 24 business hours.",
      name: "Full Name", company: "Company", email: "Business Email", phone: "Phone",
      type: "Inquiry Type", types: ["Wholesale Distribution", "Government / Agency", "Logistics & Warehousing", "LATAM Export", "Other"],
      message: "What are you looking for?", submit: "Send Inquiry",
      success: "Thanks — we'll be in touch within 24 business hours.",
    },
    pages: {
      distribution: {
        eyebrow: "WHOLESALE DISTRIBUTION",
        title: "11 verticals. Competitive FOB pricing.",
        body: "Electronics, pro audio, lighting, safety equipment, fans, generators, measuring instruments, building materials, road aggregates, musical instruments, and mil-spec connectors. Wholesale distribution with competitive FOB pricing for distributors and resellers across the Americas.",
      },
      logistics: {
        eyebrow: "LOGISTICS & WAREHOUSING",
        title: "10,000 sq ft in Doral, FL.",
        body: "Secure cargo consolidation, palletization, in-bond storage, and direct-to-agency/B2B delivery. Bilingual documentation, customs coordination, and direct-to-destination logistics across Latin America.",
      },
      gov: {
        eyebrow: "GOVERNMENT CONTRACTING",
        title: "SAM.gov active. Rapid procurement.",
        body: "SAM.gov registered and active with multiple NAICS codes. Ready to supply federal, state, and local agencies with rapid procurement, DFARS-capable sourcing, and AS9100 supplier network.",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio", distribution: "Distribución", logistics: "Logística",
      gov: "Gobierno", brands: "Nuestras Marcas", quote: "Cotización", contact: "Contacto",
    },
    hero: {
      eyebrow: "DISTRIBUCIÓN · LOGÍSTICA · SUMINISTRO GUBERNAMENTAL",
      title_a: "Suministro de misión crítica,",
      title_b: "desde Miami a las Américas.",
      sub: "Por más de 20 años, Kobe Trading USA ha conectado a fabricantes líderes con agencias gubernamentales, contratistas de defensa y distribuidores comerciales en los Estados Unidos y Latinoamérica.",
      cta1: "Solicitar Cotización",
      cta2: "Ver Nuestras Marcas",
      chip1: "SAM.gov Activo",
      chip2: "10,000 sq ft · Doral, FL",
      chip3: "Equipo Bilingüe",
    },
    services: {
      eyebrow: "QUÉ HACEMOS",
      title: "Tres capacidades. Un solo socio de confianza.",
      sub: "Desde distribución autorizada de marcas hasta almacenaje in-bond y procura federal — manejamos toda la cadena de suministro para que tú no tengas que hacerlo.",
    },
    brands: {
      eyebrow: "SOCIOS FABRICANTES",
      title: "Marcas que distribuimos.",
      sub: "Somos distribuidores autorizados de fabricantes líderes en defensa, audio profesional, iluminación, seguridad, calidad de aire, limpieza y materiales de construcción. Contáctanos para disponibilidad completa.",
      viewAll: "Ver catálogo completo",
      authorized: "Socio Autorizado",
      filterAll: "Todas las Categorías",
    },
    industries: {
      eyebrow: "INDUSTRIAS QUE SERVIMOS",
      title: "Diseñado para compradores que no pueden comprometer.",
      sub: "Ya sea que emitas un RFQ para una agencia federal o consolides un contenedor para LATAM, nuestro equipo conoce tu flujo de trabajo.",
    },
    latam: {
      eyebrow: "MAPA DE COBERTURA",
      title: "Distribución en toda América desde nuestro hub de Miami.",
      sub: "FOB Miami con envíos consolidados a toda la región latinoamericana. Documentación bilingüe, coordinación aduanal y logística directa al destino.",
      countries: "15+ países servidos",
      hub: "Miami, FL — Hub Principal",
    },
    trust: {
      eyebrow: "POR QUÉ KOBE",
      title: "Las credenciales que los compradores piden.",
      sub: "Dos décadas construyendo relaciones con fabricantes, agencias y distribuidores — y el papeleo para respaldarlo.",
    },
    cta: {
      title: "¿Listo para empezar?",
      sub: "Solicita una cotización mayorista, programa una visita a la bodega o habla de tu requerimiento federal.",
      primary: "Solicitar Cotización",
      secondary: "Contactar al equipo",
    },
    footer: {
      tagline: "Tu socio de confianza para distribución, logística y suministro gubernamental desde 2015.",
      address: "7384 NW 56th St, Miami, FL 33166",
      hours: "Lun–Vie · 9AM–5PM EST",
      dist: "Distribución", services: "Servicios", company: "Empresa", contact: "Contacto",
    },
    quote: {
      title: "Solicitar Cotización",
      sub: "Cuéntanos qué necesitas — nuestro equipo responde en 24 horas hábiles.",
      name: "Nombre Completo", company: "Empresa", email: "Email Corporativo", phone: "Teléfono",
      type: "Tipo de Consulta", types: ["Distribución Mayorista", "Gobierno / Agencia", "Logística & Almacenaje", "Exportación LATAM", "Otro"],
      message: "¿Qué estás buscando?", submit: "Enviar Consulta",
      success: "Gracias — te contactaremos en 24 horas hábiles.",
    },
    pages: {
      distribution: {
        eyebrow: "DISTRIBUCIÓN MAYORISTA",
        title: "11 verticales. Precios FOB competitivos.",
        body: "Electrónica, audio pro, iluminación, seguridad, ventiladores, generadores, instrumentos de medición, materiales de construcción, agregados viales, instrumentos musicales y conectores mil-spec. Distribución mayorista con precios FOB competitivos para distribuidores y revendedores en toda América.",
      },
      logistics: {
        eyebrow: "LOGÍSTICA & ALMACENAJE",
        title: "10,000 sq ft en Doral, FL.",
        body: "Consolidación de carga segura, paletización, almacenamiento in-bond y entrega directa a agencias y B2B. Documentación bilingüe, coordinación aduanal y logística directa al destino en toda Latinoamérica.",
      },
      gov: {
        eyebrow: "CONTRATACIÓN GUBERNAMENTAL",
        title: "SAM.gov activo. Procura rápida.",
        body: "Registrados y activos en SAM.gov con múltiples códigos NAICS. Listos para suministrar a agencias federales, estatales y locales con procura rápida, sourcing DFARS y red de proveedores AS9100.",
      },
    },
  },
} as const;

export type TranslationSet = typeof I18N.en;

export function getTranslations(lang: Locale): TranslationSet {
  return I18N[lang] as TranslationSet;
}
