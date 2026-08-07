import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, MapPin, Clock, Briefcase, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-borderColors/80 bg-secondary/30 mt-32 relative">
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-borderColors/60">
          
          {/* Column 1: Brand & Current Focus (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block font-display font-bold text-2xl text-textPrimary tracking-tight">
              SID<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-textSecondary max-w-sm leading-relaxed">
              Full Stack Engineer crafting modern web applications, AI-integrated workflows, and high-performance digital products.
            </p>

            <div className="pt-2 space-y-2 font-mono text-xs text-textSecondary">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-accent" />
                <span><strong className="text-textPrimary font-normal">Current Focus:</strong> Scalable Full-Stack & AI Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span><strong className="text-textPrimary font-normal">Response Time:</strong> Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-wider text-textSecondary/60 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/projects" className="text-textSecondary hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-textSecondary hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-textSecondary hover:text-accent transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-textSecondary hover:text-accent transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-textSecondary hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Elsewhere / Socials (3 cols) */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-wider text-textSecondary/60 mb-4">
              Elsewhere
            </div>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <a
                  href="https://github.com/sidhu212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                  data-hover
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/siddharth-singh-4b8416262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                  data-hover
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:siddharthsingh0259@gmail.com"
                  className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                  data-hover
                >
                  <Mail className="w-4 h-4" />
                  <span>siddharthsingh0259@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Status & Availability (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-textSecondary/60 mb-2">
              Status & Location
            </div>
            
            <div className="p-4 rounded-2xl border border-borderColors bg-primary/70 backdrop-blur-md space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-500 font-medium font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-textSecondary font-mono">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>India • Remote Worldwide</span>
              </div>
              <p className="text-textSecondary/80 text-[11px] leading-relaxed pt-1 border-t border-borderColors/50">
                Open for full-time engineering roles, high-impact contracts & collaborations.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs font-mono text-textSecondary/60">
          <span>© {new Date().getFullYear()} Siddharth Singh. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Designed for Impact</span>
            <span>•</span>
            <span className="text-accent">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
