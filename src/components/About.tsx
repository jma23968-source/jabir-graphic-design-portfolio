import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Eye, PenTool, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/behanceProjects';
import { MagneticButton } from './MagneticButton';

export const About: React.FC = () => {
  const [portraitError, setPortraitError] = useState(false);

  const designValues = [
    {
      title: 'Composition & Hierarchy',
      desc: 'Organizing elements with intention so the eye naturally grasps the message first.',
      icon: Eye
    },
    {
      title: 'Detail & Craft',
      desc: 'Paying deliberate attention to typography, margins, packaging die-lines, and color contrast.',
      icon: PenTool
    },
    {
      title: 'Purpose-Driven Visuals',
      desc: 'Designing to solve a communication goal, rather than applying random decorative clutter.',
      icon: Compass
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-ivory-light border-y border-ink-border/50 relative overflow-hidden paper-grain">
      {/* Background Graphic Typography Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-headline font-black text-[22vw] leading-none text-ink">
        KAWSAR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Studio Card with Smooth Mask Entrance (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Refined Gold & Magenta Accent Corner Pins */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-magenta pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold pointer-events-none" />

              {/* Main Frame with Dual Rim Lighting and Mask Reveal */}
              <div className="rounded-3xl overflow-hidden bg-white border border-ink-border/80 shadow-2xl p-4 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#280A12] to-[#120408] flex flex-col justify-between p-7 text-white">
                  
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-magenta/20 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cobalt/20 blur-3xl pointer-events-none" />

                  {!portraitError ? (
                    <img
                      src="/images/portrait.jpg"
                      alt="Portrait of Jabir Mahmud Kawsar"
                      onError={() => setPortraitError(true)}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : null}

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wider uppercase px-2.5 py-1 rounded bg-black/40 border border-white/15 text-cyanAccent backdrop-blur-xs">
                      STUDIO BADGE
                    </span>
                    <Sparkles className="w-4 h-4 text-magenta animate-pulse" />
                  </div>

                  {/* Monogram Badge Fallback */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 border-2 border-gold/60 flex items-center justify-center text-ivory mb-4 shadow-xl backdrop-blur-md">
                      <span className="font-headline font-bold text-4xl text-white">JM</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-1">
                      {DESIGNER_INFO.fullName}
                    </h3>
                    <p className="font-mono text-xs text-gold uppercase tracking-widest font-semibold">
                      {DESIGNER_INFO.title}
                    </p>
                    <p className="font-mono text-[11px] text-white/60 mt-1">
                      {DESIGNER_INFO.location}
                    </p>
                  </div>

                  {/* Card Bottom Plate */}
                  <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/70">
                    <span>VISUAL DISCIPLINE</span>
                    <span className="text-cyanAccent">HONEST CRAFT</span>
                  </div>
                </div>

                {/* Sub-label under portrait */}
                <div className="p-4 flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span>LOCATION: COMILLA, BD</span>
                  <a
                    href={DESIGNER_INFO.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cobalt hover:text-magenta flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>BEHANCE PROFILE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-magenta" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                A LITTLE ABOUT ME
              </span>
            </motion.div>

            {/* Headline with Clipping Mask Entrance */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink leading-[1.05]"
              >
                Curious by nature.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt via-magenta to-cobalt">
                  Precise by design.
                </span>
              </motion.h2>
            </div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-ink-secondary leading-relaxed font-normal mb-8"
            >
              {DESIGNER_INFO.aboutBio}
            </motion.p>

            {/* Design Principles Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-ink-border/60">
              {designValues.map((val, i) => {
                const IconComponent = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/80 border border-ink-border/60 hover:border-magenta transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cobalt/10 text-cobalt flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-headline font-bold text-sm text-ink mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-ink-muted leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Magnetic Link to Behance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href={DESIGNER_INFO.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ink hover:bg-gradient-to-r hover:from-cobalt hover:to-magenta text-white font-mono text-xs tracking-wider transition-all duration-300 shadow-sm hover:shadow-md">
                  <span>EXPLORE MY BEHANCE PROFILE</span>
                  <ArrowUpRight className="w-4 h-4 text-cyanAccent" />
                </div>
              </MagneticButton>

              <span className="font-mono text-xs text-ink-muted">
                Comilla, Bangladesh
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
