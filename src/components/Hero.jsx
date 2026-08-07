import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  FileText, 
  Mail, 
  Code2, 
  Zap, 
  Smartphone, 
  Server, 
  Bot, 
  ShieldCheck, 
  Flame, 
  Cloud 
} from 'lucide-react';
import profilePic from '../assets/profile picturee.jpg';

// Floating Badge Component with independent levitation animation
const FloatingHeroBadge = ({ icon: Icon, label, positionClass, delay = 0, duration = 4, yOffset = 12 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -yOffset, 0]
      }}
      transition={{
        opacity: { duration: 0.6, delay: delay * 0.2 },
        scale: { duration: 0.6, delay: delay * 0.2 },
        y: {
          duration: duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.3
        }
      }}
      className={`absolute ${positionClass} z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-borderColors/90 bg-primary/90 backdrop-blur-xl shadow-lg hover:border-accent hover:scale-110 transition-transform duration-300 cursor-default select-none`}
      data-hover
    >
      <Icon className="w-3.5 h-3.5 text-accent" />
      <span className="font-display font-medium text-xs text-textPrimary whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

const Hero = () => {
  const imageRef = useRef(null);

  // 3D Tilt Effect on Portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* =========================================================================
          ANIMATED BACKGROUND: Moving Blobs, Floating Grid, Glowing Ambient Light
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Glowing Orb 1 - Accent Warm */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 md:left-1/4 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-accent/15 blur-[120px]"
        />

        {/* Glowing Orb 2 - Cool Cyan / Indigo */}
        <motion.div
          animate={{
            x: [0, -60, 50, 0],
            y: [0, 80, -50, 0],
            scale: [1, 1.15, 0.85, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-10 md:right-1/4 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-blue-500/10 blur-[130px]"
        />

        {/* Floating Grid Lines */}
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* =========================================================================
          HERO MAIN CONTENT GRID
          ========================================================================= */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Recruiter-focused Marketing Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          {/* Small Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-borderColors/90 bg-primary/80 backdrop-blur-md shadow-sm w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs font-medium uppercase tracking-[2px] text-textPrimary">
              Software Engineer • Full Stack Developer
            </span>
          </motion.div>

          {/* Large Punchy Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-textPrimary leading-[1.05]">
              Building digital products <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-500">
                that people actually enjoy using.
              </span>
            </h1>
          </motion.div>

          {/* Very Short Description (Max 2 lines) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-textSecondary font-sans leading-relaxed max-w-xl"
          >
            Full Stack Developer passionate about building modern web applications, AI-powered products, and scalable software experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-textPrimary text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl group"
              data-hover
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-borderColors bg-secondary/50 backdrop-blur-md text-textPrimary font-sans text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
              data-hover
            >
              <span>Let's Connect</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Small Social Links Underneath */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6 pt-4 text-xs font-mono text-textSecondary border-t border-borderColors/50 max-w-lg"
          >
            <a
              href="https://github.com/sidhu212"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              data-hover
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/siddharth-singh-4b8416262/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              data-hover
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              data-hover
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="mailto:siddharthsingh0259@gmail.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              data-hover
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Large Portrait with 3D Tilt & Surrounding Floating Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-3xl p-3 border-2 border-borderColors/80 bg-primary/60 backdrop-blur-2xl shadow-2xl group cursor-pointer"
          >
            {/* Image Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary">
              <img
                src={profilePic}
                alt="Siddharth Singh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
            </div>

            {/* Corner Decorative Accents */}
            <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg pointer-events-none" />

            {/* =============================================================
                FLOATING ANIMATED BADGES SURROUNDING PORTRAIT
                ============================================================= */}
            
            {/* 1. Full Stack (Top-Left) */}
            <FloatingHeroBadge
              icon={Code2}
              label="Full Stack"
              positionClass="-top-6 -left-6 md:-left-12"
              delay={1}
              duration={4.5}
              yOffset={10}
            />

            {/* 2. React (Top-Right) */}
            <FloatingHeroBadge
              icon={Zap}
              label="React"
              positionClass="-top-6 -right-6 md:-right-10"
              delay={2}
              duration={5}
              yOffset={14}
            />

            {/* 3. Flutter (Right-Upper) */}
            <FloatingHeroBadge
              icon={Smartphone}
              label="Flutter"
              positionClass="top-24 -right-10 md:-right-16"
              delay={3}
              duration={4.2}
              yOffset={12}
            />

            {/* 4. Node (Left-Middle) */}
            <FloatingHeroBadge
              icon={Server}
              label="Node.js"
              positionClass="top-28 -left-10 md:-left-16"
              delay={4}
              duration={5.2}
              yOffset={15}
            />

            {/* 5. AI (Right-Middle) */}
            <FloatingHeroBadge
              icon={Bot}
              label="AI Solutions"
              positionClass="top-56 -right-8 md:-right-14"
              delay={5}
              duration={4.8}
              yOffset={11}
            />

            {/* 6. Salesforce (Left-Lower) */}
            <FloatingHeroBadge
              icon={ShieldCheck}
              label="Salesforce"
              positionClass="top-60 -left-8 md:-left-14"
              delay={6}
              duration={4.6}
              yOffset={13}
            />

            {/* 7. Firebase (Right-Lower) */}
            <FloatingHeroBadge
              icon={Flame}
              label="Firebase"
              positionClass="bottom-14 -right-6 md:-right-12"
              delay={7}
              duration={5.5}
              yOffset={12}
            />

            {/* 8. AWS (Bottom-Left) */}
            <FloatingHeroBadge
              icon={Cloud}
              label="AWS"
              positionClass="bottom-10 -left-6 md:-left-10"
              delay={8}
              duration={4.3}
              yOffset={10}
            />

            {/* 9. Open to Work Badge (Bottom-Center-Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 1 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/50 bg-primary shadow-xl whitespace-nowrap"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono font-semibold text-xs text-emerald-600 dark:text-emerald-400">
                Open to Work
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
