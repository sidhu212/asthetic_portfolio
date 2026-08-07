import React, { useState, useMemo } from 'react';
import Footer from '../components/sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Search,
  X,
  Award,
  Calendar,
  Building2,
  Sparkles,
  Network,
  ShieldCheck,
  Code2,
  Cpu,
  Cloud,
  Layers,
  CheckCircle2,
  Filter
} from 'lucide-react';

const certificationsData = [
  {
    id: "smartbridge-salesforce-ai",
    title: "Salesforce AI Agent Developer",
    issuer: "SmartBridge",
    issuerGroup: "SmartBridge",
    category: "Salesforce",
    date: "August 2025",
    timestamp: 20250801,
    credentialUrl: "https://drive.google.com/file/d/17kWG3u1ld9PguX2_f7-QuAGBxpebY-EN/view?usp=sharing",
    skills: ["Salesforce AI", "Agentforce", "Autonomous Agents", "Prompt Design"]
  },
  {
    id: "cisco-ccna-enterprise",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Networking",
    date: "May 31, 2025",
    timestamp: 20250531,
    credentialUrl: "https://drive.google.com/file/d/1Ny3TPQa0Lqkej97lE6KDt99ZxnV38e2U/view?usp=sharing",
    skills: ["Enterprise Routing", "Network Security", "Automation", "REST APIs", "QoS"]
  },
  {
    id: "cisco-ccna-switching",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Networking",
    date: "May 31, 2025",
    timestamp: 20250531,
    credentialUrl: "https://drive.google.com/file/d/1NUcDWrEY-vk9AqHNlRwOWrK7RAG5xSox/view?usp=sharing",
    skills: ["VLANs", "Inter-VLAN Routing", "STP", "EtherChannel", "Wireless LANs"]
  },
  {
    id: "cisco-ccna-intro",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Networking",
    date: "May 31, 2025",
    timestamp: 20250531,
    credentialUrl: "https://drive.google.com/file/d/10lF0qQRUS9DdTM2BmlVTMf5eaNLLd7gz/view?usp=sharing",
    skills: ["IPv4/IPv6 Subnetting", "OSI & TCP/IP", "Ethernet Switching", "Router Config"]
  },
  {
    id: "cisco-intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy & Gyan Ganga College of Technology",
    issuerGroup: "Cisco",
    category: "Cybersecurity",
    date: "May 31, 2025",
    timestamp: 20250531,
    credentialUrl: "https://drive.google.com/file/d/1pjInhX1aj1E-tIWD6OWCljAMG6mF-6Tr/view?usp=sharing",
    skills: ["Threat Landscape", "Confidentiality", "Network Defenses", "Security Ethics"]
  },
  {
    id: "cisco-python-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Programming",
    date: "May 30, 2025",
    timestamp: 20250530,
    credentialUrl: "https://drive.google.com/file/d/1_v9-f-_DVlPVVrcm-ghS9uZBS0xnJHZO/view?usp=sharing",
    skills: ["OOP in Python", "Modules & Packages", "Exception Handling", "File Processing", "Generators"]
  },
  {
    id: "aws-aiml-internship",
    title: "AI-ML Virtual Internship",
    issuer: "AWS Academy",
    issuerGroup: "AWS",
    category: "Cloud",
    date: "April 2025",
    timestamp: 20250401,
    credentialUrl: "https://drive.google.com/file/d/1XdU7XnfUX_phCQqa88u8m32P7nSwMxIv/view?usp=sharing",
    skills: ["AWS SageMaker", "Machine Learning Pipelines", "Cloud AI Services", "Model Training"]
  },
  {
    id: "cisco-python-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Programming",
    date: "March 24, 2025",
    timestamp: 20250324,
    credentialUrl: "https://drive.google.com/file/d/1hcGqH_SkosA1Z8TGPLj8MOgd4tUOU5hP/view?usp=sharing",
    skills: ["Data Types & Variables", "Control Flow & Loops", "Functions & Scope", "Lists & Tuples"]
  },
  {
    id: "hp-ai-beginners",
    title: "AI for Beginners",
    issuer: "HP LIFE - HP Foundation",
    issuerGroup: "HP",
    category: "AI",
    date: "February 21, 2025",
    timestamp: 20250221,
    credentialUrl: "https://drive.google.com/file/d/1jyQ_k654NQ05NI1MllhB-sFL-f76tvea/view?usp=sharing",
    skills: ["Generative AI Basics", "Prompt Engineering", "Business Applications", "AI Ethics"]
  },
  {
    id: "accenture-swe-simulation",
    title: "Software Engineering Job Simulation",
    issuer: "Accenture",
    issuerGroup: "Accenture",
    category: "Programming",
    date: "February 15, 2025",
    timestamp: 20250215,
    credentialUrl: "https://drive.google.com/file/d/1LkrLaHU8dPGNQGDIkCr3V7KcWY_M6c_w/view?usp=sharing",
    skills: ["Architecture Design", "Code Debugging & Refactoring", "Agile Methodologies", "Security Analysis"]
  },
  {
    id: "google-aiml-specialization",
    title: "AI/ML Specialization",
    issuer: "Google for Developers",
    issuerGroup: "Google",
    category: "AI",
    date: "September 2024",
    timestamp: 20240901,
    credentialUrl: "https://drive.google.com/file/d/10hzyD00ZLmVvyNc7dfmoAyacRiVkQ5Jz/view?usp=sharing",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
  },
  {
    id: "cisco-cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Cybersecurity",
    date: "August 2024",
    timestamp: 20240801,
    credentialUrl: "https://drive.google.com/file/d/1hX-Gx2VSj7-7qvtqtFZ_zxzdmthtxQ55/view?usp=sharing",
    skills: ["Vulnerability Assessment", "Cryptography & Ciphers", "Firewall Policies", "Incident Response"]
  },
  {
    id: "cisco-packet-tracer",
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Networking",
    date: "August 2024",
    timestamp: 20240801,
    credentialUrl: "https://drive.google.com/file/d/1nXeE48I5s2f9gNWhvzDX_PsZIRVed6GG/view?usp=sharing",
    skills: ["Topology Simulation", "Packet Flow Analysis", "Device Configuration", "Troubleshooting"]
  },
  {
    id: "cisco-cpp-essentials",
    title: "C++ Programming Essentials",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Programming",
    date: "January 2024",
    timestamp: 20240101,
    credentialUrl: "https://drive.google.com/file/d/1Zt372wjttK-K51uWurEQJK4-L-wgn3gl/view?usp=sharing",
    skills: ["OOP Principles", "Pointers & Memory", "STL Containers", "Templates"]
  },
  {
    id: "cisco-c-essentials",
    title: "C Programming Essentials",
    issuer: "Cisco Networking Academy",
    issuerGroup: "Cisco",
    category: "Programming",
    date: "April 2023",
    timestamp: 20230401,
    credentialUrl: "https://drive.google.com/file/d/1fpJQ0B0ZYHSMqKhgiDY9SaD8ziXLcGK-/view?usp=sharing",
    skills: ["Structured Programming", "Pointers & Arrays", "Dynamic Memory", "File I/O"]
  }
];

const issuersList = [
  { id: 'all', label: 'All' },
  { id: 'Cisco', label: 'Cisco' },
  { id: 'Google', label: 'Google' },
  { id: 'AWS', label: 'AWS' },
  { id: 'SmartBridge', label: 'SmartBridge' },
  { id: 'HP', label: 'HP' },
  { id: 'Accenture', label: 'Accenture' }
];

const categoriesList = [
  'All',
  'Networking',
  'AI',
  'Cloud',
  'Cybersecurity',
  'Programming',
  'Salesforce'
];

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Networking':
      return <Network className="w-3.5 h-3.5 text-sky-400" />;
    case 'AI':
      return <Cpu className="w-3.5 h-3.5 text-rose-400" />;
    case 'Cloud':
      return <Cloud className="w-3.5 h-3.5 text-amber-400" />;
    case 'Cybersecurity':
      return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />;
    case 'Programming':
      return <Code2 className="w-3.5 h-3.5 text-yellow-400" />;
    case 'Salesforce':
      return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    default:
      return <Award className="w-3.5 h-3.5 text-accent" />;
  }
};

const getIssuerBadge = (issuerGroup) => {
  switch (issuerGroup) {
    case 'Cisco':
      return {
        label: 'Cisco',
        className: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
      };
    case 'Google':
      return {
        label: 'Google',
        className: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
      };
    case 'AWS':
      return {
        label: 'AWS',
        className: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      };
    case 'SmartBridge':
      return {
        label: 'SmartBridge',
        className: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
      };
    case 'HP':
      return {
        label: 'HP LIFE',
        className: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
      };
    case 'Accenture':
      return {
        label: 'Accenture',
        className: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
      };
    default:
      return {
        label: issuerGroup,
        className: 'text-accent bg-accent/10 border-accent/30'
      };
  }
};

const Certifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIssuer, setSelectedIssuer] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sorted by newest first by default
  const sortedCertifications = useMemo(() => {
    return [...certificationsData].sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  // Filtered dataset
  const filteredCertifications = useMemo(() => {
    return sortedCertifications.filter((cert) => {
      const matchesIssuer =
        selectedIssuer === 'all' || cert.issuerGroup === selectedIssuer;

      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.category.toLowerCase().includes(q) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(q));

      return matchesIssuer && matchesCategory && matchesSearch;
    });
  }, [sortedCertifications, selectedIssuer, selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedIssuer('all');
    setSelectedCategory('All');
  };

  return (
    <>
      <div className="min-h-screen pt-40 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header & Hero */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">
                [ Verified Credentials ]
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] text-textPrimary mb-6">
                Certifications.
              </h1>
              <p className="text-lg md:text-xl text-textSecondary max-w-3xl leading-relaxed">
                Industry-recognized certifications and professional credentials in networking, artificial intelligence, cloud architectures, cybersecurity, and software engineering.
              </p>
            </motion.div>
          </section>

          {/* Top Counter & Statistics Ribbon */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Stat 1 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-borderColors bg-secondary/30 backdrop-blur-md relative overflow-hidden flex items-center gap-5 group hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Award size={28} />
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">15+</div>
                  <div className="font-mono text-xs text-textSecondary uppercase tracking-wider mt-1">Professional Certifications</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-borderColors bg-secondary/30 backdrop-blur-md relative overflow-hidden flex items-center gap-5 group hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 size={28} />
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">6</div>
                  <div className="font-mono text-xs text-textSecondary uppercase tracking-wider mt-1">Global Organizations</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-6 sm:p-7 rounded-2xl border border-borderColors bg-secondary/30 backdrop-blur-md relative overflow-hidden flex items-center gap-5 group hover:border-accent/40 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">100%</div>
                  <div className="font-mono text-xs text-textSecondary uppercase tracking-wider mt-1">Verified Credentials</div>
                </div>
              </div>
            </div>

            {/* Domains Ribbon */}
            <div className="p-4 sm:p-5 rounded-2xl border border-borderColors/70 bg-secondary/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider">
                <Sparkles size={14} /> Core Domains:
              </div>
              <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-textSecondary font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <Network size={13} className="text-sky-400" /> Networking
                </span>
                <span className="text-borderColors hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <Cpu size={13} className="text-rose-400" /> AI
                </span>
                <span className="text-borderColors hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <Cloud size={13} className="text-amber-400" /> Cloud
                </span>
                <span className="text-borderColors hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <ShieldCheck size={13} className="text-emerald-400" /> Cybersecurity
                </span>
                <span className="text-borderColors hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <Code2 size={13} className="text-yellow-400" /> Programming
                </span>
                <span className="text-borderColors hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-borderColors/20 text-textPrimary border border-borderColors/40">
                  <Sparkles size={13} className="text-cyan-400" /> Salesforce
                </span>
              </div>
            </div>
          </motion.section>

          {/* Search and Filters Controls */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6 mb-12"
          >
            {/* Search Bar & Stats */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, organization, domain, or skills (e.g. CCNA, Python, AWS)..."
                  className="w-full bg-secondary/30 border border-borderColors rounded-xl pl-11 pr-10 py-3 text-sm text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:border-accent transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-textSecondary hover:text-textPrimary transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto">
                <span className="font-mono text-xs text-textSecondary">
                  Showing <strong className="text-accent">{filteredCertifications.length}</strong> of {certificationsData.length}
                </span>
                {(searchQuery || selectedIssuer !== 'all' || selectedCategory !== 'All') && (
                  <button
                    onClick={resetFilters}
                    className="font-mono text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            {/* Issuer Filter Tabs */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-textSecondary uppercase tracking-wider">
                <Building2 size={13} className="text-accent" /> Filter by Issuer:
              </div>
              <div className="flex flex-wrap gap-2">
                {issuersList.map((item) => {
                  const count =
                    item.id === 'all'
                      ? certificationsData.length
                      : certificationsData.filter((c) => c.issuerGroup === item.id).length;
                  const isActive = selectedIssuer === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedIssuer(item.id)}
                      className={`font-mono text-xs px-3.5 py-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-accent text-primary font-bold border-accent shadow-md shadow-accent/20'
                          : 'bg-secondary/30 border-borderColors text-textSecondary hover:text-textPrimary hover:border-accent/40'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-primary/20 text-primary' : 'bg-borderColors/30 text-textSecondary'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-textSecondary uppercase tracking-wider">
                <Filter size={13} className="text-accent" /> Filter by Domain:
              </div>
              <div className="flex flex-wrap gap-2">
                {categoriesList.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-textPrimary text-primary font-semibold border-textPrimary'
                          : 'bg-borderColors/10 border-borderColors/40 text-textSecondary hover:text-textPrimary hover:border-borderColors'
                      }`}
                    >
                      {cat !== 'All' && getCategoryIcon(cat)}
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Certifications Grid (3 columns desktop, 2 tablet, 1 mobile) */}
          <section>
            {filteredCertifications.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredCertifications.map((item, idx) => {
                    const badgeStyle = getIssuerBadge(item.issuerGroup);

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                        className="group relative rounded-2xl border border-borderColors bg-secondary/30 hover:bg-secondary/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                      >
                        {/* Ambient Card Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                          {/* Card Header: Issuer Badge + Category Icon + Date */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`font-mono text-xs px-2.5 py-0.5 rounded-md border font-medium ${badgeStyle.className}`}>
                                {badgeStyle.label}
                              </span>
                              <span className="flex items-center gap-1 font-mono text-[11px] text-textSecondary bg-borderColors/20 px-2 py-0.5 rounded border border-borderColors/30">
                                {getCategoryIcon(item.category)}
                                <span>{item.category}</span>
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-mono text-textSecondary shrink-0 pt-0.5">
                              <Calendar size={13} className="text-accent" />
                              <span>{item.date}</span>
                            </div>
                          </div>

                          {/* Certification Title */}
                          <h3 className="font-display font-medium text-xl sm:text-2xl text-textPrimary group-hover:text-accent transition-colors duration-300 leading-snug mb-3">
                            {item.title}
                          </h3>

                          {/* Issuing Organization */}
                          <div className="text-xs text-textSecondary mb-4 flex items-start gap-1.5">
                            <Building2 size={13} className="text-textSecondary/60 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{item.issuer}</span>
                          </div>

                          {/* Skills Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="font-mono text-[10px] text-textSecondary bg-borderColors/15 px-2 py-0.5 rounded border border-borderColors/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer: Credential Button */}
                        <div className="relative z-10 pt-4 border-t border-borderColors/50 flex items-center justify-between gap-3 mt-auto">
                          <span className="font-mono text-[11px] text-textSecondary/60 uppercase tracking-widest">
                            Verified Link
                          </span>
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-textPrimary hover:text-accent font-semibold px-3.5 py-1.5 rounded-lg border border-borderColors hover:border-accent/40 bg-borderColors/10 hover:bg-accent/10 transition-all duration-300 group/btn"
                          >
                            <span>View Credential</span>
                            <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-accent" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center rounded-2xl border border-dashed border-borderColors bg-secondary/10"
              >
                <Award className="w-12 h-12 text-textSecondary/40 mx-auto mb-4" />
                <h3 className="font-display text-xl text-textPrimary mb-2">No certifications found</h3>
                <p className="text-sm text-textSecondary max-w-md mx-auto mb-6">
                  No credentials match your current search query or filter criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="font-mono text-xs px-4 py-2 rounded-xl bg-accent text-primary font-bold hover:opacity-90 transition-opacity"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certifications;
