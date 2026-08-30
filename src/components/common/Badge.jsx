import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable Badge component for tech tags, status badges, and system indicators.
 * Variants: 'default' | 'cyan' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'outline'
 * Dot variants: true / false
 */
export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  dotPulse = true,
  className = '',
  icon: Icon = null,
}) => {
  const baseStyles = 'inline-flex items-center font-mono tracking-wide rounded-md transition-colors';

  const variants = {
    default: 'bg-lab-panel text-lab-text-secondary border border-lab-border',
    cyan: 'bg-sky-950/40 text-lab-cyan border border-sky-500/30',
    indigo: 'bg-indigo-950/40 text-indigo-300 border border-indigo-500/30',
    emerald: 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30',
    amber: 'bg-amber-950/40 text-amber-300 border border-amber-500/30',
    rose: 'bg-rose-950/40 text-rose-300 border border-rose-500/30',
    outline: 'bg-transparent text-lab-text-secondary border border-lab-border',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };

  const dotColors = {
    default: 'bg-lab-text-muted',
    cyan: 'bg-lab-cyan',
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    outline: 'bg-lab-text-secondary',
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            dotColors[variant] || dotColors.default,
            dotPulse && 'animate-pulse-subtle'
          )}
        />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
