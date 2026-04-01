import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music } from 'lucide-react';
import profilePic from '../assets/profile picturee.jpg';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 500], [0, 150]);
  const rotateOffset = useTransform(scrollY, [0, 500], [15, 30]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-24 pt-32 pb-12 w-full overflow-hidden">
      <div className="container mx-auto z-10 w-full flex flex-col md:flex-row items-center md:items-start relative pb-16">
        
        <div className="flex-1 order-2 md:order-1 mt-12 md:mt-0">
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 border border-accent rounded-sm inline-block px-[14px] py-[6px]"
          >
            <p className="font-sans font-medium text-[12px] text-accent tracking-[3px] uppercase">
              Software Engineer
            </p>
          </motion.div>

          {/* Huge Name Text */}
          <h1 className="font-display font-[800] text-[50px] sm:text-[80px] md:text-[110px] lg:text-[120px] leading-[0.85] tracking-[-2px] uppercase mb-12">
            <motion.div variants={sentence} initial="hidden" animate="visible" className="flex overflow-hidden pb-2">
              {"SIDDHARTH".split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="inline-block text-textPrimary">
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div variants={sentence} initial="hidden" animate="visible" className="flex overflow-hidden">
              {"SINGH".split("").map((char, index) => (
                <motion.span key={index} variants={letter} className="inline-block text-border">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          {/* Paragraph Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mb-16 font-sans text-[18px] leading-[1.6] text-textSecondary"
          >
            Passionate about solving real-world problems through innovative technology solutions. Currently <span className="text-accent font-[600]">leading tech initiatives at GDSC</span> and building impactful software that makes a difference!
          </motion.div>
        </div>

        {/* Profile Picture Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-72 h-72 md:w-96 md:h-[500px] order-1 md:order-2 flex-shrink-0"
        >
          {/* Background Decorative Shape */}
          <div className="absolute inset-0 border border-accent/30 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 hover:translate-x-6 hover:translate-y-6" />
          
          <div className="w-full h-full relative overflow-hidden group">
            <img 
              src={profilePic} 
              alt="Siddharth Singh" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-accent/5 opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
          </div>

          {/* Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            // className="absolute -bottom-6 -right-6 bg-primary border border-borderColors p-4 shadow-xl z-20"
          >
            {/* <p className="font-mono text-[10px] text-accent uppercase tracking-widest leading-none mb-1">Status</p>
            <p className="font-sans font-bold text-[12px] text-textPrimary uppercase tracking-widest">Available for hire</p> */}
          </motion.div>
        </motion.div>

      </div>

      {/* Floating Elements Right Side (Desktop mostly) */}
      <motion.div 
        style={{ y: yOffset }}
        className="absolute right-12 md:right-48 top-48 hidden md:flex flex-col items-center z-0 opacity-20 pointer-events-none"
      >
        <motion.div 
          style={{ rotate: rotateOffset }}
          className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] border border-accent opacity-40 mb-16"
        />
        <div className="text-textSecondary/60 font-mono text-[11px] leading-tight whitespace-pre relative ml-24 hidden lg:block">
{`   ( (
    ) )
 .______.
 |      |
 |______|`}
          <br/><br/>
          fueled<br/>by<br/>caffeine
        </div>
      </motion.div>

      {/* Soundtrack Button Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-12 right-12 z-50 flex flex-col items-end gap-3 hidden md:flex"
      >
        <button className="border border-borderColors bg-primary px-4 py-2 font-sans text-[11px] uppercase tracking-[2px] text-textSecondary hover:text-textPrimary hover:bg-borderColors/10 transition-colors">
          Soundtrack
        </button>
        <button className="w-12 h-12 flex items-center justify-center border border-borderColors bg-primary text-textSecondary hover:text-textPrimary hover:bg-borderColors/10 transition-colors">
          <Music className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

