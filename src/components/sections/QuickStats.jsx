import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ target, suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const num = parseInt(target, 10);
  const isNumber = !isNaN(num);

  useEffect(() => {
    if (!isInView || !isNumber) return;

    let start = 0;
    const steps = 40;
    const increment = num / steps;
    const stepTime = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, num, isNumber, duration]);

  return (
    <span ref={ref} className="font-display font-bold tracking-tight">
      {isNumber ? count : target}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
};

const statsData = [
  {
    value: "10",
    suffix: "+",
    label: "Projects Built",
    description: "Production & open-source software"
  },
  {
    value: "15",
    suffix: "+",
    label: "Certifications",
    description: "Salesforce, Postman, Google & AWS"
  },
  {
    value: "8",
    suffix: "",
    label: "Months Internship",
    description: "Full-stack software engineering"
  },
  {
    value: "GDSC",
    suffix: "",
    label: "Operations Head",
    description: "Google Developer Student Clubs"
  }
];

const QuickStats = () => {
  return (
    <section className="py-20 relative border-y border-borderColors/70 bg-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left flex flex-col justify-between group"
            >
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl text-textPrimary mb-2">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-sans font-semibold text-sm sm:text-base text-textPrimary group-hover:text-accent transition-colors">
                  {stat.label}
                </div>
              </div>
              <div className="font-mono text-xs text-textSecondary/60 mt-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
