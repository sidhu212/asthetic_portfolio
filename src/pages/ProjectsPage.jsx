import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Search, X, ExternalLink, Github, ArrowRight, 
  CheckCircle2, Layers, Calendar, User, Globe, Activity,
  ShieldAlert, Award, FileCode, Check, Filter, Cpu, SlidersHorizontal
} from 'lucide-react';
import { projects } from '../data/projects';
import BrowserMockup from '../components/projects/BrowserMockup';
import TechPill from '../components/projects/TechPill';
import CaseStudyDrawer from '../components/projects/CaseStudyDrawer';
import Footer from '../components/sections/Footer';

// Filter categories
const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'client', label: 'Client Projects' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'personal', label: 'Personal' },
  { id: 'internship', label: 'Internship' }
];

// Floating hero statistics data
const heroStats = [
  { label: "Projects Built", value: "10+", sub: "Full Stack & AI", icon: FileCode, color: "text-amber-500", border: "border-amber-500/30", bg: "bg-amber-500/10" },
  { label: "Internship Experience", value: "8 Mo", sub: "Toss Consultancy", icon: Activity, color: "text-rose-500", border: "border-rose-500/30", bg: "bg-rose-500/10" },
  { label: "SIH Finalist", value: "Top 1%", sub: "Smart India Hackathon", icon: Award, color: "text-blue-500", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  { label: "Certifications", value: "15+", sub: "Oracle, IBM, HackerRank", icon: ShieldAlert, color: "text-emerald-500", border: "border-emerald-500/30", bg: "bg-emerald-500/10" }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Filter projects by active category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const matchesCategory = activeCategory === 'all' 
        || (project.filterCategories && project.filterCategories.includes(activeCategory));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query 
        || project.title.toLowerCase().includes(query)
        || project.shortDescription.toLowerCase().includes(query)
        || project.tagline?.toLowerCase().includes(query)
        || project.category.toLowerCase().includes(query)
        || project.techStack.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Flagship hero project is the first item in the unfiltered list or first matching if searching
  const isFiltering = activeCategory !== 'all' || searchQuery.trim() !== '';
  const heroProject = isFiltering ? null : projects[0];
  const regularProjects = isFiltering ? filteredProjects : filteredProjects.slice(1);

  return (
    <>
      <div className="min-h-screen pt-32 sm:pt-40 pb-24 relative overflow-hidden">
        {/* Background Ambient Glow Gradients */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* ================= HERO SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20 lg:mb-28">
            {/* Left: Headline & Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Works & Case Studies</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-textPrimary leading-[1.05]">
                Building products, <br />
                <span className="text-accent italic font-serif">not just</span> projects<span className="text-accent">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-textSecondary max-w-xl leading-relaxed">
                A curated collection of software I've designed, engineered, and shipped—from hackathon platforms to production-ready applications.
              </p>
            </motion.div>

            {/* Right: Animated Floating Project Statistics Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {heroStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl border border-borderColors/90 bg-secondary/80 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none`} />
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl border ${stat.border} ${stat.bg} flex items-center justify-center ${stat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-emerald-500 font-mono text-[10px] font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Verified
                      </span>
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-textPrimary tracking-tight">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs font-semibold text-textPrimary mt-0.5">
                      {stat.label}
                    </div>
                    <div className="font-mono text-[11px] text-textSecondary mt-1 truncate">
                      {stat.sub}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ================= FILTER & SEARCH BAR ================= */}
          <div className="mb-16 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-borderColors">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none no-scrollbar flex-wrap sm:flex-nowrap">
                {filterTabs.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveCategory(tab.id)}
                      className={`relative font-mono text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-textPrimary text-primary font-semibold shadow-md'
                          : 'border border-borderColors/80 bg-secondary/60 text-textSecondary hover:text-textPrimary hover:border-accent/50'
                      }`}
                      data-hover
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeFilterBubble"
                          className="absolute inset-0 rounded-full bg-textPrimary -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span>{tab.label}</span>
                      {tab.id === 'all' && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-primary/20 text-primary' : 'bg-borderColors/40 text-textSecondary'}`}>
                          {projects.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar Input */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects or tech..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-full border border-borderColors bg-secondary/90 text-textPrimary placeholder:text-textSecondary/60 text-xs font-mono focus:outline-none focus:border-accent transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-textSecondary hover:text-textPrimary rounded-full"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Count & Active Search Feedback */}
            <div className="flex items-center justify-between text-xs font-mono text-textSecondary">
              <span>
                Showing <strong className="text-textPrimary">{filteredProjects.length}</strong> of {projects.length} case studies
              </span>
              {isFiltering && (
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-accent hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* ================= PROJECT LISTING ================= */}
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <div className="py-24 text-center border border-borderColors/60 rounded-3xl bg-secondary/30">
              <div className="w-16 h-16 rounded-full bg-secondary border border-borderColors flex items-center justify-center mx-auto mb-4 text-textSecondary">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-medium text-textPrimary mb-2">No projects found</h3>
              <p className="text-textSecondary text-sm max-w-md mx-auto mb-6">
                No case studies match your current filter or search criteria. Try searching for a different technology or keyword.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-textPrimary text-primary font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16 lg:space-y-24">
              
              {/* ================= FLAGSHIP HERO PROJECT (WHEN NOT FILTERING) ================= */}
              {heroProject && (
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                  className="group relative rounded-3xl border border-borderColors/90 bg-primary/90 backdrop-blur-xl overflow-hidden hover:border-accent/70 transition-all duration-500 shadow-xl hover:shadow-2xl"
                >
                  {/* Ambient Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${heroProject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-14 relative z-10 items-center">
                    
                    {/* Left: Flagship Browser Mockup Preview */}
                    <div className="lg:col-span-6 w-full">
                      <BrowserMockup project={heroProject} isHero={true} />
                    </div>

                    {/* Right: Flagship Project Story & Information */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Badges */}
                        <div className="flex items-center gap-3 flex-wrap mb-4">
                          <span className={`font-mono text-xs px-3.5 py-1 rounded-full border font-medium ${heroProject.badgeBg}`}>
                            {heroProject.badge || heroProject.category}
                          </span>
                          <span className="font-mono text-xs px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                            ★ Flagship Showcase
                          </span>
                          <span className="font-mono text-xs text-textSecondary/70 ml-auto">
                            01 / 0{projects.length}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-textPrimary group-hover:text-accent transition-colors duration-300">
                          {heroProject.title}
                        </h2>

                        <p className="text-base sm:text-lg text-textSecondary mt-4 leading-relaxed">
                          {heroProject.shortDescription}
                        </p>
                      </div>

                      {/* 5-Point Feature Highlights Checklist */}
                      {heroProject.highlightsChecklist && (
                        <div className="p-5 rounded-2xl border border-borderColors/70 bg-secondary/50 space-y-2.5">
                          <div className="font-mono text-[11px] uppercase tracking-wider text-textSecondary font-semibold mb-2">
                            Key Product Highlights
                          </div>
                          {heroProject.highlightsChecklist.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-textPrimary">
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Chips */}
                      <div className="space-y-2">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-textSecondary">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {heroProject.techStack.map((tech) => (
                            <TechPill key={tech} tech={tech} size="sm" />
                          ))}
                        </div>
                      </div>

                      {/* Project Meta Bar */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-borderColors/70 font-mono text-xs text-textSecondary">
                        <div>
                          <span className="block text-[10px] uppercase text-textSecondary/70">Role</span>
                          <span className="text-textPrimary font-medium truncate block">{heroProject.role}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase text-textSecondary/70">Timeline</span>
                          <span className="text-textPrimary font-medium truncate block">{heroProject.timeline || heroProject.duration}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase text-textSecondary/70">Platform</span>
                          <span className="text-emerald-500 font-medium truncate block">{heroProject.status}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-borderColors/70">
                        <button
                          onClick={() => setSelectedCaseStudy(heroProject)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-textPrimary text-primary font-sans text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all shadow-md group/btn cursor-pointer"
                          data-hover
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        {heroProject.liveLink && (
                          <a
                            href={heroProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-borderColors font-sans text-xs font-semibold uppercase tracking-wider text-textPrimary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                            data-hover
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {heroProject.githubLink && (
                          <a
                            href={heroProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-borderColors font-sans text-xs font-semibold uppercase tracking-wider text-textPrimary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                            data-hover
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================= ALTERNATING PROJECT SHOWCASE CARDS ================= */}
              <div className="space-y-16 lg:space-y-24">
                {regularProjects.map((project, index) => {
                  // Alternating logic: Even index (0, 2, 4) -> Image Left; Odd index (1, 3, 5) -> Content Left, Image Right
                  const isEven = index % 2 === 0;
                  const projectIndexDisplay = isFiltering 
                    ? `0${index + 1}` 
                    : `0${index + 2}`;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="group relative rounded-3xl border border-borderColors/80 bg-primary/80 backdrop-blur-xl overflow-hidden hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl"
                    >
                      {/* Subtle Ambient Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-accent/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 items-center relative z-10">
                        
                        {/* Image Preview Block - Ordered conditionally for alternating visual rhythm */}
                        <div className={`lg:col-span-5 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                          <BrowserMockup project={project} isHero={false} />
                        </div>

                        {/* Content Block */}
                        <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div>
                            {/* Badges & Counter */}
                            <div className="flex items-center gap-3 flex-wrap mb-4">
                              <span className={`font-mono text-xs px-3 py-1 rounded-full border font-medium ${project.badgeBg || 'bg-accent/10 border-accent/30 text-accent'}`}>
                                {project.badge || project.category}
                              </span>
                              <span className="font-mono text-xs text-textSecondary/60">
                                {projectIndexDisplay} / 0{projects.length}
                              </span>
                            </div>

                            {/* Project Title */}
                            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-textPrimary group-hover:text-accent transition-colors duration-300">
                              {project.title}
                            </h3>

                            {/* Two-line Overview */}
                            <div className="mt-4 space-y-3">
                              <div>
                                <span className="font-mono text-[11px] uppercase tracking-wider text-textSecondary block mb-1">Overview</span>
                                <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                                  {project.shortDescription}
                                </p>
                              </div>

                              {/* Problem Solved Section */}
                              {project.problemSolved && (
                                <div className="p-4 rounded-xl border border-borderColors/60 bg-secondary/40">
                                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold block mb-1">
                                    ✦ Problem Solved
                                  </span>
                                  <p className="text-xs sm:text-sm text-textPrimary leading-relaxed">
                                    {project.problemSolved}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Tech Stack Chips */}
                          <div className="space-y-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-textSecondary block">
                              Technologies
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <TechPill key={tech} tech={tech} size="sm" />
                              ))}
                            </div>
                          </div>

                          {/* Project Timeline & Footer Metrics */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-borderColors/60 font-mono text-[11px] text-textSecondary">
                            <div>
                              <span className="block text-[10px] uppercase text-textSecondary/60">📅 Timeline</span>
                              <span className="text-textPrimary font-medium truncate block">{project.timeline || project.duration}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase text-textSecondary/60">👤 Role</span>
                              <span className="text-textPrimary font-medium truncate block">{project.role}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase text-textSecondary/60">🚀 Status</span>
                              <span className="text-emerald-500 font-medium truncate block">{project.status}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] uppercase text-textSecondary/60">🏷 Platform</span>
                              <span className="text-textPrimary font-medium truncate block">{project.platform ? project.platform.split(' ')[0] : 'Web'}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-borderColors/60">
                            <button
                              onClick={() => setSelectedCaseStudy(project)}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-textPrimary text-primary font-sans text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 shadow-md group/btn cursor-pointer"
                              data-hover
                            >
                              <span>Read Case Study</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

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

            </div>
          )}

          {/* ================= BOTTOM HIGH-IMPACT CALL TO ACTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-28 lg:mt-36 p-10 sm:p-16 rounded-3xl border border-borderColors bg-secondary/60 backdrop-blur-xl relative overflow-hidden text-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Build Something High-Impact</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-textPrimary leading-tight">
                Interested in how I build software?
              </h2>

              <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                Whether you have an ambitious product idea, need a full-stack engineer for your team, or want to discuss engineering architectures—let's connect.
              </p>

              <div className="flex items-center justify-center flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-textPrimary text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 shadow-lg group cursor-pointer"
                  data-hover
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://github.com/sidhu212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-borderColors bg-primary text-textPrimary hover:border-accent hover:text-accent font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group"
                  data-hover
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Slide-Over Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <Footer />
    </>
  );
};

export default ProjectsPage;
