const BRAND_STYLES: Record<string, string> = {
  "Glenair": "font-barlow-condensed font-bold tracking-[0.05em] uppercase",
  "WellAir": "font-inter font-extrabold tracking-tight",
  "Betco": "font-inter font-extrabold tracking-tight",
  "Brane Audio": "font-inter font-extrabold tracking-tight",
  "Novaerus": "font-inter font-extrabold tracking-tight",
  "NanoDetect": "font-inter font-extrabold tracking-tight",
};

export default function BrandMark({ name }: { name: string }) {
  const cls = BRAND_STYLES[name] || "font-inter font-extrabold tracking-tight";
  return (
    <span className={`${cls} text-navy whitespace-nowrap`} style={{ fontSize: 'clamp(14px, 2vw, 22px)' }}>
      {name}
    </span>
  );
}
