import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/behanceProjects';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  // Determine if on dark section or light section
  const isDarkSection = !isScrolled || activeSection === 'home' || activeSection === 'contact';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? isDarkSection 
              ? 'py-3.5 bg-[#120408]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
              : 'py-3.5 bg-ivory/90 backdrop-blur-md border-b border-ink-border/40 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Custom JM Monogram Logo */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 select-none"
            aria-label="Jabir Mahmud Kawsar Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt to-[#140408] group-hover:from-magenta group-hover:to-cobalt border border-white/20 transition-all duration-300 flex items-center justify-center text-white shadow-md">
              <span className="font-headline font-bold text-lg tracking-tighter">JM</span>
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-magenta group-hover:bg-cyanAccent transition-colors animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className={`font-headline font-semibold text-xs tracking-wider leading-tight transition-colors ${
                isDarkSection ? 'text-white' : 'text-ink'
              }`}>
                JABIR MAHMUD
              </span>
              <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                isDarkSection ? 'text-white/50' : 'text-ink-muted'
              }`}>
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-xs tracking-widest transition-colors duration-200 relative py-1 ${
                    isActive 
                      ? 'text-cyanAccent font-semibold' 
                      : isDarkSection 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cobalt via-magenta to-cyanAccent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button with Magnetic Hover */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton href={`mailto:${DESIGNER_INFO.email}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 ${
                isDarkSection 
                  ? 'border-white/20 bg-white/5 hover:bg-magenta hover:border-magenta text-white' 
                  : 'border-ink/20 bg-white/80 hover:bg-cobalt hover:border-cobalt hover:text-white text-ink'
              }`}>
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyanAccent" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border transition-colors ${
              isDarkSection 
                ? 'bg-white/10 border-white/20 text-white' 
                : 'bg-white/80 border-ink-border/50 text-ink'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Scroll Progress Bar at the very bottom edge of navbar (Cobalt -> Magenta -> Cyan) */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-cobalt via-magenta to-cyanAccent transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-30 bg-[#140408]/98 backdrop-blur-xl p-6 md:hidden flex flex-col justify-between border-t border-white/10 text-white"
          >
            <nav className="flex flex-col gap-5 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`font-headline text-2xl font-bold tracking-tight py-2 border-b border-white/10 flex items-center justify-between ${
                    activeSection === link.id ? 'text-cyanAccent' : 'text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cobalt to-magenta text-white font-mono text-xs tracking-wider font-semibold shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL JABIR</span>
              </a>
              <a
                href={DESIGNER_INFO.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 border border-white/15 text-white font-mono text-xs tracking-wider"
              >
                <span>VISIT BEHANCE PROFILE</span>
                <ArrowUpRight className="w-4 h-4 text-cyanAccent" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
