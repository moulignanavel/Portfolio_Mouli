import React from 'react';
import { cn } from '../../utils/cn';

/**
 * SectionHeading component for technical "Digital Developer Lab" sections.
 * Features a monospaced code badge tag, title, optional description, and action slot.
 */
export const SectionHeading = ({
  tag = '',
  title,
  subtitle = '',
  description = '',
  align = 'left', // 'left' | 'center'
  action = null,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-4 sm:mb-6 flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        action && !isCenter ? 'md:flex-row md:items-end md:justify-between' : '',
        className
      )}
    >
      <div className={cn('max-w-2xl', isCenter ? 'mx-auto' : '')}>
        {/* Technical code badge tag */}
        {tag && (
          <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-md bg-lab-panel border border-lab-border text-xs font-mono text-lab-cyan tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-cyan animate-pulse-subtle" />
            <span>{tag}</span>
          </div>
        )}

        {/* Primary Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-lab-text-primary">
          {title}
        </h2>

        {/* Optional Subtitle / Kicker */}
        {subtitle && (
          <p className="mt-2 text-base sm:text-lg font-medium text-lab-cyan">
            {subtitle}
          </p>
        )}

        {/* Description Text */}
        {description && (
          <p className="mt-3 text-sm sm:text-base text-lab-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Optional Right Action Element */}
      {action && (
        <div className={cn('mt-4 md:mt-0 shrink-0', isCenter ? 'mt-6' : '')}>
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
