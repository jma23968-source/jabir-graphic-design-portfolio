import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BehanceProject } from '../../types';
import { ProjectArtworkFallback } from './ProjectArtworkFallback';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: BehanceProject;
  onSelect: (project: BehanceProject) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hasDirectImage = !!project.coverImage && !imageError;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden border border-ink-border/60 bg-white shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cobalt ${project.gridSpan || 'col-span-12 md:col-span-6'}`}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View project details for ${project.title}`}
    >
      {/* 4. Animated Thin Cobalt & Magenta Line (Draws across top on hover) */}
      <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-cobalt via-magenta to-cyanAccent transition-all duration-500 ease-out z-30" />

      {/* 1. Media Container with Smooth Mask & Gentle Parallax / Zoom */}
      <div className="relative w-full overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[390px] bg-ivory-dark">
        {hasDirectImage ? (
          <div className="relative w-full h-full overflow-hidden">
            {/* 3. Subtle image zoom on hover */}
            <img
              src={project.coverImage}
              alt={project.title}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.02] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
            {/* Cinematic Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140408]/95 via-[#140408]/40 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 text-white">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 border border-white/20 backdrop-blur-md">
                  {project.categoryLabel}
                </span>
                <span className="font-mono text-xs text-white/70">
                  // {project.number}
                </span>
              </div>

              <div>
                {/* 2. Staggered text entrance */}
                <p className="font-mono text-[10px] tracking-widest text-cyanAccent uppercase mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-magenta" />
                  <span>VERIFIED BEHANCE WORK</span>
                </p>
                <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-cyanAccent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2 max-w-xl font-normal leading-relaxed">
                  {project.description}
                </p>
                
                {/* 5. Minimal "VIEW PROJECT" indicator */}
                <div className="flex items-center gap-2 mt-4 text-xs font-mono text-white/90 group-hover:text-magenta transition-colors">
                  <span className="tracking-wider font-semibold">VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-cyanAccent group-hover:text-magenta" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ProjectArtworkFallback project={project} />
        )}
      </div>

      {/* Card Metadata Footer */}
      <div className="p-5 md:p-6 bg-white border-t border-ink-border/40 flex items-center justify-between transition-colors group-hover:bg-[#FCFBF8]">
        <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
          <Layers className="w-3.5 h-3.5 text-cobalt" />
          <span>{project.tools.slice(0, 2).join(' • ')}</span>
        </div>

        {/* 5. "VIEW PROJECT" minimal trigger on footer */}
        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-cobalt group-hover:text-magenta transition-colors duration-300">
          <span className="tracking-wider">EXPLORE CASE</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
};
