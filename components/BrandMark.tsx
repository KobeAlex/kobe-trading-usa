const BRAND_STYLES: Record<string, string> = {
  "Glenair": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "MIRA Safety": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "WellAir": "font-inter font-extrabold tracking-tight",
  "Betco": "font-inter font-extrabold tracking-tight",
  "American DJ": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "Brane Audio": "font-inter font-extrabold tracking-tight",
  "Wet Sounds": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "Kobe Wood Line": "font-playfair font-bold tracking-wide",
  "Energizer": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "PYRAMID": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "Black+Decker": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "DESCO": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "Shure": "font-inter font-extrabold tracking-tight",
  "JBL": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "LexAudio": "font-inter font-extrabold tracking-tight",
  "ANSELL": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "Pulsar": "font-inter font-extrabold tracking-tight",
  "Novaerus": "font-inter font-extrabold tracking-tight",
  "NanoDetect": "font-inter font-extrabold tracking-tight",
  "Hardwood": "font-playfair font-bold tracking-wide",
  "Plywood": "font-playfair font-bold tracking-wide",
  "Treated Lumber": "font-playfair font-bold tracking-wide",
  "Engineered Wood": "font-playfair font-bold tracking-wide",
};

export default function BrandMark({ name }: { name: string }) {
  const cls = BRAND_STYLES[name] || "font-inter font-extrabold tracking-tight";
  return (
    <span className={`${cls} text-navy whitespace-nowrap`} style={{ fontSize: 'clamp(14px, 2vw, 22px)' }}>
      {name}
    </span>
  );
}
