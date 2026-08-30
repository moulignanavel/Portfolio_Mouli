import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  FileCheck,
  Sparkles
} from 'lucide-react';

/**
 * Modular Certifications Registry
 * You can easily add, edit, or remove certificates from this array.
 */
const CERTIFICATIONS = [
  {
    id: 'cert-java-fundamentals',
    title: 'Java Programming Fundamentals',
    issuer: 'Infosys Springboard',
    date: '2026',
    badgeColor: 'emerald',
    accentClass: 'text-emerald-400',
    icon: ShieldCheck,
    credentialUrl: 'https://drive.google.com/file/d/1w-Zmzok3XKnECOYfiVEH9fT87_6CNkYo/view?usp=drive_link',
  },
  {
    id: 'cert-dsa-java',
    title: 'Data Structures and Algorithms using Java',
    issuer: 'NPTEL / Coursera',
    date: '2026',
    badgeColor: 'cyan',
    accentClass: 'text-lab-cyan',
    icon: Award,
    credentialUrl: 'https://drive.google.com/file/d/1_ulUfV90s3-3MG1T8U5qwRMzUko856NZ/view?usp=drive_link',
  },
  {
    id: 'cert-google-ai',
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: '2026',
    badgeColor: 'amber',
    accentClass: 'text-amber-400',
    icon: Sparkles,
    credentialUrl: 'https://drive.google.com/file/d/1dpmGAaha-eoGs-mM13_VMX6Fg2s24d1u/view?usp=drive_link',
  },
  {
    id: 'cert-azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2026',
    badgeColor: 'indigo',
    accentClass: 'text-indigo-400',
    icon: FileCheck,
    credentialUrl: 'https://drive.google.com/file/d/1IJLR8ntXMU35FO9l7IiJrQSRp0huNSjG/view?usp=sharing',
  },
  {
    id: 'cert-python',
    title: 'Python Programming',
    issuer: 'Professional Certification',
    date: '2025',
    badgeColor: 'emerald',
    accentClass: 'text-emerald-400',
    icon: ShieldCheck,
    credentialUrl: 'https://drive.google.com/file/d/15Go07qytIsvAx0ioDX49xcHSFKKgdsav/view?usp=drive_link',
  },
  {
    id: 'cert-tcs-ion',
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS iON',
    date: '2025',
    badgeColor: 'cyan',
    accentClass: 'text-lab-cyan',
    icon: Award,
    credentialUrl: 'https://drive.google.com/file/d/1w94Xv0GI1qqzjZ4SkGgmb5na0PEntvTj/view?usp=drive_link',
  },
];

/**
 * Certifications Section Component matching the Digital Developer Lab design system.
 * Features compact modular cards displaying Certificate Name, Issuing Organization,
 * Completion Year, Certificate Icon, and a "View Certificate" link button.
 */
export const Certifications = React.memo(() => {
  return (
    <section id="certifications" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 06. VERIFIED_CERTIFICATIONS"
          title="Certifications & Credentials"
          subtitle="Verified Professional Courses, Enterprise Badges & Technical Credentials"
          description="Industry certifications validating full-stack Java engineering, frontend architecture, and cloud skills."
        />

        {/* Compact Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const CertIcon = cert.icon;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <GlassCard
                  glow={cert.badgeColor}
                  padding="md"
                  className="h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-lab-border hover:border-lab-border-highlight"
                >
                  <div>
                    {/* Top Row: Icon, Issuer & Date */}
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-lab-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lab bg-lab-panel border border-lab-border flex items-center justify-center shadow-sm">
                          <CertIcon className={`w-5 h-5 ${cert.accentClass}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-lab-cyan font-semibold">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{cert.issuer}</span>
                          </div>
                          <span className="text-[11px] font-mono text-lab-text-muted">
                            VERIFIED_ISSUER
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-lab-panel border border-lab-border text-xs font-mono text-lab-text-secondary">
                        <Calendar className="w-3.5 h-3.5 text-lab-cyan" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Certification Title */}
                    <h3 className="text-base sm:text-lg font-bold font-mono text-lab-text-primary mb-4 leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Footer Actions: Verified Tag & View Certificate Button */}
                  <div className="pt-3 border-t border-lab-border/60 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5">
                    <Badge variant={cert.badgeColor} size="sm" dot className="self-start xs:self-auto">
                      VERIFIED_CREDENTIAL
                    </Badge>

                    <Button
                      variant="outline"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                      onClick={() => window.open(cert.credentialUrl, '_blank')}
                      className="text-xs py-1 px-3 self-stretch xs:self-auto justify-center"
                    >
                      View Certificate
                    </Button>
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

export default Certifications;
