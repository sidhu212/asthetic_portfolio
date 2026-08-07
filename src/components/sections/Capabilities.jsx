import React from 'react';
import { motion } from 'framer-motion';

const Capabilities = () => {
  return (
    <section className="py-20 border-t border-borderColors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent mb-4">[ Section · 03 — Capabilities ]</div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-14 max-w-xl text-textPrimary">
            The full stack, in motion.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-5"
          >
            <div className="border border-borderColors rounded-xl p-6 h-full hover:border-textSecondary/50 transition-colors flex flex-col">
              <div className="font-mono text-[11px] text-accent mb-3">01 · 4 skills</div>
              <h3 className="font-display text-lg font-medium mb-2 text-textPrimary">Frontend Development</h3>
              <p className="text-xs text-textSecondary leading-relaxed mb-8">
                Building responsive, accessible interfaces with modern JavaScript tooling.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2.5">
                  <li className="text-xs text-textSecondary flex justify-between"><span>React</span><span className="text-textSecondary/50">2+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>JavaScript</span><span className="text-textSecondary/50">2+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Tailwind CSS</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>HTML / CSS</span><span className="text-textSecondary/50">2+ years</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="border border-borderColors rounded-xl p-6 h-full hover:border-textSecondary/50 transition-colors flex flex-col">
              <div className="font-mono text-[11px] text-accent mb-3">02 · 5 skills</div>
              <h3 className="font-display text-lg font-medium mb-2 text-textPrimary">Backend Development</h3>
              <p className="text-xs text-textSecondary leading-relaxed mb-8 max-w-md">
                Designing APIs and services with robust back-end frameworks.
              </p>
              <div className="mt-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  <li className="text-xs text-textSecondary flex justify-between"><span>Node.js</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Express</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>REST APIs</span><span className="text-textSecondary/50">2+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>PHP</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Python</span><span className="text-textSecondary/50">1+ year</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="border border-borderColors rounded-xl p-6 h-full hover:border-textSecondary/50 transition-colors flex flex-col">
              <div className="font-mono text-[11px] text-accent mb-3">03 · 4 skills</div>
              <h3 className="font-display text-lg font-medium mb-2 text-textPrimary">Languages</h3>
              <p className="text-xs text-textSecondary leading-relaxed mb-8 max-w-md">
                Core language proficiency across frontend and backend work.
              </p>
              <div className="mt-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  <li className="text-xs text-textSecondary flex justify-between"><span>JavaScript</span><span className="text-textSecondary/50">2+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>TypeScript</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>C++</span><span className="text-textSecondary/50">3+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Java (DSA)</span><span className="text-textSecondary/50">1+ year</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5"
          >
            <div className="border border-borderColors rounded-xl p-6 h-full hover:border-textSecondary/50 transition-colors flex flex-col">
              <div className="font-mono text-[11px] text-accent mb-3">04 · 4 skills</div>
              <h3 className="font-display text-lg font-medium mb-2 text-textPrimary">Databases & Tools</h3>
              <p className="text-xs text-textSecondary leading-relaxed mb-8">
                Data layer and workflow tools used day to day.
              </p>
              <div className="mt-auto">
                <ul className="space-y-2.5">
                  <li className="text-xs text-textSecondary flex justify-between"><span>MongoDB</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>PostgreSQL</span><span className="text-textSecondary/50">1+ year</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Git / GitHub</span><span className="text-textSecondary/50">2+ years</span></li>
                  <li className="text-xs text-textSecondary flex justify-between"><span>Docker</span><span className="text-textSecondary/50">1+ year</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
