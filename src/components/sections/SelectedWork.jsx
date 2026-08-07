import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const SelectedWork = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 border-t border-borderColors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent mb-4">[ Section · 02 ]</div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-textPrimary">Selected work.</h2>
            <Link to="/projects" className="text-sm font-medium text-textSecondary hover:text-accent transition-colors">
              All projects →
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-4 md:gap-8 items-center py-8 border-b border-borderColors hover:bg-borderColors/10 transition-colors -mx-4 px-4 rounded-lg"
              >
                <span className="font-mono text-xs text-textSecondary/50">0{index + 1} / 0{featuredProjects.length}</span>
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="font-mono text-[11px] text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] text-textSecondary bg-borderColors/30 px-2 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-textPrimary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-textSecondary mt-3 max-w-2xl leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="hidden md:flex flex-col items-center gap-2">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-borderColors group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0 text-textPrimary">
                    →
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-textSecondary group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    View Project
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
