import { locales, type Locale, getTranslations } from '@/lib/i18n';
import SimplePage from '@/components/SimplePage';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function GovPage({ params }: { params: { lang: Locale } }) {
  const t = getTranslations(params.lang);
  const p = t.pages.gov;
  return <SimplePage t={t} lang={params.lang} eyebrow={p.eyebrow} title={p.title} body={p.body} />;
}
