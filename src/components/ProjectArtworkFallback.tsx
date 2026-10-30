import React from 'react';
import { BehanceProject } from '../types';
import { ExternalLink, Layers, Sparkles, Box, FileText, Compass, CreditCard, Palette } from 'lucide-react';

interface ProjectArtworkFallbackProps {
  project: BehanceProject;
}

export const ProjectArtworkFallback: React.FC<ProjectArtworkFallbackProps> = ({ project }) => {
  const { fallbackArtwork, categoryLabel, title, number } = project;

  const renderIcon = () => {
    switch (fallbackArtwork.artType) {
      case 'packaging-chips':
        return <Box className="w-8 h-8 text-amber-400" />;
      case 'perfume':
        return <Sparkles className="w-8 h-8 text-gold" />;
      case 'chocobliss':
        return <Layers className="w-8 h-8 text-amber-200" />;
      case 'restaurant':
        return <FileText className="w-8 h-8 text-orange-400" />;
      case 'travel':
        return <Compass className="w-8 h-8 text-cyanAccent" />;
      case 'business-card':
        return <CreditCard className="w-8 h-8 text-cobalt" />;
      case 'visual-identity':
        return <Palette className="w-8 h-8 text-cyanAccent-light" />;
      default:
        return <Layers className="w-8 h-8 text-cobalt" />;
    }
  };

  return (
    <div 
      className="relative w-full h-full min-h-[300px] flex flex-col justify-between p-7 overflow-hidden select-none transition-transform duration-700 group-hover:scale-[1.02]"
      style={{ backgroundColor: fallbackArtwork.themeColor }}
    >
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>
      </div>

      {/* Diagonal Accent Glow */}
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: fallbackArtwork.accentColor }}
      />
      <div 
        className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: '#176BFF' }}
      />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm text-white/90 border border-white/10">
            {categoryLabel}
          </span>
          <span className="font-mono text-xs text-white/40 tracking-wider">
            PLATE // {number}
          </span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-magenta group-hover:bg-white transition-all duration-300">
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Artwork Geometry & Composition */}
      <div className="relative z-10 my-auto py-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {renderIcon()}
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        <p className="font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase mb-1">
          {fallbackArtwork.tagline}
        </p>

        <h3 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-cyanAccent transition-colors">
          {title}
        </h3>

        {/* Specifications Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {fallbackArtwork.specs.map((spec, i) => (
            <span 
              key={i} 
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/30 text-white/75 border border-white/5"
            >
              • {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Technical Bar */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-white/50 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-ping" />
          <span>VERIFIED BEHANCE WORK</span>
        </div>
        <span className="group-hover:text-white transition-colors">
          VIEW PROJECT →
        </span>
      </div>
    </div>
  );
};
