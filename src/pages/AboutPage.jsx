import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import profilePic from '../assets/profile picturee.jpg';
import sihPic from '../assets/sih/1.jpg';
import {
  Sparkles,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  Network,
  Layers,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Brain,
  Rocket,
  Lightbulb,
  HeartHandshake,
  Users,
  GraduationCap,
  Briefcase,
  Trophy,
  Coffee,
  Globe,
  Flame,
  ChevronRight,
  Download,
  Mail,
  Zap,
  BookOpen,
  Target,
  Compass,
  Check,
  FolderGit2,
  Workflow,
  Laptop,
  Server,
  Smartphone,
  Database
} from 'lucide-react';

/* ==========================================================================
   ANIMATED NUMBER COUNTER
   ========================================================================== */
const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value, 10);
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let start = 0;
    const steps = 60;
    const increment = numericValue / (duration * steps);
    const intervalTime = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration, isNumeric]);

  return (
    <span ref={ref} className="font-display font-bold">
      {isNumeric ? count : value}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
};

/* ==========================================================================
   FLOATING TECH BADGE
   ========================================================================== */
const FloatingBadge = ({ icon, label, className = "", delay = 0, xOffset = 0, yOffset = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, yOffset, 0],
      x: [0, xOffset, 0]
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      x: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }
    }}
    className={`absolute z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border border-borderColors/60 bg-secondary/80 backdrop-blur-md shadow-lg text-textPrimary text-xs font-mono select-none ${className}`}
  >
    <span className="text-accent">{icon}</span>
    <span>{label}</span>
  </motion.div>
);

/* ==========================================================================
   DATA STRUCTURES
   ========================================================================== */

const journeyTimeline = [
  {
    id: 1,
    year: "2022",
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
    title: "Started B.Tech Computer Science",
    institution: "Gyan Ganga College of Technology",
    description: "Commenced my engineering degree in Computer Science. Discovered the profound logic of computation, data structures, and the limitless creativity of writing software.",
    tags: ["Algorithms", "C++", "CS Fundamentals", "Problem Solving"]
  },
  {
    id: 2,
    year: "2022 - 2023",
    icon: <Globe className="w-5 h-5 text-sky-400" />,
    title: "Learned HTML, CSS & JavaScript",
    institution: "Web Foundations",
    description: "Built a solid groundwork in modern semantic web development, responsive design patterns, CSS layouts, and modern ECMAScript standards.",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "DOM Manipulation"]
  },
  {
    id: 3,
    year: "2023",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    title: "Built First Production Websites",
    institution: "Project Milestone",
    description: "Transformed theoretical learning into real user-facing web applications. Deployed dynamic web interfaces with clean layout aesthetics and interactive components.",
    tags: ["UI/UX", "Responsive Design", "Git", "Web Apps"]
  },
  {
    id: 4,
    year: "2023",
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    title: "Mastered React & Modern Frontend Architecture",
    institution: "Frontend Specialization",
    description: "Dove deep into React component lifecycles, state management, hooks, Framer Motion animations, and building reusable UI design systems.",
    tags: ["React.js", "State Management", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 5,
    year: "2023 - 2024",
    icon: <Server className="w-5 h-5 text-yellow-400" />,
    title: "Full-Stack Backend Development",
    institution: "APIs & Databases",
    description: "Engineered scalable RESTful API backends using Node.js, Express, PHP, and relational MySQL databases with structured schemas and secure authentication.",
    tags: ["Node.js", "Express", "PHP", "MySQL", "REST APIs"]
  },
  {
    id: 6,
    year: "2024",
    icon: <Smartphone className="w-5 h-5 text-sky-400" />,
    title: "Flutter & Mobile App Engineering",
    institution: "Cross-Platform Mobile",
    description: "Expanded engineering capabilities into native cross-platform mobile apps using Flutter and Dart, building real-time tracking and emergency communication apps.",
    tags: ["Flutter", "Dart", "Mobile UI", "Real-Time Tracking"]
  },
  {
    id: 7,
    year: "2024",
    icon: <Briefcase className="w-5 h-5 text-purple-400" />,
    title: "8-Month Software Engineering Internship",
    institution: "Toss Consultancy Services",
    description: "Worked on production-grade client and enterprise solutions. Architected the Apatkal emergency response web and mobile platform, resulting in a Pre-Placement Offer (PPO).",
    tags: ["Production Code", "Full Stack", "Flutter", "PPO Received"]
  },
  {
    id: 8,
    year: "2023 - 2024",
    icon: <Users className="w-5 h-5 text-rose-400" />,
    title: "GDSC Operations Head",
    institution: "Google Developer Student Clubs",
    description: "Led core technical initiatives, organized large-scale hackathons, mentored 50+ student developers, and conducted hands-on coding workshops.",
    tags: ["Leadership", "Community", "Hackathons", "Tech Mentorship"]
  },
  {
    id: 9,
    year: "2024",
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    title: "Smart India Hackathon Finalist",
    institution: "Ministry of Education & AICTE",
    description: "Selected as a top National Finalist at Smart India Hackathon 2024. Architected VEIP (Vocational Education Integration Platform), aligned with NEP 2020.",
    tags: ["SIH 2024", "National Finalist", "EdTech Innovation", "NEP 2020"]
  },
  {
    id: 10,
    year: "2024 - 2025",
    icon: <FolderGit2 className="w-5 h-5 text-cyan-400" />,
    title: "Shipped Multiple Scalable Real Projects",
    institution: "Client & Open Source Products",
    description: "Designed, developed, and deployed high-performance solutions including TravelMate Kochi, Terminal Portfolio, Jarvis AI Voice Assistant, and VEIP.",
    tags: ["TravelMate", "Terminal Port", "Jarvis AI", "Production Scalability"]
  },
  {
    id: 11,
    year: "2025 - Present",
    icon: <Brain className="w-5 h-5 text-indigo-400" />,
    title: "Learning AI Engineering & Salesforce Ecosystem",
    institution: "Advanced Horizons",
    description: "Actively mastering Salesforce Agentforce, AI autonomous agents, LLM integrations, cloud architecture, and modern distributed systems.",
    tags: ["Salesforce AI", "Agentforce", "LLMs", "Cloud Architecture"]
  },
  {
    id: 12,
    year: "Present & Future",
    icon: <Rocket className="w-5 h-5 text-accent" />,
    title: "Open for Software Engineering Opportunities",
    institution: "Next Chapter",
    description: "Eager to contribute as a Full Stack / Software Engineer in high-velocity teams, building transformative products that solve ambitious real-world problems.",
    tags: ["Full Stack", "Software Engineer", "Ready to Build"]
  }
];

function AtomIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2a10 10 0 0 0-7.07 17.07l14.14-14.14A10 10 0 0 0 12 2Z" opacity="0.3" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" />
    </svg>
  );
}

const technicalSkills = [
  {
    id: "frontend",
    category: "Frontend Development",
    icon: <Laptop className="w-5 h-5 text-cyan-400" />,
    accent: "from-cyan-500/20 to-blue-500/5",
    borderGlow: "hover:border-cyan-500/40",
    skills: [
      { name: "React.js / Next.js", level: 92 },
      { name: "JavaScript (ES6+) / TypeScript", level: 90 },
      { name: "HTML5 / CSS3 / SCSS", level: 95 },
      { name: "Tailwind CSS & Styling", level: 94 },
      { name: "Framer Motion & Micro-UI", level: 88 }
    ]
  },
  {
    id: "backend",
    category: "Backend & Databases",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    accent: "from-emerald-500/20 to-teal-500/5",
    borderGlow: "hover:border-emerald-500/40",
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "PHP & Server-Side Logic", level: 86 },
      { name: "MySQL & Database Design", level: 88 },
      { name: "Firebase (Auth / Firestore)", level: 85 },
      { name: "RESTful APIs & Endpoints", level: 90 }
    ]
  },
  {
    id: "mobile",
    category: "Mobile App Engineering",
    icon: <Smartphone className="w-5 h-5 text-sky-400" />,
    accent: "from-sky-500/20 to-indigo-500/5",
    borderGlow: "hover:border-sky-500/40",
    skills: [
      { name: "Flutter & Dart", level: 86 },
      { name: "Cross-Platform Architecture", level: 84 },
      { name: "State Management (Provider/Bloc)", level: 82 },
      { name: "Geolocation & Tracking APIs", level: 85 },
      { name: "Mobile UI / Responsive Layouts", level: 88 }
    ]
  },
  {
    id: "languages",
    category: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    accent: "from-amber-500/20 to-orange-500/5",
    borderGlow: "hover:border-amber-500/40",
    skills: [
      { name: "C++ (Data Structures & OOP)", level: 88 },
      { name: "Python (AI / Automation)", level: 85 },
      { name: "JavaScript (Modern ECMAScript)", level: 92 },
      { name: "SQL & Query Optimization", level: 86 },
      { name: "Dart (Mobile SDK)", level: 84 }
    ]
  },
  {
    id: "cloud",
    category: "Cloud, DevOps & Tools",
    icon: <Cloud className="w-5 h-5 text-purple-400" />,
    accent: "from-purple-500/20 to-rose-500/5",
    borderGlow: "hover:border-purple-500/40",
    skills: [
      { name: "Git & GitHub Version Control", level: 92 },
      { name: "AWS Cloud (S3, SageMaker, EC2)", level: 80 },
      { name: "Salesforce & Agentforce AI", level: 82 },
      { name: "VS Code & Dev Workflows", level: 95 },
      { name: "Postman API Testing", level: 90 }
    ]
  }
];

const skillCategoryTabs = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "languages", label: "Languages & Core" },
  { id: "cloud", label: "Cloud & Tools" }
];

const featuredProjects = [
  {
    id: "veip",
    title: "Vocational Education Integration Platform (VEIP)",
    badge: "Smart India Hackathon Finalist",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    status: "National Finalist · NEP 2020",
    techStack: ["React", "JavaScript", "Tailwind CSS", "WordPress", "NEP 2020"],
    description: "A nationwide vocational learning and mentorship platform aligned with NEP 2020 that bridges the gap between structured education and industry employability with digital skill badges.",
    link: "/projects/veip",
    externalLink: "https://vission-landing-page.vercel.app/"
  },
  {
    id: "apatkal",
    title: "Apatkal Emergency Response Platform",
    badge: "Production Client & Internship",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    status: "Production Deployed · Live",
    techStack: ["PHP", "MySQL", "Flutter", "REST APIs", "Live GPS"],
    description: "An emergency transportation ecosystem comprising a web platform and mobile app for instant ambulance booking, driver live-tracking, and critical care family emergency dispatch.",
    link: "/projects/apatkal",
    externalLink: "https://apatkal.in"
  },
  {
    id: "chronic-pulse",
    title: "AI Chronic Disease Management (Chronic Pulse)",
    badge: "Yukti Innovation Challenge 2025",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    status: "AI Healthcare Platform",
    techStack: ["PHP", "MySQL", "Gemini API", "AI Insights", "Telehealth"],
    description: "Intelligent telehealth diagnostic platform with daily biometric tracking, Gemini AI-powered diagnostic insights, automated alerts, and virtual clinician consultations.",
    link: "/projects/chronic-pulse",
    externalLink: "https://chronicpulse.wuaze.com/public"
  },
  {
    id: "travelmate-kochi",
    title: "TravelMate Kochi Tourism Hub",
    badge: "Client Production Solution",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    status: "Live in Production",
    techStack: ["PHP", "MySQL", "JavaScript", "Responsive UI"],
    description: "A commercial travel booking and destination discovery portal built for dynamic tour package management, customer enquiries, and optimized responsive booking experiences.",
    link: "/projects/travelmate-kochi",
    externalLink: "https://travelmatekochi.in"
  }
];

const statsData = [
  { label: "Projects Built & Shipped", value: "10", suffix: "+", icon: <FolderGit2 className="w-5 h-5 text-accent" /> },
  { label: "Professional Certifications", value: "15", suffix: "+", icon: <Award className="w-5 h-5 text-amber-400" /> },
  { label: "Months Internship Experience", value: "8", suffix: "+", icon: <Briefcase className="w-5 h-5 text-cyan-400" /> },
  { label: "Smart India Hackathon", value: "SIH", suffix: " Finalist", icon: <Trophy className="w-5 h-5 text-yellow-400" /> },
  { label: "GDSC Operations Head", value: "GDSC", suffix: " Lead", icon: <Users className="w-5 h-5 text-rose-400" /> },
  { label: "Hours of Dedicated Code", value: "1000", suffix: "+", icon: <Terminal className="w-5 h-5 text-emerald-400" /> },
  { label: "Major Tech Stacks", value: "5", suffix: "+", icon: <Cpu className="w-5 h-5 text-purple-400" /> }
];

const developmentWorkflow = [
  {
    step: "01",
    title: "Idea & Discovery",
    tagline: "Problem Validation & System Scoping",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    desc: "Understanding user friction points deeply, evaluating technical feasibility, defining data flow, and establishing measurable performance KPIs.",
    deliverables: ["User Journey Mapping", "Tech Stack Selection", "System Flow Diagram"],
    tools: "Figma, Notion, Draw.io"
  },
  {
    step: "02",
    title: "UI/UX & Architecture",
    tagline: "Design System & Schema Blueprinting",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    desc: "Crafting fluid interactive wireframes, establishing design tokens, relational schema modeling, and architecting resilient REST/WebSocket API contracts.",
    deliverables: ["High-Fidelity Wireframes", "Database Schema Models", "API Endpoint Specs"],
    tools: "Figma, Tailwind, MySQL Workbench"
  },
  {
    step: "03",
    title: "Agile Development",
    tagline: "Clean, Scalable, Component-Driven Code",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    desc: "Writing modular, type-safe code with clean separation of concerns, reusable React/Flutter components, and responsive pixel-perfect styling.",
    deliverables: ["Component Libraries", "State Architecture", "Full CRUD Backend Services"],
    tools: "React, Flutter, Node.js, PHP"
  },
  {
    step: "04",
    title: "Testing & Quality",
    tagline: "Resilience, Security & Cross-Device Audit",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    desc: "Thorough API regression testing, responsive viewport verification across mobile/desktop, input sanitization, and security vulnerability audits.",
    deliverables: ["Postman API Test Suites", "Cross-Browser Testing", "Edge Case Hardening"],
    tools: "Postman, Chrome DevTools, Lighthouse"
  },
  {
    step: "05",
    title: "Cloud Deployment",
    tagline: "Automated CI/CD & Production Release",
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    desc: "Configuring automated deployment workflows, CDN caching, SSL certificates, database migrations, and high-availability cloud hosting.",
    deliverables: ["Production Cloud Deploy", "SSL & Domain Setup", "Monitoring & Logs"],
    tools: "Vercel, AWS S3/EC2, Git Actions"
  },
  {
    step: "06",
    title: "Iterate & Elevate",
    tagline: "Continuous Profiling & Feature Scaling",
    icon: <Workflow className="w-6 h-6 text-sky-400" />,
    desc: "Analyzing user behavior telemetry, profiling bundle sizes and API response latencies, and implementing incremental feature improvements.",
    deliverables: ["Speed & Bundle Optimization", "User Feedback Refinements", "Versioned Upgrades"],
    tools: "Analytics, Speed Profiler, Sentry"
  }
];

const marqueeTechs = [
  { name: "React.js", color: "text-cyan-400" },
  { name: "Next.js", color: "text-textPrimary" },
  { name: "Node.js", color: "text-emerald-400" },
  { name: "Flutter", color: "text-sky-400" },
  { name: "Firebase", color: "text-amber-400" },
  { name: "MySQL", color: "text-blue-400" },
  { name: "Git / GitHub", color: "text-orange-400" },
  { name: "AWS Cloud", color: "text-amber-300" },
  { name: "JavaScript ES6+", color: "text-yellow-400" },
  { name: "Python", color: "text-blue-400" },
  { name: "Salesforce AI", color: "text-cyan-300" },
  { name: "Agentforce", color: "text-accent" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "C++", color: "text-indigo-400" },
  { name: "Express.js", color: "text-stone-300" },
  { name: "REST APIs", color: "text-emerald-300" }
];

const topCertifications = [
  {
    title: "Salesforce AI Agent Developer",
    issuer: "SmartBridge",
    badge: "SmartBridge",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    date: "August 2025",
    skills: ["Agentforce", "Autonomous Agents", "Prompt Design"]
  },
  {
    title: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco Networking Academy",
    badge: "Cisco",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    date: "May 2025",
    skills: ["Enterprise Routing", "Network Security", "Automation", "APIs"]
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "AWS Academy",
    badge: "AWS",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    date: "April 2025",
    skills: ["AWS SageMaker", "ML Pipelines", "Cloud AI Services"]
  },
  {
    title: "AI/ML Specialization",
    issuer: "Google for Developers",
    badge: "Google",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    date: "September 2024",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks"]
  },
  {
    title: "Software Engineering Simulation",
    issuer: "Accenture",
    badge: "Accenture",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    date: "February 2025",
    skills: ["Architecture Design", "Refactoring", "Agile"]
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    badge: "Cisco",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    date: "August 2024",
    skills: ["Threat Landscape", "Network Defenses", "Security Ethics"]
  }
];

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech.)",
    field: "Computer Science & Engineering",
    institution: "Gyan Ganga College of Technology (GGCT)",
    location: "Jabalpur, Madhya Pradesh",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    duration: "2022 – 2026",
    scoreType: "CGPA",
    score: "7.59 / 10.00",
    status: "Completed",
    highlights: [
      "Core Specialization: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks.",
      "Hands-on full-stack development with React, Node.js, PHP, MySQL, and cross-platform mobile apps with Flutter.",
      "Leadership: Operations Head at Google Developer Student Clubs (GDSC), driving community workshops and hackathons.",
      "Competitions: Smart India Hackathon (SIH 2024) National Finalist & Yukti Innovation Challenge Selection."
    ],
    tags: ["Data Structures", "Algorithms", "Full Stack Dev", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    field: "Senior Secondary (Science & Mathematics)",
    institution: "Little Kingdom Senior Secondary School",
    location: "Jabalpur, Madhya Pradesh",
    university: "Central Board of Secondary Education (CBSE)",
    duration: "2022",
    scoreType: "Percentage",
    score: "62.8%",
    status: "Completed",
    highlights: [
      "Studied Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      "Built core analytical problem-solving skills, mathematical foundations, and early programming logic."
    ],
    tags: ["Physics", "Chemistry", "Mathematics", "Computer Science", "CBSE"]
  },
  {
    degree: "Secondary Education (Class X)",
    field: "High School (General Science & Mathematics)",
    institution: "Little Kingdom Senior Secondary School",
    location: "Jabalpur, Madhya Pradesh",
    university: "Central Board of Secondary Education (CBSE)",
    duration: "2020",
    scoreType: "Percentage",
    score: "61.0%",
    status: "Completed",
    highlights: [
      "Comprehensive foundational curriculum encompassing Mathematics, Science, Social Studies, and English.",
      "Developed keen curiosity for computers, logic building, and technology exploration."
    ],
    tags: ["Mathematics", "Science", "Computer Fundamentals", "CBSE"]
  }
];

const beyondCodingItems = [
  {
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    title: "Learning New Frameworks",
    desc: "Diving into modern frontend, cloud tools, and backend frameworks to stay ahead of the curve."
  },
  {
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    title: "Exploring AI & Agents",
    desc: "Fascinated by autonomous AI agents, prompt architectures, Agentforce, and generative intelligence."
  },
  {
    icon: <Target className="w-5 h-5 text-amber-400" />,
    title: "Solving DSA Problems",
    desc: "Practicing algorithms and algorithmic complexity to strengthen analytical problem-solving muscles."
  },
  {
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
    title: "Open Source Ecosystems",
    desc: "Exploring open-source repositories, reading clean architecture codebases, and contributing."
  },
  {
    icon: <Coffee className="w-5 h-5 text-orange-400" />,
    title: "Coffee & Coding Sessions",
    desc: "Getting into the deep focus zone with ambient lo-fi tracks, clean code, and hot espresso."
  },
  {
    icon: <Users className="w-5 h-5 text-rose-400" />,
    title: "Tech Communities",
    desc: "Active participation in developer meetups, student hackathons, and peer code discussions."
  }
];

const funFacts = [
  { emoji: "⚡", text: "Love turning complex real-world challenges into crisp, functional digital products." },
  { emoji: "🚀", text: "Always eager to test and adopt cutting-edge frontend tooling and AI integrations." },
  { emoji: "🧠", text: "Curious about autonomous AI agents and modern distributed system architectures." },
  { emoji: "🎯", text: "Strong believer that persistent daily consistency effortlessly beats natural talent." },
  { emoji: "💡", text: "Constantly exploring fresh ideas, side projects, and next-gen engineering paradigms." }
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

const AboutPage = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const filteredSkills = activeSkillCategory === "all"
    ? technicalSkills
    : technicalSkills.filter(cat => cat.id === activeSkillCategory);

  return (
    <>
      <div className="min-h-screen pt-36 md:pt-44 pb-28 relative overflow-hidden">
        
        {/* Ambient Blurred Background Accent Lights */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute top-[70%] left-10 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* =================================================================
              1. HERO SECTION
             ================================================================= */}
          <section className="relative mb-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Story & Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                    Software Developer &amp; Problem Solver
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-textPrimary leading-[1.05]">
                  Hi, I'm <span className="text-accent underline decoration-accent/30 underline-offset-8">Siddharth</span> Singh.
                </h1>

                {/* Subtitle / Role */}
                <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-textSecondary">
                  <span className="text-accent font-semibold">[ Role ]</span>
                  <span>Full Stack Developer · AI Enthusiast · SIH Finalist</span>
                </div>

                {/* Short Hook Story */}
                <p className="text-lg sm:text-xl text-textSecondary leading-relaxed max-w-2xl">
                  I engineer scalable web applications, cross-platform mobile experiences, and AI-powered systems. 
                  Driven by relentless curiosity and a passion for solving real-world challenges with clean, robust code.
                </p>

                {/* Tech Stack Chips Cloud */}
                <div className="pt-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-textSecondary/70 mb-3">
                    Core Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "JavaScript", "Flutter", "Firebase", "MySQL", "AWS", "Python", "Salesforce"].map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg border border-borderColors bg-secondary/40 backdrop-blur-sm text-textPrimary hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* High Conversion CTA Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="/resume.pdf"
                    download="Siddharth_Singh_Resume.pdf"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 group"
                  >
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Resume</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-borderColors bg-secondary/40 backdrop-blur-md text-textPrimary font-medium text-sm hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <Mail size={16} className="text-accent" />
                    <span>Contact Me</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="#journey"
                    className="inline-flex items-center gap-2 px-4 py-3 text-textSecondary hover:text-accent font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Explore Journey</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Profile Image + Floating Orbit Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0"
              >
                {/* Outer Decorative Glow Rings */}
                <div className="relative w-72 h-80 sm:w-88 sm:h-[420px] md:w-96 md:h-[460px]">
                  
                  {/* Glowing backdrop border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-60 animate-pulse" />
                  
                  {/* Photo Container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-borderColors/80 bg-secondary/30 backdrop-blur-md shadow-2xl group">
                    <img
                      src={profilePic}
                      alt="Siddharth Singh"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Bottom Floating Tag inside image */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-secondary/80 backdrop-blur-md border border-borderColors/50 flex items-center justify-between">
                      <div>
                        <div className="font-display text-xs font-bold text-textPrimary">Siddharth Singh</div>
                        <div className="font-mono text-[10px] text-accent">Full Stack &amp; AI Engineer</div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </div>

                  {/* Floating Badges Around the Image */}
                  <FloatingBadge
                    icon={<Trophy className="w-3.5 h-3.5" />}
                    label="SIH Finalist"
                    className="-top-5 -left-6 border-amber-500/30 bg-amber-500/10 text-amber-300"
                    delay={0.2}
                    yOffset={-10}
                    xOffset={-4}
                  />

                  <FloatingBadge
                    icon={<Users className="w-3.5 h-3.5" />}
                    label="GDSC Lead"
                    className="-top-4 -right-6 border-rose-500/30 bg-rose-500/10 text-rose-300"
                    delay={0.4}
                    yOffset={10}
                    xOffset={5}
                  />

                  <FloatingBadge
                    icon={<Code2 className="w-3.5 h-3.5" />}
                    label="Full Stack Dev"
                    className="top-1/2 -left-10 border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    delay={0.6}
                    yOffset={-8}
                    xOffset={-6}
                  />

                  <FloatingBadge
                    icon={<Zap className="w-3.5 h-3.5" />}
                    label="Problem Solver"
                    className="-bottom-5 -right-4 border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    delay={0.8}
                    yOffset={8}
                    xOffset={-4}
                  />

                  {/* Floating Tech Chips */}
                  <div className="hidden sm:block">
                    <FloatingBadge
                      icon={<span className="text-cyan-400">⚛</span>}
                      label="React"
                      className="top-16 -right-12"
                      delay={1.0}
                      yOffset={-12}
                    />
                    <FloatingBadge
                      icon={<span className="text-emerald-400">⚡</span>}
                      label="Node"
                      className="bottom-20 -left-12"
                      delay={1.2}
                      yOffset={10}
                    />
                  </div>

                </div>
              </motion.div>

            </div>
          </section>

          {/* =================================================================
              2. PERSONAL INTRODUCTION & PHILOSOPHY ("WHO I AM")
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 01 · Who I Am ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Architecting Code. Solving Problems.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Quick Profile Bento Card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4 p-8 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Terminal size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-textPrimary">Siddharth Singh</h3>
                    <p className="text-sm font-mono text-textSecondary mt-1">Software Engineer · Jabalpur, India</p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-borderColors/60 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-textSecondary font-mono text-xs uppercase">Primary Focus</span>
                      <span className="text-textPrimary font-medium">Full Stack &amp; AI</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-textSecondary font-mono text-xs uppercase">Mindset</span>
                      <span className="text-textPrimary font-medium">Builder &amp; Innovator</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-textSecondary font-mono text-xs uppercase">Availability</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Open for Roles
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 relative z-10">
                  <div className="p-4 rounded-2xl bg-borderColors/10 border border-borderColors/40 flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-xs text-textSecondary font-mono">
                      Driven by continuous learning, clean architecture &amp; caffeine.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Story Narrative */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-8 p-8 sm:p-10 rounded-3xl border border-borderColors bg-secondary/20 backdrop-blur-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5 text-base sm:text-lg text-textSecondary leading-relaxed">
                  <p>
                    My journey in computer science began with an innate fascination for how lines of code can materialize into living digital tools that transform human lives and daily operations.
                  </p>
                  <p>
                    Over my academic years and professional internship, that curiosity evolved into a dedicated discipline of <span className="text-textPrimary font-medium">software engineering, robust system design, and product building</span>. I have designed and deployed comprehensive emergency dispatch platforms, NEP 2020-aligned education hubs, and commercial tourism engines.
                  </p>
                  <p>
                    I thrive at the intersection of <span className="text-accent font-medium">frontend beauty, resilient backend architecture, and emerging AI technologies</span>. Whether solving complex algorithmic challenges, mentoring junior developers at GDSC, or architecting autonomous agent workflows with Salesforce Agentforce, I am driven by the joy of building things that matter.
                  </p>
                </div>

                {/* Core Philosophy Banner */}
                <div className="mt-6 p-6 rounded-2xl border border-accent/30 bg-accent/5 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                        My Core Philosophy
                      </div>
                      <p className="font-display text-lg sm:text-xl font-medium text-textPrimary italic">
                        "Build products that solve real problems while continuously learning and growing."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* =================================================================
              3. MY JOURNEY (INTERACTIVE VERTICAL TIMELINE)
             ================================================================= */}
          <section id="journey" className="mb-36 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 02 · The Journey ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Milestones &amp; Evolution.
              </h2>
              <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                An interactive timeline of my path in software engineering—from early foundational code to production systems and leadership.
              </p>
            </motion.div>

            {/* Vertical Timeline Structure */}
            <div className="relative">
              
              {/* Central Glowing Line (Desktop) / Left Line (Mobile) */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-borderColors to-transparent md:-translate-x-1/2" />

              <div className="space-y-12 md:space-y-16">
                {journeyTimeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? 'md:flex-row-reverse' : ''
                      } gap-8 md:gap-16 pl-14 md:pl-0`}
                    >
                      {/* Central Node Circle */}
                      <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary border-2 border-accent flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,90,31,0.4)]">
                        {item.icon}
                      </div>

                      {/* Content Card Side */}
                      <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <div className="p-7 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 group shadow-lg">
                          
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                              {item.year}
                            </span>
                            <span className="font-mono text-xs text-textSecondary">
                              {item.institution}
                            </span>
                          </div>

                          <h3 className="font-display text-xl sm:text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors mb-2">
                            {item.title}
                          </h3>

                          <p className="text-sm sm:text-base text-textSecondary leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {/* Skill Tags */}
                          <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-borderColors/20 text-textSecondary border border-borderColors/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>
                      </div>

                      {/* Empty spacer for opposite column */}
                      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* =================================================================
              4. TECHNICAL EXPERTISE (CATEGORIZED CARDS & PROGRESS BARS)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 03 · Technical Expertise ]</div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                  Skills &amp; Engineering Stack.
                </h2>
                <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                  Hands-on proficiencies across full-stack web, native cross-platform mobile, databases, cloud tools, and programming paradigms.
                </p>
              </div>

              {/* Verified Count Badge */}
              <div className="font-mono text-xs text-accent px-4 py-2 rounded-full border border-accent/30 bg-accent/5 self-start md:self-auto shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>25+ Production Competencies</span>
              </div>
            </motion.div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap mb-10 pb-2">
              {skillCategoryTabs.map((tab) => {
                const isActive = activeSkillCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSkillCategory(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono transition-all duration-300 relative select-none cursor-pointer border ${
                      isActive
                        ? "bg-accent text-white border-accent shadow-lg shadow-accent/25 font-semibold"
                        : "bg-secondary/40 text-textSecondary border-borderColors hover:border-accent/40 hover:text-textPrimary"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((cat) => (
                  <motion.div
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className={`p-7 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md ${cat.borderGlow} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                  >
                    {/* Subtle Background Glow */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cat.accent} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-borderColors/60">
                        <div className="p-3 rounded-2xl bg-borderColors/20 border border-borderColors/40 group-hover:scale-110 transition-transform">
                          {cat.icon}
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-textPrimary">{cat.category}</h3>
                          <span className="font-mono text-xs text-textSecondary">{cat.skills.length} core competencies</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-textPrimary font-medium">{skill.name}</span>
                              <span className="text-accent">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-borderColors/30 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1 + sIdx * 0.08, ease: "easeOut" }}
                                className="h-full bg-accent rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-borderColors/40 flex items-center justify-between text-xs font-mono text-textSecondary">
                      <span>Verified in production</span>
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* =================================================================
              5. WHAT DRIVES ME (CORE PILLARS)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 04 · Core Pillars ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                What Drives My Engineering.
              </h2>
              <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                The three non-negotiable principles that guide every line of code I write and every product I build.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
                  title: "Innovation",
                  tag: "Building Useful Software",
                  desc: "I am fascinated by solving real friction points. Innovation isn't just novelty—it is transforming complex systems into intuitive, reliable software that users love.",
                  accentGlow: "group-hover:border-amber-500/50"
                },
                {
                  icon: <Rocket className="w-8 h-8 text-cyan-400" />,
                  title: "Continuous Growth",
                  tag: "Learning Without Limits",
                  desc: "Technology moves fast, and I move with it. Constantly learning emerging architectures, AI agents, and frameworks keeps my engineering sharp and forward-looking.",
                  accentGlow: "group-hover:border-cyan-500/50"
                },
                {
                  icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
                  title: "Tangible Impact",
                  tag: "Improving Lives Through Tech",
                  desc: "From emergency dispatch applications to vocational training platforms, code must make a positive difference in human workflows, businesses, and communities.",
                  accentGlow: "group-hover:border-rose-500/50"
                }
              ].map((pillar, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: pIdx * 0.15 }}
                  className={`p-8 sm:p-10 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md ${pillar.accentGlow} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-borderColors/20 border border-borderColors/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <div>
                      <div className="font-mono text-xs text-accent uppercase tracking-widest mb-1">{pillar.tag}</div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary">{pillar.title}</h3>
                    </div>
                    <p className="text-textSecondary leading-relaxed text-base">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-borderColors/40 font-mono text-xs text-accent flex items-center gap-2">
                    <span>Pillar 0{pIdx + 1}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              6. NUMBERS THAT DEFINE ME (ANIMATED STATS RIBBON)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-3xl border border-borderColors bg-secondary/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              <div className="mb-10">
                <div className="font-mono text-xs text-accent mb-2 uppercase tracking-widest">[ By The Numbers ]</div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">Numbers That Define My Journey.</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {statsData.map((stat, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sIdx * 0.08 }}
                    className="p-5 rounded-2xl border border-borderColors/50 bg-borderColors/10 flex flex-col items-center justify-center text-center group hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                  >
                    <div className="mb-3 p-2.5 rounded-xl bg-secondary/80 border border-borderColors/40 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-textPrimary mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="font-mono text-[11px] text-textSecondary uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Spotlight Badge */}
              <div className="mt-8 pt-6 border-t border-borderColors/50 flex flex-wrap items-center justify-start gap-6 text-xs font-mono text-textSecondary">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Smart India Hackathon Finalist
                </span>
                <span className="text-borderColors">•</span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> Pre-Placement Offer (PPO)
                </span>
                <span className="text-borderColors">•</span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> GDSC Operations Lead
                </span>
              </div>
            </motion.div>
          </section>

          {/* =================================================================
              7. PROFESSIONAL EXPERIENCE SNAPSHOT
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 05 · Industry Experience ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Professional Experience Snapshot.
              </h2>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md relative overflow-hidden group hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-borderColors/60">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase">
                    Full-Time Internship · 8 Months
                  </div>
                  <h3 className="font-display text-3xl font-bold text-textPrimary">
                    Full Stack Developer Intern
                  </h3>
                  <div className="text-lg text-textSecondary font-medium flex items-center gap-2">
                    <span className="text-accent font-semibold">Toss Consultancy Services</span>
                    <span>·</span>
                    <span className="text-sm">Jabalpur / Hybrid</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <span className="font-mono text-xs text-accent px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30">
                    2024 · 8 Months
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> PPO Awarded
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    Key Responsibilities
                  </div>
                  <ul className="space-y-3 text-textSecondary text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Architected frontend and backend modules for enterprise web &amp; mobile solutions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Engineered RESTful APIs with PHP and MySQL, handling data persistence and query optimization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Collaborated on Flutter mobile apps with live driver tracking and emergency dispatch pipelines.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    Core Project &amp; Outcomes
                  </div>
                  <ul className="space-y-3 text-textSecondary text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✔</span>
                      <span><strong>Apatkal Platform:</strong> Shipped real-time emergency assistance and ambulance dispatch web/app.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✔</span>
                      <span>Delivered scalable code adhering to industry standards and agile sprints.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✔</span>
                      <span>Earned a Pre-Placement Offer (PPO) based on exceptional technical performance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technologies Pill Row */}
              <div className="pt-6 border-t border-borderColors/50 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-textSecondary mr-2">Technologies Used:</span>
                {["PHP", "MySQL", "Flutter", "JavaScript", "REST APIs", "Git", "Responsive UI", "Agile"].map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs px-3 py-1 rounded-md bg-borderColors/20 border border-borderColors/30 text-textPrimary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>

          {/* =================================================================
              8. LEADERSHIP & COMMUNITY IMPACT
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 06 · Leadership ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Community &amp; Tech Leadership.
              </h2>
              <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                Fostering developer communities, mentoring budding engineers, and orchestrating impactful events at Google Developer Student Clubs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Trophy className="w-6 h-6 text-amber-400" />,
                  title: "Organized Hackathons",
                  desc: "Led end-to-end logistics, problem statement formulation, and judging coordination for college & regional hackathons."
                },
                {
                  icon: <Users className="w-6 h-6 text-cyan-400" />,
                  title: "Managed Developer Teams",
                  desc: "Coordinated cross-functional teams of design, content, and tech leads to deliver consistent community initiatives."
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
                  title: "Mentored Juniors",
                  desc: "Guided 50+ junior engineering students in programming logic, web development roadmaps, and project building."
                },
                {
                  icon: <Laptop className="w-6 h-6 text-rose-400" />,
                  title: "Technical Workshops",
                  desc: "Conducted hands-on sessions on Git, GitHub workflows, web development fundamentals, and modern JavaScript."
                }
              ].map((item, lIdx) => (
                <motion.div
                  key={lIdx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: lIdx * 0.1 }}
                  className="p-7 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-borderColors/20 border border-borderColors/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-textPrimary">{item.title}</h3>
                    <p className="text-sm text-textSecondary leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-borderColors/40 font-mono text-[11px] text-accent">
                    GDSC GGCT Chapter
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              9. HACKATHONS & MAJOR ACHIEVEMENTS
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 07 · Achievements ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Hackathons &amp; Recognition.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart India Hackathon Finalist",
                  tag: "SIH 2024 · National Level",
                  desc: "Selected as a top National Finalist at Smart India Hackathon 2024 out of thousands of teams nationwide for developing VEIP.",
                  icon: "🏆",
                  color: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50"
                },
                {
                  title: "Yukti Innovation Challenge Selection",
                  tag: "Ministry of Education (MoE)",
                  desc: "Recognized for high-impact innovation and practical technology problem-solving in the Yukti National Challenge 2025.",
                  icon: "🚀",
                  color: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50"
                },
                {
                  title: "APF Innovation Challenge Selected",
                  tag: "APF Challenge 2024",
                  desc: "Honored for creating impactful solutions addressing urgent community and social engineering challenges.",
                  icon: "💡",
                  color: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50"
                },
                {
                  title: "15+ Professional Certifications",
                  tag: "Cisco, AWS, Google, SmartBridge",
                  desc: "Earned recognized credentials in Networking, AI/ML, Cloud Architecture, and Software Engineering.",
                  icon: "📜",
                  color: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50"
                },
                {
                  title: "Pre-Placement Offer (PPO)",
                  tag: "Toss Consultancy Services",
                  desc: "Secured a career offer following exemplary performance, code delivery, and leadership during internship.",
                  icon: "💼",
                  color: "border-rose-500/30 bg-rose-500/5 hover:border-rose-500/50"
                },
                {
                  title: "Multiple Real-World Deployed Projects",
                  tag: "Client & Production Systems",
                  desc: "Shipped scalable web apps and mobile solutions handling user bookings, real-time tracking, and AI interactions.",
                  icon: "⚡",
                  color: "border-sky-500/30 bg-sky-500/5 hover:border-sky-500/50"
                }
              ].map((achieve, aIdx) => (
                <motion.div
                  key={aIdx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: aIdx * 0.1 }}
                  className={`p-8 rounded-3xl border ${achieve.color} backdrop-blur-md transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    <div className="text-3xl">{achieve.icon}</div>
                    <div>
                      <div className="font-mono text-xs text-accent uppercase tracking-wider mb-1">{achieve.tag}</div>
                      <h3 className="font-display text-xl font-bold text-textPrimary">{achieve.title}</h3>
                    </div>
                    <p className="text-sm text-textSecondary leading-relaxed">{achieve.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-borderColors/30 flex items-center justify-between text-xs font-mono text-textSecondary">
                    <span>Verified Milestone</span>
                    <CheckCircle2 size={14} className="text-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              10. FEATURED PROJECTS SNAPSHOT
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 08 · Featured Work ]</div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                  Featured Projects Snapshot.
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((proj, pIdx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: pIdx * 0.12 }}
                  className="p-8 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg"
                >
                  <div className="space-y-5">
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-mono text-[11px] px-3 py-1 rounded-full border ${proj.badgeColor}`}>
                        {proj.badge}
                      </span>
                      <span className="font-mono text-[10px] text-textSecondary">
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-textSecondary leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-borderColors/20 text-textSecondary border border-borderColors/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-borderColors/40 flex items-center justify-between">
                    <Link
                      to={proj.link}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-accent hover:underline"
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </Link>

                    {proj.externalLink && (
                      <a
                        href={proj.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-borderColors/50 hover:bg-accent/10 hover:border-accent/40 text-textSecondary hover:text-accent transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              11. TECHNOLOGIES I LOVE (INFINITE MARQUEE)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="font-mono text-xs text-accent mb-2 uppercase tracking-widest">[ Core Toolbox ]</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary">Technologies I Work With &amp; Love.</h2>
            </motion.div>

            {/* Seamless Double Marquee Track */}
            <div className="relative overflow-hidden py-4 mask-radial">
              <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-4 w-max"
              >
                {[...marqueeTechs, ...marqueeTechs].map((tech, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-borderColors/70 bg-secondary/50 backdrop-blur-md shadow-sm select-none hover:border-accent/50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className={`font-mono text-sm font-semibold ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* =================================================================
              12. DEVELOPMENT WORKFLOW (HORIZONTAL PIPELINE & INTERACTIVE DETAIL)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 09 · Engineering Process ]</div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                  Development &amp; Deployment Workflow.
                </h2>
                <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                  A disciplined, systematic 6-phase engineering lifecycle for conceptualizing, architecting, building, and deploying resilient digital products.
                </p>
              </div>

              <div className="font-mono text-xs text-textSecondary bg-secondary/40 px-4 py-2 rounded-full border border-borderColors shrink-0">
                Click any phase to inspect deliverables
              </div>
            </motion.div>

            {/* 6-Phase Pipeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              {developmentWorkflow.map((step, sIdx) => {
                const isSelected = activeWorkflowStep === sIdx;
                return (
                  <motion.button
                    key={sIdx}
                    type="button"
                    onClick={() => setActiveWorkflowStep(sIdx)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sIdx * 0.08 }}
                    className={`p-6 rounded-3xl border text-left flex flex-col justify-between transition-all duration-300 relative cursor-pointer ${
                      isSelected
                        ? "border-accent bg-secondary/80 shadow-xl shadow-accent/15 ring-1 ring-accent"
                        : "border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 hover:bg-secondary/50"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                          isSelected
                            ? "bg-accent text-white border-accent"
                            : "bg-accent/10 text-accent border-accent/30"
                        }`}>
                          {step.step}
                        </span>
                        <div className={`p-2 rounded-xl transition-transform ${isSelected ? "scale-110 bg-accent/20" : "bg-borderColors/20"}`}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className={`font-display text-base font-bold transition-colors ${isSelected ? "text-accent" : "text-textPrimary"}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-textSecondary leading-relaxed line-clamp-2">{step.tagline}</p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-borderColors/30 flex items-center justify-between text-[11px] font-mono text-accent">
                      <span>{isSelected ? "Active Focus" : "Inspect Phase"}</span>
                      <ArrowRight size={13} className={`transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Interactive Active Step Spotlight Panel */}
            <motion.div
              key={activeWorkflowStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl border border-accent/40 bg-secondary/40 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              {/* Background Accent Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-accent text-white">
                      Phase {developmentWorkflow[activeWorkflowStep].step} of 06
                    </span>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">
                      {developmentWorkflow[activeWorkflowStep].tagline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary">
                    {developmentWorkflow[activeWorkflowStep].title}
                  </h3>

                  <p className="text-base text-textSecondary leading-relaxed">
                    {developmentWorkflow[activeWorkflowStep].desc}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-borderColors/60 lg:pl-8">
                  <div>
                    <span className="font-mono text-xs text-textSecondary uppercase tracking-wider block mb-2">
                      Key Deliverables &amp; Artifacts
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {developmentWorkflow[activeWorkflowStep].deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono text-xs px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-medium flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={12} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-textSecondary uppercase tracking-wider block mb-2">
                      Core Tooling &amp; Stack
                    </span>
                    <span className="font-mono text-xs px-3 py-1.5 rounded-xl bg-borderColors/30 border border-borderColors/50 text-textPrimary inline-block">
                      {developmentWorkflow[activeWorkflowStep].tools}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      disabled={activeWorkflowStep === 0}
                      onClick={() => setActiveWorkflowStep((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl text-xs font-mono border border-borderColors bg-secondary/50 text-textSecondary hover:text-textPrimary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous Phase
                    </button>
                    <button
                      type="button"
                      disabled={activeWorkflowStep === developmentWorkflow.length - 1}
                      onClick={() => setActiveWorkflowStep((prev) => Math.min(developmentWorkflow.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl text-xs font-mono border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold"
                    >
                      Next Phase →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* =================================================================
              13. ACADEMIC BACKGROUND & QUALIFICATIONS
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 10 · Academic Foundation ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Education &amp; Qualifications.
              </h2>
              <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                Rigorous computer science curriculum, core computing fundamentals, and continuous academic achievement.
              </p>
            </motion.div>

            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 sm:p-10 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 transition-all duration-300 relative overflow-hidden group shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-xs text-accent uppercase tracking-wider px-3 py-1 border border-accent/30 rounded-full bg-accent/5 font-semibold">
                          {edu.degree}
                        </span>
                        <span className="font-mono text-xs text-textSecondary bg-borderColors/30 px-3 py-1 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary pt-2">
                        {edu.field}
                      </h3>
                      <div className="text-base text-textPrimary font-medium flex items-center gap-2 flex-wrap">
                        <span>{edu.institution}</span>
                        <span className="text-borderColors">•</span>
                        <span className="text-textSecondary text-sm flex items-center gap-1">
                          <MapPin size={14} className="text-accent" /> {edu.location}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-textSecondary">
                        Affiliation / Board: <span className="text-textPrimary font-medium">{edu.university}</span>
                      </div>
                    </div>

                    <div className="flex lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-borderColors">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-accent">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="px-5 py-2.5 rounded-2xl bg-accent/10 border border-accent/30 text-right">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-textSecondary block">{edu.scoreType}</span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-accent">{edu.score}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-borderColors/60 space-y-3">
                    <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">Key Highlights &amp; Coursework</div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-sm sm:text-base text-textSecondary flex items-start gap-3">
                          <span className="text-accent mt-1">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  {edu.tags && (
                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-borderColors/40">
                      {edu.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[11px] text-textSecondary bg-borderColors/20 px-3 py-1 rounded-md border border-borderColors/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              14. CERTIFICATIONS PREVIEW (TOP 6 + GATEWAY LINK)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 11 · Verified Credentials ]</div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                  Top Certifications &amp; Badges.
                </h2>
                <p className="mt-4 text-textSecondary text-lg max-w-2xl">
                  A preview of industry credentials from Cisco, AWS Academy, Google for Developers, SmartBridge, and Accenture.
                </p>
              </div>
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-accent bg-accent/10 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 shrink-0"
              >
                <span>View All 15+ Certifications</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCertifications.map((cert, cIdx) => (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                  className="p-7 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 hover:bg-secondary/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[11px] px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                        {cert.badge}
                      </span>
                      <span className="font-mono text-xs text-textSecondary">{cert.date}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-textSecondary font-mono">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-borderColors/20 text-textSecondary border border-borderColors/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-borderColors/40 flex items-center justify-between text-xs font-mono text-accent">
                    <span>Verified Credential</span>
                    <CheckCircle2 size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              15. BEYOND CODING (LIFESTYLE & PASSIONS)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="font-mono text-xs text-accent mb-3 uppercase tracking-widest">[ 12 · Beyond Code ]</div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-textPrimary tracking-tight">
                Interests, Passions &amp; Flow.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {beyondCodingItems.map((item, bIdx) => (
                <motion.div
                  key={bIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: bIdx * 0.08 }}
                  className="p-7 rounded-3xl border border-borderColors bg-secondary/30 backdrop-blur-md hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-borderColors/20 border border-borderColors/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-textPrimary">{item.title}</h3>
                    <p className="text-sm text-textSecondary leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-borderColors/30 flex items-center gap-2 font-mono text-xs text-accent">
                    <span>Passion 0{bIdx + 1}</span>
                    <Sparkles size={12} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              16. FUN FACTS (MODERN MICRO CARDS)
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="font-mono text-xs text-accent mb-2 uppercase tracking-widest">[ Quick Insights ]</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-textPrimary">A Few Quick Facts.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {funFacts.map((fact, fIdx) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: fIdx * 0.08 }}
                  className="p-6 rounded-2xl border border-borderColors/70 bg-secondary/30 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 hover:bg-secondary/50 transition-all"
                >
                  <div className="text-2xl mb-3">{fact.emoji}</div>
                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* =================================================================
              17. CURRENT FOCUS & LEARNING HORIZONS
             ================================================================= */}
          <section className="mb-36">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-12 rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-secondary/40 to-cyan-500/10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-mono uppercase tracking-wider font-semibold">
                    <Flame size={14} /> Active Horizon
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-textPrimary">
                    What I'm Currently Learning &amp; Mastering.
                  </h2>
                  <p className="text-textSecondary text-base leading-relaxed">
                    Engineering does not stand still. Here are the specialized domains and modern paradigms I am actively pushing deeper into every day:
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "AI Engineering & Agentic Workflows",
                    "Salesforce Development & Agentforce",
                    "Full Stack Scalable Architecture",
                    "System Design & Microservices",
                    "Cloud-Native Tech & Serverless"
                  ].map((focus, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-2xl border border-borderColors/80 bg-secondary/80 backdrop-blur-md flex items-center gap-3 hover:border-accent transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-xs font-mono font-medium text-textPrimary">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* =================================================================
              18. HIGH-CONVERSION RECRUITER CALL TO ACTION (CTA)
             ================================================================= */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 sm:p-16 rounded-3xl border border-borderColors bg-secondary/40 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl group"
            >
              {/* Glowing Background Accent Orb */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan-500/10 to-purple-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <div className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                  [ Let's Connect ]
                </div>
                
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary tracking-tight">
                  Interested in Collaborating or Hiring?
                </h2>
                
                <p className="text-lg sm:text-xl text-textSecondary leading-relaxed">
                  Let's build something impactful, scalable, and extraordinary together. I am open to full-time software engineering roles, impactful internships, and high-velocity projects.
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-accent text-white font-semibold text-base hover:bg-accent/90 shadow-xl shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 group"
                  >
                    <span>Hire Me / Get in Touch</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="/resume.pdf"
                    download="Siddharth_Singh_Resume.pdf"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-borderColors bg-secondary/80 text-textPrimary font-semibold text-base hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 group"
                  >
                    <Download size={18} className="text-accent group-hover:translate-y-0.5 transition-transform" />
                    <span>Download Resume</span>
                  </a>

                  <a
                    href="mailto:siddharthsingh0259@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-borderColors/60 text-textSecondary hover:text-textPrimary font-mono text-xs uppercase tracking-wider transition-colors"
                  >
                    <Mail size={16} className="text-accent" />
                    <span>siddharthsingh0259@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
