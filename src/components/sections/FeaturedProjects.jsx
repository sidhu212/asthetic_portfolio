import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Sparkles, Compass, ShieldAlert, GraduationCap, Globe, Lock } from 'lucide-react';
import { projects } from '../../data/projects';
import travelmateImg from '../../assets/projects/travelmate.png';
import apatkalImg from '../../assets/projects/apatkal.png';
import veipImg from '../../assets/projects/veip.png';

// Top 3 featured projects
const featuredIds = ['travelmate-kochi', 'apatkal', 'veip'];

const projectMeta = {
  'travelmate-kochi': {
    icon: Compass,
    image: travelmateImg,
    urlDisplay: 'travelmatekochi.in',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-500',
    tag: 'Client Project',
    status: 'Live & Operational',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-500',
    headline: 'Travel & tourism booking platform for managing destinations, curated packages, and live enquiries.',
    previewDetails: {
      type: 'Web Platform',
      metrics: '50+ Destinations • Instant Booking Enquiries'
    }
  },
  'apatkal': {
    icon: ShieldAlert,
    image: apatkalImg,
    urlDisplay: 'apatkal.in',
    gradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    accentColor: 'text-rose-500',
    tag: 'Internship Project',
    status: 'Production System',
    badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-500',
    headline: 'Emergency response ecosystem for rapid ambulance dispatch, driver navigation, and emergency tracking.',
    previewDetails: {
      type: 'Mobile & Web Ecosystem',
      metrics: 'Real-time GPS • Instant Dispatch Workflows'
    }
  },
  'veip': {
    icon: GraduationCap,
    image: veipImg,
    urlDisplay: 'vission-landing-page.vercel.app',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accentColor: 'text-blue-500',
    tag: 'Smart India Hackathon 2024',
    status: 'National Finalist',
    badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-500',
    headline: 'NEP 2020-aligned vocational learning and mentorship platform bridging education with industry employability.',
    previewDetails: {
      type: 'EdTech & Mentorship',
      metrics: 'NEP 2020 Aligned • Digital Skill Badges'
    }
  }
};

const FeaturedProjects = () => {
  const featuredList = projects.filter(p => featuredIds.includes(p.id));

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-textPrimary">
              Featured Projects<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary max-w-md text-base leading-relaxed"
          >
            High-impact software engineered for scale, responsiveness, and seamless user experiences.
          </motion.p>
        </div>

        {/* Horizontal Project Cards */}
        <div className="space-y-12">
          {featuredList.map((project, index) => {
            const meta = projectMeta[project.id] || {};
            const Icon = meta.icon || Sparkles;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative rounded-3xl border border-borderColors/80 bg-primary/80 backdrop-blur-xl overflow-hidden hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/5"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient || 'from-accent/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center relative z-10">
                  {/* Left: Interactive Visual Webpage Mockup Frame */}
                  <div className="lg:col-span-5 w-full">
                    <a
                      href={project.liveLink || `/projects/${project.id}`}
                      target={project.liveLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl border border-borderColors bg-secondary/80 overflow-hidden group/mockup hover:border-accent/80 transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer"
                      title={project.liveLink ? `Open ${project.title} live website` : `View ${project.title}`}
                      data-hover
                    >
                      {/* Top Browser Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-primary/90 border-b border-borderColors/70 backdrop-blur-md">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                        </div>

                        {/* Browser Mini URL Bar */}
                        <div className="mx-3 flex-1 flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-borderColors/50 text-[11px] font-mono text-textSecondary/70 truncate max-w-[200px]">
                          <Lock className="w-2.5 h-2.5 text-accent shrink-0" />
                          <span className="truncate">{meta.urlDisplay || 'localhost:3000'}</span>
                        </div>

                        {/* Type / Status Badge */}
                        <div className="shrink-0 font-mono text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="hidden sm:inline">{meta.status}</span>
                        </div>
                      </div>

                      {/* Webpage Interface Screenshot Viewport */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary/30">
                        {meta.image ? (
                          <img
                            src={meta.image}
                            alt={`${project.title} Web Interface`}
                            className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-textSecondary">
                            Web Interface Preview
                          </div>
                        )}

                        {/* Subtle dark gradient overlay at top/bottom for premium frame depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-40 group-hover/mockup:opacity-0 transition-opacity duration-300 pointer-events-none" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-xs font-mono text-textPrimary">
                          <span className="px-3.5 py-1.5 rounded-full bg-primary border border-borderColors shadow-lg flex items-center gap-1.5">
                            <span>Open Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5 text-accent" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Right: Project Details & Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center gap-3 flex-wrap mb-4">
                        <span className={`font-mono text-xs px-3 py-1 rounded-full border ${meta.badgeBg || 'bg-accent/10 border-accent/30 text-accent'}`}>
                          {meta.tag || project.category}
                        </span>
                        <span className="font-mono text-xs text-textSecondary/60">
                          0{index + 1} / 03
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-textPrimary group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* One Sentence Description */}
                      <p className="text-base sm:text-lg text-textSecondary mt-4 leading-relaxed max-w-xl">
                        {meta.headline || project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-lg border border-borderColors/70 bg-secondary/60 text-textSecondary hover:text-textPrimary hover:border-accent/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-borderColors/60">
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-textPrimary text-primary font-sans text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300 shadow-md group/btn"
                        data-hover
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-borderColors font-sans text-xs font-medium text-textSecondary hover:text-textPrimary hover:border-accent/50 hover:bg-accent/5 transition-all"
                          data-hover
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-borderColors font-sans text-xs font-medium text-textSecondary hover:text-textPrimary hover:border-accent/50 hover:bg-accent/5 transition-all"
                          data-hover
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-borderColors bg-primary hover:border-accent text-textPrimary hover:text-accent font-sans text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg group"
            data-hover
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
