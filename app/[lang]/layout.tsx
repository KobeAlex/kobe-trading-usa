import { locales, type Locale, getTranslations } from '@/lib/i18n';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const t = getTranslations(params.lang);

  return (
    <>
      <Nav t={t} lang={params.lang} />
      <main>{children}</main>
      <Footer t={t} lang={params.lang} />
    </>
  );
}
