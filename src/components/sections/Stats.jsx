import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="py-20 border-y border-borderColors">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 gap-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-4xl sm:text-5xl font-medium text-textPrimary">
            <span>10+</span>
          </div>
          <div className="text-xs text-textSecondary/50 mt-2 uppercase tracking-wider">Projects made</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="font-display text-4xl sm:text-5xl font-medium text-textPrimary">
            <span>200+</span>
          </div>
          <div className="text-xs text-textSecondary/50 mt-2 uppercase tracking-wider">DSA problems</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
