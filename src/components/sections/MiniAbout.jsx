import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, User, MapPin } from 'lucide-react';
import profilePic from '../../assets/profile picturee.jpg';

const MiniAbout = () => {
  return (
    <section className="py-28 relative border-t border-borderColors/70">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-borderColors/80 bg-primary/80 backdrop-blur-xl p-8 md:p-14 overflow-hidden shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center relative z-10">
            {/* Left: Compact Portrait Thumbnail */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-borderColors group shadow-lg">
                <img
                  src={profilePic}
                  alt="Siddharth Singh"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-full bg-primary/90 backdrop-blur-md border border-borderColors/80 flex items-center justify-center gap-1.5 text-[11px] font-mono text-textPrimary">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>India • Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right: Concise Text & CTA */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest">
                <User className="w-3.5 h-3.5" />
                <span>The Story Behind The Code</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-textPrimary leading-tight">
                Curious developer who enjoys solving real-world problems through thoughtful engineering.
              </h2>

              <p className="text-base sm:text-lg text-textSecondary leading-relaxed max-w-2xl">
                From leading developer communities to building AI-powered products, I love creating software that makes a tangible impact.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-textPrimary text-primary font-sans text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-primary transition-all duration-300 shadow-md group"
                  data-hover
                >
                  <span>Read My Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniAbout;
