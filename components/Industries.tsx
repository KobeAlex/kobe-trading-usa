import { Icon, IconName } from './Icon';
import SectionHeader from './SectionHeader';
import { INDUSTRIES } from '@/lib/data';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

export default function Industries({ t, lang }: Props) {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1360px] mx-auto">
        <SectionHeader eyebrow={t.industries.eyebrow} title={t.industries.title} sub={t.industries.sub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-14 rounded-xl overflow-hidden" style={{ background: '#EEF0F4' }}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.key} className="bg-white p-8 flex flex-col gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: '#EBF2FC', color: '#1B4FA0' }}>
                <Icon name={ind.icon as IconName} size={24} stroke={1.75} />
              </div>
              <h3 className="font-barlow text-[22px] font-bold text-navy m-0" style={{ letterSpacing: '-0.01em' }}>
                {lang === 'es' ? ind.es : ind.en}
              </h3>
              <p className="text-sm m-0" style={{ lineHeight: 1.6, color: '#4A5265' }}>
                {lang === 'es' ? ind.detail_es : ind.detail_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
