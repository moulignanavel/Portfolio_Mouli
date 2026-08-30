import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2,
  Leaf, 
  Building2, 
  CalendarCheck, 
  Sprout, 
  Globe,
  Sparkles 
} from 'lucide-react';
import carbontrackPreview from '../assets/carbontrack-preview.png';
import hostelPreview from '../assets/hostel-preview.jpg';
import leavePreview from '../assets/leave-preview.png';
import agriassistPreview from '../assets/agriassist-preview.png';

const FEATURED_PROJECTS = [
  {
    id: 'carbontrack',
    title: 'Smart Carbon Tracking System',
    subtitle: 'Track your carbon footprint in seconds — Log daily emissions, set monthly allowances, and see real-time impact.',
    category: 'FULL STACK SUSTAINABILITY PLATFORM',
    badgeColor: 'emerald',
    icon: Leaf,
    accentClass: 'text-emerald-400',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'REST API'],
    features: [
      'Carbon footprint tracking and calculation across transportation, power & meals',
      'Daily, weekly, and monthly analytics & live allowance budget tracking',
      'Personalized eco-friendly recommendations, leaderboards & green badges'
    ],
    githubUrl: 'https://github.com/swathi-r29/carbontrack',
    demoUrl: 'https://carbontrack-navy.vercel.app/',
    landingPagePreview: {
      url: 'https://carbontrack-navy.vercel.app/',
      statusBadge: 'VERCEL_LIVE_DEPLOYED',
      image: carbontrackPreview,
      heroTitle: 'Track your carbon footprint in seconds.',
      metrics: [
        { label: 'CO2e LOGGED', value: '182,450 kg' },
        { label: 'DAILY LOG', value: '3 Taps' },
        { label: 'BUDGETS', value: 'Live Target' }
      ]
    }
  },
  {
    id: 'hostel-mgmt',
    title: 'Smart Hostel Management System',
    subtitle: 'Web-Based Hostel Administration & Student Operations Portal',
    category: 'INSTITUTIONAL ADMINISTRATION PLATFORM',
    badgeColor: 'cyan',
    icon: Building2,
    accentClass: 'text-lab-cyan',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API'],
    features: [
      'Student registration and profile management',
      'Room allocation and availability tracking',
      'Complaint and maintenance management workflow'
    ],
    githubUrl: 'https://github.com/moulignanavel/SmartHostelMgmtSystem',
    demoUrl: 'http://localhost:5180/',
    landingPagePreview: {
      url: 'http://localhost:5180/',
      statusBadge: 'LOCAL_DEV_SERVER',
      image: hostelPreview,
      heroTitle: 'Centralized Student Hostel & Room Operations Portal',
      metrics: [
        { label: 'ROOMS ALLOCATED', value: '450+' },
        { label: 'COMPLAINTS RESOLVED', value: '100%' },
        { label: 'ATTENDANCE', value: '24/7 Digital' }
      ]
    }
  },
  {
    id: 'leave-mgmt',
    title: 'Leave Management System',
    subtitle: 'Simplify Leave Management for Your Organization — Employee Time-off Requests, Approvals & Tracking',
    category: 'FULL STACK WORKFLOW PLATFORM',
    badgeColor: 'indigo',
    icon: CalendarCheck,
    accentClass: 'text-indigo-400',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'User registration and authentication system',
      'Leave request submission & tracking portal',
      'Admin approval/rejection workflow engine'
    ],
    githubUrl: 'https://github.com/moulignanavel/leave-management',
    demoUrl: 'https://leave-management-frontend-five.vercel.app/',
    landingPagePreview: {
      url: 'https://leave-management-frontend-five.vercel.app/',
      statusBadge: 'VERCEL_LIVE_DEPLOYED',
      image: leavePreview,
      heroTitle: 'Simplify Leave Management for Your Organization',
      metrics: [
        { label: 'APPROVAL SPEED', value: '0.5 Sec' },
        { label: 'AUDIT LOGS', value: '100% Secure' },
        { label: 'BALANCES', value: 'Real-time' }
      ]
    }
  },
  {
    id: 'agriassist-ai',
    title: 'AgriAssist AI',
    subtitle: 'Smart Farming Solutions Powered by Artificial Intelligence — Disease Detection, Yield Prediction & Expert Advisory',
    category: 'AI & CLOUD AGRICULTURE PLATFORM',
    badgeColor: 'amber',
    icon: Sprout,
    accentClass: 'text-amber-400',
    techStack: ['React.js', 'Firebase', 'Gemini AI', 'JavaScript'],
    features: [
      'AI-powered crop health monitoring & disease detection',
      'Advanced analytics for yield predictions & harvest optimization',
      'Expert consultations & AI advisory for personalized farming advice'
    ],
    githubUrl: 'https://github.com/ranjith2807/AgriAssist',
    demoUrl: 'https://agriassest-ai.web.app/',
    landingPagePreview: {
      url: 'https://agriassest-ai.web.app/',
      statusBadge: 'FIREBASE_LIVE_DEPLOYED',
      image: agriassistPreview,
      heroTitle: 'Smart farming solutions powered by artificial intelligence',
      metrics: [
        { label: 'AI DIAGNOSTIC', value: '98.5% Acc' },
        { label: 'CROP YIELD', value: '+35% Gain' },
        { label: 'ANALYTICS', value: 'Real-time' }
      ]
    }
  }
];

/**
 * Featured Projects Section Component.
 * Showcases the user's 4 core full-stack & AI projects with exact user-provided data:
 * 1. Smart Carbon Tracking System (Sustainability Analytics)
 * 2. Smart Hostel Management System (Institutional Administration)
 * 3. Leave Management System (MERN Stack Leave Workflow)
 * 4. AgriAssist AI (Smart Agriculture Platform)
 */
export const Projects = React.memo(() => {
  return (
    <section id="projects" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 03. FEATURED_PROJECTS"
          title="Featured Projects"
          subtitle="Full-Stack Web Applications & AI-Powered Platforms"
          description="A selection of my primary engineering projects focusing on sustainability analytics, institutional management, AI assistance, and full-stack workflows."
        />

        {/* Featured Projects Cards Grid (2x2 Grid Matching Identity Card Size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {FEATURED_PROJECTS.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.38, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-full"
              >
                <GlassCard 
                  glow={project.badgeColor} 
                  padding="md"
                  className="h-full flex flex-col justify-between shadow-lab-card relative overflow-hidden border-lab-border hover:border-lab-border-highlight"
                >
                  <div>
                    {/* Card Header Bar (Matching Identity Card in About.jsx) */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-lab-border font-mono text-xs">
                      <div className="flex items-center gap-2 text-lab-cyan min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${project.accentClass}`} />
                        <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] truncate">
                          {project.category}
                        </span>
                      </div>
                      <Badge variant={project.badgeColor} size="sm" dot className="shrink-0">
                        FEATURED
                      </Badge>
                    </div>

                    {/* Project Title & Subtitle */}
                    <h3 className="font-mono text-base sm:text-lg font-bold text-lab-text-primary mb-0.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-lab-cyan mb-3 font-medium">
                      {project.subtitle}
                    </p>

                    {/* Web Landing Page Showcase Frame */}
                    <div className="p-2.5 rounded-lab bg-lab-subtle border border-lab-border/80 mb-3.5 shadow-inner relative overflow-hidden">
                      {/* Browser Bar */}
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-lab-border/60 font-mono text-[10px]">
                        <div className="flex items-center gap-1 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-lab-panel border border-lab-border/70 text-lab-cyan min-w-0 mx-1">
                          <Globe className="w-3 h-3 shrink-0 text-lab-cyan" />
                          <span className="truncate text-[10px] font-mono text-lab-cyan">{project.landingPagePreview.url}</span>
                        </div>
                        <span className="text-[9px] text-lab-text-muted hidden sm:inline-block font-mono">200_OK</span>
                      </div>

                      {/* Web App Landing Content (Real Screenshot or Metric UI) */}
                      {project.landingPagePreview.image ? (
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded bg-lab-panel border border-lab-border/40 group/img">
                          <img 
                            src={project.landingPagePreview.image} 
                            alt={`${project.title} Landing Page Preview`} 
                            className="w-full h-full object-cover object-top group-hover/img:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded pointer-events-none" />
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/9] p-2.5 rounded bg-gradient-to-b from-[#0D111A] to-[#08090D] border border-lab-border/40 relative flex flex-col justify-between">
                          <div className="text-center mb-1">
                            <span className="text-[9px] font-mono text-lab-cyan font-bold tracking-widest uppercase block mb-0.5">
                              WEBSITE LANDING PAGE
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold font-mono text-lab-text-primary leading-tight">
                              {project.landingPagePreview.heroTitle}
                            </h4>
                          </div>

                          {/* 3 Key Metric KPI Pills */}
                          <div className="grid grid-cols-3 gap-1.5 text-center my-auto">
                            {project.landingPagePreview.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="p-1.5 rounded bg-lab-panel/90 border border-lab-border/60">
                                <span className="text-[8px] sm:text-[9px] font-mono text-lab-text-muted block uppercase truncate">
                                  {metric.label}
                                </span>
                                <span className={`text-[11px] sm:text-xs font-mono font-extrabold ${project.accentClass} block truncate mt-0.5`}>
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Landing Page Footer Indicator */}
                          <div className="pt-1.5 border-t border-lab-border/50 flex items-center justify-between text-[10px] font-mono text-lab-text-muted">
                            <span className="flex items-center gap-1">
                              <Sparkles className={`w-3 h-3 ${project.accentClass}`} />
                              <span>Full-Stack Platform</span>
                            </span>
                            <span className="text-lab-cyan font-semibold">LIVE_ONLINE</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Key System Features (Restored Clean List) */}
                    <div className="space-y-1.5 mb-3.5">
                      <span className="text-[10px] font-mono text-lab-text-muted block uppercase tracking-wider">
                        // KEY_SYSTEM_FEATURES:
                      </span>
                      {project.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2 text-xs text-lab-text-primary">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${project.accentClass}`} />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline" size="sm" className="text-[10px] py-0 px-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Buttons (Matching Identity Card Bottom) */}
                  <div className="pt-3 border-t border-lab-border flex items-center justify-between gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="text-xs py-1 px-3 flex-1 justify-center"
                    >
                      Live Demo
                    </Button>

                    <Button
                      variant="secondary"
                      size="sm"
                      icon={Github}
                      iconPosition="left"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="text-xs py-1 px-3 flex-1 justify-center"
                    >
                      Source Code
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="flex flex-col items-center justify-center text-center p-5 sm:p-8 rounded-lab bg-lab-panel/40 border border-lab-border">
          <h4 className="font-mono text-base font-bold text-lab-text-primary mb-2">
            Interested in exploring more repositories?
          </h4>
          <p className="text-xs sm:text-sm text-lab-text-secondary mb-4 max-w-lg">
            Check out my GitHub profile for additional open-source experiments, algorithms, and full-stack modules.
          </p>
          <Button
            variant="outline"
            size="md"
            icon={Github}
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>

      </Container>
    </section>
  );
});

export default Projects;
