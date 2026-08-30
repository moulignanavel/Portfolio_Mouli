import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { IconButton } from '../common/IconButton';
import { 
  Menu, 
  X, 
  ChevronRight,
  Sun,
  Moon,
  Download
} from 'lucide-react';
import { cn } from '../../utils/cn';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Sticky Navbar component matching the Digital Developer Lab design system.
 * Features scroll detection (transparent to blurred/bordered), desktop navigation,
 * smooth scrolling triggers, Framer Motion hover indicators, theme toggle, and mobile drawer menu.
 */
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect initial theme from localStorage (defaults to dark mode)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // Apply theme class to document.documentElement and sync localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('portfolio-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.style.colorScheme = 'dark';
        localStorage.setItem('portfolio-theme', 'dark');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handle scroll detection for glassmorphism backdrop & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active section detection based on section elements in view
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/16TfpN2GqVQ3U7F52e-w5c5aZaJFwkfZc/view?usp=sharing', '_blank');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-lab-bg/80 backdrop-blur-md border-b border-lab-border py-3 shadow-lab-card'
          : 'bg-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Brand Identity Logo & Command Tag */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-3 transition-transform active:scale-95"
        >
          <div className="relative w-9 h-9 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center text-lab-cyan font-mono text-xs sm:text-sm font-extrabold group-hover:border-lab-cyan/50 group-hover:shadow-lab-glow-cyan transition-all duration-300">
            &lt;M/&gt;
            <div className="absolute inset-0 bg-lab-cyan/10 rounded-lab opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-lab-text-primary tracking-tight group-hover:text-lab-cyan transition-colors">
              MOWLEESWARAN G
            </span>
            <span className="font-mono text-[10px] text-lab-cyan font-semibold tracking-wider">
              JAVA_FULL_STACK_DEV
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-lab-panel/70 border border-lab-border backdrop-blur-md shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={cn(
                  'relative px-3 py-1.5 text-xs xl:text-sm font-mono transition-colors duration-200 rounded-full',
                  isActive
                    ? 'text-lab-cyan font-semibold'
                    : 'text-lab-text-secondary hover:text-lab-text-primary'
                )}
              >
                {/* Framer Motion Active Highlight Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-lab-bg border border-lab-cyan/20 z-0 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Desktop Actions (Theme Toggle & Resume Button) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lab bg-lab-panel border border-lab-border text-lab-text-secondary hover:text-lab-cyan hover:border-lab-cyan/35 transition-all duration-200 focus-visible:outline-none flex items-center justify-center cursor-pointer"
            aria-label="Toggle Light and Dark Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Prominent Resume Button */}
          <Button
            variant="primary"
            size="sm"
            icon={Download}
            iconPosition="left"
            onClick={handleResumeClick}
            className="font-mono text-xs font-bold bg-lab-cyan text-white dark:text-slate-950 border-transparent hover:opacity-90 hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-all duration-300"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger Drawer Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lab bg-lab-panel border border-lab-border text-lab-text-secondary hover:text-lab-cyan transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <IconButton
            icon={mobileMenuOpen ? X : Menu}
            variant="glass"
            size="md"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </Container>

      {/* Mobile Slide-down Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-lab-border bg-lab-bg/95 backdrop-blur-xl overflow-hidden shadow-lab-card"
          >
            <Container className="py-6 flex flex-col gap-4 bg-lab-dots">
              <div className="flex items-center justify-between pb-3 border-b border-lab-border/60">
                <span className="font-mono text-xs text-lab-text-muted">// MENU_NAVIGATION</span>
                <Badge variant="cyan" size="sm" dot>STATUS: ACTIVE</Badge>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-lab font-mono text-sm transition-all',
                        isActive
                          ? 'bg-lab-panel border border-lab-cyan/30 text-lab-cyan font-semibold'
                          : 'text-lab-text-secondary hover:text-lab-text-primary hover:bg-lab-panel/40'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-lab-text-muted font-mono">0{index + 1}.</span>
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={cn('w-4 h-4', isActive ? 'text-lab-cyan' : 'text-lab-text-muted')} />
                    </motion.a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-lab-border/60 flex flex-col gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lab bg-lab-panel border border-lab-border text-lab-text-secondary hover:text-lab-cyan transition-all font-mono text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {theme === 'light' ? (
                      <Sun className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Moon className="w-4 h-4 text-indigo-400" />
                    )}
                    <span>Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </div>
                  <Badge variant={theme === 'dark' ? 'amber' : 'indigo'} size="sm">
                    {theme.toUpperCase()}
                  </Badge>
                </button>

                <Button
                  variant="primary"
                  fullWidth
                  icon={Download}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleResumeClick();
                  }}
                  className="bg-lab-cyan text-white dark:text-slate-950 hover:opacity-90 font-mono"
                >
                  Download Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
