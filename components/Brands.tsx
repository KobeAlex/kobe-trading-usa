'use client';

import { useState, useMemo } from 'react';
import { Icon } from './Icon';
import SectionHeader from './SectionHeader';
import BrandMark from './BrandMark';
import { FLAGSHIP_BRANDS, CATEGORIES, BRAND_URLS } from '@/lib/data';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface BrandsProps {
  t: TranslationSet;
  lang: Locale;
}

export default function Brands({ t, lang }: BrandsProps) {
  const [activeCat, setActiveCat] = useState('all');

  const allBrands = useMemo(() => {
    const out: { name: string; cat: string; catLabel: string }[] = [];
    CATEGORIES.forEach(cat =>
      cat.brands.forEach(b => out.push({ name: b, cat: cat.key, catLabel: lang === 'es' ? cat.name_es : cat.name_en }))
    );
    return out;
  }, [lang]);

  const filtered = activeCat === 'all' ? allBrands : allBrands.filter(b => b.cat === activeCat);

  return (
    <section id="brands-section" className="py-24 px-4 md:px-8" style={{ background: '#F7F8FA', borderTop: '1px solid #EEF0F4' }}>
      <div className="max-w-[1360px] mx-auto">
        <SectionHeader eyebrow={t.brands.eyebrow} title={t.brands.title} sub={t.brands.sub} />

        {/* Flagship Cards */}
        <div className="mt-14 grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
          {FLAGSHIP_BRANDS.map((b) => (
            <a key={b.name} href={b.url || '#'} target={b.url ? '_blank' : undefined} rel={b.url ? 'noopener noreferrer' : undefined}
              className="block bg-white rounded-xl p-7 relative transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ border: '1px solid #D9DEE6' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: b.color }} />
              <div className="flex justify-between items-start gap-3 mb-5">
                <div className="px-2.5 py-1.5 rounded text-[10px] font-bold flex items-center gap-1.5" style={{ background: '#EBF2FC', color: '#1B4FA0', letterSpacing: '0.12em' }}>
                  <Icon name="award" size={11} /> {b.tier.toUpperCase()}
                </div>
                <div className="text-[11px] text-right" style={{ color: '#8A92A3' }}>
                  <div>{b.founded}</div>
                  <div className="text-[10px] mt-0.5">{b.origin}</div>
                </div>
              </div>
              <span className="font-barlow-condensed font-bold text-[30px] text-navy leading-tight block mb-3.5" style={{ letterSpacing: '0.02em' }}>
                {b.name}
              </span>
              <div className="text-xs font-semibold uppercase mb-3.5" style={{ color: b.color, letterSpacing: '0.05em' }}>{b.category}</div>
              <p className="text-sm m-0" style={{ lineHeight: 1.55, color: '#4A5265' }}>{lang === 'es' ? b.description_es : b.description_en}</p>
              <div className="flex gap-1.5 mt-4 flex-wrap">
                {b.tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded font-semibold whitespace-nowrap" style={{ background: '#F7F8FA', border: '1px solid #EEF0F4', color: '#4A5265', letterSpacing: '0.03em' }}>{tag}</span>
                ))}
              </div>
              <div className="mt-5 pt-4 flex justify-between items-center" style={{ borderTop: '1px solid #EEF0F4' }}>
                <div className="flex gap-1.5 flex-wrap">
                  {b.certs.slice(0, 2).map((c, i) => (
                    <span key={i} className="text-[10px] font-semibold flex items-center gap-1 whitespace-nowrap" style={{ color: '#4A5265' }}>
                      <Icon name="check" size={10} /> {c}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-bold flex items-center gap-1.5" style={{ color: '#1B4FA0', letterSpacing: '0.1em' }}>
                  {b.url ? (lang === 'es' ? 'VISITAR SITIO' : 'VISIT SITE') : (lang === 'es' ? 'CONTACTAR' : 'CONTACT')}
                  <Icon name="external" size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Category Grid */}
        <div className="mt-20">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-7">
            <h3 className="font-barlow text-[28px] font-bold text-navy m-0" style={{ letterSpacing: '-0.01em' }}>
              {lang === 'es' ? 'Catálogo completo por categoría' : 'Full catalog by category'}
            </h3>
            <div className="text-[13px]" style={{ color: '#4A5265' }}>
              {filtered.length} {lang === 'es' ? 'marcas' : 'brands'}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            <FilterChip active={activeCat === 'all'} onClick={() => setActiveCat('all')}>{t.brands.filterAll}</FilterChip>
            {CATEGORIES.map(cat => (
              <FilterChip key={cat.key} active={activeCat === cat.key} onClick={() => setActiveCat(cat.key)}>
                {lang === 'es' ? cat.name_es : cat.name_en}
              </FilterChip>
            ))}
          </div>

          <div className="grid bg-white rounded-xl overflow-hidden" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', border: '1px solid #D9DEE6' }}>
            {filtered.map((b, i) => {
              const href = BRAND_URLS[b.name];
              return (
                <a key={b.name + i} href={href || '#'} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined}
                  onClick={href ? undefined : (e) => e.preventDefault()}
                  className="p-8 flex flex-col items-center justify-center min-h-[110px] bg-white hover:bg-blue-light transition-colors"
                  style={{ borderRight: '1px solid #EEF0F4', borderBottom: '1px solid #EEF0F4', textDecoration: 'none', cursor: href ? 'pointer' : 'default' }}>
                  <BrandMark name={b.name} />
                  <div className="text-[10px] mt-2 text-center font-medium uppercase" style={{ color: '#8A92A3', letterSpacing: '0.08em' }}>{b.catLabel}</div>
                  {href && <div className="text-[9px] mt-1.5 font-semibold flex items-center gap-0.5" style={{ color: '#1B4FA0', letterSpacing: '0.08em' }}>VISIT <Icon name="external" size={9} /></div>}
                </a>
              );
            })}
          </div>

          <div className="mt-4 text-xs text-center italic" style={{ color: '#8A92A3' }}>
            {lang === 'es' ? 'Distribuidor autorizado para marcas selectas. Contáctanos para disponibilidad completa de productos.' : 'Authorized dealer for select brands. Contact us for full product availability.'}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className="px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer"
      style={{
        border: `1px solid ${active ? '#0F1E3D' : '#D9DEE6'}`,
        background: active ? '#0F1E3D' : 'white',
        color: active ? 'white' : '#1F2533',
        letterSpacing: '0.01em',
      }}>
      {children}
    </button>
  );
}
