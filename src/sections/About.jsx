import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { 
  GraduationCap, 
  BrainCircuit, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Server
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HIGHLIGHT_CARDS = [
  {
    id: 'fullstack',
    title: 'Java Full Stack',
    icon: Server,
    color: 'cyan',
    accentClass: 'text-lab-cyan',
    description: 'Specializing in Java, Spring Boot, REST APIs, and modern React frontend architectures.',
    badge: 'CORE_FOCUS',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: BrainCircuit,
    color: 'indigo',
    accentClass: 'text-indigo-400',
    description: 'Passionate about Data Structures, Object-Oriented Design, and algorithmic efficiency.',
    badge: 'ALGORITHMS',
  },
  {
    id: 'real-world',
    title: 'Real-World Projects',
    icon: Layers,
    color: 'emerald',
    accentClass: 'text-emerald-400',
    description: 'Dedicated to translating engineering concepts into production-ready web applications.',
    badge: 'END_TO_END',
  },
];

const QUICK_STATS = [
  { label: 'DEGREE', value: 'Information Technology' },
  { label: 'GRADUATION YEAR', value: '2027' },
  { label: 'PRIMARY STACK', value: 'Java + Spring + React' },
  { label: 'STATUS', value: 'Open for Opportunities' },
];

/**
 * About Section Component for Digital Developer Lab portfolio.
 * Highlights Mowleeswaran's IT education background (graduating 2027),
 * Java Full Stack specialization, real-world application passion, 3 highlight cards,
 * and a technical Developer Identity visual card (no fake stock photos).
 */
export const About = React.memo(() => {
  return (
    <section id="about" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 01. ABOUT_ME"
          title="About Me"
          subtitle="Information Technology Student & Java Full Stack Developer"
          description="Combining solid computer science fundamentals with modern software engineering practices to build scalable, high-impact web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-6 sm:mb-8">
          
          {/* Left Column: Professional Story / Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <GlassCard glow="none" className="space-y-4 text-lab-text-secondary leading-relaxed">
              <p className="text-base text-lab-text-primary font-medium">
                Hello! I'm <span className="text-lab-cyan font-bold">Mowleeswaran G</span>, an Information Technology student graduating in <span className="text-lab-cyan font-semibold font-mono">2027</span>.
              </p>
              
              <p className="text-sm sm:text-base">
                My primary technical focus centers on <strong className="text-lab-text-primary">Java Full Stack Development</strong>. I specialize in engineering robust backend services using Java and Spring Boot, combined with responsive, dynamic frontend interfaces powered by React and modern Tailwind CSS.
              </p>

              <p className="text-sm sm:text-base">
                I am deeply passionate about building <strong className="text-lab-text-primary">real-world web applications</strong> that solve genuine problems. Whether architecting clean REST APIs, optimizing SQL query performance, or crafting intuitive user interfaces, I focus on write clean, maintainable, and production-ready code.
              </p>

              <div className="pt-4 border-t border-lab-border flex flex-wrap gap-2">
                <Badge variant="cyan" dot>JAVA 21</Badge>
                <Badge variant="indigo" dot>SPRING BOOT</Badge>
                <Badge variant="emerald" dot>REACT 19</Badge>
                <Badge variant="amber" dot>MYSQL</Badge>
                <Badge variant="outline">REST APIs</Badge>
              </div>
            </GlassCard>

            {/* Quick Technical Specs Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {QUICK_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                >
                  <GlassCard padding="sm" hoverEffect={false} className="border-lab-border/80 h-full">
                    <span className="text-[10px] font-mono text-lab-text-muted block uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-semibold text-lab-text-primary mt-1 block break-words leading-tight">
                      {stat.value}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Technical Developer Identity Visual Element (No fake images) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <GlassCard glow="cyan" padding="md" className="relative overflow-hidden shadow-lab-card flex flex-col justify-between">
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-lab-border font-mono text-xs">
                <div className="flex items-center gap-2 text-lab-cyan">
                  <Terminal className="w-4 h-4" />
                  <span>IDENTITY_CARD // VERIFIED</span>
                </div>
                <Badge variant="emerald" size="sm" dot>
                  GRAD_2027
                </Badge>
              </div>

              {/* Developer Rectangular Photo & Profile Header */}
              <div className="flex flex-col items-center text-center mb-4">
                {/* ID Photo Frame - Cover Edge-to-Edge Fill (Responsive Size) */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-xl overflow-hidden border-2 border-lab-cyan/60 shadow-lab-glow-cyan mb-4 bg-lab-subtle">
                  <img 
                    src={profileImg} 
                    alt="Mowleeswaran G" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                </div>

                <h3 className="font-mono text-base sm:text-lg font-bold text-lab-text-primary">
                  MOWLEESWARAN G
                </h3>
                <span className="text-xs font-mono font-semibold text-lab-cyan tracking-wider mt-0.5">
                  JAVA_FULL_STACK_DEV
                </span>
                
                <div className="mt-2">
                  <Badge variant="outline" size="sm">
                    <GraduationCap className="w-3.5 h-3.5 text-lab-cyan" /> IT Student (2027)
                  </Badge>
                </div>
              </div>

              {/* Core Engineering Attributes - Compact Grid */}
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] pt-3 border-t border-lab-border">
                <div className="p-2 rounded bg-lab-bg/60 border border-lab-border flex flex-col justify-center">
                  <span className="text-lab-text-muted text-[10px]">DEGREE</span>
                  <span className="text-lab-text-primary font-semibold truncate">B.Tech (IT)</span>
                </div>
                <div className="p-2 rounded bg-lab-bg/60 border border-lab-border flex flex-col justify-center">
                  <span className="text-lab-text-muted text-[10px]">GRADUATION</span>
                  <span className="text-lab-cyan font-semibold">Class of 2027</span>
                </div>
                <div className="p-2 rounded bg-lab-bg/60 border border-lab-border flex flex-col justify-center">
                  <span className="text-lab-text-muted text-[10px]">SPECIALIZATION</span>
                  <span className="text-indigo-400 font-semibold truncate">Full Stack Systems</span>
                </div>
                <div className="p-2 rounded bg-lab-bg/60 border border-lab-border flex flex-col justify-center">
                  <span className="text-lab-text-muted text-[10px]">FOCUS</span>
                  <span className="text-emerald-400 font-semibold truncate">Web Applications</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {HIGHLIGHT_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard 
                  glow={card.color} 
                  className="h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center shadow-sm">
                        <Icon className={`w-5 h-5 ${card.accentClass}`} />
                      </div>
                      <Badge variant={card.color} size="sm">
                        {card.badge}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold font-mono text-lab-text-primary mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-lab-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-lab-border/60 flex items-center justify-between text-[11px] font-mono text-lab-text-muted">
                    <span>STATUS: ACTIVE</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${card.accentClass}`} />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
});

export default About;
