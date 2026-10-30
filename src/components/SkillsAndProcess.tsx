import { motion } from 'framer-motion';
import { SkillItem, ProcessStep } from '../types';

export const SkillsAndProcess: React.FC = () => {
  const skills: SkillItem[] = [
    {
      name: 'Adobe Photoshop',
      category: 'Software',
      summary: 'Raster editing, color adjustment, detailed photo composite manipulation, and texture treatment.',
      focus: 'Visual Composition'
    },
    {
      name: 'Adobe Illustrator',
      category: 'Software',
      summary: 'Vector geometry, logomark drafting, precision dielines, typography layout, and icon creation.',
      focus: 'Precision Vectors'
    },
    {
      name: 'Social Media Design',
      category: 'Discipline',
      summary: 'Cohesive feed tiles, promotional story visuals, announcement banners, and brand engagement assets.',
      focus: 'Digital Presence'
    },
    {
      name: 'Poster Design',
      category: 'Discipline',
      summary: 'Striking typographic hierarchy, high-contrast layouts, event promos, and expressive creative posters.',
      focus: 'Visual Impact'
    },
    {
      name: 'Promotional Banner Design',
      category: 'Discipline',
      summary: 'Clean commercial banners structured for high legibility, clear calls-to-action, and campaign messaging.',
      focus: 'Clear Messaging'
    },
    {
      name: 'Photo Editing',
      category: 'Specialization',
      summary: 'Tone curve adjustments, background removal, clean subject isolation, and product enhancement.',
      focus: 'Image Retouching'
    },
    {
      name: 'Image Composition',
      category: 'Specialization',
      summary: 'Blending multiple photographic elements with unified lighting, perspective, and atmospheric shadows.',
      focus: 'Realistic Collaging'
    },
    {
      name: 'Packaging & Print Design',
      category: 'Specialization',
      summary: 'Product pouch layouts, rigid box structures, flyers, menus, and print-ready CMYK preparation.',
      focus: 'Tangible Formats'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'UNDERSTAND',
      description: 'Identify the objective and audience.',
      deliverables: 'Brief, goals, visual requirements'
    },
    {
      number: '02',
      title: 'EXPLORE',
      description: 'Explore visual concepts and creative directions.',
      deliverables: 'Moodboards, rough sketches, layout tests'
    },
    {
      number: '03',
      title: 'REFINE',
      description: 'Develop the composition, hierarchy, color, and typography.',
      deliverables: 'High-fidelity mockups, balance checks'
    },
    {
      number: '04',
      title: 'DELIVER',
      description: 'Prepare the final artwork for its intended use.',
      deliverables: 'Print-ready files (CMYK/Bleed), digital assets'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-ivory relative paper-grain">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-ink-border/50">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-magenta" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              CAPABILITIES & WORKFLOW
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-ink"
            >
              Skills & Creative Approach
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-base sm:text-lg text-ink-secondary max-w-2xl font-normal"
          >
            Every project benefits from focused tools, honest craftsmanship, and a steady, deliberate workflow.
          </motion.p>
        </div>

        {/* Part 1: Skills Grid (Restrained, honest, interactive visual markers) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cobalt rounded-full" />
              TOOLSET & CORE DISCIPLINES
            </h3>
            <span className="font-mono text-xs text-ink-muted">
              8 FOCUSED AREAS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group p-5 rounded-2xl bg-white border border-ink-border/70 hover:border-magenta hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-ivory text-ink-muted border border-ink-border/50 group-hover:text-magenta group-hover:border-magenta/30 transition-colors">
                      {skill.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-ink-border group-hover:bg-magenta transition-colors" />
                  </div>

                  <h4 className="font-headline text-lg font-bold text-ink mb-1 group-hover:text-cobalt transition-colors">
                    {skill.name}
                  </h4>

                  <p className="text-xs text-ink-secondary leading-relaxed mt-2 font-normal">
                    {skill.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-ink-border/40 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>FOCUS:</span>
                  <span className="text-ink font-semibold group-hover:text-cobalt transition-colors">{skill.focus}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: 4-Step Creative Process with Cinematic Deep Burgundy Atmosphere & Sequential Line Drawing */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#280A12] via-[#1A060C] to-[#120408] text-white relative overflow-hidden paper-grain-dark shadow-2xl border border-white/10">
          
          {/* Subtle Ambient Lighting Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-magenta/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cobalt/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-magenta animate-ping" />
              <span className="font-mono text-xs tracking-widest uppercase text-cyanAccent">
                WORKFLOW METHODOLOGY
              </span>
            </div>
            <h3 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-white">
              My Four-Step Creative Process
            </h3>
            <p className="text-sm md:text-base text-white/75 max-w-xl mt-2 font-normal leading-relaxed">
              A structured roadmap ensuring clarity, exploration, and meticulous execution from first briefing to final delivery.
            </p>
          </div>

          {/* Sequential Animated Connecting Line on Desktop */}
          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="h-full bg-gradient-to-r from-cobalt via-magenta to-cyanAccent shadow-sm"
              />
            </div>

            {/* 4 Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.18 }}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-magenta transition-all duration-300 backdrop-blur-xs flex flex-col justify-between hover:bg-white/[0.08]"
                >
                  <div>
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/20 flex items-center justify-center font-mono font-bold text-sm text-cyanAccent group-hover:text-magenta group-hover:border-magenta mb-6 shadow-md transition-colors">
                      {step.number}
                    </div>

                    <h4 className="font-headline font-bold text-lg text-white mb-2 tracking-wide group-hover:text-cyanAccent transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-sm text-white/80 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10">
                    <span className="block font-mono text-[10px] uppercase text-white/40 tracking-wider mb-1">
                      KEY DELIVERABLES
                    </span>
                    <span className="text-xs font-mono text-gold-light group-hover:text-white transition-colors">
                      {step.deliverables}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
