import React from 'react';
import { motion } from 'framer-motion';

const Quotes = () => {
  return (
    <section className="py-24 border-t border-borderColors">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl sm:text-4xl font-medium max-w-4xl leading-tight text-textSecondary flex items-start gap-5">
            <span className="text-accent mt-1 sm:mt-2 text-xl sm:text-3xl font-light">•</span>
            <span>Problem-solving comes first. The language is simply a tool to execute the logic.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-display text-2xl sm:text-4xl font-medium max-w-4xl leading-tight text-textSecondary flex items-start gap-5">
            <span className="text-accent mt-1 sm:mt-2 text-xl sm:text-3xl font-light">•</span>
            <span>Simplicity is the ultimate sophistication in robust system design.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-display text-2xl sm:text-4xl font-medium max-w-4xl leading-tight text-textSecondary flex items-start gap-5">
            <span className="text-accent mt-1 sm:mt-2 text-xl sm:text-3xl font-light">•</span>
            <span>Build experiences for the user, but optimize the architecture for the maintainer.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-display text-2xl sm:text-4xl font-medium max-w-4xl leading-tight text-textSecondary flex items-start gap-5">
            <span className="text-accent mt-1 sm:mt-2 text-xl sm:text-3xl font-light">•</span>
            <span>Consistent iteration and shipping beats isolated perfection every time.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-display text-2xl sm:text-4xl font-medium max-w-4xl leading-tight text-textSecondary flex items-start gap-5">
            <span className="text-accent mt-1 sm:mt-2 text-xl sm:text-3xl font-light">•</span>
            <span>Code is a liability; logic is an asset. Write less, solve more.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;
