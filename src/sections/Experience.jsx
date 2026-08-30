import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Building2 
} from 'lucide-react';

const INTERNSHIPS = [
  {
    id: 'infosys-springboard',
    role: 'Java Full Stack Developer Intern',
    organization: 'Infosys Springboard',
    duration: 'Jun 2026 – Aug 2026',
    badgeColor: 'emerald',
    accentClass: 'text-emerald-400',
    responsibilities: [
      'Completed practical modules and hands-on projects in Java enterprise development and the Spring ecosystem.',
      'Designed and integrated backend REST services with responsive frontend user interfaces.',
      'Applied object-oriented programming principles, software architecture patterns, and clean code practices.'
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL']
  },
  {
    id: 'skillsync',
    role: 'Java Full Stack Developer Intern',
    organization: 'SkillSync',
    duration: 'Sep 2025 – Nov 2025',
    badgeColor: 'indigo',
    accentClass: 'text-indigo-400',
    responsibilities: [
      'Built full-stack web features using Java Spring Boot backends and dynamic React.js frontends.',
      'Developed and tested RESTful API endpoints for secure frontend-backend communication.',
      'Worked with relational databases to design structured schemas and optimize query performance.'
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'MySQL']
  },
  {
    id: 'ibm-edunet',
    role: 'Frontend Developer Intern',
    organization: 'IBM Edunet Foundation',
    duration: 'Aug 2025 – Sep 2025',
    badgeColor: 'cyan',
    accentClass: 'text-lab-cyan',
    responsibilities: [
      'Developed responsive frontend user interfaces using modern web standards and clean layout design.',
      'Implemented interactive component structures focusing on seamless user experience across devices.',
      'Collaborated on web application development best practices and frontend performance optimization.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
  }
];

/**
 * Experience Section Component matching the Digital Developer Lab design system.
 * Dedicated to Internship Experience:
 * 1. Infosys Springboard (Jun 2026 – Aug 2026)
 * 2. SkillSync (Sep 2025 – Nov 2025)
 * 3. IBM Edunet Foundation (Aug 2025 – Sep 2025)
 */
export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 04. EXPERIENCE_TIMELINE"
          title="Experience"
          subtitle="Full Stack & Frontend Developer Internships"
          description="A timeline of my developer internships and hands-on industry experience."
        />

        {/* --- INTERNSHIPS TIMELINE --- */}
        <div>
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-lab-cyan font-bold">
            <Briefcase className="w-4 h-4 text-lab-cyan" />
            <span>INTERNSHIP_TIMELINE</span>
            <span className="text-lab-border">|</span>
            <span className="text-xs text-lab-text-muted font-normal">3 ROLES</span>
          </div>

          {/* Vertical Timeline */}
          <div className="relative pl-4 sm:pl-8 border-l border-lab-border/80 space-y-6 sm:space-y-8 ml-2 sm:ml-4">
            {INTERNSHIPS.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.38, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group"
              >
                {/* Timeline Dot Node with Animated Radar Pulse */}
                <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-lab-panel border-2 border-lab-cyan group-hover:scale-125 group-hover:bg-lab-cyan transition-all duration-300 shadow-lab-glow-cyan flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-lab-cyan opacity-40 animate-ping" />
                </div>

                <GlassCard glow={internship.badgeColor} padding="md" className="border-lab-border hover:border-lab-border-highlight">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-lab-border">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-mono text-lab-text-primary">
                        {internship.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className={`w-3.5 h-3.5 ${internship.accentClass}`} />
                        <span className="text-sm font-semibold font-mono text-lab-cyan">
                          {internship.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-lab-panel border border-lab-border text-xs font-mono text-lab-text-secondary">
                        <Calendar className="w-3.5 h-3.5 text-lab-cyan" />
                        <span>{internship.duration}</span>
                      </div>
                      <Badge variant={internship.badgeColor} size="sm">
                        INTERNSHIP
                      </Badge>
                    </div>
                  </div>

                  {/* Concise Responsibilities */}
                  <div className="space-y-2 mb-6">
                    {internship.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-lab-text-secondary leading-relaxed">
                        <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${internship.accentClass}`} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-3 border-t border-lab-border/60 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-mono text-lab-text-muted mr-1">TECH:</span>
                    {internship.technologies.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Experience;
