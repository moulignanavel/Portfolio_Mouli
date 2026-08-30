import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Responsive max-width container wrapper for standard section alignment.
 * Responsive sizes:
 * Mobile: px-4 (16px)
 * Tablet: sm:px-6 (24px)
 * Desktop: lg:px-8 (32px)
 * Max Width: max-w-7xl (1280px)
 */
export const Container = ({
  children,
  className = '',
  clean = false,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        !clean && 'max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
