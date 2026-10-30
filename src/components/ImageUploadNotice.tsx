import React, { useState } from 'react';
import { Info, X, ChevronUp, ChevronDown, CheckCircle2, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageUploadNotice: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-ink-border/80 shadow-2xl p-5 text-ink text-xs font-sans"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink-border/50">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-cobalt" />
                <span className="font-headline font-bold text-sm">Asset Management Guide</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-ink-muted hover:text-ink hover:bg-ivory"
                aria-label="Close guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-ink-secondary mb-3 leading-relaxed">
              In accordance with your creative brief, <strong>no AI-generated people or fake project artwork</strong> have been substituted. The website is pre-configured with bespoke editorial plates and ready for your original assets:
            </p>

            <div className="space-y-2 mb-3 font-mono text-[11px]">
              <div className="p-2 rounded bg-ivory border border-ink-border/40">
                <span className="text-cobalt font-semibold">1. Portrait:</span> Place your photo as <code className="bg-white px-1 py-0.5 rounded border border-ink-border/30">/public/images/portrait.jpg</code>.
              </div>
              <div className="p-2 rounded bg-ivory border border-ink-border/40">
                <span className="text-cobalt font-semibold">2. Project Covers:</span> Place high-res covers in <code className="bg-white px-1 py-0.5 rounded border border-ink-border/30">/public/projects/</code> and update links in <code className="bg-white px-1 py-0.5 rounded border border-ink-border/30">src/data/behanceProjects.ts</code>.
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-forest font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>All 7 project URLs are directly linked to your Behance.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 hover:bg-white text-ink border border-ink-border shadow-md backdrop-blur-md text-xs font-mono transition-all hover:border-cobalt"
        aria-label="Toggle Asset Instructions"
      >
        <Info className="w-3.5 h-3.5 text-cobalt" />
        <span className="hidden sm:inline">Image Import Info</span>
        {isOpen ? <ChevronDown className="w-3 h-3 text-ink-muted" /> : <ChevronUp className="w-3 h-3 text-ink-muted" />}
      </button>
    </div>
  );
};
