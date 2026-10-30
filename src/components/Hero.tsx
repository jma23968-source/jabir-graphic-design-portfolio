import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { DESIGNER_INFO } from '../data/behanceProjects';
import { FloatingCreativeObject } from './FloatingCreativeObject';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const [portraitError, setPortraitError] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Desktop mouse parallax for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const portraitRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const portraitRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const portraitOffsetX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const portraitOffsetY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop) return;
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop, mouseX, mouseY]);

  const categories = [
    'Packaging Design',
    'Product Advertising',
    'Print & Editorial',
    'Visual Identity',
    'Promotional Media'
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1F070E] via-[#140408] to-[#0E0206] text-white paper-grain-dark"
    >
      {/* Cinematic Ambient Atmosphere Lighting (Burgundy, Cobalt & Magenta) */}
      <div className="absolute top-1/4 right-5 w-[450px] h-[450px] rounded-full bg-cobalt/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-magenta/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[350px] rounded-full bg-burgundy-light/20 blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        {/* Top Identification Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-magenta animate-ping" />
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-white/90">
              {DESIGNER_INFO.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-white/60 text-xs font-mono tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyanAccent" />
            <span>{DESIGNER_INFO.location.toUpperCase()}</span>
          </div>
        </motion.div>

        {/* Hero Grid: Typographic Lockup on Left, Portrait & Companion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Typographic Composition (7-8 cols on desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Masked Headline: "IDEAS," */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]"
              >
                IDEAS,
              </motion.h1>
            </div>

            {/* Masked Headline: "MADE VISIBLE." */}
            <div className="overflow-hidden mt-1 mb-3">
              <motion.h1 
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] flex flex-wrap items-baseline gap-x-4"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  MADE VISIBLE.
                </span>
              </motion.h1>
            </div>

            {/* Animated Supporting Phrase: "Designed with purpose." */}
            <div className="my-3 flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                className="relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-lg"
              >
                {/* Subtle soft magenta/cyan rim glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cobalt/20 via-magenta/20 to-cyanAccent/20 blur-md pointer-events-none" />

                <span className="font-script text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-cyanAccent relative z-10 -mt-1">
                  “Designed with purpose.”
                </span>
                <Sparkles className="w-4 h-4 text-magenta animate-pulse relative z-10" />
              </motion.div>

              {/* Animated Stroke Reveal Line */}
              <svg className="hidden sm:block h-6 w-32 overflow-visible" viewBox="0 0 120 20">
                <motion.path
                  d="M0 10 Q 60 18, 120 10"
                  fill="none"
                  stroke="url(#accent-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.55, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="accent-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#176BFF" />
                    <stop offset="50%" stopColor="#E11D74" />
                    <stop offset="100%" stopColor="#55C8FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Thin Animated Cobalt & Magenta Accent Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-[2px] w-48 sm:w-80 bg-gradient-to-r from-cobalt via-magenta to-transparent my-6"
            />

            {/* Name Lockup & Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-3 max-w-2xl"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-headline text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
                  {DESIGNER_INFO.fullName}
                </span>
                <span className="font-mono text-xs text-cyanAccent tracking-widest uppercase">
                  // {DESIGNER_INFO.title}
                </span>
              </div>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {DESIGNER_INFO.heroDescription}
              </p>
            </motion.div>

            {/* Primary Action Buttons with Staggered Magnetic Micro-Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <MagneticButton href="#work">
                <div className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-cobalt hover:bg-gradient-to-r hover:from-cobalt hover:to-magenta text-white font-mono text-xs tracking-wider font-semibold shadow-lg shadow-cobalt/30 transition-all duration-300 hover:shadow-magenta/30 hover:scale-[1.02]">
                  <span>EXPLORE MY WORK</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </div>
              </MagneticButton>

              <MagneticButton href="#contact">
                <div className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-magenta font-mono text-xs tracking-wider font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
                  <span>LET'S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 text-cyanAccent group-hover:text-magenta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Arched Portrait Frame & Floating Companion Element (4-5 cols on desktop) */}
          <div className="lg:col-span-4 relative flex flex-col items-center lg:items-end">
            
            {/* The Floating Creative Object Companion (Positioned near the portrait) */}
            <div className="absolute -top-10 -left-6 sm:-left-10 z-30">
              <FloatingCreativeObject />
            </div>

            {/* Portrait Frame with Mask Reveal, Subtle Parallax and Dual Rim Lighting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={isDesktop ? { 
                rotateX: portraitRotateX, 
                rotateY: portraitRotateY, 
                x: portraitOffsetX, 
                y: portraitOffsetY,
                transformPerspective: 1000 
              } : undefined}
              className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-t-[140px] rounded-b-3xl overflow-hidden p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent border border-white/20 shadow-2xl backdrop-blur-md"
            >
              {/* Controlled Soft Rim Lighting (Dual Rim: Magenta right, Cyan left) */}
              <div className="absolute inset-0 rounded-t-[140px] rounded-b-3xl pointer-events-none z-20 shadow-[inset_2px_0_15px_rgba(85,200,255,0.35),inset_-2px_0_15px_rgba(225,29,116,0.35)]" />

              {/* Inner Arch Container with Subtle Vertical Floating Oscillation */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-full h-full rounded-t-[132px] rounded-b-2xl overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-b from-[#2A0C16] to-[#120408] text-white"
              >
                {/* Background Geometric Grid Pattern */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {!portraitError ? (
                  <img
                    src="/images/portrait.jpg"
                    alt="Jabir Mahmud Kawsar"
                    onError={() => setPortraitError(true)}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[132px] rounded-b-2xl transition-transform duration-700 hover:scale-105"
                  />
                ) : null}

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-cyanAccent uppercase px-2.5 py-1 rounded bg-black/50 border border-white/10 backdrop-blur-xs">
                    STUDIO // PORTFOLIO
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-magenta animate-ping" />
                </div>

                {/* Editorial Monogram Badge fallback if portrait photo not yet loaded */}
                <div className="relative z-10 my-auto text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 backdrop-blur-md shadow-inner">
                    <span className="font-headline font-bold text-3xl tracking-tighter">JM</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold tracking-tight text-white mb-1">
                    JABIR MAHMUD
                  </h3>
                  <p className="font-mono text-[11px] text-magenta uppercase tracking-widest font-semibold">
                    GRAPHIC DESIGNER
                  </p>
                  <p className="text-xs text-white/70 mt-1 font-mono">
                    Comilla, Bangladesh
                  </p>
                </div>

                {/* Bottom Spec Footer */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span>MOTION REFINED</span>
                  <span className="text-cyanAccent">✦ VERIFIED WORK</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Category Row & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="max-w-7xl mx-auto w-full pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10"
      >
        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span className="font-mono text-[11px] text-white/50 uppercase mr-2 tracking-wider">
            FOCUS DISCIPLINES:
          </span>
          {categories.map((cat, i) => (
            <span
              key={i}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-magenta transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Minimal Scroll Indicator */}
        <a 
          href="#work"
          className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-cyanAccent transition-colors group cursor-pointer"
          aria-label="Scroll down to Selected Work"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1 text-magenta" />
        </a>
      </motion.div>

      {/* Seamless Transition Border at bottom into warm ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-ivory opacity-20 pointer-events-none" />
    </section>
  );
};
