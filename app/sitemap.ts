import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.kobetradingusa.com';

const routes = ['', '/distribution', '/logistics', '/gov', '/quote', '/contact', '/brands'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of ['en', 'es']) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${lang}${route}/`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}/`,
            es: `${BASE_URL}/es${route}/`,
          },
        },
      });
    }
  }

  return entries;
}
