export type ProjectCategory = 
  | 'ALL WORKS'
  | 'PACKAGING'
  | 'ADVERTISING'
  | 'PRINT DESIGN'
  | 'BRANDING';

export interface BehanceProject {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  behanceUrl: string;
  coverImage?: string; // Optional local or remote image path
  fallbackArtwork: {
    themeColor: string;
    accentColor: string;
    tagline: string;
    artType: 'packaging-chips' | 'perfume' | 'chocobliss' | 'restaurant' | 'travel' | 'business-card' | 'visual-identity';
    specs: string[];
  };
  description: string;
  tools: string[];
  featured?: boolean;
  aspectRatio?: 'wide' | 'tall' | 'square';
  gridSpan?: string; // Tailwind grid span classes
}

export interface SkillItem {
  name: string;
  category: 'Software' | 'Discipline' | 'Specialization';
  summary: string;
  focus: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string;
}
