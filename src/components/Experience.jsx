import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  { role: "Operational Head", company: "GDSC GGCT", duration: "2023–Present", type: "Experience" },
  { role: "AWS AI-ML Virtual Intern", company: "Amazon", duration: "2024", type: "Experience" },
  { role: "Team Co-Lead", company: "SIH Finalist", duration: "2024", type: "Experience" },
];

const achievementsData = [
  "Smart India Hackathon 2024 Finalist",
  "Led 50+ Developers at GDSC",
];

const EducationData = [
  { degree: "B.Tech Computer Science", institution: "Gyan Ganga College of Technology", duration: "2021-2025" }
];

const ExperienceBlock = ({ title, company, duration, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: 0.1 * index }}
    className="py-12 border-b border-borderColors group cursor-default"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative">
        <h3 className="font-display text-3xl md:text-5xl uppercase tracking-wider group-hover:text-accent transition-colors duration-300 relative z-10">{title}</h3>
        <p className="font-serif text-lg text-textSecondary italic mt-2">{company}</p>
      </div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] border border-borderColors px-4 py-2 self-start md:self-auto rounded group-hover:bg-textPrimary group-hover:text-primary transition-colors duration-300">
        {duration}
      </div>
    </div>
  </motion.div>
);

const SectionHeading = ({ title, number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="mb-16 flex justify-between items-end border-b border-borderColors pb-8"
  >
    <h2 className="text-4xl md:text-6xl font-display uppercase">{title}</h2>
    <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest mb-1">[ {number} ]</span>
  </motion.div>
)

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-32 px-6 md:px-12 border-t border-borderColors bg-secondary selection:bg-accent">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        {/* Left Column: Experience */}
        <div className="lg:col-span-8">
          <SectionHeading title="Experience" number="04" />

          <div className="flex flex-col">
            {experienceData.map((item, index) => (
              <ExperienceBlock
                key={index}
                index={index}
                title={item.role}
                company={item.company}
                duration={item.duration}
              />
            ))}
          </div>

          <div className="mt-32">
            <SectionHeading title="Education" number="05" />
            {EducationData.map((item, index) => (
              <ExperienceBlock
                key={index}
                index={index}
                title={item.degree}
                company={item.institution}
                duration={item.duration}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Certifications */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">
            <SectionHeading title="Achievements" number="06" />

            {/* Animated Gallery / List */}
            <div className="flex flex-col gap-6">
              {achievementsData.map((achieve, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  data-hover
                  className="p-6 border border-borderColors rounded-none hover:bg-primary/50 transition-colors duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                  <p className="font-serif text-lg text-textPrimary leading-relaxed relative z-10 group-hover:text-primary transition-colors max-w-[200px] md:max-w-none">
                    {achieve}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24">
              <SectionHeading title="Certifications" number="07" />
              <div className="flex flex-col gap-4">
                {["AWS Fundamentals", "Firebase Intro"].map((cert, cx) => (
                  <div key={cx} className="group flex items-center justify-between border-b border-borderColors py-4 cursor-pointer">
                    <span className="font-mono text-sm tracking-widest uppercase transition-colors group-hover:text-accent">{cert}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                      className="text-accent"
                    >→</motion.span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
