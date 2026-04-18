import { locales, type Locale, getTranslations } from '@/lib/i18n';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Brands from '@/components/Brands';
import Industries from '@/components/Industries';
import LatamMap from '@/components/LatamMap';
import TrustStrip from '@/components/TrustStrip';
import CTABand from '@/components/CTABand';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const t = getTranslations(params.lang);

  return (
    <>
      <Hero t={t} lang={params.lang} />
      <Services t={t} lang={params.lang} />
      <Brands t={t} lang={params.lang} />
      <Industries t={t} lang={params.lang} />
      <LatamMap t={t} lang={params.lang} />
      <TrustStrip t={t} lang={params.lang} />
      <CTABand t={t} lang={params.lang} />
    </>
  );
}
