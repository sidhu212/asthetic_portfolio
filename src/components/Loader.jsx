import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500); // slight pause at 100%
          return 100;
        }
        // randomly increment
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] bg-primary flex flex-col justify-end items-end p-6 md:p-12 font-display text-accent pointer-events-none"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mix-blend-difference">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="text-2xl md:text-4xl text-textPrimary tracking-[0.5em] uppercase mb-4 font-mono font-bold"
         >
           Siddharth Singh
         </motion.div>
         <div className="w-64 h-[2px] bg-borderColors mx-auto overflow-hidden relative">
           <motion.div 
             className="absolute top-0 left-0 h-full bg-accent"
             initial={{ width: "0%" }}
             animate={{ width: `${progress}%` }}
             transition={{ duration: 0.2, ease: "linear" }}
           />
         </div>
      </div>
      <div className="text-[10rem] md:text-[20rem] leading-none mix-blend-overlay opacity-30">
        {Math.min(progress, 100)}<span className="text-4xl inline-block align-top mt-12">%</span>
      </div>
    </motion.div>
  );
};

export default Loader;
