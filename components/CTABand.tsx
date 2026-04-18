import Link from 'next/link';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

export default function CTABand({ t, lang }: Props) {
  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1120px] mx-auto bg-white rounded-[14px] p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center relative overflow-hidden" style={{ border: '1px solid #D9DEE6' }}>
        <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #EBF2FC, transparent 70%)' }} />
        <div className="relative">
          <h2 className="font-barlow text-[40px] font-bold text-navy m-0" style={{ letterSpacing: '-0.015em', lineHeight: 1.1 }}>{t.cta.title}</h2>
          <p className="text-base mt-4" style={{ lineHeight: 1.6, color: '#4A5265' }}>{t.cta.sub}</p>
        </div>
        <div className="flex flex-col gap-3 relative">
          <Link href={`/${lang}/quote/`} className="bg-navy text-white px-6 py-4 font-semibold text-[15px] rounded-md flex items-center justify-between hover:bg-navy-deep transition-colors">
            {t.cta.primary} <Icon name="arrow" size={16} />
          </Link>
          <Link href={`/${lang}/contact/`} className="bg-white text-navy px-6 py-4 font-semibold text-[15px] rounded-md flex items-center justify-between hover:bg-gray-50 transition-colors" style={{ border: '1px solid #D9DEE6' }}>
            {t.cta.secondary} <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
