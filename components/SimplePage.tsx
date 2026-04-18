import Link from 'next/link';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props {
  t: TranslationSet;
  lang: Locale;
  eyebrow: string;
  title: string;
  body: string;
}

export default function SimplePage({ t, lang, eyebrow, title, body }: Props) {
  return (
    <section className="py-20 px-4 md:px-8 min-h-[60vh]">
      <div className="max-w-[960px] mx-auto">
        <div className="text-xs font-semibold mb-4" style={{ letterSpacing: '0.22em', color: '#1B4FA0' }}>{eyebrow}</div>
        <h1 className="font-barlow text-[56px] font-bold text-navy m-0" style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}>{title}</h1>
        <p className="text-lg mt-5 max-w-[680px]" style={{ lineHeight: 1.6, color: '#4A5265' }}>{body}</p>
        <Link href={`/${lang}/quote/`}
          className="mt-8 inline-flex items-center gap-2.5 bg-navy text-white px-6 py-3.5 font-semibold text-[15px] rounded-md hover:bg-navy-deep transition-colors">
          {t.nav.quote} <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  );
}
