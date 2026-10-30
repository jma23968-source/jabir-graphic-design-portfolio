import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/behanceProjects';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [projectType, setProjectType] = useState('Packaging Design');
  const [projectMessage, setProjectMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Design Inquiry: ${projectType} — ${senderName || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Jabir,\n\nMy name: ${senderName || '[Your Name]'}\nProject Type: ${projectType}\n\nProject Details:\n${projectMessage || '[Describe your design requirements, timeline, or objectives here]'}\n\nBest regards,\n${senderName || ''}`
    );
    return `mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-gradient-to-b from-[#1C050B] via-[#120307] to-[#0A0204] text-white relative overflow-hidden paper-grain-dark">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-magenta/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-cobalt/15 blur-[130px] pointer-events-none" />

      {/* Top Animated Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-magenta via-cobalt to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Contact Info (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-magenta animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-cyanAccent">
                INITIATE A CONVERSATION
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
              >
                Have an idea?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent via-white to-magenta">
                  Let's make it visible.
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-white/75 max-w-xl font-normal leading-relaxed mb-8"
            >
              Have a design project in mind? Get in touch and tell me a little about it.
            </motion.p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 max-w-lg mb-8">
              {/* Email Card with Copy Action */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 backdrop-blur-xs hover:border-magenta transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cobalt/20 text-cyanAccent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      DIRECT EMAIL ADDRESS
                    </p>
                    <a 
                      href={`mailto:${DESIGNER_INFO.email}`}
                      className="text-white hover:text-cyanAccent font-mono text-sm md:text-base font-semibold truncate block transition-colors"
                    >
                      {DESIGNER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-magenta hover:text-white text-white text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-white/70" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Behance Link Card */}
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 }}
                href={DESIGNER_INFO.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-magenta flex items-center justify-between gap-4 backdrop-blur-xs transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-magenta/20 text-magenta">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                      OFFICIAL BEHANCE PORTFOLIO
                    </p>
                    <p className="text-white group-hover:text-cyanAccent font-mono text-sm md:text-base font-semibold transition-colors">
                      behance.net/jabirmahmudk
                    </p>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-magenta transition-colors" />
              </motion.a>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 px-2">
                <MapPin className="w-3.5 h-3.5 text-cyanAccent" />
                <span>COMILLA, BANGLADESH • OPEN FOR FREELANCE & CREATIVE INQUIRIES</span>
              </div>
            </div>

            {/* Quick Action Buttons with Magnetic Touch and Magenta Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton href={`mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20%E2%80%94%20Jabir%20Mahmud%20Kawsar`}>
                <div className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-cobalt hover:bg-gradient-to-r hover:from-cobalt hover:to-magenta text-white font-mono text-xs tracking-wider font-semibold shadow-lg shadow-cobalt/25 hover:shadow-magenta/30 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>LET'S TALK ABOUT YOUR PROJECT</span>
                </div>
              </MagneticButton>

              <MagneticButton href={DESIGNER_INFO.behanceUrl} target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-magenta font-mono text-xs tracking-wider font-semibold transition-all">
                  <span>EXPLORE MY BEHANCE</span>
                  <ExternalLink className="w-4 h-4 text-cyanAccent" />
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Project Brief Draft Helper (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative shadow-2xl hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <h3 className="font-headline font-bold text-lg text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-magenta" />
                  <span>Quick Inquiry Assistant</span>
                </h3>
                <span className="font-mono text-[10px] text-white/40 uppercase">
                  DIRECT EMAIL LAUNCHER
                </span>
              </div>

              <p className="text-xs text-white/70 mb-5 leading-relaxed font-normal">
                Fill in your project details below to format an immediate email message to Jabir Mahmud Kawsar.
              </p>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = generateMailtoLink();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name-input" className="block text-xs font-mono uppercase text-white/60 mb-1.5">
                    Your Name / Brand
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins or Studio Apex"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-hidden focus:border-magenta transition-colors font-sans placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="project-type-select" className="block text-xs font-mono uppercase text-white/60 mb-1.5">
                    Project Category
                  </label>
                  <select
                    id="project-type-select"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#140408] border border-white/15 text-white text-sm focus:outline-hidden focus:border-magenta transition-colors font-sans"
                  >
                    <option value="Packaging Design">Packaging Design</option>
                    <option value="Product Advertising">Product Advertising</option>
                    <option value="Print & Flyer Design">Print & Flyer Design</option>
                    <option value="Visual Identity & Branding">Visual Identity & Branding</option>
                    <option value="Social Media Graphics">Social Media Graphics</option>
                    <option value="Photo Editing & Composition">Photo Editing & Composition</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project-brief-input" className="block text-xs font-mono uppercase text-white/60 mb-1.5">
                    Project Brief / Message
                  </label>
                  <textarea
                    id="project-brief-input"
                    rows={3}
                    value={projectMessage}
                    onChange={(e) => setProjectMessage(e.target.value)}
                    placeholder="Tell me a bit about your visual goals, timeline, and expectations..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-hidden focus:border-magenta transition-colors font-sans placeholder:text-white/30 resize-none"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cobalt to-magenta hover:from-cobalt-dark hover:to-magenta-dark text-white font-mono text-xs tracking-wider font-semibold transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-magenta/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>OPEN EMAIL CLIENT WITH BRIEF</span>
                  </button>
                </MagneticButton>

                <p className="text-[11px] font-mono text-center text-white/40 pt-1">
                  Sends directly to <span className="text-cyanAccent">{DESIGNER_INFO.email}</span>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
