import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { IconButton } from '../common/IconButton';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Sparkles
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

/**
 * Footer Component matching the Digital Developer Lab design system.
 * Features Mowleeswaran G brand, Java Full Stack Developer title, quick links,
 * GitHub / LinkedIn / Email actions, scroll-to-top button, and dynamic copyright year.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-lab-subtle border-t border-lab-border text-lab-text-secondary pt-16 pb-12 overflow-hidden">
      {/* Background Radial Ambient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-lab-cyan/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-lab-border/60">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center text-lab-cyan font-mono text-sm font-bold shadow-sm">
                &lt;/&gt;
              </div>
              <div>
                <span className="font-mono text-base font-extrabold text-lab-text-primary tracking-tight block">
                  Mowleeswaran G
                </span>
                <span className="font-mono text-xs text-lab-cyan font-semibold block">
                  Java Full Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-lab-text-muted leading-relaxed max-w-sm">
              Passionate IT undergraduate specializing in Java enterprise backends, Spring Boot microservices, and modern React frontend architectures.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <Badge variant="cyan" size="sm" dot>
                SYSTEM_ONLINE
              </Badge>
              <span className="font-mono text-[11px] text-lab-text-muted">
                GRADUATION_2027
              </span>
            </div>
          </div>

          {/* Quick Navigation Links Column */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold text-lab-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-lab-cyan" /> // NAVIGATION
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lab-text-muted hover:text-lab-cyan transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span className="text-lab-border">&gt;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Scroll Top Column */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold text-lab-text-primary uppercase tracking-wider mb-4 md:text-right">
                // CONNECT
              </h4>

              <div className="flex items-center gap-3">
                <IconButton
                  icon={Github}
                  label="GitHub Profile"
                  onClick={() => window.open('https://github.com', '_blank')}
                />
                <IconButton
                  icon={Linkedin}
                  label="LinkedIn Profile"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                />
                <IconButton
                  icon={Mail}
                  label="Send Direct Email"
                  onClick={() => window.open('mailto:moulignanavel@gmail.com', '_blank')}
                />
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-3 py-2 rounded-lab bg-lab-panel border border-lab-border hover:border-lab-border-highlight text-xs font-mono text-lab-text-secondary hover:text-lab-cyan transition-all"
            >
              <span>BACK_TO_TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-lab-cyan transition-transform duration-200 group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-lab-text-muted text-center sm:text-left">
          <div>
            &copy; {currentYear} <span className="text-lab-text-primary font-bold">Mowleeswaran G</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with React, Vite & Tailwind CSS</span>
            <Sparkles className="w-3.5 h-3.5 text-lab-cyan" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
