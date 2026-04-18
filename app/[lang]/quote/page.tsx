import { locales, type Locale, getTranslations } from '@/lib/i18n';
import QuotePageComponent from '@/components/QuotePage';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function QuotePage({ params }: { params: { lang: Locale } }) {
  const t = getTranslations(params.lang);
  return <QuotePageComponent t={t} lang={params.lang} />;
}
