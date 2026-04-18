'use client';

import Link from 'next/link';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface HeroProps {
  t: TranslationSet;
  lang: Locale;
}

export default function Hero({ t, lang }: HeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, #0F1E3D 0%, #0A1428 100%)`, color: 'white' }}>
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      {/* Blue glow */}
      <div className="absolute pointer-events-none" style={{ right: -100, top: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(45,111,212,0.13), transparent 70%)' }} />

      <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-16 md:py-24 relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <div className="text-xs font-semibold mb-7" style={{ letterSpacing: '0.22em', color: '#C9A961' }}>{t.hero.eyebrow}</div>
          <h1 className="font-barlow font-bold m-0" style={{ fontSize: 'clamp(42px, 5.5vw, 72px)', lineHeight: 1.04, letterSpacing: '-0.02em' }}>
            {t.hero.title_a}<br />
            <span className="font-playfair italic font-normal" style={{ color: '#2D6FD4' }}>{t.hero.title_b}</span>
          </h1>
          <p className="text-lg mt-7 max-w-[560px]" style={{ lineHeight: 1.6, color: 'rgba(255,255,255,0.78)' }}>{t.hero.sub}</p>
          <div className="flex gap-3.5 mt-9 flex-wrap">
            <Link href={`/${lang}/quote/`} className="bg-white text-navy border-none px-7 py-4 font-semibold text-[15px] rounded-md flex items-center gap-2.5 hover:bg-gray-100 transition-colors">
              {t.hero.cta1} <Icon name="arrow" size={16} />
            </Link>
            <Link href={`/${lang}/#brands-section`} className="bg-transparent text-white border border-white/30 px-7 py-4 font-semibold text-[15px] rounded-md hover:bg-white/10 transition-colors">
              {t.hero.cta2}
            </Link>
          </div>
          <div className="flex gap-3 mt-11 flex-wrap">
            {[t.hero.chip1, t.hero.chip2, t.hero.chip3].map((c, i) => (
              <div key={i} className="px-3.5 py-2 rounded-full text-xs font-medium flex items-center gap-2"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <Icon name="check" size={13} /> {c}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats Card */}
        <div className="rounded-xl p-8 relative" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="absolute top-4 right-4 text-[10px] font-semibold" style={{ letterSpacing: '0.18em', color: '#C9A961' }}>AT A GLANCE</div>
          <div className="grid grid-cols-2 gap-0.5 rounded-lg overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {[
              { big: '20+', small: 'Years Experience' },
              { big: '10K', small: 'sq ft Warehouse' },
              { big: '15+', small: 'LATAM Countries' },
              { big: '11', small: 'Product Verticals' },
            ].map((s, i) => (
              <div key={i} className="p-6" style={{ background: '#091432' }}>
                <div className="font-barlow-condensed font-bold text-white" style={{ fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.big}</div>
                <div className="text-xs mt-1.5 font-medium" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>{s.small}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 flex items-center gap-3.5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ background: '#2D6FD4' }}>
              <Icon name="gov" size={22} />
            </div>
            <div>
              <div className="text-sm font-semibold">Government Ready</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>SAM.gov registered · Multi-NAICS · DFARS-capable sourcing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
