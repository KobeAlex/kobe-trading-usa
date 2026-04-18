import { locales, type Locale, getTranslations } from '@/lib/i18n';
import Brands from '@/components/Brands';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function BrandsPage({ params }: { params: { lang: Locale } }) {
  const t = getTranslations(params.lang);
  return (
    <section className="pt-8">
      <Brands t={t} lang={params.lang} />
    </section>
  );
}
