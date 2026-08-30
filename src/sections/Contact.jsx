import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { IconButton } from '../components/common/IconButton';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  User,
  AtSign,
  ExternalLink
} from 'lucide-react';

/**
 * Contact Section Component matching the Digital Developer Lab design system.
 * Fully interactive UI contact form and personal networks card.
 */
export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'moulignanavel@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/mowleeswaran-g-12053b299';
  const githubUrl = 'https://github.com/moulignanavel';

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitted(false);

    if (formState.botcheck) {
      // Spam bot detected via honeypot field
      return;
    }

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage('Web3Forms access key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          botcheck: false,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '', botcheck: false });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || 'Failed to send message via Web3Forms.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage('Network error occurred while submitting to Web3Forms.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-6 sm:py-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-lab-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-lab-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          tag="// 08. CONTACT"
          title="Let's Connect"
          subtitle="Have an opportunity, project, or idea? I'd love to hear from you."
        />

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Availability */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Availability Badge Card */}
            <GlassCard glow="cyan" padding="md" className="border-lab-border hover:border-lab-border-highlight">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-lab-cyan animate-pulse" />
                <span className="font-mono text-xs text-lab-cyan font-bold tracking-wider uppercase">
                  Open to internships & full-time opportunities
                </span>
              </div>
            </GlassCard>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Contact Card */}
              <div 
                onClick={() => window.open(`mailto:${emailAddress}`)}
                className="group relative p-4 rounded-lab bg-lab-panel border border-lab-border hover:border-lab-cyan/35 hover:shadow-lab-glow-cyan transition-all duration-300 cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-lab bg-lab-subtle border border-lab-border flex items-center justify-center text-lab-cyan group-hover:border-lab-cyan/40 transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono text-lab-text-muted uppercase tracking-wider">
                      DIRECT_EMAIL
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-lab-text-primary group-hover:text-lab-cyan transition-colors break-all">
                      {emailAddress}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton
                    icon={copiedEmail ? Check : Copy}
                    label="Copy Email"
                    onClick={handleCopyEmail}
                    className={copiedEmail ? 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' : 'bg-lab-subtle'}
                  />
                </div>
              </div>

              {/* LinkedIn Contact Card */}
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-lab bg-lab-panel border border-lab-border hover:border-lab-cyan/35 hover:shadow-lab-glow-cyan transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lab bg-lab-subtle border border-lab-border flex items-center justify-center text-lab-cyan group-hover:border-lab-cyan/40 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-lab-text-muted uppercase tracking-wider">
                      LINKEDIN
                    </span>
                    <span className="font-mono text-sm font-semibold text-lab-text-primary group-hover:text-lab-cyan transition-colors">
                      mowleeswaran-g-12053b299
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lab bg-lab-subtle border border-lab-border flex items-center justify-center text-lab-text-muted group-hover:text-lab-cyan group-hover:border-lab-cyan/40 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* GitHub Contact Card */}
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-lab bg-lab-panel border border-lab-border hover:border-lab-cyan/35 hover:shadow-lab-glow-cyan transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lab bg-lab-subtle border border-lab-border flex items-center justify-center text-lab-cyan group-hover:border-lab-cyan/40 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-lab-text-muted uppercase tracking-wider">
                      GITHUB
                    </span>
                    <span className="font-mono text-sm font-semibold text-lab-text-primary group-hover:text-lab-cyan transition-colors">
                      moulignanavel
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lab bg-lab-subtle border border-lab-border flex items-center justify-center text-lab-text-muted group-hover:text-lab-cyan group-hover:border-lab-cyan/40 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Contact Form UI */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.38, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <GlassCard padding="lg" className="border-lab-border hover:border-lab-border-highlight relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-lab-border">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-lab-cyan" />
                  <h3 className="font-mono text-base font-bold text-lab-text-primary">
                    Send a Direct Message
                  </h3>
                </div>
                <Badge variant="cyan" size="sm" dot>WEB3FORMS</Badge>
              </div>

              {/* Submission Success Toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 shrink-0 text-emerald-400" />
                    <div>
                      <span className="font-bold block">MESSAGE_SENT_SUCCESSFULLY</span>
                      <span>Thank you for reaching out! Your message has been sent directly to my inbox.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submission Error Toast */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 font-bold">!</div>
                    <div>
                      <span className="font-bold block">SUBMISSION_ERROR</span>
                      <span>{errorMessage}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Controls */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Web3Forms Honeypot Botcheck Field */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  style={{ display: 'none' }}
                  checked={formState.botcheck || false}
                  onChange={(e) => setFormState({ ...formState, botcheck: e.target.checked })}
                />
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-mono text-lab-text-secondary uppercase tracking-wider mb-2">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-lab-text-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lab bg-lab-subtle border border-lab-border focus:border-lab-cyan focus:ring-1 focus:ring-lab-cyan text-sm text-lab-text-primary placeholder:text-lab-text-muted transition-all font-sans outline-none"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs font-mono text-lab-text-secondary uppercase tracking-wider mb-2">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-lab-text-muted">
                      <AtSign className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="alex.morgan@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lab bg-lab-subtle border border-lab-border focus:border-lab-cyan focus:ring-1 focus:ring-lab-cyan text-sm text-lab-text-primary placeholder:text-lab-text-muted transition-all font-sans outline-none"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono text-lab-text-secondary uppercase tracking-wider mb-2">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-3.5 rounded-lab bg-lab-subtle border border-lab-border focus:border-lab-cyan focus:ring-1 focus:ring-lab-cyan text-sm text-lab-text-primary placeholder:text-lab-text-muted transition-all font-sans outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
