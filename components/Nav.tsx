'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface NavProps {
  t: TranslationSet;
  lang: Locale;
}

export default function Nav({ t, lang }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navLinks: { label: string; href: string }[] = [
    { label: t.nav.home, href: `/${lang}/` },
    { label: t.nav.distribution, href: `/${lang}/distribution/` },
    { label: t.nav.brands, href: `/${lang}/#brands-section` },
    { label: t.nav.logistics, href: `/${lang}/logistics/` },
    { label: t.nav.gov, href: `/${lang}/gov/` },
    { label: t.nav.contact, href: `/${lang}/contact/` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: scrolled ? '0 2px 12px rgba(15,30,61,0.08)' : '0 1px 0 rgba(15,30,61,0.06)' }}>
      {/* Top Bar */}
      <div style={{ background: '#0A1428', color: '#CBD2DF', fontSize: 12, fontWeight: 500 }}>
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
          <div className="hidden md:flex gap-5 items-center" style={{ letterSpacing: '0.02em' }}>
            <span className="flex items-center gap-1.5"><Icon name="pin" size={13} /> 7384 NW 56th St, Doral, FL</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span className="flex items-center gap-1.5"><Icon name="phone" size={13} /> (305) 863-7417</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span className="flex items-center gap-1.5" style={{ opacity: 0.85 }}><Icon name="mail" size={13} /> info@kobetradingusa.com</span>
          </div>
          <div className="flex items-center gap-0 border border-white/15 rounded overflow-hidden ml-auto">
            <Link href="/en/" className={`px-2.5 py-0.5 font-bold text-[11px] tracking-[0.05em] ${lang === 'en' ? 'bg-white text-navy' : 'bg-transparent text-[#CBD2DF]'}`}>EN</Link>
            <Link href="/es/" className={`px-2.5 py-0.5 font-bold text-[11px] tracking-[0.05em] ${lang === 'es' ? 'bg-white text-navy' : 'bg-transparent text-[#CBD2DF]'}`}>ES</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 py-5 flex justify-between items-center gap-8">
        <Link href={`/${lang}/`} className="flex items-center gap-3 shrink-0">
          <Image src="/kobe-icon.png" alt="Kobe Trading USA" width={60} height={60} className="h-[60px] w-auto" priority />
          <div className="hidden sm:flex flex-col gap-1">
            <span className="font-barlow font-extrabold text-2xl leading-none text-navy tracking-tight whitespace-nowrap">KOBE TRADING</span>
            <span className="font-barlow-condensed font-semibold text-[11px] leading-none text-blue tracking-[0.22em] whitespace-nowrap">WHOLESALE · LOGISTICS · GOV</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="px-3.5 py-2 text-gray-800 font-medium text-sm rounded-md hover:bg-gray-50 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href={`/${lang}/quote/`}
            className="ml-3 bg-blue hover:bg-blue-accent text-white px-5 py-2.5 font-semibold text-sm rounded-md flex items-center gap-2 transition-colors">
            {t.nav.quote} <Icon name="arrow" size={14} />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="block px-4 py-3 text-gray-800 font-medium text-sm hover:bg-gray-50 rounded"
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={`/${lang}/quote/`}
            className="block mt-2 bg-blue text-white text-center px-4 py-3 font-semibold text-sm rounded"
            onClick={() => setMobileOpen(false)}>
            {t.nav.quote}
          </Link>
        </div>
      )}
    </header>
  );
}
