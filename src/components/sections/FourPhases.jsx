import React from 'react';
import { motion } from 'framer-motion';

const FourPhases = () => {
  return (
    <section className="py-20 border-t border-borderColors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent mb-4">[ Section · 04 — How I build ]</div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4 max-w-xl text-textPrimary">
            Four phases. No theatre.
          </h2>
          <p className="text-textSecondary max-w-md mb-14">
            The same shape repeats across every project — this is how I close the gap between an idea and something live.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="font-mono text-xs text-textSecondary/50 mb-3">01</div>
            <h3 className="font-display text-xl font-medium mb-3 text-textPrimary">Discover</h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Understand the actual problem before touching code — the users, the constraints, and what a working version needs to do on day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-mono text-xs text-textSecondary/50 mb-3">02</div>
            <h3 className="font-display text-xl font-medium mb-3 text-textPrimary">Design</h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Plan the data model and component structure up front. Decide what the system needs — and just as importantly, what it doesn't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="font-mono text-xs text-textSecondary/50 mb-3">03</div>
            <h3 className="font-display text-xl font-medium mb-3 text-textPrimary">Build</h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Ship in small, testable increments. Auth, core flows, then polish — with version control and clear commits the whole way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="font-mono text-xs text-textSecondary/50 mb-3">04</div>
            <h3 className="font-display text-xl font-medium mb-3 text-textPrimary">Deploy & Support</h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Containerize, deploy, and stay reachable after launch — bug fixes and small iterations included, not billed as an afterthought.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FourPhases;
