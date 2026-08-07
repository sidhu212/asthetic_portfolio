import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Award,
  Calendar,
  Tag,
  ZoomIn
} from 'lucide-react';

// ── SIH photos ──────────────────────────────────────────────────────────────
import sih1 from '../../assets/sih/1.jpg';
import sih2 from '../../assets/sih/2.jpg';
import sih3 from '../../assets/sih/3.jpg';
import sih4 from '../../assets/sih/4.jpg';
import sih5 from '../../assets/sih/5.jpg';
import sih6 from '../../assets/sih/6.jpg';

// ── Yukti photos ─────────────────────────────────────────────────────────────
import yukti1 from '../../assets/yukti/1.jpg';
import yukti2 from '../../assets/yukti/2.jpg';
import yukti3 from '../../assets/yukti/3.jpg';
import yukti4 from '../../assets/yukti/4.jpg';
import yukti5 from '../../assets/yukti/5.jpg';

// ── TOSS Internship photos ───────────────────────────────────────────────────
import toss1 from '../../assets/toss/1.jpeg';
import toss2 from '../../assets/toss/2.jpeg';
import toss3 from '../../assets/toss/3.jpeg';
import toss4 from '../../assets/toss/4.jpeg';
import toss5 from '../../assets/toss/5.jpeg';
import toss6 from '../../assets/toss/6.jpeg';
import toss7 from '../../assets/toss/7.jpeg';

export const galleryItems = [
  // ── Smart India Hackathon ─────────────────────────────────────────────────
  {
    id: 'sih-1',
    title: 'SIH 2024 — Grand Finale Stage',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih1,
    caption: 'Presenting the Vocational Education Integration Platform (VEIP) before the national evaluation jury.',
    tags: ['National Finalist', 'Govt of India', 'VEIP'],
    year: '2024',
    highlight: 'Top 1% Nationwide',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'sih-2',
    title: 'SIH 2024 — Team Collaboration',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih2,
    caption: 'Multidisciplinary teamwork during the intensive 36-hour hackathon sprint.',
    tags: ['36-Hour Sprint', 'System Architecture', 'Teamwork'],
    year: '2024',
    highlight: 'Grand Finale',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'sih-3',
    title: 'SIH 2024 — Prototype Showcase',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih3,
    caption: 'Showcasing the live VEIP prototype to industry mentors and government officials.',
    tags: ['Live Demo', 'Product', 'Innovation'],
    year: '2024',
    highlight: 'National Finalist',
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'sih-4',
    title: 'SIH 2024 — Recognition Ceremony',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih4,
    caption: 'Official recognition ceremony at the national hackathon stage.',
    tags: ['Recognition', 'Certificate', 'Achievement'],
    year: '2024',
    highlight: 'Government Award',
    color: 'from-orange-500/20 to-rose-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 'sih-5',
    title: 'SIH 2024 — Evaluation Round',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih5,
    caption: 'Technical evaluation round with domain expert judges assessing our solution.',
    tags: ['Evaluation', 'Tech Stack', 'Judges Panel'],
    year: '2024',
    highlight: 'Finalist Stage',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'sih-6',
    title: 'SIH 2024 — Team Moment',
    category: 'sih',
    categoryLabel: 'Smart India Hackathon',
    image: sih6,
    caption: 'A proud team moment after reaching the national grand finale of SIH 2024.',
    tags: ['Team', 'Pride', 'National Stage'],
    year: '2024',
    highlight: 'Top 1% India',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
  },

  // ── Yukti Innovation ──────────────────────────────────────────────────────
  {
    id: 'yukti-1',
    title: 'Yukti — Selection Ceremony',
    category: 'yukti',
    categoryLabel: 'Yukti Innovation',
    image: yukti1,
    caption: 'Selected by AICTE Innovation Cell for innovation potential and societal impact.',
    tags: ['AICTE', 'Ministry of Education', 'Selection'],
    year: '2025',
    highlight: 'National Selection',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'yukti-2',
    title: 'Yukti — Innovation Showcase',
    category: 'yukti',
    categoryLabel: 'Yukti Innovation',
    image: yukti2,
    caption: 'Presenting the innovation idea to evaluators from academia and industry.',
    tags: ['Idea Validation', 'Pitch', 'Research'],
    year: '2025',
    highlight: 'Selected Innovator',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'yukti-3',
    title: 'Yukti — Team Prototype',
    category: 'yukti',
    categoryLabel: 'Yukti Innovation',
    image: yukti3,
    caption: 'Validating product-market fit, technical feasibility, and societal application of the solution.',
    tags: ['Prototype', 'Product Design', 'Startup Mindset'],
    year: '2025',
    highlight: 'Innovation Award',
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'yukti-4',
    title: 'Yukti — Evaluation Panel',
    category: 'yukti',
    categoryLabel: 'Yukti Innovation',
    image: yukti4,
    caption: 'Technical and research evaluation by expert panel — validating scalability and impact.',
    tags: ['Expert Panel', 'Scalability', 'Impact'],
    year: '2025',
    highlight: 'AICTE Recognized',
    color: 'from-teal-500/20 to-emerald-500/20',
    borderColor: 'border-teal-500/30',
  },
  {
    id: 'yukti-5',
    title: 'Yukti — Achievement Moment',
    category: 'yukti',
    categoryLabel: 'Yukti Innovation',
    image: yukti5,
    caption: 'Celebrating the official selection into the Yukti National Innovation Challenge.',
    tags: ['Celebration', 'Team', 'National Award'],
    year: '2025',
    highlight: 'National Innovation',
    color: 'from-cyan-500/20 to-sky-500/20',
    borderColor: 'border-cyan-500/30',
  },

  // ── TOSS Internship ───────────────────────────────────────────────────────
  {
    id: 'toss-1',
    title: 'TOSS Internship — Office Environment',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss1,
    caption: 'Day-to-day engineering in a professional production software environment at TOSS Consultancy.',
    tags: ['Full Stack', 'PHP / MySQL', 'Production'],
    year: '2024–25',
    highlight: 'PPO Recommendation',
    color: 'from-rose-500/20 to-orange-500/20',
    borderColor: 'border-rose-500/30',
  },
  {
    id: 'toss-2',
    title: 'TOSS Internship — Development Work',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss2,
    caption: 'Building cross-platform Flutter interfaces and integrating them with MySQL backend services.',
    tags: ['Flutter', 'Mobile Dev', 'MySQL'],
    year: '2024–25',
    highlight: '8 Months Tenure',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'toss-3',
    title: 'TOSS — Team Collaboration',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss3,
    caption: 'Collaborating with senior developers during sprint reviews and code integration sessions.',
    tags: ['Agile/Scrum', 'Collaboration', 'Code Review'],
    year: '2024–25',
    highlight: 'Agile Workflow',
    color: 'from-rose-500/20 to-red-500/20',
    borderColor: 'border-rose-500/30',
  },
  {
    id: 'toss-4',
    title: 'TOSS — Emergency Response System',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss4,
    caption: 'Engineering the Apatkal emergency alerting and incident response platform for real-world deployment.',
    tags: ['Apatkal', 'Emergency Tech', 'Architecture'],
    year: '2024–25',
    highlight: 'Production App',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 'toss-5',
    title: 'TOSS — Client Delivery Session',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss5,
    caption: 'Client communication and delivery presentation for project milestone handoff.',
    tags: ['Client Relations', 'Delivery', 'Professional'],
    year: '2024–25',
    highlight: 'Client Projects',
    color: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'toss-6',
    title: 'TOSS — Team Achievement',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss6,
    caption: 'Team milestone celebration after successful production release and deployment.',
    tags: ['Deployment', 'Milestone', 'Team Win'],
    year: '2024–25',
    highlight: 'Shipped to Prod',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
  },
  {
    id: 'toss-7',
    title: 'TOSS — Internship Certificate',
    category: 'internship',
    categoryLabel: 'TOSS Internship',
    image: toss7,
    caption: 'Official internship completion and recognition from TOSS Consultancy Services.',
    tags: ['Certificate', 'PPO', 'Recognition'],
    year: '2024–25',
    highlight: 'Certified Intern',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
  },
];

const categories = [
  { id: 'all', label: 'All Milestones', icon: Layers },
  { id: 'sih', label: 'Smart India Hackathon', icon: Award },
  { id: 'yukti', label: 'Yukti Innovation', icon: Sparkles },
  { id: 'internship', label: 'TOSS Internship', icon: Tag },
];

export default function AchievementsGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft')
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      if (e.key === 'ArrowRight')
        setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full">
      {/* ── Category Filter Tabs ─────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 ${
                isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105 font-medium'
                  : 'bg-secondary/80 border border-borderColors/80 text-textSecondary hover:text-textPrimary hover:border-accent/40 backdrop-blur-md'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Gallery Grid ─────────────────────────────────────────────────── */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-borderColors/90 bg-secondary/80 backdrop-blur-xl hover:border-accent/50 transition-all duration-400 shadow-md hover:shadow-2xl flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Highlight pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {item.highlight}
                </div>

                {/* Year pill */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90">
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">
                    {item.categoryLabel}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-textPrimary leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-textSecondary line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-borderColors/50">
                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-borderColors/15 text-textSecondary border border-borderColors/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 select-none"
          >
            {/* Top bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl flex items-center justify-between py-3 mb-2 text-white/90"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-xs sm:text-sm font-mono text-accent uppercase tracking-widest hidden sm:inline">
                  {activeItem.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-white/40 hidden md:inline">
                  ← → Navigate &nbsp;•&nbsp; Esc Close
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image stage */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl flex-1 max-h-[72vh] flex items-center justify-center rounded-3xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl"
            >
              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((p) => (p > 0 ? p - 1 : filteredItems.length - 1));
                }}
                className="absolute left-3 sm:left-5 z-20 p-3 rounded-full bg-black/60 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all backdrop-blur-md shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((p) => (p < filteredItems.length - 1 ? p + 1 : 0));
                }}
                className="absolute right-3 sm:right-5 z-20 p-3 rounded-full bg-black/60 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all backdrop-blur-md shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
              </AnimatePresence>
            </div>

            {/* Bottom: caption + thumbnails */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl mt-3 flex flex-col sm:flex-row items-center justify-between gap-4 px-2"
            >
              <div className="text-center sm:text-left space-y-0.5">
                <h4 className="text-sm font-display font-semibold text-white">{activeItem.title}</h4>
                <p className="text-xs text-white/65 max-w-xl line-clamp-2">{activeItem.caption}</p>
              </div>

              {/* Thumbnail strip */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 flex-shrink-0">
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-12 h-9 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                      idx === lightboxIndex
                        ? 'border-accent ring-2 ring-accent/40 scale-110'
                        : 'border-white/20 opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
