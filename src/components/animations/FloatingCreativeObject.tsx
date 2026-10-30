import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FloatingCreativeObject: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for gentle depth
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle rotation and offset
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const offsetX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const offsetY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={isDesktop ? { x: offsetX, y: offsetY } : undefined}
      className="relative z-20 pointer-events-auto select-none"
    >
      {/* Gentle Floating Idle Container */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={isDesktop ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative cursor-pointer"
        aria-label="Interactive creative companion artifact"
        role="img"
      >
        {/* Soft Ambient Rim Light / Atmospheric Glow (Magenta + Cobalt) */}
        <div 
          className="absolute -inset-4 rounded-full blur-xl transition-all duration-700 opacity-60 group-hover:opacity-90"
          style={{
            background: isHovered 
              ? 'radial-gradient(circle, rgba(225, 29, 116, 0.45) 0%, rgba(23, 107, 255, 0.3) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(23, 107, 255, 0.35) 0%, rgba(85, 200, 255, 0.2) 60%, transparent 75%)',
          }}
        />

        {/* 3D Glassmorphic Polyhedral Creative Artifact */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-white/20 via-burgundy/40 to-black/80 backdrop-blur-md p-1 border border-white/25 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          {/* Inner Geometric Prism SVG */}
          <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-[#1F070E]/90 to-[#120408]/95 overflow-hidden relative flex items-center justify-center p-2">
            
            {/* Shifting Iridescent Gradient */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-8 opacity-40 pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #176BFF, #55C8FF, #E11D74, #C7A65B, #176BFF)',
              }}
            />

            {/* Faceted Glass Specular Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/20 pointer-events-none" />

            {/* Geometric Vector Emblem */}
            <svg
              viewBox="0 0 64 64"
              className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer faceted diamond frame */}
              <polygon
                points="32,4 58,18 58,46 32,60 6,46 6,18"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                fill="none"
              />
              <polygon
                points="32,10 52,22 52,42 32,54 12,42 12,22"
                stroke={isHovered ? '#E11D74' : '#55C8FF'}
                strokeWidth="1.2"
                className="transition-colors duration-300"
                fill="none"
              />

              {/* Central Stylized Monogram Lines */}
              <path
                d="M23 23 V37 C23 40.5 25.5 42 28 41"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M34 42 V22 L40 33 L46 22 V42"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Interactive Core Energy Dot */}
              <circle
                cx="32"
                cy="32"
                r={isHovered ? "3.5" : "2"}
                fill={isHovered ? "#FF5EA9" : "#176BFF"}
                className="transition-all duration-300 animate-ping"
              />
            </svg>
          </div>

          {/* Exterior Corner Glass Pips */}
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-magenta shadow-xs" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-cyanAccent shadow-xs" />
        </div>

        {/* Floating Tooltip Label (Revealed on Desktop Hover) */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.2 }}
          className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1 rounded-full bg-burgundy-dark/95 border border-white/15 text-[10px] font-mono tracking-widest text-cyanAccent whitespace-nowrap shadow-xl pointer-events-none"
        >
          <span>ARTIFACT // JM CREATIVE CORE</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
