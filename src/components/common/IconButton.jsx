import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Reusable IconButton component for header actions, social links, and code repos.
 * Features Framer Motion tactile micro-interactions (hover scale & tap scale).
 * Variants: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
 * Sizes: 'sm' | 'md' | 'lg'
 */
export const IconButton = React.forwardRef(({
  icon: Icon,
  children,
  label,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  onClick,
  href,
  target,
  rel,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lab-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-lab-bg disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary: 'bg-lab-cyan text-white dark:text-slate-950 hover:opacity-90 shadow-lab-glow-cyan',
    secondary: 'bg-lab-panel text-lab-text-secondary hover:text-lab-text-primary border border-lab-border hover:border-lab-border-highlight hover:bg-lab-panel-hover',
    outline: 'bg-transparent text-lab-text-secondary hover:text-lab-cyan border border-lab-border hover:border-lab-cyan',
    ghost: 'bg-transparent text-lab-text-secondary hover:text-lab-text-primary hover:bg-lab-panel',
    glass: 'glass-panel text-lab-text-secondary hover:text-lab-text-primary hover:border-lab-border-highlight',
  };

  const sizes = {
    sm: 'w-8 h-8 rounded-lab-sm p-1.5',
    md: 'w-10 h-10 rounded-lab p-2',
    lg: 'w-12 h-12 rounded-lab-lg p-2.5',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const content = children || (Icon ? <Icon className={iconSizes[size]} /> : null);
  const isInteractive = !disabled;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={label}
        whileHover={isInteractive ? { scale: 1.06, y: -1 } : undefined}
        whileTap={isInteractive ? { scale: 0.92 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      whileHover={isInteractive ? { scale: 1.06, y: -1 } : undefined}
      whileTap={isInteractive ? { scale: 0.92 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </motion.button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;

