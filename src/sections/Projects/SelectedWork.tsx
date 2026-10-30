import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BEHANCE_CATEGORIES, BEHANCE_PROJECTS } from '../../data/behanceProjects';
import { BehanceProject, ProjectCategory } from '../../types';
import { ProjectCard } from '../../components/portfolio/ProjectCard';
import { MagneticButton } from '../../components/common/MagneticButton';
import { SITE_CONFIG } from '../../config/siteConfig';
import { ExternalLink, Sparkles, Filter } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: BehanceProject) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL WORKS');

  // Filter projects by category
  const filteredProjects = activeCategory === 'ALL WORKS'
    ? BEHANCE_PROJECTS
    : BEHANCE_PROJECTS.filter((p) => p.category === activeCategory);

  // Count items per category
  const getCategoryCount = (category: ProjectCategory) => {
    if (category === 'ALL WORKS') return BEHANCE_PROJECTS.length;
    return BEHANCE_PROJECTS.filter((p) => p.category === category).length;
  };

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 bg-ivory relative paper-grain">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Clipping Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16 pb-8 border-b border-ink-border/60">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-magenta" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                SELECTED WORK // 2026 CATALOGUE
              </span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink leading-[1.05]"
              >
                Selected with intention.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt via-magenta to-cobalt">
                  Designed to be remembered.
                </span>
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 text-base md:text-lg text-ink-secondary max-w-xl font-normal leading-relaxed"
            >
              A closer look at the visual work, concepts, and compositions in my portfolio.
            </motion.p>
          </div>

          {/* Behance Link Badge with Magnetic Touch */}
          <div className="flex items-center gap-3">
            <MagneticButton 
              href={SITE_CONFIG.designer.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-ink-border text-ink hover:text-white hover:bg-ink hover:border-ink text-xs font-mono tracking-wider transition-all duration-300 shadow-xs hover:shadow-md">
                <span>OFFICIAL BEHANCE PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5 text-cobalt group-hover:text-cyanAccent" />
              </div>
            </MagneticButton>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-cobalt" />
            <span>FILTER:</span>
          </div>

          {BEHANCE_CATEGORIES.map((category) => {
            const count = getCategoryCount(category);
            const isSelected = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-ink text-white font-semibold shadow-md'
                    : 'bg-white/90 hover:bg-white text-ink-secondary border border-ink-border/70 hover:border-magenta hover:text-ink'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-gradient-to-r from-cobalt to-magenta text-white' : 'bg-ivory-dark text-ink-muted'
                }`}>
                  {count}
                </span>

                {isSelected && (
                  <motion.div
                    layoutId="filterPill"
                    className="absolute inset-0 border-2 border-magenta rounded-full -m-[2px] pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* End of Gallery Note with Live Link Verification */}
        <div className="mt-16 pt-8 border-t border-ink-border/50 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-muted gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-magenta" />
            <span>ALL {BEHANCE_PROJECTS.length} PROJECTS SOURCED FROM BEHANCE // JABIR MAHMUD KAWSAR</span>
          </div>
          <a
            href={SITE_CONFIG.designer.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalt hover:text-magenta transition-colors inline-flex items-center gap-1.5 font-semibold"
          >
            <span>View Complete Catalogue on Behance</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
