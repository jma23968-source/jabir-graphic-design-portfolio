/**
 * SITE CONFIGURATION & METADATA
 * JABIR MAHMUD KAWSAR — Graphic Designer & Visual Creator
 */

export const SITE_CONFIG = {
  designer: {
    fullName: 'JABIR MAHMUD KAWSAR',
    shortName: 'JABIR MAHMUD',
    monogram: 'JM',
    title: 'Graphic Designer & Visual Creator',
    location: 'Comilla, Bangladesh',
    email: 'jabirmahmudk@gmail.com',
    behanceUrl: 'https://www.behance.net/jabirmahmudk',
  },
  meta: {
    siteTitle: 'JABIR MAHMUD KAWSAR — Graphic Designer & Visual Creator',
    siteDescription: 'Portfolio of Jabir Mahmud Kawsar, a graphic designer & visual creator from Comilla, Bangladesh specializing in packaging, advertising, brand identity, and print design.',
    siteUrl: 'https://jma23968-source.github.io/jabir-graphic-design-portfolio/',
    themeColor: '#140408',
  },
  navigation: [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ],
  categories: [
    'Packaging Design',
    'Product Advertising',
    'Print & Editorial',
    'Visual Identity',
    'Promotional Media',
  ],
} as const;
