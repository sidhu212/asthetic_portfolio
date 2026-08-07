import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Cpu, 
  Flame, 
  Layers, 
  GitBranch, 
  Terminal, 
  ShieldCheck,
  Server,
  Zap
} from 'lucide-react';

const technologies = [
  { name: "React", category: "Frontend", icon: Zap },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Flutter", category: "Mobile", icon: Smartphone },
  { name: "Firebase", category: "Backend", icon: Flame },
  { name: "AWS", category: "Cloud", icon: Cloud },
  { name: "Python", category: "Language", icon: Terminal },
  { name: "JavaScript", category: "Language", icon: Code2 },
  { name: "C++", category: "Systems", icon: Cpu },
  { name: "Salesforce", category: "Cloud CRM", icon: ShieldCheck },
  { name: "Git & GitHub", category: "Workflow", icon: GitBranch },
  { name: "MySQL", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Layers },
  { name: "Docker", category: "DevOps", icon: Server },
  { name: "Next.js", category: "Frontend", icon: Zap },
  { name: "TypeScript", category: "Language", icon: Code2 }
];

const TechMarquee = () => {
  return (
    <section className="py-10 overflow-hidden relative border-y border-borderColors bg-secondary/30 backdrop-blur-sm">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 select-none">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
        >
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-borderColors/80 bg-primary/60 backdrop-blur-md hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                data-hover
              >
                <div className="w-6 h-6 rounded-full bg-borderColors/30 flex items-center justify-center text-textSecondary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-display font-medium text-sm text-textPrimary group-hover:text-accent transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] text-textSecondary/60 uppercase tracking-wider hidden sm:inline">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
