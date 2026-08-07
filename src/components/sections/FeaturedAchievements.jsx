import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon Finalist",
    organization: "Ministry of Education & AICTE",
    description: "Selected among thousands of participants across India as a national finalist for developing the VEIP platform.",
    highlights: ["Top nationwide tier", "NEP 2020 Vocational Solution", "Live prototype evaluated"],
    accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
    iconColor: "text-amber-500",
    badge: "National Finalist"
  },
  {
    icon: Rocket,
    title: "Operations Head",
    organization: "Google Developer Student Clubs",
    description: "Led technical operations, community engagement, hackathon coordination, and hands-on workshops for hundreds of developers.",
    highlights: ["500+ Community Members", "Led Technical Workshops", "Hackathon Organization"],
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-500",
    badge: "Leadership"
  },
  {
    icon: Award,
    title: "15+ Professional Certifications",
    organization: "Global Industry Leaders",
    description: "Demonstrated expertise across cloud architectures, API testing, Salesforce CRM, and full-stack engineering practices.",
    highlights: ["Salesforce Certified", "Postman API Expert", "Google Cloud Badges"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-emerald-500",
    badge: "Verified Credentials"
  }
];

const FeaturedAchievements = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Milestones & Recognition</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-textPrimary">
              Featured Achievements<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary max-w-md text-base leading-relaxed"
          >
            Milestones earned through competitive problem-solving, community leadership, and verified technical mastery.
          </motion.p>
        </div>

        {/* 3 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl border border-borderColors/80 bg-primary/70 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-500 shadow-md hover:shadow-2xl hover:border-accent/50"
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-borderColors flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-borderColors bg-secondary/60 text-textSecondary">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="font-mono text-[11px] text-accent uppercase tracking-wider mb-1">
                    {item.organization}
                  </div>
                  <h3 className="font-display text-2xl font-medium text-textPrimary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-textSecondary leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-textSecondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-borderColors/60 flex items-center justify-between text-xs font-mono text-textSecondary group-hover:text-accent transition-colors">
                  <span>Verified Impact</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Achievements Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/achievements"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-borderColors bg-primary hover:border-accent text-textPrimary hover:text-accent font-sans text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg group"
            data-hover
          >
            <span>View Achievements</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAchievements;
