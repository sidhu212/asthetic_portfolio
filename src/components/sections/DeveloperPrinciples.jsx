import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

const principles = [
  {
    quote: "Build for users.",
    context: "Every line of code and interface decision should directly improve the real-world user experience.",
    number: "01"
  },
  {
    quote: "Keep it simple.",
    context: "Simplicity in architecture and UI creates systems that are reliable, maintainable, and robust.",
    number: "02"
  },
  {
    quote: "Performance matters.",
    context: "Speed is a feature. Fast load times, responsive states, and optimized queries drive real retention.",
    number: "03"
  },
  {
    quote: "Always keep learning.",
    context: "Technology evolves rapidly. Constant curiosity and hands-on experimentation keep engineering fresh.",
    number: "04"
  }
];

const DeveloperPrinciples = () => {
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
              <span>Philosophy</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-textPrimary">
              Developer Principles<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary max-w-md text-base leading-relaxed"
          >
            Core engineering standards that guide how I architect, build, and ship products.
          </motion.p>
        </div>

        {/* 4 Quote Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-borderColors/80 bg-primary/70 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-accent/50 hover:shadow-xl transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-secondary/80 border border-borderColors flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-textSecondary/50">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium text-textPrimary mb-3 group-hover:text-accent transition-colors">
                  "{item.quote}"
                </h3>
              </div>

              <p className="text-xs text-textSecondary leading-relaxed pt-6 border-t border-borderColors/60">
                {item.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperPrinciples;
