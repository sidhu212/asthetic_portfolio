import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    tagline: "Scalable responsive applications.",
    description: "Architecting modern full-stack web platforms with sub-second page loads, clean component architecture, and robust REST/GraphQL APIs.",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-blue-500",
    borderHover: "group-hover:border-blue-500/40"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Flutter & React Native cross-platform.",
    description: "Developing fluid iOS and Android experiences with native-like performance, offline sync, real-time location tracking, and clean state management.",
    tags: ["Flutter", "Dart", "React Native", "Firebase"],
    accent: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconColor: "text-purple-500",
    borderHover: "group-hover:border-purple-500/40"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    tagline: "Intelligent products powered by AI.",
    description: "Integrating modern LLMs, Gemini APIs, speech recognition, and conversational agents to build software that understands and automates real user tasks.",
    tags: ["Gemini API", "Speech Recognition", "LLM Workflows", "Python"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-500",
    borderHover: "group-hover:border-amber-500/40"
  }
];

const WhatIBuild = () => {
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
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specializations</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-textPrimary">
              What I Build<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary max-w-md text-base leading-relaxed"
          >
            Specialized in turning complex requirements into production-ready, beautiful digital products.
          </motion.p>
        </div>

        {/* 3 Modern Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-3xl border border-borderColors/80 bg-primary/70 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-2xl ${item.borderHover}`}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-borderColors flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="font-mono text-xs text-textSecondary/50">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl font-medium text-textPrimary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-accent mb-4">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-textSecondary leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Tech Chips & Footer */}
                <div className="relative z-10 pt-6 border-t border-borderColors/60 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-borderColors/60 bg-secondary/40 text-textSecondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
