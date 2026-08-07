import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Layers, 
  Flame, 
  Database,
  Cpu,
  GitBranch,
  Terminal,
  Zap
} from 'lucide-react';

const stackCategories = [
  {
    category: "Frontend",
    icon: Code2,
    accent: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    description: "Responsive, dynamic interfaces with modern frameworks",
    skills: [
      { name: "React", level: "Advanced", icon: Zap },
      { name: "Next.js", level: "Intermediate", icon: Layers },
      { name: "JavaScript", level: "Advanced", icon: Code2 },
      { name: "Tailwind CSS", level: "Advanced", icon: Sparkles }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    accent: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    description: "Robust APIs, business logic, and cloud databases",
    skills: [
      { name: "Node.js", level: "Proficient", icon: Server },
      { name: "PHP", level: "Proficient", icon: Terminal },
      { name: "Express", level: "Proficient", icon: Cpu },
      { name: "Firebase", level: "Advanced", icon: Flame }
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    accent: "from-purple-500/20 to-pink-500/10",
    borderGlow: "hover:border-purple-500/40 hover:shadow-purple-500/10",
    description: "Cross-platform mobile apps for iOS and Android",
    skills: [
      { name: "Flutter", level: "Proficient", icon: Smartphone },
      { name: "React Native", level: "Intermediate", icon: Smartphone },
      { name: "Dart", level: "Proficient", icon: Terminal },
      { name: "Mobile APIs", level: "Advanced", icon: Cloud }
    ]
  },
  {
    category: "Cloud & Data",
    icon: Cloud,
    accent: "from-amber-500/20 to-orange-500/10",
    borderGlow: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    description: "Cloud infrastructure, versioning, and relational/NoSQL data",
    skills: [
      { name: "AWS", level: "Intermediate", icon: Cloud },
      { name: "GitHub", level: "Advanced", icon: GitBranch },
      { name: "MySQL", level: "Advanced", icon: Database },
      { name: "MongoDB", level: "Proficient", icon: Layers }
    ]
  }
];

const TechStackShowcase = () => {
  return (
    <section className="py-28 relative border-t border-borderColors/70">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              [ Core Toolkit ]
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-textPrimary">
              Tech Stack Showcase<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary max-w-md text-base leading-relaxed"
          >
            A curated engineering stack built for performance, rapid iteration, and enterprise scalability.
          </motion.p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((group, index) => {
            const CatIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl border border-borderColors/80 bg-primary/70 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-xl ${group.borderGlow}`}
              >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${group.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/80 border border-borderColors flex items-center justify-center text-textPrimary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-textSecondary/60">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-textPrimary mb-1">
                    {group.category}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Tech item chips */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-borderColors/50 bg-secondary/30 group/item hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2.5">
                            <SkillIcon className="w-4 h-4 text-textSecondary group-hover/item:text-accent transition-colors" />
                            <span className="font-display text-sm font-medium text-textPrimary group-hover/item:text-accent transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-textSecondary/60 group-hover/item:text-textSecondary">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
