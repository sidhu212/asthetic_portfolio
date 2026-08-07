import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI Chronic Disease Management",
    description: "Telehealth system for daily patient health input and AI-generated insights via Gemini API. Features include virtual consultations, history tracking, and alerts. Presented at Yukti Innovation Challenge 2025.",
    tags: ["PHP", "MySQL", "Gemini API", "AI"],
    links: [{ name: "Live Demo", url: "https://chronicpulse.wuaze.com/public" }],
    visual: "01"
  },
  {
    title: "VEIP - Education Platform",
    description: "Smart India Hackathon 2024 finalist project – LMS + mentoring platform. Designed in Figma, built with React.",
    tags: ["React", "Figma", "UI/UX Design", "LMS"],
    links: [{ name: "Live Demo", url: "https://vission-landing-page.vercel.app/" }],
    visual: "02"
  },
  {
    title: "Voice Assistant \"JARVIS\"",
    description: "Python voice assistant with system automation, NLP, and command execution.",
    tags: ["Python", "NLP", "Automation"],
    links: [{ name: "Live Demo", url: "https://sidhu212.github.io/virtual-assistant/" }],
    visual: "03"
  },
  {
    title: "E-Commerce Website",
    description: "Responsive e-commerce site with user authentication, shopping cart, and secure payments.",
    tags: ["React", "Node.js", "Authentication"],
    links: [{ name: "Live Demo", url: "#" }],
    visual: "04"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-12 border-t border-borderColors bg-primary relative w-full">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-24 flex justify-between items-end border-b border-borderColors pb-8"
        >
          <h2 className="text-5xl md:text-8xl font-display uppercase">Selected Works</h2>
          <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-2">[ 03 ]</span>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group border-t border-borderColors flex flex-col md:flex-row py-12 md:py-24 relative overflow-hidden"
              data-hover
            >
              {/* Left: Visual / Abstract placeholder matching premium aesthetic */}
              <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-12 relative z-10">
                <div className="aspect-square w-full md:w-[80%] border border-borderColors bg-secondary flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:bg-accent/10">
                  {/* Subtle noise and gradient for premium feel */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-borderColors to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                  <span className="font-display text-8xl md:text-[8rem] text-border mix-blend-difference group-hover:text-accent group-hover:mix-blend-normal transition-colors duration-500">{project.visual}</span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
                <h3 className="font-display text-4xl md:text-7xl uppercase mb-6 tracking-tight leading-none group-hover:text-transparent group-hover:text-border transition-all duration-500 cursor-pointer">
                  {project.title}
                </h3>
                
                <p className="font-serif text-lg md:text-xl text-textSecondary mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-borderColors rounded-full text-textPrimary group-hover:border-accent group-hover:text-accent transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 items-center mt-auto">
                  {project.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-textPrimary hover:text-accent transition-colors duration-300">
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hover highlight line */}
              <div className="absolute left-0 bottom-0 w-full h-[1px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1] z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
