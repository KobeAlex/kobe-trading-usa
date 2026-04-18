import SectionHeader from './SectionHeader';
import { CREDENTIALS } from '@/lib/data';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

export default function TrustStrip({ t }: Props) {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-8" style={{ background: '#0F1E3D', color: 'white' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="max-w-[1360px] mx-auto relative">
        <SectionHeader eyebrow={t.trust.eyebrow} title={t.trust.title} sub={t.trust.sub} invert />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
          {CREDENTIALS.map((c, i) => (
            <div key={i} className="p-6 rounded-lg text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="font-barlow-condensed font-bold text-[22px]" style={{ color: '#C9A961', letterSpacing: '0.03em' }}>{c.label}</div>
              <div className="text-[11px] mt-1.5" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.02em' }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
