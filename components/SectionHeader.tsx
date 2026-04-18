interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export default function SectionHeader({ eyebrow, title, sub, align = 'left', invert = false }: SectionHeaderProps) {
  return (
    <div className="max-w-[780px]" style={{ textAlign: align, margin: align === 'center' ? '0 auto' : '0' }}>
      <div className="text-xs font-semibold mb-4" style={{ letterSpacing: '0.22em', color: invert ? '#C9A961' : '#1B4FA0' }}>{eyebrow}</div>
      <h2 className="font-barlow font-bold m-0" style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', lineHeight: 1.1, color: invert ? 'white' : '#0F1E3D', letterSpacing: '-0.015em' }}>{title}</h2>
      {sub && <p className="text-[17px] mt-5" style={{ lineHeight: 1.6, color: invert ? 'rgba(255,255,255,0.75)' : '#4A5265' }}>{sub}</p>}
    </div>
  );
}
