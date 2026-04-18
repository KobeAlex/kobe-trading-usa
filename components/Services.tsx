'use client';

import Link from 'next/link';
import { Icon, IconName } from './Icon';
import SectionHeader from './SectionHeader';
import { SERVICES } from '@/lib/data';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface ServicesProps {
  t: TranslationSet;
  lang: Locale;
}

const iconMap: Record<string, IconName> = { dist: 'box', log: 'truck', gov: 'gov' };
const routeMap: Record<string, string> = { dist: 'distribution', log: 'logistics', gov: 'gov' };

export default function Services({ t, lang }: ServicesProps) {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1360px] mx-auto">
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} sub={t.services.sub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {SERVICES.map((s, i) => {
            const isDark = i === 0;
            return (
              <Link key={s.key} href={`/${lang}/${routeMap[s.key]}/`}
                className="block p-9 rounded-xl relative overflow-hidden transition-transform hover:-translate-y-1 group"
                style={{
                  background: isDark ? '#0F1E3D' : '#F7F8FA',
                  color: isDark ? 'white' : '#0F1E3D',
                  border: isDark ? 'none' : '1px solid #D9DEE6',
                }}>
                <div className="text-[11px] font-bold mb-6" style={{ letterSpacing: '0.18em', color: isDark ? '#C9A961' : '#1B4FA0' }}>
                  0{i + 1}
                </div>
                <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: isDark ? 'rgba(255,255,255,0.1)' : 'white',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #D9DEE6',
                    color: isDark ? 'white' : '#1B4FA0',
                  }}>
                  <Icon name={iconMap[s.key]} size={26} stroke={1.5} />
                </div>
                <h3 className="font-barlow text-[26px] font-bold m-0" style={{ letterSpacing: '-0.01em' }}>
                  {lang === 'es' ? s.es : s.en}
                </h3>
                <p className="text-[15px] mt-3" style={{ lineHeight: 1.6, color: isDark ? 'rgba(255,255,255,0.75)' : '#4A5265' }}>
                  {lang === 'es' ? s.detail_es : s.detail_en}
                </p>
                <div className="flex gap-2 mt-5 flex-wrap">
                  {s.items.map((it, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-1 rounded font-semibold whitespace-nowrap"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.1)' : 'white',
                        border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #D9DEE6',
                        letterSpacing: '0.03em',
                      }}>
                      {it}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-2 text-[13px] font-semibold">
                  Learn more <Icon name="arrow" size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
