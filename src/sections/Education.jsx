import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  Award, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

const EDUCATION_HISTORY = [
  {
    id: 'btech-it',
    degree: 'B.Tech — Information Technology',
    institution: 'Mailam Engineering College, Mailam, Tamil Nadu',
    timeline: 'Expected Graduation: 2027',
    metricLabel: 'CGPA',
    metricValue: '8.81 / 10 (Up to 6th Sem)',
    badgeText: 'UNDERGRADUATE DEGREE',
    badgeColor: 'cyan',
    accentClass: 'text-lab-cyan',
    icon: GraduationCap,
    highlights: [
      'Specializing in Java Full Stack Development, Data Structures, and Database Systems.',
      'Active student contributor and department Class Representative.'
    ]
  },
  {
    id: 'hsc-school',
    degree: 'HSC — Higher Secondary Certificate',
    institution: 'TAS Higher Secondary School, Sedarapet, Puducherry',
    timeline: '2021 – 2023',
    metricLabel: 'Percentage',
    metricValue: '87.5%',
    badgeText: 'HIGHER SECONDARY',
    badgeColor: 'emerald',
    accentClass: 'text-emerald-400',
    icon: BookOpen,
    highlights: [
      'Completed Higher Secondary Education with focus on Physics, Chemistry, and Mathematics.',
      'Achieved strong academic standing with 87.5% distinction.'
    ]
  }
];

/**
 * Education Section Component matching the Digital Developer Lab design system.
 * Showcases B.Tech (Mailam Engineering College, 2027, CGPA 8.88)
 * and HSC (TAS English Higher Secondary School, 2021-2023, 87.5%).
 */
export const Education = React.memo(() => {
  return (
    <section id="education" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 07. ACADEMIC_BACKGROUND"
          title="Education"
          subtitle="Academic Qualifications & Performance Metrics"
          description="Formal academic qualification timeline in Information Technology and Secondary Education."
        />

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {EDUCATION_HISTORY.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.38, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <GlassCard
                  glow={item.badgeColor}
                  padding="lg"
                  className="h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-lab-border hover:border-lab-border-highlight"
                >
                  <div>
                    {/* Header Row: Degree Icon & Type Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-lab-border">
                      <div className="w-11 h-11 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center shadow-sm">
                        <Icon className={`w-5 h-5 ${item.accentClass}`} />
                      </div>
                      <Badge variant={item.badgeColor} size="sm">
                        {item.badgeText}
                      </Badge>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl font-bold font-mono text-lab-text-primary mb-2">
                      {item.degree}
                    </h3>

                    {/* Institution Name */}
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className={`w-4 h-4 ${item.accentClass}`} />
                      <span className="text-sm font-semibold font-mono text-lab-cyan">
                        {item.institution}
                      </span>
                    </div>

                    {/* Timeline / Year */}
                    <div className="flex items-center gap-2 mb-6 text-xs font-mono text-lab-text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-lab-text-muted" />
                      <span>{item.timeline}</span>
                    </div>

                    {/* Academic Metric Box (CGPA / Percentage) */}
                    <div className="p-3.5 rounded bg-lab-subtle border border-lab-border/60 flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-lab-text-muted uppercase tracking-wider">
                        {item.metricLabel}:
                      </span>
                      <div className="flex items-center gap-2">
                        <Award className={`w-4 h-4 ${item.accentClass}`} />
                        <span className={`text-base font-extrabold font-mono ${item.accentClass}`}>
                          {item.metricValue}
                        </span>
                      </div>
                    </div>

                    {/* Concise Summary Highlights */}
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-lab-text-secondary leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${item.accentClass}`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Footer */}
                  <div className="mt-6 pt-3 border-t border-lab-border/60 flex items-center justify-between text-[11px] font-mono text-lab-text-muted">
                    <span>ACADEMIC_RECORD</span>
                    <span className={item.accentClass}>VERIFIED</span>
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

export default Education;
