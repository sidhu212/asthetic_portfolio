import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Footer from '../components/sections/Footer';
import AchievementsGallery from '../components/achievements/AchievementsGallery';

// ── SIH photos ──────────────────────────────────────────────────────────────
import sih1 from '../assets/sih/1.jpg';
import sih2 from '../assets/sih/2.jpg';
import sih3 from '../assets/sih/3.jpg';
import sih4 from '../assets/sih/4.jpg';
import sih5 from '../assets/sih/5.jpg';
import sih6 from '../assets/sih/6.jpg';

// ── Yukti photos ─────────────────────────────────────────────────────────────
import yukti1 from '../assets/yukti/1.jpg';
import yukti2 from '../assets/yukti/2.jpg';
import yukti3 from '../assets/yukti/3.jpg';
import yukti4 from '../assets/yukti/4.jpg';
import yukti5 from '../assets/yukti/5.jpg';



import {
  Trophy,
  Award,
  Sparkles,
  Rocket,
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Cpu,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Target,
  ShieldCheck,
  Compass,
  Lightbulb,
  Building2,
  Workflow,
  Zap,
  Globe,
  Terminal,
  Activity,
  Star,
  FileCode,
  Laptop
} from 'lucide-react';

/* ==========================================================================
   ANIMATED NUMBER COUNTER
   ========================================================================== */
const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const steps = 60;
    const increment = numericValue / (duration * steps);
    const intervalTime = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration, isNumeric]);

  return (
    <span ref={ref} className="font-display font-bold">
      {isNumeric ? count : value}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
};

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

// Hero floating stats
const heroFloatingStats = [
  {
    title: "Smart India Hackathon Finalist",
    value: "Top 1%",
    sub: "National Level • Govt of India",
    icon: Trophy,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30"
  },
  {
    title: "GDSC Operations Head",
    value: "50+ Devs",
    sub: "Google Developer Student Clubs",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  {
    title: "Professional Certifications",
    value: "15+",
    sub: "Salesforce AI, CCNA, AWS, Google",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30"
  },
  {
    title: "Internship Experience",
    value: "8 Months",
    sub: "TOSS Consultancy Services",
    icon: Briefcase,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30"
  },
  {
    title: "Innovation Programs",
    value: "Selected",
    sub: "Yukti Innovation Challenge",
    icon: Rocket,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30"
  }
];

// Key numerical metrics
const statisticsData = [
  { value: 10, suffix: "+", label: "Projects Built", sub: "Full Stack & AI Systems", icon: Code2 },
  { value: 15, suffix: "+", label: "Certifications", sub: "Cisco, Salesforce, AWS, IBM", icon: Award },
  { value: 8, suffix: " Mo", label: "Internship Experience", sub: "TOSS Consultancy Services", icon: Briefcase },
  { value: 3, suffix: "", label: "Innovation Programs", sub: "National & Regional Selections", icon: Rocket },
  { value: 1, suffix: "", label: "National Hackathon Finalist", sub: "Smart India Hackathon 2024", icon: Trophy },
  { value: 50, suffix: "+", label: "Developers Managed", sub: "GDSC Student Operations", icon: Users }
];

// Recognition Wall Badges
const recognitionBadges = [
  {
    id: "sih-finalist",
    title: "Smart India Hackathon Finalist",
    issuer: "Ministry of Education & Govt of India",
    year: "2024",
    icon: "🏆",
    tier: "National Recognition",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "border-amber-500/40",
    accent: "text-amber-500",
    description: "Selected among thousands of nationwide teams for developing the Vocational Education Integration Platform (VEIP)."
  },
  {
    id: "yukti-challenge",
    title: "Yukti Innovation Challenge Selection",
    issuer: "Ministry of Education & AICTE",
    year: "2025",
    icon: "🚀",
    tier: "Innovation Award",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/40",
    accent: "text-emerald-500",
    description: "Recognized by AICTE Innovation Cell for problem-solving feasibility and scalable product potential."
  },

  {
    id: "toss-internship",
    title: "TOSS Consultancy Internship",
    issuer: "TOSS Consultancy Services",
    year: "2024 - 2025",
    icon: "💼",
    tier: "8 Months Full-Time",
    color: "from-rose-500/20 via-pink-500/10 to-transparent",
    border: "border-rose-500/40",
    accent: "text-rose-500",
    description: "Full Stack Developer intern engineering production PHP, MySQL, and Flutter emergency response systems."
  },
  {
    id: "gdsc-lead",
    title: "GDSC Operations Head",
    issuer: "Google Developer Student Clubs",
    year: "2024 - 2025",
    icon: "🎓",
    tier: "Community Leadership",
    color: "from-cyan-500/20 via-sky-500/10 to-transparent",
    border: "border-cyan-500/40",
    accent: "text-cyan-500",
    description: "Led student operations, coordinated 10+ technical workshops, and empowered a 50+ developer community."
  },
  {
    id: "certifications-wall",
    title: "15+ Professional Certifications",
    issuer: "Cisco, Salesforce, AWS, Google, IBM",
    year: "2023 - 2025",
    icon: "📜",
    tier: "Continuous Mastery",
    color: "from-purple-500/20 via-violet-500/10 to-transparent",
    border: "border-purple-500/40",
    accent: "text-purple-500",
    description: "Comprehensive credentials spanning CCNA Enterprise, Salesforce AI Agent, Python, Cloud, and Software Engineering."
  }
];

// Horizontal Milestone Timeline
const milestoneTimeline = [
  {
    year: "2023",
    title: "Programming Foundations",
    subtitle: "Core Computer Science & Web Fundamentals",
    description: "Mastered data structures, algorithms in C++, modern JavaScript (ES6+), semantic HTML5/CSS3 layouts, and dynamic web application architecture.",
    tags: ["Data Structures", "Algorithms", "JavaScript ES6+", "Web Dev"],
    icon: Code2,
    color: "text-blue-500",
    badge: "The Foundation"
  },
  {
    year: "2024",
    title: "Hackathons, Leadership & Innovation",
    subtitle: "National Finalist & Operations Head",
    description: "Reformed student developer engagement as GDSC Operations Head. Competed in Smart India Hackathon 2024 Grand Finale and earned selection in the Yukti Innovation Challenge.",
    tags: ["SIH 2024 Finalist", "GDSC Operations Head", "Yukti Selection", "Community Building"],
    icon: Trophy,
    color: "text-amber-500",
    badge: "High-Impact Year"
  },
  {
    year: "2025",
    title: "Internship, Salesforce AI & Deep Tech",
    subtitle: "8-Month Production Role & AI Specialization",
    description: "Completed an intensive 8-month Full Stack internship at TOSS Consultancy, built production emergency systems, and achieved Salesforce AI Agent Developer and CCNA credentials.",
    tags: ["TOSS Internship", "Salesforce AI Agent", "CCNA Track", "Production Apps"],
    icon: Briefcase,
    color: "text-emerald-500",
    badge: "Industry Execution"
  },
  {
    year: "Present",
    title: "Building Scalable Software",
    subtitle: "Ready for High-Impact Opportunities",
    description: "Architecting end-to-end cloud and AI-driven platforms with clean modular architecture, production-grade performance, and user-centric experience design.",
    tags: ["Full Stack Engineering", "AI Systems", "Cloud Scale", "Open to Roles"],
    icon: Rocket,
    color: "text-accent",
    badge: "Continuous Growth"
  }
];

// Top Certifications Snapshot
const topCertifications = [
  {
    title: "Salesforce AI Agent Developer",
    issuer: "SmartBridge & Salesforce",
    date: "August 2025",
    skills: ["Salesforce AI", "Agentforce", "Autonomous Agents", "Prompt Design"],
    category: "AI & Salesforce",
    icon: Cpu
  },
  {
    title: "CCNA: Enterprise Networking & Automation",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    skills: ["Enterprise Routing", "Network Security", "Automation", "REST APIs"],
    category: "Networking",
    icon: ShieldCheck
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
    skills: ["OOP in Python", "Packages", "Exception Handling", "File I/O"],
    category: "Programming",
    icon: Terminal
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AWS Academy",
    date: "April 2025",
    skills: ["AWS SageMaker", "ML Pipelines", "Model Training", "Cloud AI"],
    category: "Cloud & AI",
    icon: Globe
  },
  {
    title: "Google AI/ML Program",
    issuer: "Google",
    date: "2024 - 2025",
    skills: ["Machine Learning", "Neural Networks", "Data Processing"],
    category: "AI & ML",
    icon: Sparkles
  },
  {
    title: "Software Engineering Simulation",
    issuer: "Accenture",
    date: "2024",
    skills: ["Software Architecture", "Debugging", "SDLC", "Agile Testing"],
    category: "Software Engineering",
    icon: Layers
  }
];

// Career Growth Progression Steps
const careerGrowthSteps = [
  { step: "01", title: "Student", desc: "CS Foundations & Logic", icon: GraduationCap },
  { step: "02", title: "Developer", desc: "Building Web Applications", icon: Code2 },
  { step: "03", title: "Hackathon Finalist", desc: "SIH 2024 National Stage", icon: Trophy },
  { step: "04", title: "Community Leader", desc: "GDSC Operations Head", icon: Users },
  { step: "05", title: "Intern", desc: "TOSS Consultancy Services", icon: Briefcase },
  { step: "06", title: "Full Stack Engineer", desc: "PHP, Flutter & React", icon: Laptop },
  { step: "07", title: "AI & Salesforce Dev", desc: "Autonomous AI Agents", icon: Cpu },
  { step: "08", title: "Future Software Engineer", desc: "Shipping Scalable Systems", icon: Rocket }
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <div className="min-h-screen pt-32 sm:pt-40 pb-24 relative overflow-hidden bg-primary text-textPrimary">
        {/* Background Ambient Lights */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-[2800px] right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* ==========================================================================
             1. HERO SECTION
             ========================================================================== */}
          <section className="mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Headline */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Digital Trophy Room • Milestones</span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] text-textPrimary">
                  Milestones that shaped <br />
                  <span className="text-accent italic font-serif">my engineering</span> journey<span className="text-accent">.</span>
                </h1>

                <p className="text-lg sm:text-xl text-textSecondary max-w-2xl leading-relaxed">
                  From national hackathons and leadership roles to internships and technical certifications—every achievement reflects continuous learning, collaboration, and real-world impact.
                </p>

                {/* Quick Action Anchor Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#highlights"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-mono text-xs sm:text-sm font-medium shadow-lg shadow-accent/25 hover:bg-accent/90 hover:scale-105 transition-all duration-300"
                  >
                    <span>Explore Highlights</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/80 border border-borderColors/90 text-textPrimary hover:border-accent/50 font-mono text-xs sm:text-sm transition-all duration-300 backdrop-blur-md"
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>View Image Gallery</span>
                  </a>

                  <a
                    href="#timeline"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-textSecondary hover:text-textPrimary font-mono text-xs sm:text-sm transition-colors"
                  >
                    <span>Timeline →</span>
                  </a>
                </div>
              </motion.div>

              {/* Right: Floating Statistic Cards */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-5 space-y-3.5"
              >
                {heroFloatingStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * idx }}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="p-4 rounded-2xl border border-borderColors/90 bg-secondary/85 backdrop-blur-xl shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors">
                            {stat.title}
                          </h4>
                          <p className="text-xs text-textSecondary">
                            {stat.sub}
                          </p>
                        </div>
                      </div>

                      <div className="font-mono text-xs sm:text-sm font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        {stat.value}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* ==========================================================================
             2. ANIMATED STATISTICS COUNTER RIBBON
             ========================================================================== */}
          <section className="mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-borderColors/40"
            >
              {statisticsData.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-textPrimary mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="font-display text-xs sm:text-sm font-semibold text-textPrimary">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-textSecondary font-mono mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </section>

          {/* ==========================================================================
             3. ACHIEVEMENT HIGHLIGHTS (LARGE PREMIUM CARDS)
             ========================================================================== */}
          <section id="highlights" className="mb-32 space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Major Distinctions ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                Achievement Highlights
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                In-depth look at flagship national competitions, innovation challenges, and proven engineering outcomes.
              </p>
            </div>

            {/* CARD 1: SMART INDIA HACKATHON 2024 FINALIST (HERO CARD) */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-secondary/90 via-secondary/70 to-accent/5 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* SIH Photo Grid / Carousel */}
                <div className="lg:col-span-6 space-y-3">
                  {/* Primary large image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-borderColors/90 shadow-xl group bg-black/40">
                    <img
                      src={sih1}
                      alt="Smart India Hackathon 2024 Finalist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-xs font-mono text-amber-400 flex items-center gap-1.5 shadow-lg">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>National Grand Finale</span>
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90">
                      2024
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                        Vocational Education Integration Platform (VEIP)
                      </div>
                      <div className="text-sm font-display font-medium text-white/90 line-clamp-1">
                        Presenting before national evaluators & industry leaders
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail strip — 5 extra SIH photos */}
                  <div className="grid grid-cols-5 gap-2">
                    {[sih2, sih3, sih4, sih5, sih6].map((img, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden border border-borderColors/70 group/thumb cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`SIH 2024 photo ${i + 2}`}
                          className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-xl border border-borderColors/70 bg-primary/60 backdrop-blur-md text-center">
                      <div className="font-display font-bold text-accent text-base sm:text-lg">Top 1%</div>
                      <div className="text-[10px] sm:text-xs font-mono text-textSecondary">National Stage</div>
                    </div>
                    <div className="p-3 rounded-xl border border-borderColors/70 bg-primary/60 backdrop-blur-md text-center">
                      <div className="font-display font-bold text-textPrimary text-base sm:text-lg">36 Hours</div>
                      <div className="text-[10px] sm:text-xs font-mono text-textSecondary">Hackathon Sprint</div>
                    </div>
                    <div className="p-3 rounded-xl border border-borderColors/70 bg-primary/60 backdrop-blur-md text-center">
                      <div className="font-display font-bold text-textPrimary text-base sm:text-lg">Govt of India</div>
                      <div className="text-[10px] sm:text-xs font-mono text-textSecondary">Organized By</div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Badges Ribbon */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold">
                      🏆 National Level Hackathon
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-500">
                      Government of India
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                      Finalist
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-4xl font-bold text-textPrimary mb-3 leading-tight">
                      Smart India Hackathon 2024 Finalist
                    </h3>
                    <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                      Designed and developed an innovative solution addressing real-world educational challenges. Collaborated in a multidisciplinary team to build a scalable platform and successfully reached the finalist stage of India's largest hackathon.
                    </p>
                  </div>

                  {/* Achievement Highlights Grid */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono text-accent uppercase tracking-widest font-semibold">
                      Achievement Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-primary/50 border border-borderColors/60 text-xs sm:text-sm">
                        <span className="text-amber-500">🏆</span>
                        <span className="font-medium text-textPrimary">National Finalist</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-primary/50 border border-borderColors/60 text-xs sm:text-sm">
                        <span className="text-blue-500">👥</span>
                        <span className="font-medium text-textPrimary">Team Collaboration</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-primary/50 border border-borderColors/60 text-xs sm:text-sm">
                        <span className="text-emerald-500">💡</span>
                        <span className="font-medium text-textPrimary">Product Development</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-primary/50 border border-borderColors/60 text-xs sm:text-sm">
                        <span className="text-purple-500">⚡</span>
                        <span className="font-medium text-textPrimary">Rapid Prototyping</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-primary/50 border border-borderColors/60 text-xs sm:text-sm sm:col-span-2">
                        <span className="text-rose-500">🖥</span>
                        <span className="font-medium text-textPrimary">Full Stack Architecture & Integration</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/projects/veip"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-accent/25 hover:bg-accent/90 hover:scale-105 transition-all duration-300"
                    >
                      <span>View Project →</span>
                    </Link>

                    <a
                      href="#gallery"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-borderColors/80 bg-secondary/80 text-textSecondary hover:text-textPrimary font-mono text-xs sm:text-sm transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>See SIH Photos</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: YUKTI INNOVATION CHALLENGE */}
            <div className="grid grid-cols-1 gap-8">
              {/* YUKTI INNOVATION CHALLENGE */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl p-8 sm:p-10 shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group overflow-hidden"
              >
                <div className="space-y-5">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-semibold">
                      🚀 Selection Badge
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
                      💡 Innovation Badge
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-500">
                      🔬 Research Badge
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">
                      Ministry of Education & AICTE Innovation Cell
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary leading-tight">
                      Yukti Innovation Challenge
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
                    Selected for the Yukti Innovation Challenge based on the innovation potential and practical impact of our proposed solution. Evaluated on problem validation, technological feasibility, and commercial scalability.
                  </p>

                  {/* Yukti Photo Gallery Strip */}
                  <div className="grid grid-cols-5 gap-2 pt-1">
                    {[yukti1, yukti2, yukti3, yukti4, yukti5].map((img, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden border border-borderColors/70 group/thumb cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={`Yukti Innovation photo ${i + 1}`}
                          className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-primary/60 border border-borderColors/60">
                      <div className="font-mono text-xs text-textSecondary uppercase mb-1">Theme</div>
                      <div className="font-display font-semibold text-textPrimary text-sm">Research & Innovation</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-primary/60 border border-borderColors/60">
                      <div className="font-mono text-xs text-textSecondary uppercase mb-1">Approach</div>
                      <div className="font-display font-semibold text-textPrimary text-sm">Startup Mindset</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-primary/60 border border-borderColors/60">
                      <div className="font-mono text-xs text-textSecondary uppercase mb-1">Evaluation</div>
                      <div className="font-display font-semibold text-textPrimary text-sm">Feasibility & Impact</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-primary/60 border border-borderColors/60">
                      <div className="font-mono text-xs text-textSecondary uppercase mb-1">Status</div>
                      <div className="font-display font-semibold text-accent text-sm">Selected Team</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-borderColors/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-textSecondary">National Innovation Program</span>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline font-semibold"
                  >
                    <span>View Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ==========================================================================
             4. INTERNSHIP EXPERIENCE SECTION (TOSS CONSULTANCY SERVICES)
             ========================================================================== */}
          <section className="mb-32">
            <div className="rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl space-y-12">
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-borderColors/60">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Industry Experience</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary">
                    TOSS Consultancy Services
                  </h2>
                  <p className="text-base sm:text-lg text-textSecondary mt-2">
                    Full Stack Developer Intern • 8 Months Production Engineering Experience
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-4 py-2 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 font-mono text-sm font-bold">
                    8 Months Duration
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-sm font-semibold">
                    Pre-Placement Offer (PPO)
                  </div>
                </div>
              </div>

              {/* Responsibilities & Outcomes Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Responsibilities */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="font-display text-xl font-bold text-textPrimary flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-accent" />
                    <span>Key Engineering Responsibilities</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Developed Production Web Applications", desc: "Built performant backend architectures with PHP, dynamic routing, and modular component design.", icon: Globe },
                      { title: "Cross-Platform Mobile with Flutter & MySQL", desc: "Engineered responsive Flutter user interfaces and optimized complex MySQL relational schemas.", icon: Cpu },
                      { title: "Built Emergency Response Solutions", desc: "Architected real-time alerting and incident reporting systems for critical emergency response apps (Apatkal).", icon: Zap },
                      { title: "Collaborated with Development Team", desc: "Participated in daily standups, code reviews, and cross-functional agile sprints with senior developers.", icon: Users },
                      { title: "Learned Deployment & Production Workflows", desc: "Mastered staging, live server deployments, error logging, and continuous version control practices.", icon: Workflow }
                    ].map((resp, rIdx) => {
                      const Icon = resp.icon;
                      return (
                        <div
                          key={rIdx}
                          className="p-4 rounded-2xl bg-primary/50 border border-borderColors/60 hover:border-accent/40 transition-all flex items-start gap-3.5 group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors">
                              {resp.title}
                            </h4>
                            <p className="text-xs text-textSecondary mt-0.5 leading-relaxed">
                              {resp.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Internship Outcomes & Skill Growth */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="font-display text-xl font-bold text-textPrimary flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span>Internship Outcomes & Mastery</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { title: "Real-World Development", desc: "Shipping production code tested across real user devices and live databases.", icon: "🚀" },
                      { title: "Client Communication", desc: "Translating client requirements into concrete technical specifications and milestones.", icon: "💬" },
                      { title: "Version Control Discipline", desc: "Clean Git workflows, branch strategies, conflict resolution, and PR reviews.", icon: "🌿" },
                      { title: "Agile & Scrum Workflow", desc: "Sprint planning, rapid issue resolution, and milestone delivery discipline.", icon: "⚡" },
                      { title: "Production Security", desc: "SQL injection prevention, data sanitization, and secure authentication flows.", icon: "🔒" },
                      { title: "Professional Growth", desc: "Transitioned from academic programming to production-level software craftsmanship.", icon: "⭐" }
                    ].map((outcome, oIdx) => (
                      <div
                        key={oIdx}
                        className="p-4 rounded-2xl bg-primary/50 border border-borderColors/60 hover:border-accent/40 transition-all"
                      >
                        <div className="text-2xl mb-2">{outcome.icon}</div>
                        <h4 className="font-display text-sm font-bold text-textPrimary mb-1">
                          {outcome.title}
                        </h4>
                        <p className="text-xs text-textSecondary leading-relaxed">
                          {outcome.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Small Internship Journey Timeline */}
              <div className="pt-8 border-t border-borderColors/60 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-textPrimary">
                    Internship Progression Roadmap
                  </h3>
                  <span className="font-mono text-xs text-accent">8-Month Trajectory</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { phase: "Phase 01", title: "Onboarding & Stack Mastery", sub: "PHP, MySQL Schemas & Core Codebase", tag: "Month 1-2" },
                    { phase: "Phase 02", title: "Full Stack & Flutter Modules", sub: "Cross-Platform UI & REST Endpoints", tag: "Month 3-4" },
                    { phase: "Phase 03", title: "Emergency System Engineering", sub: "Apatkal Platform Core Architecture", tag: "Month 5-6" },
                    { phase: "Phase 04", title: "Production Release & PPO", sub: "Performance Optimization & PPO Offer", tag: "Month 7-8" }
                  ].map((phase, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-primary/40 border border-borderColors/60 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-accent font-bold">{phase.phase}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-borderColors/20 text-textSecondary">
                          {phase.tag}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-semibold text-textPrimary mb-1">
                        {phase.title}
                      </h4>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        {phase.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ==========================================================================
             5. LEADERSHIP SECTION (GOOGLE DEVELOPER STUDENT CLUBS)
             ========================================================================== */}
          <section className="mb-32">
            <div className="rounded-3xl border border-borderColors/90 bg-gradient-to-br from-secondary/90 via-secondary/70 to-blue-500/5 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl space-y-10 relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Role Info & Headline */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-500 uppercase tracking-widest px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Google Developer Student Clubs (GDSC)</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary leading-tight">
                    Operations Head
                  </h2>

                  <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                    Spearheaded operations, coordinated technical events, and fostered a vibrant student developer ecosystem centered around collaborative learning, open-source development, and hackathons.
                  </p>
                </div>

                {/* Right: Key Leadership Numbers */}
                <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-primary/70 border border-borderColors/80 text-center">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-blue-500">50+</div>
                    <div className="text-[11px] font-mono text-textSecondary mt-1">Developers Managed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/70 border border-borderColors/80 text-center">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-accent">10+</div>
                    <div className="text-[11px] font-mono text-textSecondary mt-1">Workshops Led</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/70 border border-borderColors/80 text-center">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-500">500+</div>
                    <div className="text-[11px] font-mono text-textSecondary mt-1">Attendees Reached</div>
                  </div>
                </div>
              </div>

              {/* Leadership Impact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {[
                  { title: "Organized Technical Events", desc: "Curated hands-on workshops covering modern web frameworks, cloud architecture, and competitive programming.", icon: Sparkles, color: "text-amber-500" },
                  { title: "Managed Student Community", desc: "Directly coordinated 50+ core team members and organized structured weekly technical syncs.", icon: Users, color: "text-blue-500" },
                  { title: "Led End-to-End Operations", desc: "Managed speaker scheduling, platform logistics, event outreach, and live stream coordination.", icon: Target, color: "text-rose-500" },
                  { title: "Coordinated Workshops", desc: "Delivered beginner-to-advanced coding sessions empowering peers to build and deploy their first apps.", icon: Laptop, color: "text-purple-500" },
                  { title: "Supported Hackathons", desc: "Mentored teams during college and regional hackathons, aiding in system design and rapid debugging.", icon: Trophy, color: "text-emerald-500" },
                  { title: "Mentored Juniors & Community", desc: "Conducted 1-on-1 code reviews and career orientation sessions for incoming computer science students.", icon: GraduationCap, color: "text-cyan-500" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-primary/50 border border-borderColors/60 hover:border-accent/40 transition-all space-y-2 group"
                    >
                      <div className={`w-9 h-9 rounded-xl bg-secondary border border-borderColors/80 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display text-base font-bold text-textPrimary group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ==========================================================================
             6. RECOGNITION WALL (PREMIUM BADGES GRID)
             ========================================================================== */}
          <section className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Honours & Distinctions ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                Recognition Wall
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                Interactive badges celebrating national recognition, industry internships, and leadership excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recognitionBadges.map((badge, idx) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`p-6 sm:p-8 rounded-3xl border ${badge.border} bg-gradient-to-br ${badge.color} bg-secondary/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{badge.icon}</span>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/70 border border-borderColors/60 text-textSecondary">
                        {badge.year}
                      </span>
                    </div>

                    <div>
                      <span className={`text-[11px] font-mono uppercase tracking-widest ${badge.accent} font-semibold block mb-1`}>
                        {badge.tier}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-textPrimary leading-snug group-hover:text-accent transition-colors">
                        {badge.title}
                      </h3>
                      <div className="text-xs text-textSecondary/80 font-mono mt-0.5">
                        {badge.issuer}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {badge.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-borderColors/40 flex items-center justify-between text-xs font-mono text-textSecondary">
                    <span>Verified Milestone</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">✦</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==========================================================================
             7. ACHIEVEMENT TIMELINE (HORIZONTAL PROGRESSION)
             ========================================================================== */}
          <section id="timeline" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Chronological Progression ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                Achievement Timeline
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                Tracing the evolution from early code exploration to hackathon finals, leadership, and production engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestoneTimeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-lg flex flex-col justify-between space-y-6 relative group hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Year & Badge */}
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-accent">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-borderColors/20 text-textSecondary border border-borderColors/40">
                          {item.badge}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-primary/80 border border-borderColors/80 flex items-center justify-center text-accent">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-display text-lg font-bold text-textPrimary leading-snug group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-xs font-mono text-textSecondary mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>

                      <p className="text-xs text-textSecondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-borderColors/50">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-borderColors/15 text-textSecondary border border-borderColors/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ==========================================================================
             8. INTERACTIVE IMAGE GALLERY & LIGHTBOX
             ========================================================================== */}
          <section id="gallery" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Visual Archive & Photos ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                Interactive Milestone Gallery
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                Click any milestone card to open the fullscreen lightbox modal with keyboard navigation, image captions, and zoom.
              </p>
            </div>

            <AchievementsGallery />

          </section>

          {/* ==========================================================================
             9. CERTIFICATIONS SNAPSHOT SHOWCASE
             ========================================================================== */}
          <section className="mb-32">
            <div className="p-8 sm:p-12 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-2xl space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-borderColors/60">
                <div>
                  <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
                    [ Industry Credentials ]
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">
                    Top Certifications Snapshot
                  </h2>
                  <p className="text-sm sm:text-base text-textSecondary mt-1">
                    Industry-recognized certifications in AI, Networking, Cloud & Python programming.
                  </p>
                </div>

                <Link
                  to="/certifications"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-accent/25 hover:bg-accent/90 hover:scale-105 transition-all duration-300 self-start md:self-auto flex-shrink-0"
                >
                  <span>View All 15+ Certifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topCertifications.map((cert, cIdx) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cIdx}
                      className="p-5 rounded-2xl bg-primary/50 border border-borderColors/60 hover:border-accent/40 transition-all space-y-4 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-borderColors/20 text-textSecondary">
                            {cert.date}
                          </span>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-accent uppercase tracking-wider">
                            {cert.category}
                          </div>
                          <h4 className="font-display text-base font-bold text-textPrimary leading-snug group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <div className="text-xs text-textSecondary/80 font-mono mt-0.5">
                            {cert.issuer}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-3 border-t border-borderColors/40">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-borderColors/20 text-textSecondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ==========================================================================
             10. WHAT THESE ACHIEVEMENTS MEAN (3 CORE VALUES)
             ========================================================================== */}
          <section className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Philosophy & Impact ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                What These Achievements Mean
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                Behind every trophy, certificate, and badge lies a core principle that drives my engineering mindset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* INNOVATION */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-xl space-y-4 hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-2xl group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="font-display text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Innovation
                </h3>
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Building Meaningful Products
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  Transforming abstract challenges into tangible, user-tested software solutions through rapid prototyping, idea validation, and continuous experimentation.
                </p>
              </motion.div>

              {/* LEADERSHIP */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-xl space-y-4 hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-2xl group-hover:scale-110 transition-transform">
                  👥
                </div>
                <h3 className="font-display text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Leadership
                </h3>
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Helping Communities Grow
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  Guiding peer developers, spearheading GDSC technical operations, organizing impactful workshops, and creating an inclusive culture of collective technical growth.
                </p>
              </motion.div>

              {/* ENGINEERING */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-3xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-xl space-y-4 hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-2xl group-hover:scale-110 transition-transform">
                  ⚙️
                </div>
                <h3 className="font-display text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Engineering
                </h3>
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  Shipping Scalable Software
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  Adhering to strict production standards, robust architecture, clean code practices, automated workflows, and building software that reliably scales.
                </p>
              </motion.div>
            </div>
          </section>

          {/* ==========================================================================
             11. CAREER GROWTH ROADMAP (ANIMATED PROGRESSION)
             ========================================================================== */}
          <section className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                [ Career Trajectory ]
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary mb-4">
                Career Growth Roadmap
              </h2>
              <p className="text-base sm:text-lg text-textSecondary">
                An ongoing journey of dedication, technical depth, and relentless execution.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {careerGrowthSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 rounded-2xl border border-borderColors/80 bg-secondary/80 backdrop-blur-xl text-center space-y-2 relative group hover:border-accent/50 transition-all flex flex-col items-center justify-between"
                  >
                    <div className="font-mono text-[10px] text-accent font-bold px-2 py-0.5 rounded-full bg-accent/10">
                      Step {step.step}
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-primary border border-borderColors/70 flex items-center justify-center text-textPrimary group-hover:text-accent group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-textPrimary leading-tight group-hover:text-accent transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-textSecondary mt-1 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ==========================================================================
             12. RECRUITER HIGHLIGHT BOX
             ========================================================================== */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border-2 border-accent/30 bg-gradient-to-r from-secondary/95 via-secondary/80 to-accent/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold block">
                    Recruiter & Engineering Lead Takeaway
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-textPrimary">
                    Beyond the Trophy Room
                  </h3>
                </div>
              </div>

              <blockquote className="font-display text-lg sm:text-2xl font-medium text-textPrimary leading-relaxed italic">
                “These achievements represent more than certificates—they reflect my ability to learn quickly, collaborate effectively, solve real-world problems, and continuously improve as a software engineer.”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-borderColors/60">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60 border border-borderColors/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-medium text-textPrimary">Fast Technical Adaptability</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60 border border-borderColors/60">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-medium text-textPrimary">Battle-Tested Teamwork</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60 border border-borderColors/60">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-medium text-textPrimary">Production Code Quality</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/60 border border-borderColors/60">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-xs font-mono font-medium text-textPrimary">High Initiative & Leadership</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==========================================================================
             13. BOTTOM CALL TO ACTION
             ========================================================================== */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-borderColors/90 bg-gradient-to-b from-secondary/90 to-secondary/50 backdrop-blur-2xl p-10 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-textPrimary leading-tight">
                  Every milestone started with curiosity<span className="text-accent">.</span>
                </h2>
                <p className="text-base sm:text-xl text-textSecondary leading-relaxed">
                  The next one could be building something extraordinary together.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-mono text-sm font-semibold shadow-xl shadow-accent/25 hover:bg-accent/90 hover:scale-105 transition-all duration-300"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary/80 border border-borderColors/90 text-textPrimary hover:border-accent/50 font-mono text-sm font-semibold transition-all duration-300 backdrop-blur-md hover:scale-105"
                >
                  <span>Let's Connect ✉️</span>
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
