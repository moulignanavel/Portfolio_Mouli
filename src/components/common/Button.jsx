import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

/**
 * Reusable Button component for the Digital Developer Lab design system.
 * Features Framer Motion tactile micro-interactions (hover scale & tap scale).
 * Variants: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
 * Sizes: 'sm' | 'md' | 'lg'
 */
export const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
  onClick,
  ...props
}, ref) => {
  const baseStyles = 'group inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-lab-bg disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-lab-cyan text-white dark:text-slate-950 hover:opacity-90 font-semibold shadow-lab-glow-cyan border border-transparent',
    secondary: 'bg-lab-panel text-lab-text-primary border border-lab-border hover:border-lab-border-highlight hover:bg-lab-panel-hover',
    outline: 'bg-transparent text-lab-text-primary border border-lab-border hover:border-lab-cyan hover:text-lab-cyan',
    ghost: 'bg-transparent text-lab-text-secondary hover:text-lab-text-primary hover:bg-lab-panel',
    glass: 'glass-panel text-lab-text-primary hover:border-lab-border-highlight hover:bg-lab-panel-hover shadow-lab-card',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-lab-sm gap-1.5',
    md: 'text-sm px-4 py-2 rounded-lab gap-2',
    lg: 'text-base px-6 py-3 rounded-lab gap-2.5',
  };

  const isInteractive = !disabled && !loading;

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={isInteractive ? { scale: 1.02, y: -1 } : undefined}
      whileTap={isInteractive ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
      ) : null}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;

