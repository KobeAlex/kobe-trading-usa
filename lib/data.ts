// Brand & content data for Kobe Trading USA

export const COMPANY = {
  name: "Kobe Trading USA",
  tagline_en: "Distribution. Logistics. Government Supply.",
  tagline_es: "Distribución. Logística. Suministro Gubernamental.",
  address: "7384 NW 56th St, Miami, FL 33166",
  phone: "(305) 863-7417",
  whatsapp: "(786) 679-6741",
  email: "info@kobetradingusa.com",
  hours: "Mon–Fri · 9AM–5PM EST",
  years: "20+",
  warehouse: "10,000",
  since: "2015",
} as const;

export interface FlagshipBrand {
  name: string;
  tier: string;
  category: string;
  founded: string;
  origin: string;
  certs: string[];
  description_en: string;
  description_es: string;
  tags: string[];
  color: string;
  url: string;
}

export const FLAGSHIP_BRANDS: FlagshipBrand[] = [
  {
    name: "Glenair",
    tier: "Authorized Distributor",
    category: "Mil-Spec Connectors",
    founded: "1956",
    origin: "Made in USA",
    certs: ["AS9100", "ISO 9001", "DFARS"],
    description_en: "World leader in mission-critical interconnect solutions. Mil-spec connectors, backshells, conduit systems, EMI shielding, and fiber optics for defense, aerospace, marine, and aviation MRO.",
    description_es: "Líder mundial en soluciones de interconexión de misión crítica. Conectores mil-spec, backshells, conducto, blindaje EMI y fibra óptica para defensa, aeroespacial, marina y aviación MRO.",
    tags: ["MIL-DTL-38999", "Backshells", "EMI/RFI", "Fiber Optic", "Hermetic"],
    color: "#2656A7",
    url: "https://www.glenair.com/",
  },
  {
    name: "MIRA Safety",
    tier: "Authorized Dealer",
    category: "CBRN Protection",
    founded: "2020",
    origin: "Czech Republic",
    certs: ["NIJ Level III/III+", "CE Certified"],
    description_en: "Premium CBRN protection for military, law enforcement, industrial, and civilian applications. Gas masks, tactical respirators, CBRN filters, and NIJ-certified body armor.",
    description_es: "Protección CBRN premium para uso militar, policial, industrial y civil. Máscaras de gas, respiradores tácticos, filtros CBRN y chalecos certificados NIJ.",
    tags: ["CM-6M", "CM-7M", "NBC-77 SOF", "TAPR", "NIJ .06"],
    color: "#1a1a1a",
    url: "https://mirasafety.com/",
  },
  {
    name: "WellAir",
    tier: "Distribution Partner",
    category: "Indoor Air Quality",
    founded: "Global",
    origin: "USA / Ireland",
    certs: ["UL 2998", "UL 867", "FDA Cleared"],
    description_en: "Advanced IAQ solutions. Novaerus portable disinfection and NanoDetect sensors for commercial, healthcare, education, and residential environments.",
    description_es: "Soluciones avanzadas de calidad de aire interior. Desinfección portátil Novaerus y sensores NanoDetect para entornos comerciales, salud, educación y residenciales.",
    tags: ["Novaerus", "NanoDetect", "HVAC", "Air Purification"],
    color: "#0A7B83",
    url: "https://www.wellairsolutions.com/",
  },
  {
    name: "Betco",
    tier: "Distribution Partner",
    category: "Facility Cleaning",
    founded: "1950",
    origin: "Made in USA",
    certs: ["Green Seal", "EPA Registered"],
    description_en: "Professional cleaning chemicals, floor care, and sustainable facility solutions for commercial, industrial, education, and healthcare customers.",
    description_es: "Químicos de limpieza profesional, cuidado de pisos y soluciones sustentables para clientes comerciales, industriales, educativos y de salud.",
    tags: ["Floor Care", "Disinfectants", "Green Seal", "Dispensers"],
    color: "#00843D",
    url: "https://www.betco.com/",
  },
  {
    name: "Wet Sounds",
    tier: "Authorized Dealer",
    category: "Marine & Powersports Audio",
    founded: "2005",
    origin: "Made in USA",
    certs: ["Marine Grade", "IPX Rated"],
    description_en: "Premium marine audio systems engineered for boats, powersports, and extreme environments. Tower speakers, subwoofers, amplifiers, and soundbars built to withstand saltwater, UV, and vibration.",
    description_es: "Sistemas de audio marino premium para lanchas, powersports y ambientes extremos. Parlantes de torre, subwoofers, amplificadores y barras de sonido resistentes a salitre, UV y vibración.",
    tags: ["Tower Speakers", "Subwoofers", "Amplifiers", "Marine Grade"],
    color: "#0E2A47",
    url: "https://www.wetsounds.com/",
  },
  {
    name: "Brane Audio",
    tier: "Authorized Dealer",
    category: "High-Performance Audio",
    founded: "2021",
    origin: "Made in USA",
    certs: ["Patented Tech"],
    description_en: "Revolutionary audio technology with patented membrane speaker design. Premium sound for consumer and pro applications.",
    description_es: "Tecnología de audio revolucionaria con diseño patentado de parlante de membrana. Sonido premium para aplicaciones de consumo y profesionales.",
    tags: ["Membrane Tech", "Premium Audio", "Patented"],
    color: "#8B1538",
    url: "https://braneaudio.com/",
  },
  {
    name: "Kobe Wood Line",
    tier: "Our Product Line",
    category: "Wood & Lumber",
    founded: "Direct Import",
    origin: "Americas",
    certs: ["FSC Available"],
    description_en: "Direct-import hardwood, plywood, engineered wood, and treated lumber. Containerized FOB Miami to distributors, construction contractors, and building supply across Latin America.",
    description_es: "Importación directa de maderas duras, contrachapados, madera de ingeniería y tratada. FOB Miami en contenedores para distribuidores, contratistas y proveedores de construcción en Latinoamérica.",
    tags: ["Hardwood", "Plywood", "Treated Lumber", "Engineered", "FOB Miami"],
    color: "#6B4423",
    url: "https://www.kobetradingusa.com/contact/",
  },
];

export interface Category {
  key: string;
  name_en: string;
  name_es: string;
  brands: string[];
}

export const CATEGORIES: Category[] = [
  { key: "electronics", name_en: "Electronics & Cables", name_es: "Electrónica y Cables", brands: ["Energizer", "PYRAMID", "Black+Decker", "DESCO"] },
  { key: "audio", name_en: "Professional Audio", name_es: "Audio Profesional", brands: ["Shure", "JBL", "Brane Audio", "Wet Sounds", "LexAudio"] },
  { key: "safety", name_en: "Safety & Industrial", name_es: "Seguridad & Industrial", brands: ["ANSELL", "DESCO", "Betco"] },
  { key: "power", name_en: "Fans, Generators & Power", name_es: "Ventiladores, Generadores & Energía", brands: ["Pulsar"] },
  { key: "air", name_en: "Indoor Air Quality", name_es: "Calidad de Aire Interior", brands: ["WellAir", "Novaerus", "NanoDetect"] },
  { key: "wood", name_en: "Wood & Lumber", name_es: "Línea de Madera", brands: ["Hardwood", "Plywood", "Treated Lumber", "Engineered Wood"] },
];

export interface Industry {
  key: string;
  icon: string;
  en: string;
  es: string;
  detail_en: string;
  detail_es: string;
}

export const INDUSTRIES: Industry[] = [
  { key: "gov", icon: "shield", en: "Government & Defense", es: "Gobierno & Defensa", detail_en: "SAM.gov registered. Multiple NAICS codes. Rapid procurement for federal, state, and local agencies.", detail_es: "Registrados en SAM.gov. Múltiples códigos NAICS. Procura rápida para agencias federales, estatales y locales." },
  { key: "aero", icon: "plane", en: "Aerospace & Aviation MRO", es: "Aeroespacial & Aviación MRO", detail_en: "Mil-spec interconnects, AS9100 traceable components, and mission-critical parts for MRO operations.", detail_es: "Interconexiones mil-spec, componentes trazables AS9100 y partes de misión crítica para operaciones MRO." },
  { key: "marine", icon: "anchor", en: "Marine & Naval", es: "Marina & Naval", detail_en: "Harsh-environment connectors, hermetic seals, and corrosion-resistant assemblies for naval systems.", detail_es: "Conectores para ambientes hostiles, sellos herméticos y ensamblajes anticorrosivos para sistemas navales." },
  { key: "latam", icon: "globe", en: "Latin American Distribution", es: "Distribución Latinoamérica", detail_en: "Bilingual team. Competitive FOB Miami pricing. Cargo consolidation to the entire Americas.", detail_es: "Equipo bilingüe. Precios competitivos FOB Miami. Consolidación de carga a toda América." },
  { key: "commercial", icon: "building", en: "Commercial Integrators", es: "Integradores Comerciales", detail_en: "Pro audio, lighting, and AV gear for houses of worship, venues, and commercial installations.", detail_es: "Audio pro, iluminación y AV para iglesias, recintos e instalaciones comerciales." },
  { key: "construction", icon: "hardhat", en: "Construction & Infrastructure", es: "Construcción & Infraestructura", detail_en: "Building materials, aggregates, road materials, and safety equipment for contractors.", detail_es: "Materiales de construcción, agregados, materiales viales y equipo de seguridad para contratistas." },
];

export const CREDENTIALS = [
  { label: "SAM.gov", sub: "Active Registration" },
  { label: "20+ YRS", sub: "Industry Experience" },
  { label: "AS9100", sub: "Supplier Network" },
  { label: "DFARS", sub: "Compliant Sourcing" },
  { label: "NAICS", sub: "Multi-Code Certified" },
  { label: "BILINGUAL", sub: "English · Español" },
];

export interface Service {
  key: string;
  en: string;
  es: string;
  detail_en: string;
  detail_es: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    key: "dist",
    en: "Wholesale Distribution",
    es: "Distribución Mayorista",
    detail_en: "Electronics, pro audio, lighting, safety equipment, fans, generators. Competitive FOB pricing for distributors and resellers across the Americas.",
    detail_es: "Electrónica, audio pro, iluminación, equipos de seguridad, ventiladores, generadores. Precios FOB competitivos para distribuidores y revendedores en las Américas.",
    items: ["11 Categories", "100+ SKUs", "FOB Miami"],
  },
  {
    key: "log",
    en: "Logistics & Warehousing",
    es: "Logística & Almacenaje",
    detail_en: "Secure cargo consolidation, palletization, in-bond storage, and direct delivery from our 10,000 sq ft Doral, FL facility.",
    detail_es: "Consolidación de carga segura, paletización, almacenamiento in-bond y entrega directa desde nuestras instalaciones de 10,000 sq ft en Doral, FL.",
    items: ["Warehousing", "Consolidation", "In-Bond Storage"],
  },
  {
    key: "gov",
    en: "Government Contracting",
    es: "Contratación Gubernamental",
    detail_en: "SAM.gov registered and active. Ready to supply federal, state, and local agencies with rapid procurement across multiple NAICS codes.",
    detail_es: "Registrados y activos en SAM.gov. Listos para suministrar a agencias federales, estatales y locales con procura rápida en múltiples códigos NAICS.",
    items: ["SAM.gov Active", "Multi-NAICS", "Rapid Procurement"],
  },
];

export const BRAND_URLS: Record<string, string> = {
  "Energizer": "https://www.energizer.com/",
  "PYRAMID": "https://www.pyramidcaraudio.com/",
  "Black+Decker": "https://www.blackanddecker.com/",
  "DESCO": "https://www.descoindustries.com/",
  "Shure": "https://www.shure.com/",
  "JBL": "https://www.jbl.com/",
  "LexAudio": "https://www.lexaudio.com/",
  "Brane Audio": "https://braneaudio.com/",
  "Wet Sounds": "https://www.wetsounds.com/",
  "ANSELL": "https://www.ansell.com/",
  "Betco": "https://www.betco.com/",
  "Pulsar": "https://www.pulsarnv.com/",
  "WellAir": "https://www.wellairsolutions.com/",
  "Novaerus": "https://www.wellairsolutions.com/novaerus",
  "NanoDetect": "https://www.wellairsolutions.com/nanodetect",
  "Hardwood": "https://www.kobetradingusa.com/contact/",
  "Plywood": "https://www.kobetradingusa.com/contact/",
  "Treated Lumber": "https://www.kobetradingusa.com/contact/",
  "Engineered Wood": "https://www.kobetradingusa.com/contact/",
};
