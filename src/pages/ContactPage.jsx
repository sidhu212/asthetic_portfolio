import React, { useState, useRef, useEffect } from 'react';
import Footer from '../components/sections/Footer';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Linkedin,
  Github,
  MapPin,
  CheckCircle,
  XCircle,
  Loader2,
  Mail,
  Phone,
  Clock,
  Briefcase,
  Rocket,
  Users,
  Lightbulb,
  ChevronDown,
  ExternalLink,
  Download,
  Sparkles,
  Zap,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   ANIMATED SECTION WRAPPER
───────────────────────────────────────────────────────────────*/
const RevealSection = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────────────────────────*/
const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-borderColors/60 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-textPrimary group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-textSecondary group-hover:text-accent transition-colors ml-4 flex-shrink-0"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-textSecondary leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONFETTI COMPONENT
───────────────────────────────────────────────────────────────*/
const Confetti = () => {
  const pieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#FF5A1F', '#FFB800', '#00C9A7', '#845EF7', '#339AF0'][i % 5],
    delay: Math.random() * 0.5,
    size: Math.random() * 8 + 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{ left: `${p.x}%`, top: -20, width: p.size, height: p.size, backgroundColor: p.color }}
          animate={{ y: ['0vh', '110vh'], rotate: [0, 720], opacity: [1, 0] }}
          transition={{ duration: 2.5 + Math.random(), delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   SUCCESS OVERLAY
───────────────────────────────────────────────────────────────*/
const SuccessOverlay = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <>
        <Confetti />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-3xl text-center px-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,90,31,0.08) 0%, rgba(132,94,247,0.08) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,90,31,0.25)',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{ background: 'linear-gradient(135deg, #FF5A1F, #845EF7)' }}
          >
            <CheckCircle2 size={36} strokeWidth={2.5} className="text-white" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-display text-3xl font-bold text-textPrimary mb-3"
          >
            Thank You!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-textSecondary leading-relaxed max-w-xs"
          >
            Your message has been received. I'll get back to you within{' '}
            <span className="text-accent font-medium">24 hours</span>.
          </motion.p>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

/* ─────────────────────────────────────────────────────────────
   FLOATING LABEL INPUT
───────────────────────────────────────────────────────────────*/
const FloatingInput = ({ id, label, type = 'text', value, onChange, required = false, as = 'input', rows }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const floated = focused || hasValue;
  const Tag = as;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-200 font-mono text-xs tracking-wider uppercase"
        style={{
          top: floated ? '10px' : (as === 'textarea' ? '20px' : '50%'),
          transform: floated ? 'translateY(0) scale(0.85)' : (as === 'textarea' ? 'scale(1)' : 'translateY(-50%) scale(1)'),
          transformOrigin: 'left',
          color: focused ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        }}
      >
        {label}{required && ' *'}
      </label>
      <Tag
        id={id}
        type={type}
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-xl text-textPrimary resize-none transition-all duration-200 outline-none"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: focused
            ? '1px solid var(--color-accent)'
            : '1px solid var(--color-border)',
          padding: as === 'textarea' ? '32px 16px 16px' : '28px 16px 10px',
          boxShadow: focused ? '0 0 0 3px rgba(255,90,31,0.12), inset 0 1px 2px rgba(0,0,0,0.05)' : 'inset 0 1px 2px rgba(0,0,0,0.05)',
          fontSize: '0.95rem',
          lineHeight: '1.5',
        }}
      />
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full origin-left"
        style={{ background: 'linear-gradient(90deg, var(--color-accent), #845EF7)' }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   CONTACT CARD (left panel)
───────────────────────────────────────────────────────────────*/
const ContactInfoCard = ({ icon: Icon, title, lines, href, delay }) => (
  <motion.a
    href={href || undefined}
    target={href ? '_blank' : undefined}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -3, scale: 1.02 }}
    className="flex items-start gap-4 p-5 rounded-2xl border border-borderColors/60 group cursor-pointer"
    style={{
      background: 'rgba(255,255,255,0.025)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
    }}
  >
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.15), rgba(132,94,247,0.15))' }}
    >
      <Icon size={18} className="text-accent" />
    </div>
    <div>
      <p className="font-mono text-[10px] text-textSecondary/60 uppercase tracking-widest mb-1">{title}</p>
      {lines.map((line, i) => (
        <p key={i} className="text-sm text-textPrimary leading-relaxed font-medium">{line}</p>
      ))}
    </div>
  </motion.a>
);

/* ─────────────────────────────────────────────────────────────
   INTERACTIVE LINK CARD
───────────────────────────────────────────────────────────────*/
const LinkCard = ({ icon: Icon, label, sub, href, delay, download }) => (
  <motion.a
    href={href}
    target={download ? undefined : '_blank'}
    rel={download ? undefined : 'noopener noreferrer'}
    download={download || undefined}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay }}
    whileHover={{ y: -4 }}
    className="relative flex flex-col gap-2 p-5 rounded-2xl border border-borderColors/60 group overflow-hidden"
    style={{
      background: 'rgba(255,255,255,0.025)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
      style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.06), rgba(132,94,247,0.06))' }}
    />
    <div className="flex items-center justify-between">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.12), rgba(132,94,247,0.12))' }}
      >
        <Icon size={18} className="text-accent" />
      </div>
      <ArrowRight size={16} className="text-textSecondary/40 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
    </div>
    <p className="font-display font-semibold text-textPrimary text-sm">{label}</p>
    <p className="text-textSecondary/70 text-xs font-mono">{sub}</p>
  </motion.a>
);

/* ─────────────────────────────────────────────────────────────
   WHY WORK WITH ME CARD
───────────────────────────────────────────────────────────────*/
const WhyCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay }}
    whileHover={{ y: -5 }}
    className="relative flex flex-col gap-4 p-7 rounded-3xl border border-borderColors/60 group overflow-hidden"
    style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
      style={{ background: 'linear-gradient(135deg, rgba(255,90,31,0.05), rgba(132,94,247,0.05))' }}
    />
    <div className="text-3xl">{icon}</div>
    <h3 className="font-display font-bold text-textPrimary text-lg">{title}</h3>
    <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   PROCESS TIMELINE STEP
───────────────────────────────────────────────────────────────*/
const ProcessStep = ({ step, title, desc, isLast, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6"
  >
    <div className="flex flex-col items-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-white"
        style={{ background: 'linear-gradient(135deg, #FF5A1F, #845EF7)' }}
      >
        {step}
      </div>
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="w-[1px] flex-1 my-2 origin-top"
          style={{ background: 'linear-gradient(180deg, var(--color-accent), transparent)' }}
        />
      )}
    </div>
    <div className="pb-8">
      <h4 className="font-display font-semibold text-textPrimary mb-1">{title}</h4>
      <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────*/
const faqData = [
  { q: 'How quickly do you respond?', a: 'Usually within 24 hours on business days. For urgent inquiries, feel free to reach out directly via email.' },
  { q: 'Do you work remotely?', a: "Yes — I'm comfortable working fully remotely and have experience collaborating across different time zones." },
  { q: 'Are you available for full-time roles?', a: "Yes, I'm actively seeking full-time engineering positions. I'm also open to internships and freelance contracts." },
  { q: 'Can you build MVPs quickly?', a: 'Absolutely. I specialize in rapid, production-quality MVPs using modern stacks. Most ideas can be validated with a working prototype within days.' },
  { q: 'Can we collaborate on startups or open source?', a: "Yes! I love working on early-stage startups and open-source projects. Let's build something meaningful together." },
];

const whyCards = [
  { icon: '🚀', title: 'Product Development', desc: 'I build scalable, production-ready applications from the ground up — full-stack, AI-integrated, and cloud-native.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Hackathons, startups, or open-source — I thrive in team environments and love bringing ideas to life with others.' },
  { icon: '💡', title: 'Problem Solving', desc: 'Every idea deserves elegant software. I turn complex requirements into clean, maintainable solutions.' },
];

const processSteps = [
  { title: 'Discuss the Idea', desc: 'We align on your vision, goals, and success criteria through a focused conversation.' },
  { title: 'Planning & Architecture', desc: 'I design the system architecture, choose the right stack, and break down the roadmap.' },
  { title: 'Development', desc: 'Iterative, test-driven development with regular updates and transparent communication.' },
  { title: 'Delivery', desc: 'Clean codebase handoff, deployment support, and documentation — ready to scale.' },
];

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────*/
const ContactPage = () => {
  // ── Backend logic — DO NOT MODIFY ──────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStatus('loading');

    try {
      const API_URL = import.meta.env.PROD
        ? '/api/contact'
        : 'http://localhost:5000/api/contact';

      const finalData = {
        fullName: formData.name,
        mobileNumber: formData.phone,
        workEmail: formData.email,
        subject: 'Portfolio Inquiry',
        message: formData.message
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Error:', err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  // ── End of backend logic ────────────────────────────────────

  return (
    <>
      {/* ── AMBIENT BACKGROUND BLOBS ─────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.35) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(132,94,247,0.4) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.3) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center pt-40 pb-20 px-6 md:px-12 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — heading + subtitle + quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-accent" />
                <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">[ 05 · Contact ]</span>
              </div>

              <h1
                className="font-display font-bold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)' }}
              >
                <span className="text-textPrimary">Let's build</span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FF5A1F 0%, #845EF7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  something meaningful.
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-textSecondary max-w-xl leading-relaxed">
                Whether you're looking for a developer, have a product idea, or simply want to connect —
                I'd love to hear from you. Every great product begins with one conversation.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-borderColors/60"
                style={{
                  background: 'rgba(255,90,31,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Sparkles size={14} className="text-accent flex-shrink-0" />
                <span className="font-mono text-xs text-textSecondary italic">
                  "Great software begins with great conversations."
                </span>
              </motion.div>
            </motion.div>

            {/* RIGHT — premium availability widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-5"
            >
              {/* Main glassmorphic card */}
              <div
                className="relative rounded-3xl p-7 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 20px 60px -10px rgba(0,0,0,0.12)',
                }}
              >
                {/* Gradient top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[1px]"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,90,31,0.5), rgba(132,94,247,0.5), transparent)' }}
                />
                {/* Inner glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-25 blur-2xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(132,94,247,0.7), transparent 70%)' }}
                />

                {/* Live status badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                    </span>
                    <span className="font-mono text-xs text-emerald-400 font-medium uppercase tracking-wider">Available Now</span>
                  </div>
                  <span className="font-mono text-[10px] text-textSecondary/40 uppercase tracking-widest">2026</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-textPrimary mb-1">Open to Work</h3>
                <p className="text-sm text-textSecondary leading-relaxed mb-6">
                  Actively seeking full-time roles, contracts &amp; exciting collaborations.
                </p>

                <div className="h-[1px] bg-borderColors/40 mb-6" />

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: '24h', label: 'Response' },
                    { value: '10+', label: 'Projects' },
                    { value: '∞',  label: 'Ideas' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <span
                        className="font-display font-bold text-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #FF5A1F, #845EF7)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {value}
                      </span>
                      <span className="font-mono text-[10px] text-textSecondary/60 uppercase tracking-widest">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini info pills row */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📍', title: 'Location', sub: 'India · Remote' },
                  { icon: '💼', title: 'Open for', sub: 'Full-time · Freelance' },
                ].map(({ icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-borderColors/50"
                    style={{ background: 'rgba(255,255,255,0.025)', backdropFilter: 'blur(10px)' }}
                  >
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-mono text-[10px] text-textSecondary/50 uppercase tracking-widest">{title}</p>
                      <p className="text-sm font-medium text-textPrimary leading-tight">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated scroll cue */}
              <div className="flex items-center gap-3 px-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-1"
                >
                  <div
                    className="w-[1px] h-6 rounded-full"
                    style={{ background: 'linear-gradient(180deg, var(--color-accent), transparent)' }}
                  />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </motion.div>
                <span className="font-mono text-[10px] text-textSecondary/40 uppercase tracking-[0.2em]">
                  Scroll to connect
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SPLIT LAYOUT */}
        <section className="pb-24 px-6 md:px-12 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <RevealSection>
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-textPrimary mb-4">
                  Let's start a project together.
                </h2>
                <p className="text-textSecondary leading-relaxed">
                  I'm a Full Stack Developer focused on building impactful software products.
                  Available for full-time roles, freelance, and exciting collaborations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono"
                  style={{ borderColor: 'rgba(0,201,167,0.4)', background: 'rgba(0,201,167,0.08)', color: '#00C9A7' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Opportunities
                </span>
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono text-textSecondary"
                  style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <Zap size={12} className="text-accent" />
                  Within 24 hrs
                </span>
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono text-textSecondary"
                  style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <MapPin size={12} className="text-accent" />
                  India · Remote
                </span>
              </div>

              <div className="mb-8 p-5 rounded-2xl border border-borderColors/60" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <p className="font-mono text-[10px] text-textSecondary/60 uppercase tracking-widest mb-3">Current Focus</p>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack Development', 'AI Solutions', 'Salesforce Development'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-accent border"
                      style={{ borderColor: 'rgba(255,90,31,0.25)', background: 'rgba(255,90,31,0.07)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <ContactInfoCard icon={Mail} title="Email" lines={['siddharthsingh0259@gmail.com']} href="mailto:siddharthsingh0259@gmail.com" delay={0.1} />
                <ContactInfoCard icon={MapPin} title="Location" lines={['India', 'Remote Worldwide']} delay={0.15} />
                <ContactInfoCard icon={Clock} title="Response Time" lines={['Usually within 24 hours']} delay={0.2} />
                <ContactInfoCard icon={Briefcase} title="Availability" lines={['Full-time · Internships', 'Freelance · Collaboration']} delay={0.25} />
              </div>

              <p className="font-mono text-[10px] text-textSecondary/60 uppercase tracking-widest mb-4">Connect</p>
              <div className="grid grid-cols-2 gap-3">
                <LinkCard icon={Github} label="GitHub" sub="Open Profile" href="https://github.com/sidhu212" delay={0.1} />
                <LinkCard icon={Linkedin} label="LinkedIn" sub="Let's Connect" href="https://www.linkedin.com/in/siddharth-singh-4b8416262/" delay={0.15} />
                <LinkCard icon={Mail} label="Email" sub="Write Directly" href="mailto:siddharthsingh0259@gmail.com" delay={0.2} />
                <LinkCard icon={Download} label="Resume" sub="Download CV" href="/resume.pdf" download="Siddharth_Singh_Resume.pdf" delay={0.25} />
              </div>
            </RevealSection>

            {/* RIGHT — FORM */}
            <RevealSection delay={0.15}>
              <div
                className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,90,31,0.05)',
                }}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-[1px]"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,90,31,0.5), rgba(132,94,247,0.5), transparent)' }}
                />

                <SuccessOverlay visible={status === 'success'} />

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle size={16} className="text-accent" />
                    <span className="font-mono text-xs text-accent uppercase tracking-widest">Send a Message</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-textPrimary">
                    Start the Conversation
                  </h2>
                  <p className="text-sm text-textSecondary mt-1">
                    Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingInput id="name" label="Name" type="text" required value={formData.name} onChange={handleChange} />
                    <FloatingInput id="phone" label="Mobile No." type="tel" value={formData.phone} onChange={handleChange} />
                  </div>

                  <FloatingInput id="email" label="Email Address" type="email" required value={formData.email} onChange={handleChange} />

                  <FloatingInput id="message" label="Message" as="textarea" rows={5} value={formData.message} onChange={handleChange} />

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2 text-red-400 text-sm font-mono"
                      >
                        <XCircle size={15} />
                        <span>Something went wrong. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status === 'idle' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                    className="mt-2 w-full relative group flex items-center justify-center gap-3 py-4 rounded-2xl font-display font-semibold text-white transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: status === 'error'
                        ? 'linear-gradient(135deg, #ef4444, #b91c1c)'
                        : 'linear-gradient(135deg, #FF5A1F 0%, #845EF7 100%)',
                      boxShadow: status === 'idle' ? '0 8px 24px rgba(255,90,31,0.35)' : 'none',
                    }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                      }}
                    />
                    {status === 'loading' ? (
                      <><Loader2 size={18} className="animate-spin" /><span>Sending...</span></>
                    ) : status === 'error' ? (
                      <><XCircle size={18} /><span>Failed to Send</span></>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* WHY WORK WITH ME */}
        <section className="py-24 px-6 md:px-12 container mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-accent" />
                <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Why Me</span>
                <div className="h-[1px] w-8 bg-accent" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary">
                What I bring to the table
              </h2>
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((c, i) => (
              <WhyCard key={c.title} {...c} delay={i * 0.12} />
            ))}
          </div>
        </section>

        {/* PROCESS + FAQ */}
        <section className="py-24 px-6 md:px-12 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealSection>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-accent" />
                  <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Process</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-textPrimary">
                  How we work together
                </h2>
                <p className="text-textSecondary mt-3 leading-relaxed">
                  A clear, transparent process from first message to final delivery.
                </p>
              </div>
              {processSteps.map((step, i) => (
                <ProcessStep
                  key={step.title}
                  step={i + 1}
                  title={step.title}
                  desc={step.desc}
                  isLast={i === processSteps.length - 1}
                  delay={i * 0.1}
                />
              ))}
            </RevealSection>

            <RevealSection delay={0.1}>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-accent" />
                  <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">FAQ</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-textPrimary">
                  Common questions
                </h2>
              </div>
              <div className="space-y-3">
                {faqData.map((item, i) => (
                  <FAQItem key={i} index={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 px-6 md:px-12 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative text-center py-20 px-8 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,90,31,0.12) 0%, transparent 70%)' }}
            />
            <div
              className="absolute top-0 left-1/4 right-1/4 h-[1px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,90,31,0.6), rgba(132,94,247,0.6), transparent)' }}
            />

            <Sparkles size={28} className="text-accent mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mb-4 max-w-2xl mx-auto leading-tight">
              Looking forward to building something{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF5A1F, #845EF7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                impactful
              </span>{' '}
              together.
            </h2>
            <p className="text-textSecondary mb-10 max-w-xl mx-auto leading-relaxed">
              Every impactful product starts with one message. Reach out and let's turn your idea into reality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="https://github.com/sidhu212"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #FF5A1F, #845EF7)', boxShadow: '0 8px 24px rgba(255,90,31,0.3)' }}
              >
                <Github size={16} />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/siddharth-singh-4b8416262/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-textPrimary border border-borderColors transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Siddharth_Singh_Resume.pdf"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-display font-semibold text-textPrimary border border-borderColors transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
