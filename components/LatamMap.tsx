import SectionHeader from './SectionHeader';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

const countries = [
  { name: 'Colombia', x: 32, y: 52 }, { name: 'Venezuela', x: 38, y: 44 },
  { name: 'Ecuador', x: 28, y: 58 }, { name: 'Peru', x: 30, y: 68 },
  { name: 'Chile', x: 32, y: 82 }, { name: 'Argentina', x: 40, y: 84 },
  { name: 'Uruguay', x: 44, y: 80 }, { name: 'Paraguay', x: 40, y: 74 },
  { name: 'Bolivia', x: 35, y: 70 }, { name: 'Brazil', x: 52, y: 62 },
  { name: 'Panama', x: 26, y: 48 }, { name: 'Costa Rica', x: 22, y: 45 },
  { name: 'Guatemala', x: 16, y: 40 }, { name: 'Mexico', x: 12, y: 30 },
  { name: 'Dominican Rep.', x: 34, y: 35 },
];
const MIAMI = { x: 22, y: 22 };

function StatPill({ big, small }: { big: string; small: string }) {
  return (
    <div className="p-[18px_20px] bg-white rounded-lg" style={{ border: '1px solid #D9DEE6' }}>
      <div className="font-barlow-condensed font-bold text-navy" style={{ fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em' }}>{big}</div>
      <div className="text-xs mt-1.5 font-medium" style={{ color: '#4A5265' }}>{small}</div>
    </div>
  );
}

export default function LatamMap({ t, lang }: Props) {
  return (
    <section className="py-24 px-4 md:px-8" style={{ background: 'linear-gradient(180deg, #F7F8FA 0%, white 100%)' }}>
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div>
          <SectionHeader eyebrow={t.latam.eyebrow} title={t.latam.title} sub={t.latam.sub} />
          <div className="mt-8 grid grid-cols-2 gap-4">
            <StatPill big="15+" small={lang === 'es' ? 'Países servidos' : 'Countries served'} />
            <StatPill big="FOB" small="Miami" />
            <StatPill big="48hr" small={lang === 'es' ? 'Tiempo de respuesta' : 'Response time'} />
            <StatPill big="ES·EN" small={lang === 'es' ? 'Documentación bilingüe' : 'Bilingual docs'} />
          </div>
        </div>
        <div className="relative bg-white rounded-xl p-6 overflow-hidden" style={{ aspectRatio: '5/6', border: '1px solid #D9DEE6' }}>
          <div className="absolute top-5 left-6 text-[11px] font-bold" style={{ letterSpacing: '0.15em', color: '#8A92A3' }}>AMERICAS COVERAGE · LIVE</div>
          <svg viewBox="0 0 100 100" className="w-full h-full mt-5" preserveAspectRatio="xMidYMid meet">
            <g fill="#EEF0F4" stroke="#D9DEE6" strokeWidth="0.3">
              <path d="M 8 10 L 25 8 L 30 14 L 28 22 L 22 28 L 14 26 L 10 20 Z" />
              <path d="M 14 30 L 22 32 L 26 38 L 24 44 L 18 42 L 14 36 Z" />
              <path d="M 28 30 L 36 32 L 38 36 L 34 38 L 30 36 Z" />
              <path d="M 28 44 L 44 42 L 52 50 L 56 64 L 52 78 L 44 86 L 38 86 L 32 80 L 28 70 L 26 58 Z" />
            </g>
            {countries.map((c, i) => (
              <line key={'r' + i} x1={MIAMI.x} y1={MIAMI.y} x2={c.x} y2={c.y} stroke="#2D6FD4" strokeWidth="0.15" strokeDasharray="0.5,0.3" opacity="0.5" />
            ))}
            {countries.map((c, i) => (
              <g key={'c' + i}>
                <circle cx={c.x} cy={c.y} r="0.9" fill="#1B4FA0" />
                <circle cx={c.x} cy={c.y} r="1.8" fill="#1B4FA0" opacity="0.2" />
              </g>
            ))}
            <circle cx={MIAMI.x} cy={MIAMI.y} r="1.5" fill="#C9A961" />
            <circle cx={MIAMI.x} cy={MIAMI.y} r="3" fill="none" stroke="#C9A961" strokeWidth="0.3" opacity="0.6">
              <animate attributeName="r" from="1.5" to="5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={MIAMI.x + 3} y={MIAMI.y + 1} fontSize="2" fontWeight="700" fill="#0F1E3D">MIAMI</text>
          </svg>
          <div className="absolute bottom-4 left-6 right-6 px-4 py-3 rounded-md flex justify-between items-center text-xs" style={{ background: '#F7F8FA', color: '#4A5265' }}>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: '#C9A961' }} /> {t.latam.hub}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: '#1B4FA0' }} /> {t.latam.countries}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
