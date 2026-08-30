import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Interactive CustomCursor component matching the Digital Developer Lab design system.
 * Features smooth spring trailing ring, precision cyan dot, interactive hover scaling,
 * and touch-device auto-detection.
 */
export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Smooth physics spring coordinates for the outer trailing ring
  const cursorX = useSpring(0, { stiffness: 450, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 30 });

  // Direct position for the inner dot
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Disable custom cursor on touch devices for native performance
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setDotPos({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering clickable interactive elements
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
      );
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Trailing Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-lab-cyan/60 bg-lab-cyan/10 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 30 : isClicked ? 14 : 18,
          height: isHovered ? 30 : isClicked ? 14 : 18,
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.4)',
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.12)' : 'rgba(56, 189, 248, 0.04)',
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      />

      {/* Inner Precision Cyan Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-lab-cyan shadow-[0_0_6px_rgba(56,189,248,0.9)] pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.25 : isClicked ? 0.6 : 1
          })`,
        }}
      />
    </>
  );
};

export default CustomCursor;
