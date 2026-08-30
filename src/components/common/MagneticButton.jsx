import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * MagneticButton component providing smooth micro-interactive cursor magnetism.
 * Respects OS reduced-motion accessibility rules by falling back to standard button behavior.
 */
export const MagneticButton = ({
  children,
  strength = 0.2, // Magnet pull strength (0.1 to 0.5)
  disabled = false,
  className = '',
  ...props
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || disabled || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (prefersReducedMotion || disabled) {
    return (
      <Button disabled={disabled} className={className} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Button disabled={disabled} className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
