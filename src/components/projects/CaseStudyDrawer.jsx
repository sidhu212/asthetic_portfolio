import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  X, ExternalLink, Github, Sparkles, CheckCircle2, 
  Layers, Cpu, Calendar, User, Users, Globe, ArrowUpRight,
  ShieldCheck, Terminal, Award, Lightbulb, Wrench, Maximize2
} from 'lucide-react';
import TechPill from './TechPill';
import BrowserMockup from './BrowserMockup';

const CaseStudyDrawer = ({ project, isOpen, onClose }) => {
  // Handle drawer open/close side effects: lock background Lenis scroll & window scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Stop Lenis background scrolling
      if (window.__lenis) {
        window.__lenis.stop();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Resume Lenis background scrolling
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-end"
          data-lenis-prevent="true"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            data-lenis-prevent="true"
          />

          {/* Slide-Over Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-3xl h-screen max-h-screen bg-primary border-l border-borderColors shadow-2xl overflow-y-auto overscroll-contain flex flex-col z-10 scrollbar-thin scrollbar-thumb-borderColors scrollbar-track-transparent"
            data-lenis-prevent="true"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-8 py-4 bg-primary/95 backdrop-blur-md border-b border-borderColors">
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs px-3 py-1 rounded-full border ${project.badgeBg || 'bg-accent/10 border-accent/30 text-accent'}`}>
                  {project.badge || project.category}
                </span>
                <span className="font-mono text-xs text-textSecondary hidden sm:inline">
                  Case Study Dossier
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* View Full Page Button in Header */}
                <Link
                  to={`/projects/${project.id}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-borderColors bg-secondary/80 text-textPrimary hover:border-accent hover:text-accent text-xs font-mono transition-all shadow-sm group"
                  data-hover
                  title="Open Dedicated Full Case Study Page"
                >
                  <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">View Full Page</span>
                  <span className="sm:hidden">Full Page</span>
                </Link>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-borderColors hover:border-accent hover:text-accent bg-secondary transition-all cursor-pointer"
                  aria-label="Close Case Study Drawer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-10 space-y-10 flex-1">
              {/* Title & Tagline */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deep Dive Case Study</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-textPrimary">
                  {project.title}
                </h2>
                <p className="mt-3 text-lg text-textSecondary leading-relaxed">
                  {project.tagline || project.shortDescription}
                </p>
              </div>

              {/* Browser Preview Frame */}
              <div className="w-full">
                <BrowserMockup project={project} isHero={false} />
              </div>

              {/* Project Meta Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-borderColors bg-secondary/40 font-mono text-xs">
                <div>
                  <span className="text-textSecondary block mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" /> Timeline
                  </span>
                  <span className="text-textPrimary font-medium">{project.timeline || project.duration}</span>
                </div>
                <div>
                  <span className="text-textSecondary block mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent" /> Role
                  </span>
                  <span className="text-textPrimary font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-textSecondary block mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-accent" /> Team
                  </span>
                  <span className="text-textPrimary font-medium">{project.teamSize || 'Solo'}</span>
                </div>
                <div>
                  <span className="text-textSecondary block mb-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-accent" /> Status
                  </span>
                  <span className="text-emerald-500 font-medium">{project.status}</span>
                </div>
              </div>

              {/* Problem Solved Highlight Banner */}
              {project.problemSolved && (
                <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5 relative overflow-hidden">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                        Core Problem Solved
                      </h4>
                      <p className="text-base text-textPrimary leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* The Challenge Section */}
              {caseStudy.challenge && (
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-medium text-textPrimary flex items-center gap-2">
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-base text-textSecondary leading-relaxed whitespace-pre-line">
                    {caseStudy.challenge}
                  </p>
                </div>
              )}

              {/* Approach & Architecture Section */}
              {caseStudy.approach && (
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-medium text-textPrimary flex items-center gap-2">
                    <span>Approach & Engineering Architecture</span>
                  </h3>
                  <p className="text-base text-textSecondary leading-relaxed whitespace-pre-line">
                    {caseStudy.approach}
                  </p>
                  {caseStudy.architecture && (
                    <div className="p-5 rounded-xl border border-borderColors bg-secondary/50 font-mono text-xs text-textSecondary leading-relaxed mt-4">
                      <span className="text-accent font-semibold block mb-1.5 font-sans text-sm">System Architecture Breakdown:</span>
                      {caseStudy.architecture}
                    </div>
                  )}
                </div>
              )}

              {/* Key Features & Capabilities */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-medium text-textPrimary">
                    Key Features & Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-borderColors bg-secondary/30 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-textPrimary leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Highlights */}
              {caseStudy.engineeringHighlights && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-medium text-textPrimary flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    <span>Technical Highlights & Overcomes</span>
                  </h3>
                  <div className="space-y-3">
                    {caseStudy.engineeringHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-borderColors bg-secondary/20 flex items-start gap-3"
                      >
                        <span className="font-mono text-xs text-accent font-bold mt-0.5">0{idx + 1}.</span>
                        <p className="text-sm text-textSecondary leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack Breakdown */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-medium text-textPrimary">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <TechPill key={tech} tech={tech} size="md" />
                  ))}
                </div>
              </div>

              {/* Results & Lessons Learned */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-borderColors">
                {caseStudy.results && (
                  <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Impact & Results
                    </h4>
                    <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {caseStudy.results}
                    </p>
                  </div>
                )}
                {caseStudy.lessonsLearned && (
                  <div className="p-5 rounded-xl border border-borderColors bg-secondary/40">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4" /> Engineering Takeaways
                    </h4>
                    <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {caseStudy.lessonsLearned}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="sticky bottom-0 z-20 p-6 bg-primary/95 backdrop-blur-md border-t border-borderColors flex items-center flex-wrap gap-3 justify-between">
              <div className="flex items-center flex-wrap gap-3">
                {/* View Full Page Link Button */}
                <Link
                  to={`/projects/${project.id}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-textPrimary text-primary font-sans text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all shadow-md group cursor-pointer"
                  data-hover
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-borderColors font-sans text-xs font-semibold uppercase tracking-wider text-textPrimary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                    data-hover
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-borderColors font-sans text-xs font-semibold uppercase tracking-wider text-textPrimary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                    data-hover
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="font-mono text-xs text-textSecondary hover:text-textPrimary transition-colors cursor-pointer py-1"
              >
                Close ✕
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDrawer;
