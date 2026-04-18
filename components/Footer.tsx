import Link from 'next/link';
import Image from 'next/image';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs font-bold text-white uppercase mb-4" style={{ letterSpacing: '0.15em' }}>{title}</div>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link href={l.href} className="text-[13px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ t, lang }: Props) {
  return (
    <footer className="px-4 md:px-8 pt-16 pb-8" style={{ background: '#0A1428', color: 'rgba(255,255,255,0.7)' }}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3.5">
              <Image src="/kobe-icon.png" alt="" width={48} height={48} className="h-12 w-auto drop-shadow-lg" />
              <div className="flex flex-col gap-1">
                <span className="font-barlow font-extrabold text-xl text-white leading-none" style={{ letterSpacing: '0.02em' }}>KOBE TRADING</span>
                <span className="font-barlow-condensed font-medium text-[10px] leading-none" style={{ color: '#C9A961', letterSpacing: '0.28em' }}>USA · EST. 2015 · MIAMI, FL</span>
              </div>
            </div>
            <p className="text-sm mt-5 max-w-[320px]" style={{ lineHeight: 1.6 }}>{t.footer.tagline}</p>
            <div className="mt-5 text-[13px] flex flex-col gap-2" style={{ lineHeight: 1.8 }}>
              <div className="flex gap-2 items-start"><Icon name="pin" size={14} /> {t.footer.address}</div>
              <div className="flex gap-2 items-center"><Icon name="phone" size={14} /> (305) 863-7417</div>
              <div className="flex gap-2 items-center"><Icon name="whatsapp" size={14} /> WhatsApp: (786) 679-6741</div>
              <div className="flex gap-2 items-center"><Icon name="mail" size={14} /> info@kobetradingusa.com</div>
              <div className="mt-2.5 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.footer.hours}</div>
            </div>
          </div>

          <FooterCol title={t.footer.dist} links={[
            { label: 'Mil-Spec Connectors', href: `/${lang}/distribution/` },
            { label: 'Electronics & Cables', href: `/${lang}/distribution/` },
            { label: 'Pro Audio', href: `/${lang}/distribution/` },
            { label: 'Pro Lighting', href: `/${lang}/distribution/` },
            { label: 'Safety Equipment', href: `/${lang}/distribution/` },
            { label: 'Building Materials', href: `/${lang}/distribution/` },
            { label: 'Wood & Lumber', href: `/${lang}/distribution/` },
          ]} />

          <FooterCol title={t.footer.services} links={[
            { label: 'Wholesale Distribution', href: `/${lang}/distribution/` },
            { label: 'Logistics & Warehousing', href: `/${lang}/logistics/` },
            { label: 'Government Contracting', href: `/${lang}/gov/` },
            { label: 'LATAM Export', href: `/${lang}/logistics/` },
            { label: 'Cargo Consolidation', href: `/${lang}/logistics/` },
          ]} />

          <FooterCol title={t.footer.company} links={[
            { label: t.nav.brands, href: `/${lang}/#brands-section` },
            { label: t.nav.contact, href: `/${lang}/contact/` },
            { label: t.nav.quote, href: `/${lang}/quote/` },
          ]} />
        </div>

        <div className="mt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span>&copy; 2026 Kobe Trading USA. All rights reserved. | Miami, Florida</span>
          <span className="flex gap-5">
            <span>SAM.gov CAGE: Active</span>
            <span>Privacy</span>
            <span>Terms</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
