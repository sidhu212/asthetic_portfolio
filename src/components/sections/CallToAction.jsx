import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-28 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-accent mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Available for opportunities
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-medium max-w-2xl mx-auto leading-tight text-textPrimary">
          Let's build something that ships.
        </h2>
        <p className="text-textSecondary mt-6 max-w-md mx-auto">
          If your problem is real and your timeline is real — let's talk.
        </p>
        <div className="mt-9 flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-textPrimary text-primary text-sm font-medium hover:bg-accent transition-colors"
          >
            Book a call →
          </Link>
          <a
            href="mailto:siddharthsingh0259@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-borderColors text-sm font-medium text-textPrimary hover:border-textSecondary transition-colors"
          >
            siddharthsingh0259@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
