import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, Github, CheckCircle2, 
  Calendar, User, Users, Globe, Lightbulb, Wrench, Award, Sparkles 
} from 'lucide-react';
import { projects } from '../data/projects';
import BrowserMockup from '../components/projects/BrowserMockup';
import TechPill from '../components/projects/TechPill';
import Footer from '../components/sections/Footer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[currentIndex];
  
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-display text-textPrimary mb-4">Project not found</h2>
          <Link to="/projects" className="text-accent hover:underline">Return to Projects</Link>
        </div>
      </div>
    );
  }

  const caseStudy = project.caseStudy || {};

  return (
    <>
      <article className="min-h-screen pt-36 sm:pt-44 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Breadcrumb & Back button */}
          <div className="mb-12 flex items-center gap-4 text-sm font-mono">
            <Link to="/projects" className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2" data-hover>
              <ArrowLeft className="w-4 h-4" /> Back to Projects Showcase
            </Link>
            <span className="text-borderColors">/</span>
            <span className="text-accent truncate max-w-xs">{project.title}</span>
          </div>

          <motion.header 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span className={`font-mono text-xs px-3.5 py-1 rounded-full border font-medium ${project.badgeBg || 'bg-accent/10 border-accent/30 text-accent'}`}>
                {project.badge || project.category}
              </span>
              <span className="font-mono text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {project.status}
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight max-w-5xl leading-[1.05] text-textPrimary mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-textSecondary max-w-3xl leading-relaxed font-sans">
              {project.tagline || project.shortDescription}
            </p>
          </motion.header>

          {/* Browser Preview Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 max-w-5xl"
          >
            <BrowserMockup project={project} isHero={true} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">
            
            {/* Main Case Study Body */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-14"
            >
              {/* Problem Solved */}
              {project.problemSolved && (
                <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Core Problem Solved
                  </h3>
                  <p className="text-base sm:text-lg text-textPrimary leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>
              )}

              {/* Detailed Overview */}
              <section>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-textPrimary mb-6">Overview & Purpose</h2>
                <p className="text-lg text-textSecondary leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </section>

              {/* The Challenge */}
              {caseStudy.challenge && (
                <section>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-textPrimary mb-6">The Challenge</h2>
                  <p className="text-lg text-textSecondary leading-relaxed whitespace-pre-line">
                    {caseStudy.challenge}
                  </p>
                </section>
              )}

              {/* Approach & Architecture */}
              {caseStudy.approach && (
                <section>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-textPrimary mb-6">Engineering Approach & Architecture</h2>
                  <p className="text-lg text-textSecondary leading-relaxed whitespace-pre-line">
                    {caseStudy.approach}
                  </p>
                  {caseStudy.architecture && (
                    <div className="p-6 rounded-2xl border border-borderColors bg-secondary/50 font-mono text-xs text-textSecondary leading-relaxed mt-6">
                      <span className="text-accent font-semibold block mb-2 font-sans text-sm">System Architecture:</span>
                      {caseStudy.architecture}
                    </div>
                  )}
                </section>
              )}

              {/* Key Features */}
              <section>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-textPrimary mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-borderColors bg-secondary/30 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-textPrimary leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Highlights */}
              {caseStudy.engineeringHighlights && (
                <section>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-textPrimary mb-6 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-accent" />
                    <span>Technical Highlights & Obstacles Solved</span>
                  </h2>
                  <div className="space-y-3">
                    {caseStudy.engineeringHighlights.map((highlight, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-borderColors bg-secondary/20 flex items-start gap-3">
                        <span className="font-mono text-xs text-accent font-bold mt-0.5">0{idx + 1}.</span>
                        <p className="text-sm text-textSecondary leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results & Lessons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-borderColors">
                {caseStudy.results && (
                  <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" /> Impact & Outcomes
                    </h3>
                    <p className="text-sm text-textSecondary leading-relaxed">
                      {caseStudy.results}
                    </p>
                  </div>
                )}
                {caseStudy.lessonsLearned && (
                  <div className="p-6 rounded-2xl border border-borderColors bg-secondary/40">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> Lessons Learned
                    </h3>
                    <p className="text-sm text-textSecondary leading-relaxed">
                      {caseStudy.lessonsLearned}
                    </p>
                  </div>
                )}
              </div>

            </motion.div>

            {/* Sidebar Meta & Actions */}
            <motion.aside 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl border border-borderColors bg-secondary/50 backdrop-blur-xl space-y-6 sticky top-28">
                
                <div>
                  <h3 className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent" /> Role
                  </h3>
                  <p className="text-base font-semibold text-textPrimary">{project.role}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" /> Timeline
                  </h3>
                  <p className="text-base text-textPrimary">{project.timeline || project.duration}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-accent" /> Team Size
                  </h3>
                  <p className="text-base text-textPrimary">{project.teamSize || 'Solo Project'}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <TechPill key={tech} tech={tech} size="sm" />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-accent" /> Status
                  </h3>
                  <p className="text-base text-emerald-500 font-medium">{project.status}</p>
                </div>

                <div className="pt-6 border-t border-borderColors flex flex-col gap-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-textPrimary text-primary font-sans text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-all shadow-md group"
                      data-hover
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full border border-borderColors text-textPrimary hover:border-accent hover:text-accent transition-colors font-sans text-xs font-semibold uppercase tracking-wider"
                      data-hover
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Source</span>
                    </a>
                  )}
                </div>

              </div>
            </motion.aside>

          </div>
          
          {/* Project Navigation Footer */}
          <div className="mt-32 pt-12 border-t border-borderColors grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              {prevProject && (
                <Link to={`/projects/${prevProject.id}`} className="group block p-6 rounded-2xl border border-borderColors bg-secondary/30 hover:border-accent transition-all" data-hover>
                  <span className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 block group-hover:text-accent transition-colors">← Previous Project</span>
                  <span className="font-display text-xl sm:text-2xl text-textPrimary group-hover:text-accent transition-colors block truncate font-medium">
                    {prevProject.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="sm:text-right">
              {nextProject && (
                <Link to={`/projects/${nextProject.id}`} className="group block p-6 rounded-2xl border border-borderColors bg-secondary/30 hover:border-accent transition-all" data-hover>
                  <span className="font-mono text-xs text-textSecondary uppercase tracking-wider mb-2 block group-hover:text-accent transition-colors">Next Project →</span>
                  <span className="font-display text-xl sm:text-2xl text-textPrimary group-hover:text-accent transition-colors block truncate font-medium">
                    {nextProject.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
          
        </div>
      </article>
      <Footer />
    </>
  );
};

export default ProjectDetail;
