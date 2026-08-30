import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../common/CustomCursor';

/**
 * BaseLayout wrapper providing background technical grid, top ambient glow,
 * sticky navbar, content region, footer, and interactive custom cursor.
 */
export const BaseLayout = ({ children }) => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-lab-bg text-lab-text-primary flex flex-col relative overflow-x-hidden selection:bg-lab-cyan/20 selection:text-lab-text-primary">
        {/* Interactive Custom Cursor */}
        <CustomCursor />

        {/* Background Technical Grid Overlay */}
        <div className="fixed inset-0 bg-lab-grid opacity-60 pointer-events-none z-0" />
        
        {/* Top Ambient Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] lab-glow-top pointer-events-none z-0" />

        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content Area with Page Entrance Fade */}
        <motion.main 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex-1 relative z-10 pt-20 sm:pt-24 pb-6 sm:pb-10"
        >
          {children}
        </motion.main>

        {/* Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default BaseLayout;


