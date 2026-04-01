import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, label, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col gap-2 p-6 border border-borderColors rounded-lg bg-secondary/30 relative overflow-hidden group">
      <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
      <div className="text-4xl md:text-5xl font-display text-accent relative z-10">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {value}{suffix}
          </motion.span>
        ) : (
          "0" + suffix
        )}
      </div>
      <p className="font-mono text-xs text-textSecondary uppercase tracking-widest relative z-10">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="min-h-screen relative py-32 px-6 md:px-12 border-t border-borderColors">
      <div className="container mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32 flex justify-between items-end border-b border-borderColors pb-8"
        >
          <h2 className="text-5xl md:text-8xl font-display uppercase">About Me</h2>
          <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-2">[ 01 ]</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl md:text-3xl text-textPrimary leading-relaxed mb-8"
            >
              I'm a passionate B.Tech Computer Science student at Gyan Ganga College of Technology, driven by creating digital experiences that leave a lasting impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-sm text-textSecondary uppercase tracking-widest leading-loose"
            >
              Currently serving as the <span className="text-accent hover:text-white transition-colors">Operational Head of GDSC</span>. I've successfully led large-scale tech initiatives and guided over 50+ developers. Recognized as a <span className="text-textPrimary border-b border-accent">Smart India Hackathon 2024 Finalist</span>.
            </motion.p>
          </div>

          {/* Right Stats */}
          <div className="w-full lg:w-1/2 relative h-full">
            <motion.div
              style={{ y: scrollOffset }}
              className="grid grid-cols-2 gap-4 lg:gap-8"
            >
              <AnimatedCounter value="50" label="Team Members Led" />
              <AnimatedCounter value="8" label="Projects Completed" />
              <AnimatedCounter value="3" label="Years Experience" />
              <AnimatedCounter value="1" label="SIH 2024 Finalist" suffix="" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
