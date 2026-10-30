import { ArrowUp, ExternalLink, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/behanceProjects';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0205] text-white py-14 px-6 md:px-12 border-t border-white/10 relative paper-grain-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: JM Monogram & Identity */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#280A12] to-black border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
            <span className="font-headline font-bold text-xl tracking-tighter">JM</span>
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-magenta animate-pulse" />
          </div>

          <div>
            <h4 className="font-headline font-bold text-base tracking-wide text-white">
              {DESIGNER_INFO.fullName}
            </h4>
            <p className="font-mono text-xs text-white/50 tracking-wider">
              {DESIGNER_INFO.title} • {DESIGNER_INFO.location}
            </p>
          </div>
        </div>

        {/* Center: Essential Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a
            href={DESIGNER_INFO.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-cyanAccent flex items-center gap-1.5 transition-colors"
          >
            <span>BEHANCE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <span className="text-white/20">•</span>

          <a
            href={`mailto:${DESIGNER_INFO.email}`}
            className="text-white/70 hover:text-cyanAccent flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{DESIGNER_INFO.email}</span>
          </a>
        </div>

        {/* Right: Back to Top Action with Magnetic Feel */}
        <div className="flex items-center gap-4">
          <MagneticButton onClick={scrollToTop}>
            <div
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-magenta hover:bg-white/10 text-xs font-mono text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-magenta" />
            </div>
          </MagneticButton>
        </div>
      </div>

      {/* Sub-footer Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-3">
        <span>© {currentYear} JABIR MAHMUD KAWSAR. ALL RIGHTS RESERVED.</span>
        <span>IDEAS, MADE VISIBLE WITH PURPOSE.</span>
      </div>
    </footer>
  );
};
