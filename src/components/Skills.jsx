import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    category: "Web",
    items: ["HTML5", "CSS3", "React", "Firebase", "WordPress"]
  },
  {
    category: "Tools",
    items: ["Git", "Android Studio", "Figma", "AWS"]
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Teamwork", "Communication", "Innovation", "Problem Solving"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-32 px-6 md:px-12 border-t border-borderColors bg-secondary bg-dots">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-24 flex justify-between items-end border-b border-borderColors pb-8"
        >
          <h2 className="text-5xl md:text-8xl font-display uppercase">Skills</h2>
          <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-2">[ 02 ]</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {skillsData.map((group, index) => (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col"
            >
              <h3 className="font-mono text-sm text-accent uppercase tracking-[0.3em] mb-8 pb-4 border-b border-borderColors">{group.category}</h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative group cursor-pointer overflow-hidden border border-borderColors rounded-none px-6 py-3 bg-primary"
                    data-hover
                  >
                    <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                    <span className="relative z-10 font-serif text-lg text-textPrimary group-hover:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
