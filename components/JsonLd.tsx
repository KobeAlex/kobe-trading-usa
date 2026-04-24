export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kobe Trading USA',
    description: 'Wholesale distribution, logistics, and government contracting from Miami, FL. Authorized dealer for Glenair, MIRA Safety, WellAir, American DJ, and 20+ brands.',
    url: 'https://www.kobetradingusa.com',
    telephone: '(305) 863-7417',
    email: 'info@kobetradingusa.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7384 NW 56th St',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33166',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.8148,
      longitude: -80.3321,
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [],
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Continent', name: 'Latin America' },
    ],
    knowsLanguage: ['English', 'Spanish'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
