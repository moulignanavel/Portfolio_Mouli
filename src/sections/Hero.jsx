import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { IconButton } from '../components/common/IconButton';
import { GlassCard } from '../components/common/GlassCard';
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Copy,
  Check,
  Download
} from 'lucide-react';

/**
 * Hero section component for the Digital Developer Lab portfolio.
 * Features a 2-column layout on desktop:
 * - Left: Developer identity, Java Full Stack badge, headline, description, primary & secondary CTAs, social links.
 * - Right: Interactive IDE / Code Editor visual interface ("DeveloperService.java") with terminal metrics.
 */
export const Hero = React.memo(() => {
  const [copied, setCopied] = React.useState(false);

  const handleCopySnippet = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/16TfpN2GqVQ3U7F52e-w5c5aZaJFwkfZc/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="relative min-h-0 lg:min-h-[calc(100vh-5rem)] flex items-center justify-center py-4 sm:py-6 overflow-hidden">
      {/* Background Decorative Tech Accents */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Developer Identity & Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Role Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="cyan" size="md" dot dotPulse>
                Java Full Stack Developer
              </Badge>
              <Badge variant="outline" size="sm" className="hidden sm:inline-flex">
                <Cpu className="w-3 h-3 text-lab-emerald" /> IT Student
              </Badge>
            </div>

            {/* Developer Name */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-lab-text-primary mb-3">
              Hi, I'm <span className="animate-gradient-text">Mowleeswaran G</span>
            </h1>

            {/* Strong Scalable Web Applications Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-lab-text-primary leading-tight mb-4">
              Engineering <span className="text-lab-cyan">Scalable Web Applications</span> & Robust Full-Stack Systems
            </h2>

            {/* Short Professional Description */}
            <p className="text-sm sm:text-base text-lab-text-secondary leading-relaxed max-w-2xl mb-8">
              Final-year Information Technology student specializing in high-performance Java Spring Boot backends, responsive React frontends, scalable RESTful APIs, and clean software architecture.
            </p>

            {/* Call To Action Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={Download}
                iconPosition="left"
                onClick={handleResumeDownload}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social & Connect Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-lab-border w-full">
              <span className="text-xs font-mono text-lab-text-muted uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <IconButton
                  icon={Github}
                  label="GitHub Profile"
                  variant="outline"
                  size="md"
                  href="https://github.com"
                  target="_blank"
                />
                <IconButton
                  icon={Linkedin}
                  label="LinkedIn Profile"
                  variant="outline"
                  size="md"
                  href="https://linkedin.com"
                  target="_blank"
                />
              </div>

              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-lab-text-muted">
                <span className="w-2 h-2 rounded-full bg-lab-emerald animate-pulse" />
                <span>AVAILABLE_FOR_ROLES</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Editor / IDE Terminal Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 w-full"
          >
            <GlassCard 
              glow="cyan" 
              padding="none" 
              className="shadow-lab-glow-cyan border-lab-border hover:border-lab-cyan/40"
            >
              {/* Editor Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-lab-panel border-b border-lab-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Editor File Tab */}
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-lab-bg border border-lab-border text-xs font-mono text-lab-cyan">
                  <Code2 className="w-3.5 h-3.5 text-lab-cyan" />
                  <span>DeveloperService.java</span>
                </div>

                {/* Copy Snippet Action */}
                <button
                  onClick={handleCopySnippet}
                  className="p-1 rounded text-lab-text-muted hover:text-lab-text-primary transition-colors focus-visible:outline-none"
                  aria-label="Copy Code Snippet"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-lab-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Snippet Display Area */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-lab-text-primary bg-lab-subtle">
                <div className="space-y-1">
                  <div className="text-lab-text-muted">// Java Full Stack Developer Blueprint</div>
                  <div>
                    <span className="text-purple-400">@RestController</span>
                  </div>
                  <div>
                    <span className="text-purple-400">@RequestMapping</span>
                    <span className="text-emerald-400">("/api/v1/developer")</span>
                  </div>
                  <div>
                    <span className="text-sky-400">public class </span>
                    <span className="text-amber-300">DeveloperService </span>
                    <span className="text-sky-400 font-bold">&#123;</span>
                  </div>

                  <div className="pl-2 sm:pl-4">
                    <span className="text-purple-400">@Autowired</span>
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-sky-400">private </span>
                    <span className="text-indigo-300">FullStackEngine </span>
                    <span className="text-slate-200">engine;</span>
                  </div>

                  <div className="pl-2 sm:pl-4 pt-2">
                    <span className="text-purple-400">@GetMapping</span>
                    <span className="text-emerald-400">("/profile")</span>
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-sky-400">public </span>
                    <span className="text-amber-300">ResponseEntity</span>
                    <span className="text-slate-300">&lt;</span>
                    <span className="text-indigo-300">Profile</span>
                    <span className="text-slate-300">&gt; </span>
                    <span className="text-blue-300">getCapabilities</span>
                    <span className="text-slate-300">() &#123;</span>
                  </div>

                  <div className="pl-4 sm:pl-8 text-slate-300">
                    <span className="text-sky-400">return </span>
                    <span className="text-slate-300">ResponseEntity.</span>
                    <span className="text-blue-300">ok</span>
                    <span className="text-slate-300">(</span>
                  </div>
                  <div className="pl-6 sm:pl-12 text-slate-300">
                    <span className="text-indigo-300">Profile</span>
                    <span className="text-slate-300">.</span>
                    <span className="text-blue-300">builder</span>
                    <span className="text-slate-300">()</span>
                  </div>
                  <div className="pl-8 sm:pl-16">
                    <span className="text-slate-300">.name(</span>
                    <span className="text-emerald-400">"Mowleeswaran G"</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="pl-8 sm:pl-16">
                    <span className="text-slate-300">.stack(</span>
                    <span className="text-emerald-400">"Java, Spring, React, SQL"</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="pl-8 sm:pl-16">
                    <span className="text-slate-300">.status(</span>
                    <span className="text-emerald-400">"BUILDING_SCALABLE_APPS"</span>
                    <span className="text-slate-300">)</span>
                  </div>
                  <div className="pl-8 sm:pl-16">
                    <span className="text-slate-300">.build()</span>
                  </div>
                  <div className="pl-4 sm:pl-8">
                    <span className="text-slate-300">);</span>
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-slate-300">&#125;</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-bold">&#125;</span>
                    <span className="inline-block w-2 h-4 ml-1 bg-lab-cyan animate-pulse align-middle" />
                  </div>
                </div>
              </div>

              {/* IDE Terminal Status Footer */}
              <div className="px-4 py-3 bg-lab-panel border-t border-lab-border flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-lab-emerald">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SPRING_BOOT // RUNNING</span>
                </div>
                <div className="flex items-center gap-3 text-lab-text-muted">
                  <span>UTF-8</span>
                  <span className="text-lab-cyan">PORT: 8080</span>
                </div>
              </div>
            </GlassCard>

            {/* Quick Tech Architecture Micro-Badges */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3">
              <div className="p-1.5 sm:p-2 rounded bg-lab-panel/60 border border-lab-border text-center hover:scale-105 transition-transform animate-float">
                <span className="text-[9px] sm:text-[10px] font-mono text-lab-text-muted block">BACKEND</span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-lab-cyan">Java 21</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-lab-panel/60 border border-lab-border text-center hover:scale-105 transition-transform animate-float-delayed">
                <span className="text-[9px] sm:text-[10px] font-mono text-lab-text-muted block">FRAMEWORK</span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-indigo-400">Spring Boot</span>
              </div>
              <div className="p-1.5 sm:p-2 rounded bg-lab-panel/60 border border-lab-border text-center hover:scale-105 transition-transform animate-float">
                <span className="text-[9px] sm:text-[10px] font-mono text-lab-text-muted block">FRONTEND</span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-emerald-400">React + Vite</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
});

export default Hero;
