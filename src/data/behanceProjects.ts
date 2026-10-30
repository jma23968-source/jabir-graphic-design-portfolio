import { BehanceProject, ProjectCategory } from '../types';

/**
 * VERIFIED BEHANCE PROJECT CATALOGUE
 * Designer: JABIR MAHMUD KAWSAR
 * Official Profile: https://www.behance.net/jabirmahmudk
 *
 * HOW TO ADD ORIGINAL COVER IMAGES:
 * 1. Export/save your project cover images to the /public/projects/ directory.
 *    (e.g., /projects/potato-chips.jpg, /projects/perfume-ad.jpg, etc.)
 * 2. Set the `coverImage` property for that project in this file:
 *    `coverImage: '/projects/potato-chips.jpg'`
 * 3. The portfolio will automatically display your actual cover image with
 *    fallback to the custom editorial artwork if the file is missing.
 */

export const BEHANCE_CATEGORIES: ProjectCategory[] = [
  'ALL WORKS',
  'PACKAGING',
  'ADVERTISING',
  'PRINT DESIGN',
  'BRANDING'
];

export const BEHANCE_PROJECTS: BehanceProject[] = [
  {
    id: 'potato-chips-packaging',
    number: '01',
    title: 'Potato Chips Packaging Design',
    category: 'PACKAGING',
    categoryLabel: 'Packaging Design',
    behanceUrl: 'https://www.behance.net/gallery/255851375/Potato-Chips-Packaging-Design',
    coverImage: '/projects/potato-chips.jpg',
    description: 'A vibrant, consumer-facing snack pouch packaging system designed with strong shelf impact, dynamic product callouts, and appetite appeal.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Packaging Layout'],
    featured: true,
    aspectRatio: 'wide',
    gridSpan: 'md:col-span-12 lg:col-span-8',
    fallbackArtwork: {
      themeColor: '#E65100',
      accentColor: '#FFD54F',
      tagline: 'CRISP & BOLD PACKAGING CONCEPT',
      artType: 'packaging-chips',
      specs: ['Pouch Die-cut Form', 'CMYK Print Ready', 'Flavor Differentiation', 'Nutrition Grid Layout']
    }
  },
  {
    id: 'elegant-perfume-ad',
    number: '02',
    title: 'Elegant Perfume Advertisement Design',
    category: 'ADVERTISING',
    categoryLabel: 'Product Advertising',
    behanceUrl: 'https://www.behance.net/gallery/253551113/Elegant-Perfume-Advertisement-Design',
    coverImage: '/projects/perfume-ad.jpg',
    description: 'An editorial luxury print and digital advertisement highlighting dramatic lighting, refined typography, and premium product positioning.',
    tools: ['Adobe Photoshop', 'Photo Manipulation', 'Digital Art Direction'],
    featured: false,
    aspectRatio: 'tall',
    gridSpan: 'md:col-span-6 lg:col-span-4',
    fallbackArtwork: {
      themeColor: '#171A21',
      accentColor: '#C7A65B',
      tagline: 'LUXURY FRAGRANCE CAMPAIGN',
      artType: 'perfume',
      specs: ['Editorial Poster Layout', 'High-key Lighting Contrast', 'Minimalist Serif Typography', 'Liquid Glass Rendering']
    }
  },
  {
    id: 'chocobliss-packaging',
    number: '03',
    title: 'ChocoBliss – Premium Chocolate Packaging Design',
    category: 'PACKAGING',
    categoryLabel: 'Packaging Design',
    behanceUrl: 'https://www.behance.net/gallery/253487993/ChocoBliss-Premium-Chocolate-Packaging-Design',
    coverImage: '/projects/chocobliss.jpg',
    description: 'Sophisticated artisanal confectionery packaging featuring deep cocoa tones, ornate gold-foil accent detailing, and clean typography.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Mockup Composition'],
    featured: false,
    aspectRatio: 'square',
    gridSpan: 'md:col-span-6 lg:col-span-5',
    fallbackArtwork: {
      themeColor: '#2C1B14',
      accentColor: '#DFCA8C',
      tagline: 'ARTISANAL CONFECTIONERY',
      artType: 'chocobliss',
      specs: ['Rigid Box Packaging', 'Gold Foil Stamping Simulation', 'Artisanal Emblem', 'Barcode & Spec Layout']
    }
  },
  {
    id: 'restaurant-menu-flyer',
    number: '04',
    title: 'Premium Restaurant Food Menu Flyer Design',
    category: 'PRINT DESIGN',
    categoryLabel: 'Print Design',
    behanceUrl: 'https://www.behance.net/gallery/253483897/Premium-Restaurant-Food-Menu-Flyer-Design',
    coverImage: '/projects/restaurant-menu.jpg',
    description: 'A culinary promotional flyer and menu design with clear typographic hierarchy, balanced pricing layout, and appetizing food presentation.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Print Production'],
    featured: false,
    aspectRatio: 'tall',
    gridSpan: 'md:col-span-6 lg:col-span-7',
    fallbackArtwork: {
      themeColor: '#1E232A',
      accentColor: '#E25822',
      tagline: 'CULINARY EDITORIAL PROMO',
      artType: 'restaurant',
      specs: ['A4 Flyer Format', 'Two-column Price Ledger', 'Typography Hierarchy', 'Food Photography Grading']
    }
  },
  {
    id: 'travel-agency-flyer',
    number: '05',
    title: 'Travel Agency Flyer Design 2026',
    category: 'PRINT DESIGN',
    categoryLabel: 'Promotional and Print Design',
    behanceUrl: 'https://www.behance.net/gallery/253481833/Travel-Agency-Flyer-Design-2026',
    coverImage: '/projects/travel-flyer.jpg',
    description: 'An inspiring tourism campaign flyer crafted for holiday packages, featuring structured informational grids and energetic wanderlust styling.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Editorial Grid'],
    featured: false,
    aspectRatio: 'square',
    gridSpan: 'md:col-span-6 lg:col-span-4',
    fallbackArtwork: {
      themeColor: '#0E3B43',
      accentColor: '#55C8FF',
      tagline: 'GLOBAL JOURNEYS PROMOTIONAL',
      artType: 'travel',
      specs: ['Multi-destination Grid', 'Booking CTA System', 'Custom Badge Elements', 'Print Ready CMYK']
    }
  },
  {
    id: 'clean-business-card',
    number: '06',
    title: 'Clean & Professional Business Card Design',
    category: 'PRINT DESIGN',
    categoryLabel: 'Business Card and Print Design',
    behanceUrl: 'https://www.behance.net/gallery/253482657/Clean-Professional-Business-Card-Design',
    coverImage: '/projects/business-card.jpg',
    description: 'Minimalist corporate identity stationery focusing on geometric spacing, refined contact information typography, and tactile tactile balance.',
    tools: ['Adobe Illustrator', 'Print Standards', 'Vector Precision'],
    featured: false,
    aspectRatio: 'wide',
    gridSpan: 'md:col-span-6 lg:col-span-4',
    fallbackArtwork: {
      themeColor: '#212529',
      accentColor: '#176BFF',
      tagline: 'CORPORATE STATIONERY SYSTEM',
      artType: 'business-card',
      specs: ['Standard 3.5x2 inch Layout', 'Bleed & Safe Zone Geometry', 'Monogram Integration', 'Matte Finish Aesthetic']
    }
  },
  {
    id: 'modern-visual-identity',
    number: '07',
    title: 'Modern Visual Identity Design Showcase',
    category: 'BRANDING',
    categoryLabel: 'Branding and Visual Identity',
    behanceUrl: 'https://www.behance.net/gallery/249249721/Modern-Visual-Identity-Design-Showcase',
    coverImage: '/projects/visual-identity.jpg',
    description: 'A comprehensive brand identity exploration showcasing logo mark construction, color theory, typographic lockups, and collateral mockups.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Guidelines'],
    featured: true,
    aspectRatio: 'wide',
    gridSpan: 'md:col-span-12 lg:col-span-8',
    fallbackArtwork: {
      themeColor: '#111827',
      accentColor: '#55C8FF',
      tagline: 'BRAND IDENTITY SYSTEM & MARKS',
      artType: 'visual-identity',
      specs: ['Logo Grid & Geometry', 'Color System Tokens', 'Brand Collateral Layouts', 'Vector Mark Scalability']
    }
  }
];

export const DESIGNER_INFO = {
  fullName: 'JABIR MAHMUD KAWSAR',
  title: 'Graphic Designer & Visual Creator',
  location: 'Comilla, Bangladesh',
  email: 'jabirmahmudk@gmail.com',
  behanceUrl: 'https://www.behance.net/jabirmahmudk',
  heroHeadline: ['IDEAS,', 'MADE VISIBLE.'],
  heroScript: 'Designed with purpose.',
  heroDescription: 'I create thoughtful, engaging visuals with a focus on composition, detail, and clear communication.',
  aboutHeading: ['Curious by nature.', 'Precise by design.'],
  aboutBio: `I'm Jabir Mahmud Kawsar, a graphic design learner from Comilla, Bangladesh. I enjoy exploring creative ideas and turning them into clear, engaging visual designs. My focus is on thoughtful layouts, strong visual hierarchy, and details that help each design communicate effectively.`
};
