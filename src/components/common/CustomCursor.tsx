import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch || prefersReducedMotion) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 20 : 12),
          y: mousePosition.y - (isHovered ? 20 : 12),
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
          borderColor: isHovered ? '#E11D74' : 'rgba(23, 107, 255, 0.6)',
          borderWidth: 1.5,
          backgroundColor: isHovered ? 'rgba(225, 29, 116, 0.1)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Center point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? '#FF5EA9' : '#176BFF',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
        }}
      />
    </div>
  );
};
