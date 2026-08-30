import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cloud
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    color: 'cyan',
    accentClass: 'text-lab-cyan',
    badgeBorder: 'border-lab-cyan/30',
    skills: [
      { name: 'Java', level: 'Core & Enterprise' },
      { name: 'Python', level: 'Scripting & AI' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    color: 'emerald',
    accentClass: 'text-emerald-400',
    badgeBorder: 'border-emerald-500/30',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup' },
      { name: 'CSS3', level: 'Modern Styling' },
      { name: 'JavaScript', level: 'ES6+ Logic' },
      { name: 'React.js', level: 'Component UI' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    color: 'indigo',
    accentClass: 'text-indigo-400',
    badgeBorder: 'border-indigo-500/30',
    skills: [
      { name: 'Spring Boot', level: 'Microservices & MVC' },
      { name: 'REST APIs', level: 'API Architecture' },
      { name: 'JWT', level: 'Token Authentication' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    color: 'amber',
    accentClass: 'text-amber-400',
    badgeBorder: 'border-amber-500/30',
    skills: [
      { name: 'MySQL', level: 'Relational DB' },
      { name: 'MongoDB', level: 'NoSQL Document DB' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'rose',
    accentClass: 'text-rose-400',
    badgeBorder: 'border-rose-500/30',
    skills: [
      { name: 'Git', level: 'Version Control' },
      { name: 'GitHub', level: 'Code Collaboration' },
      { name: 'Postman', level: 'API Testing' },
      { name: 'VS Code', level: 'IDE Workspace' },
    ],
  },
  {
    id: 'ai-cloud',
    title: 'AI & Cloud',
    icon: Cloud,
    color: 'cyan',
    accentClass: 'text-sky-300',
    badgeBorder: 'border-sky-400/30',
    skills: [
      { name: 'Firebase', level: 'BaaS & Auth' },
      { name: 'Gemini AI', level: 'LLM & Prompt API' },
    ],
  },
];

/**
 * Skills Section Component matching the Digital Developer Lab design system.
 * Features 6 categorized skill cards without percentage progress bars:
 * Languages, Frontend, Backend, Database, Tools, AI & Cloud.
 */
export const Skills = React.memo(() => {
  return (
    <section id="skills" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 02. SKILLS_MATRIX"
          title="Technical Skills"
          subtitle="Core Languages, Frameworks, Databases & AI Development Tools"
          description="A structured breakdown of my full-stack engineering toolkit. Organized by domain without artificial progress percentages."
        />

        {/* 6 Categorized Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <GlassCard
                  glow={category.color}
                  className="h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-lab-border">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center shadow-sm">
                          <CategoryIcon className={`w-4 h-4 ${category.accentClass}`} />
                        </div>
                        <h3 className="font-mono text-base font-bold text-lab-text-primary">
                          {category.title}
                        </h3>
                      </div>
                      <Badge variant={category.color} size="sm">
                        {category.skills.length} TECHS
                      </Badge>
                    </div>

                    {/* Skill Items List (Clean Monospaced Tech Tags & Detail Labels) */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          whileHover={{ x: 4, scale: 1.01 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className="group p-2 sm:p-2.5 rounded-lab-sm bg-lab-panel/70 border border-lab-border hover:border-lab-cyan/40 hover:bg-lab-panel hover:shadow-sm transition-all duration-200 flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-lab-cyan/60 group-hover:bg-lab-cyan group-hover:scale-150 transition-all duration-300" />
                            <span className="font-mono text-xs sm:text-sm font-semibold text-lab-text-primary group-hover:text-lab-cyan transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="font-mono text-[10px] sm:text-[11px] text-lab-text-muted group-hover:text-lab-text-secondary transition-colors pl-3 xs:pl-0">
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Tech Indicator */}
                  <div className="mt-5 pt-3 border-t border-lab-border/60 flex items-center justify-between text-[11px] font-mono text-lab-text-muted">
                    <span className="uppercase tracking-wider">// VERIFIED_STACK</span>
                    <span className={category.accentClass}>READY</span>
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

export default Skills;
