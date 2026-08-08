import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-borderColors/80 bg-primary/80 backdrop-blur-2xl p-10 md:p-20 text-center overflow-hidden shadow-2xl"
        >
          {/* Animated Background Glowing Orbs */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-mono text-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-time & High-Impact Opportunities</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-textPrimary leading-tight mb-6">
              Have an idea?<br />
              <span className="text-textSecondary">Let's build something exceptional together.</span>
            </h2>

            <p className="text-base sm:text-lg text-textSecondary max-w-xl mx-auto leading-relaxed mb-10">
              Whether you need a high-performance web platform, an AI-powered product, or a robust full-stack solution, let's connect.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-textPrimary text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl group"
                data-hover
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <a
                href="/Siddharth_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-borderColors bg-secondary/60 text-textPrimary font-sans text-sm font-semibold uppercase tracking-wider hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                data-hover
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Email link badge underneath */}
            <div className="mt-10">
              <a
                href="mailto:siddharthsingh0259@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-xs text-textSecondary hover:text-accent transition-colors"
                data-hover
              >
                <Mail className="w-3.5 h-3.5" />
                <span>siddharthsingh0259@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
