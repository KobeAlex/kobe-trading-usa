import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kobetradingusa.com'),
  title: {
    default: 'Kobe Trading USA — Distribution · Logistics · Government Supply',
    template: '%s | Kobe Trading USA',
  },
  description: 'Wholesale distribution, logistics, and government contracting from Miami, FL. Authorized dealer for Glenair, MIRA Safety, WellAir, and 20+ brands. SAM.gov registered.',
  keywords: ['wholesale distribution', 'government contracting', 'logistics', 'Miami', 'Doral FL', 'LATAM distribution', 'mil-spec connectors', 'pro audio', 'safety equipment', 'SAM.gov'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_US',
    url: 'https://www.kobetradingusa.com',
    siteName: 'Kobe Trading USA',
    title: 'Kobe Trading USA — Distribution · Logistics · Government Supply',
    description: 'Wholesale distribution, logistics, and government contracting from Miami, FL. 20+ authorized brands. SAM.gov registered.',
    images: [{ url: '/kobe-logo.png', width: 600, height: 400, alt: 'Kobe Trading USA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kobe Trading USA — Distribution · Logistics · Government Supply',
    description: 'Wholesale distribution, logistics, and government contracting from Miami, FL.',
    images: ['/kobe-logo.png'],
  },
  alternates: {
    canonical: 'https://www.kobetradingusa.com',
    languages: {
      'en': '/en/',
      'es': '/es/',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <JsonLd />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
