import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * GlassCard component for the Digital Developer Lab visual identity.
 * Features 1px tech border, subtle backdrop blur, glow accent options, hardware-accelerated hover elevation, and responsive padding.
 * Accent glows: 'none' | 'cyan' | 'indigo' | 'emerald' | 'amber' | 'rose'
 */
export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
  padding = 'md', // 'none' | 'sm' | 'md' | 'lg'
  ...props
}) => {

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const glows = {
    none: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none',
    cyan: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none hover:shadow-[0_0_20px_rgba(2,132,199,0.18)] dark:hover:shadow-lab-glow-cyan hover:border-lab-cyan/50',
    indigo: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none hover:shadow-[0_0_20px_rgba(99,102,241,0.18)] dark:hover:shadow-lab-glow-indigo hover:border-indigo-500/50',
    emerald: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none hover:shadow-[0_0_20px_rgba(16,185,129,0.18)] dark:hover:shadow-lab-glow-emerald hover:border-emerald-500/50',
    amber: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none hover:shadow-[0_0_20px_rgba(245,158,11,0.18)] hover:border-amber-500/50',
    rose: 'shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-none hover:shadow-[0_0_20px_rgba(244,63,94,0.18)] hover:border-rose-500/50',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, scale: 1.005 } : undefined}
      transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'group glass-panel rounded-lab relative overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:bg-lab-panel-hover hover:border-lab-border-highlight',
        glows[glow],
        paddings[padding],
        className
      )}
      {...props}
    >
      {/* Animated Top Cyan Beam Accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lab-cyan/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Light Shimmer Sweep Effect on Hover */}
      <div className="absolute top-0 -left-full group-hover:left-[200%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] dark:via-white/[0.04] to-transparent skew-x-12 transition-all duration-1000 ease-in-out pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;

