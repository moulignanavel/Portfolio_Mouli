import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { 
  Trophy, 
  GraduationCap, 
  Megaphone, 
  Target, 
  Compass, 
  CheckCircle2
} from 'lucide-react';

const ACHIEVEMENTS = [
  {
    id: 'gdg-hackathon',
    title: '2nd Place — GDG Hackathon',
    badgeText: 'HACKATHON WINNER',
    badgeColor: 'amber',
    icon: Trophy,
    accentClass: 'text-amber-400',
    description: 'Awarded 2nd place in Google Developer Groups hackathon for building an innovative software solution.'
  },
  {
    id: 'national-science-day-2026',
    title: '3rd Prize — National Science Day 2026',
    badgeText: 'PROJECT CONTEST WINNER',
    badgeColor: 'amber',
    icon: Trophy,
    accentClass: 'text-amber-400',
    description: 'Secured 3rd Prize in the National Science Day 2026 – Project Contest for developing an innovative technology project.'
  },
  {
    id: 'gdg-team-lead',
    title: 'Core Team Lead — Google Developer Groups',
    badgeText: 'GDG CORE LEADERSHIP',
    badgeColor: 'cyan',
    icon: GraduationCap,
    accentClass: 'text-lab-cyan',
    description: 'Core Team Lead at Google Developer Groups, organizing technical developer events, workshops, and student tech community initiatives.'
  },
  {
    id: 'gfg-ca',
    title: 'GeeksforGeeks Campus Ambassador',
    badgeText: 'COMMUNITY AMBASSADOR',
    badgeColor: 'emerald',
    icon: Megaphone,
    accentClass: 'text-emerald-400',
    description: 'Official campus ambassador fostering technical coding culture, competitive programming, and student developer initiatives.'
  },
  {
    id: 'event-coord',
    title: 'Event Coordinator — HackIndia Hackathon',
    badgeText: 'HACKINDIA // INTELINFO',
    badgeColor: 'indigo',
    icon: Target,
    accentClass: 'text-indigo-400',
    description: 'Event Coordinator for HackIndia Hackathon represented through IntelInfo, organizing technical hackathon events and developer participation.'
  },
  {
    id: 'trip-coord',
    title: 'Trip Coordinator — College Events',
    badgeText: 'COLLEGE LOGISTICS',
    badgeColor: 'cyan',
    icon: Compass,
    accentClass: 'text-sky-300',
    description: 'Managed travel planning, logistics, group safety, and scheduling for institutional industrial visits and college tours.'
  }
];

/**
 * Achievements & Leadership Section Component matching the Digital Developer Lab design system.
 * Showcases 5 key accomplishments & leadership roles with subtle Framer Motion animations.
 */
export const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 05. ACHIEVEMENTS_&_RECOGNITION"
          title="Achievements & Leadership"
          subtitle="Hackathon Awards, Student Leadership & Event Coordination"
          description="A showcase of competitive accomplishments and student leadership initiatives."
        />

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.id === 'gdg-hackathon';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={isFeatured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <GlassCard
                  glow={item.badgeColor}
                  className="h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-lab-border hover:border-lab-border-highlight"
                >
                  <div>
                    {/* Header Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center shadow-sm">
                        <Icon className={`w-5 h-5 ${item.accentClass}`} />
                      </div>
                      <Badge variant={item.badgeColor} size="sm">
                        {item.badgeText}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold font-mono text-lab-text-primary mb-2">
                      {item.title}
                    </h3>

                    {/* Short One-Line Description */}
                    <p className="text-xs sm:text-sm text-lab-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer Indicator */}
                  <div className="mt-6 pt-3 border-t border-lab-border/60 flex items-center justify-between text-[11px] font-mono text-lab-text-muted">
                    <span>RECOGNITION_VERIFIED</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${item.accentClass}`} />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
