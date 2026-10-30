import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  'aria-label': ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Small, controlled movement range (max 6px)
    const distanceX = (clientX - centerX) * 0.15;
    const distanceY = (clientY - centerY) * 0.15;
    x.set(Math.max(-6, Math.min(6, distanceX)));
    y.set(Math.max(-6, Math.min(6, distanceY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      style={isDesktop ? { x, y } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} role="button" tabIndex={0} aria-label={ariaLabel} className="inline-block">
      {content}
    </div>
  );
};
