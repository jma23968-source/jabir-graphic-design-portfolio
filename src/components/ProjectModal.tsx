import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BehanceProject } from '../types';
import { X, ExternalLink, CheckCircle2, Layers, Calendar } from 'lucide-react';

interface ProjectModalProps {
  project: BehanceProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/75 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-ivory rounded-3xl overflow-hidden shadow-2xl border border-ink-border/80 flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Accent top line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cobalt via-magenta to-cyanAccent" />

          {/* Modal Header */}
          <div className="p-6 md:p-8 pb-4 border-b border-ink-border/50 flex items-start justify-between bg-white/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cobalt font-semibold px-2.5 py-0.5 rounded-full bg-cobalt/10 border border-cobalt/20">
                  {project.categoryLabel}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  PROJECT {project.number} OF 07
                </span>
              </div>
              <h2 id="modal-title" className="font-headline text-2xl md:text-3xl font-bold text-ink">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-ivory-dark hover:bg-ink hover:text-white transition-colors duration-200 text-ink-secondary"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6">
            {/* Project Overview */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                ABOUT THIS WORK
              </h4>
              <p className="text-ink-secondary leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {/* Design Specifications & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/80 border border-ink-border/60">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-ink-muted mb-2">
                  <Layers className="w-4 h-4 text-cobalt" />
                  <span>TOOLS & EXECUTION</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-ivory text-ink font-medium border border-ink-border/40"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-ink-border/60">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-ink-muted mb-2">
                  <Calendar className="w-4 h-4 text-forest" />
                  <span>DESIGN ATTRIBUTES</span>
                </div>
                <ul className="space-y-1">
                  {project.fallbackArtwork.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-ink-secondary flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Behance Source Verification Card */}
            <div className="p-5 rounded-2xl bg-forest/5 border border-forest/15">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-medium text-sm text-ink mb-1">
                    Authentic Behance Portfolio Publication
                  </h5>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    This work is an authentic portfolio project by Jabir Mahmud Kawsar published under his official Behance profile. You can view high-resolution artboards, layout mockups, and presentations directly on Behance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 md:p-8 pt-4 border-t border-ink-border/60 bg-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-ink-muted truncate max-w-xs">
              {project.behanceUrl}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-ink-border text-sm font-medium text-ink hover:bg-ivory transition-colors"
              >
                Close
              </button>
              
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cobalt to-magenta hover:from-cobalt-dark hover:to-magenta-dark text-white text-sm font-medium shadow-md shadow-cobalt/20 transition-all hover:gap-3"
              >
                <span>View on Behance</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
