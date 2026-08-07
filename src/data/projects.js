import travelmateImg from '../assets/projects/travelmate.png';
import apatkalImg from '../assets/projects/apatkal.png';
import veipImg from '../assets/projects/veip.png';

export const projects = [
  {
    id: "travelmate-kochi",
    title: "TravelMate Kochi",
    tagline: "Comprehensive Tourism & Destination Booking Platform",
    category: "Client Project",
    filterCategories: ["all", "web", "client"],
    badge: "Client Project",
    status: "Live & Operational",
    statusType: "live",
    featured: true,
    urlDisplay: "travelmatekochi.in",
    liveLink: "https://travelmatekochi.in",
    githubLink: null,
    image: travelmateImg,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#f59e0b",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-500",
    duration: "2024",
    timeline: "2 Months Development",
    role: "Full Stack Developer",
    teamSize: "Solo Project (Client)",
    platform: "Web Application (Full Stack)",
    metrics: {
      packages: "50+ Tour Packages",
      inquiries: "Instant Booking Flow",
      uptime: "99.9% Production Uptime",
      speed: "Fast Response Time"
    },
    shortDescription: "A high-performance travel and tourism management platform built for exploring curated Kerala destinations, customized tour packages, and direct customer booking enquiries.",
    problemSolved: "Streamlined fragmented offline travel bookings into an automated digital enquiry pipeline with real-time package browsing and zero commission friction.",
    detailedDescription: "TravelMate Kochi is a full-stack tourism web application developed as a client project for a Kochi-based travel consultancy. The platform allows tourists to seamlessly explore Kerala's scenic destinations, discover curated tour packages with transparent pricing, and submit customized travel enquiries with instant administrative notification.",
    highlightsChecklist: [
      "Responsive Multi-Device UI with fluid navigation",
      "Instant Customer Booking & Enquiry Pipeline",
      "Dynamic Destination & Itinerary Showcase",
      "Admin-Controlled Package & Enquiry Management",
      "Optimized MySQL Relational Database Schema"
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    keyFeatures: [
      "Interactive Destination Showcase with rich photography and itinerary details",
      "Automated Package Enquiry Engine with input validation and instant admin alert",
      "Admin Dashboard for real-time package creation, editing, and customer follow-up",
      "Fully responsive design optimized for mobile travelers and desktop planning",
      "Fast page load times with server-rendered PHP templates and asset compression",
      "SEO-optimized structured metadata for higher local tourism search visibility"
    ],
    responsibilities: [
      "Engineered end-to-end frontend interfaces and PHP backend controllers",
      "Designed and normalized relational MySQL database schemas for tour inventory",
      "Built custom enquiry tracking system with spam filtering and validation",
      "Ensured pixel-perfect responsive layouts across tablet, mobile, and desktop browsers",
      "Configured production hosting, domain DNS, SSL certificates, and performance caching"
    ],
    caseStudy: {
      challenge: "The client operated a local travel boutique in Kochi relying heavily on manual phone calls, WhatsApp messages, and fragmented spreadsheets to manage tour packages and traveler enquiries. This caused frequent inquiry drops, delays in quoting customized itineraries, and zero online discoverability for international tourists visiting Kerala.",
      approach: "Built a dedicated, lightning-fast PHP/MySQL platform with structured tour categories (Backwaters, Hill Stations, Cultural Tours, Custom Expeditions). Integrated an intuitive multi-step inquiry form that captures travel dates, party size, and special preferences, feeding directly into a secure administrative operations portal.",
      architecture: "Modular MVC-inspired PHP architecture separating routing, template views, and database operations. Implemented a centralized database wrapper with PDO prepared statements to protect against SQL injections, paired with responsive CSS grid and flexbox layouts.",
      engineeringHighlights: [
        "Eliminated manual inquiry logging by creating an automated database queue with instant email notifications.",
        "Optimized image delivery and database queries to achieve under 1.2s average load times on 4G mobile connections.",
        "Structured modular admin components allowing non-technical client staff to create new packages in under 2 minutes."
      ],
      lessonsLearned: "Gained valuable real-world experience translating ambiguous business requirements into intuitive UI flows, balancing client cost constraints with robust production reliability.",
      results: "100% digital transition of client bookings, over 50+ packages live, and zero platform downtime since launch."
    }
  },
  {
    id: "apatkal",
    title: "Apatkal Emergency Response Platform",
    tagline: "Mission-Critical Ambulance Dispatch & GPS Tracking Ecosystem",
    category: "Internship Project",
    filterCategories: ["all", "web", "mobile", "internship"],
    badge: "Internship Project",
    status: "Production System",
    statusType: "production",
    featured: true,
    urlDisplay: "apatkal.in",
    liveLink: "https://apatkal.in",
    githubLink: null,
    image: apatkalImg,
    gradient: "from-rose-500/20 via-red-500/10 to-transparent",
    accentColor: "#f43f5e",
    badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-500",
    duration: "2023 - 2024",
    timeline: "8 Months Internship",
    role: "Full Stack Developer",
    teamSize: "Engineering Team (Toss Consultancy)",
    platform: "Web & Mobile Ecosystem (Flutter + PHP)",
    metrics: {
      dispatch: "Real-time Dispatch",
      tracking: "Live GPS Navigation",
      crossPlatform: "Android & Web",
      reliability: "High-Availability"
    },
    shortDescription: "An emergency medical dispatch ecosystem combining a real-time web operations dashboard with a Flutter mobile app for instant ambulance booking and live GPS navigation.",
    problemSolved: "Drastically cut emergency response coordination delays by connecting patients, drivers, and dispatchers through live geospatial tracking and automated alerts.",
    detailedDescription: "Apatkal is a mission-critical emergency response platform engineered during my 8-month software engineering internship at Toss Consultancy Services. The platform bridges emergency callers, nearest available ambulance drivers, and medical dispatchers through synchronized mobile and web applications, featuring real-time location tracking and family emergency notifications.",
    highlightsChecklist: [
      "Cross-Platform Flutter Mobile Application for Ambulance Drivers",
      "Real-time Geospatial Location Tracking & Route Navigation",
      "Instant Emergency Dispatch & Operations Dashboard",
      "Automated SMS & Emergency Family Alert Triggering",
      "Secure RESTful API Architecture with PHP & MySQL"
    ],
    techStack: ["PHP", "MySQL", "Flutter", "Dart", "REST API", "Google Maps API"],
    keyFeatures: [
      "Instant 1-Tap Emergency Ambulance Booking with automated geolocation capture",
      "Driver-side mobile app with turn-by-turn navigation and status updates (En Route, Picked Up, Arrived)",
      "Real-time dispatcher operations dashboard monitoring active fleet coordinates",
      "Automated emergency contact notifications with live vehicle tracking links",
      "Hospital coordination interface for inbound patient arrival preparation",
      "Robust offline-resilient state handling for intermittent cellular network environments"
    ],
    responsibilities: [
      "Architected and deployed backend REST APIs in PHP handling authentication and geospatial telemetry",
      "Collaborated on Flutter mobile application UI components and state management",
      "Integrated Google Maps SDK for distance matrix calculations and live vehicle coordinate rendering",
      "Optimized MySQL spatial indexing to swiftly compute the nearest available ambulance within radius",
      "Conducted extensive field testing under fluctuating network conditions to guarantee reliability"
    ],
    caseStudy: {
      challenge: "During medical emergencies, minutes make the difference between life and death. Traditional emergency dispatching relies on verbal phone directions, leading to miscommunication, incorrect location routing, and lack of visibility for frantic family members waiting for an ambulance.",
      approach: "Engineered a dual-sided architecture: a lightweight Flutter driver app continuously broadcasting GPS coordinates, coupled with a dispatcher web dashboard and a zero-friction mobile-web interface for callers that instantly captures GPS coordinates without requiring heavy app downloads.",
      architecture: "RESTful API backend in PHP running atop MySQL database with spatial indexes. The Flutter mobile app uses geolocation background streams, communicating state changes (Accept, En Route, On-Scene, Hospital Inbound) through authenticated API tokens.",
      engineeringHighlights: [
        "Implemented high-frequency coordinate polling with throttling algorithms to conserve driver battery while maintaining sub-3s location precision.",
        "Engineered failover mechanisms that fallback to cellular SMS coordinates if mobile data connectivity is lost in rural transit zones.",
        "Streamlined dispatch response time by 40% compared to traditional voice-only dispatching."
      ],
      lessonsLearned: "Mastered the rigor required for production-grade, life-critical systems where graceful error handling, network reconnectivity, and low latency are non-negotiable.",
      results: "Successfully tested and deployed across regional transit hubs under Toss Consultancy Services supervision."
    }
  },
  {
    id: "veip",
    title: "Vocational Education Platform (VEIP)",
    tagline: "NEP 2020-Aligned LMS & Industry Mentorship Portal",
    category: "Hackathon Project",
    filterCategories: ["all", "web", "hackathon"],
    badge: "Hackathon Finalist",
    status: "National Finalist",
    statusType: "finalist",
    featured: true,
    urlDisplay: "vission-landing-page.vercel.app",
    liveLink: "https://vission-landing-page.vercel.app",
    githubLink: null,
    image: veipImg,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#3b82f6",
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-500",
    duration: "2024",
    timeline: "Smart India Hackathon 2024",
    role: "Frontend & Platform Lead",
    teamSize: "6 Members (Team Finalist)",
    platform: "Modern Web Platform (React + Figma)",
    metrics: {
      recognition: "SIH 2024 Finalist",
      compliance: "NEP 2020 Aligned",
      modules: "Interactive LMS + Badging",
      mentorship: "Peer & Expert Sessions"
    },
    shortDescription: "A national hackathon finalist platform bridging the gap between formal education and vocational employability through modular skill learning, mentorship matching, and digital credentialing.",
    problemSolved: "Democratized access to certified vocational skills for tier-2/tier-3 students through gamified learning paths aligned with India's National Education Policy (NEP 2020).",
    detailedDescription: "The Vocational Education Integration Platform (VEIP) was engineered for the Smart India Hackathon (SIH) 2024 national grand finale. Designed to align with the visionary National Education Policy (NEP 2020), VEIP provides vocational skill pathways, mentor-student collaboration rooms, interactive progress assessments, and blockchain-verifiable digital skill badges.",
    highlightsChecklist: [
      "Interactive Course Player with Modular Vocational Tracks",
      "1-on-1 Mentor-Student Collaboration & Scheduling Hub",
      "Digital Skill Credentialing & Verified Achievement Badges",
      "Gamified Skill Tree Aligned with NEP 2020 Curriculum",
      "Accessible High-Contrast UI Designed in Figma & Built in React"
    ],
    techStack: ["React", "JavaScript", "Figma", "HTML5", "CSS3", "Tailwind CSS"],
    keyFeatures: [
      "Structured vocational curriculums ranging from digital mechanics to IT fundamentals",
      "Interactive mentorship portal enabling students to book guidance sessions with industry professionals",
      "Skill competency assessment engine with instant micro-credential certification",
      "Personalized learning dashboard tracking progress milestones and career recommendations",
      "Intuitive Figma-crafted design system maintaining accessible typography and high usability",
      "Lightweight progressive web architecture built for low-bandwidth environments"
    ],
    responsibilities: [
      "Led UI/UX design architecture in Figma, creating complete user flows and component wireframes",
      "Engineered core React components for course catalog, lesson player, and mentor booking",
      "Implemented responsive CSS layouts with smooth Framer Motion micro-interactions",
      "Presented live pitch and architecture walkthrough to the Ministry evaluators at SIH 2024",
      "Coordinated cross-functional team workflows between frontend, backend, and documentation"
    ],
    caseStudy: {
      challenge: "India's NEP 2020 mandates integrating vocational education into mainstream schooling, yet schools across non-metro regions lack access to skilled vocational trainers, structured digital modules, and verified industry credentialing systems.",
      approach: "Designed and developed an intuitive, mobile-first web ecosystem where students can learn self-paced vocational modules, connect directly with verified industry mentors, and earn shareable digital skill badges that prove employability competencies.",
      architecture: "Modern React component architecture structured around reusable design tokens. State managed via React Context and custom hooks for module progression tracking, styled with Tailwind CSS utility classes and fluid viewport scaling.",
      engineeringHighlights: [
        "Built dynamic skill progression tree that calculates mastery percentages across diverse vocational domains.",
        "Optimized bundle size and asset loading to ensure fast performance on low-end budget smartphones.",
        "Designed comprehensive UX system recognized by judges for outstanding clarity and accessibility."
      ],
      lessonsLearned: "Gained immense expertise in rapid hackathon prototyping under intense 36-hour deadlines, collaborative git workflows, and public product pitching to government evaluators.",
      results: "Ranked among top finalist teams nationally at Smart India Hackathon 2024 Grand Finale."
    }
  },
  {
    id: "chronic-pulse",
    title: "AI Chronic Disease Management",
    tagline: "Telehealth Intelligence Platform with Gemini AI Health Insights",
    category: "AI & Telehealth",
    filterCategories: ["all", "web", "ai"],
    badge: "AI Project",
    status: "Yukti 2025 Nominee",
    statusType: "live",
    featured: false,
    urlDisplay: "chronicpulse.wuaze.com",
    liveLink: "https://chronicpulse.wuaze.com/public",
    githubLink: null,
    image: null,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "#a855f7",
    badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-500",
    duration: "2024 - 2025",
    timeline: "Yukti Innovation Challenge 2025",
    role: "AI & Full Stack Engineer",
    teamSize: "Lead Developer",
    platform: "Web Telehealth Platform (AI Powered)",
    metrics: {
      innovation: "Yukti 2025 Nominee",
      aiEngine: "Gemini API Health Analysis",
      metricsTracking: "Daily Vitals & Logs",
      telehealth: "Virtual Consultations"
    },
    shortDescription: "An intelligent chronic illness management system empowering patients to log daily vitals while leveraging Gemini AI to generate proactive health insights and risk alerts.",
    problemSolved: "Replaces reactive medical visits with continuous daily vitals tracking and automated AI early-warning detection for hypertension and diabetes patients.",
    detailedDescription: "Presented at the Yukti Innovation Challenge 2025, ChronicPulse is an AI-enhanced telehealth portal designed for individuals managing long-term chronic conditions like diabetes and hypertension. Users log daily biomarkers (blood sugar, BP, weight, symptoms), and the platform utilizes Google's Gemini API to analyze trends, generate dietary recommendations, and alert care teams to alarming anomalies.",
    highlightsChecklist: [
      "Automated Biomarker Trend Analysis via Google Gemini API",
      "Daily Vitals Logging for Blood Pressure, Glucose, & Medication",
      "Interactive Patient Health History Visualization Charts",
      "Doctor-Patient Virtual Consultation & Messaging Portal",
      "Automated Threshold-Based Early Warning Alert Engine"
    ],
    techStack: ["PHP", "MySQL", "Gemini API", "JavaScript", "Chart.js", "CSS3"],
    keyFeatures: [
      "Personalized daily vitals telemetry logging with automated validation",
      "Gemini AI prompt engineering delivering actionable health summaries and lifestyle guidance",
      "Historical data charts showing glucose and blood pressure variations over 30/90 days",
      "Doctor portal for reviewing aggregated patient risk scores and scheduled consultations",
      "Emergency threshold triggers that notify caregivers when vitals exceed safe ranges",
      "Secure patient credential management and privacy-compliant data storage"
    ],
    responsibilities: [
      "Engineered backend application in PHP integrating Google Gemini REST API endpoints",
      "Designed prompt architectures that safely summarize health trends without hallucination",
      "Built dynamic frontend analytics charts using Chart.js and vanilla JavaScript",
      "Implemented relational database tables storing longitudinal health records securely",
      "Authored product presentation and technical dossier for Yukti Innovation Challenge 2025"
    ],
    caseStudy: {
      challenge: "Chronic disease patients frequently struggle to understand fluctuations in their daily readings between quarterly doctor visits, leading to unaddressed symptom escalation and preventable emergency hospitalizations.",
      approach: "Created a proactive digital companion that interprets user-submitted vitals in real-time, utilizing Gemini AI to translate complex numerical trends into plain-language advice, dietary warnings, and medication adherence reminders.",
      architecture: "PHP backend interfacing with a normalized MySQL database for secure health logs. Server-side API handlers securely query Gemini API using structured JSON schema prompts to extract clinical anomalies and generate contextual summaries.",
      engineeringHighlights: [
        "Developed strict prompt guards and safety boundaries ensuring AI outputs emphasize consultation with certified medical professionals.",
        "Built responsive interactive Chart.js visualizations allowing physicians to quickly grasp 90-day trajectory data in seconds.",
        "Achieved sub-1.5s AI analysis turnaround time using optimized payload caching."
      ],
      lessonsLearned: "Gained profound understanding of generative AI prompt engineering, API rate limiting, healthcare UX ethics, and longitudinal data modeling.",
      results: "Recognized as an official project entry for Yukti Innovation Challenge 2025 with strong reviews for AI healthcare integration."
    }
  },
  {
    id: "terminal-portfolio",
    title: "Terminal Portfolio",
    tagline: "Interactive UNIX-Style Command-Line Portfolio",
    category: "Personal Project",
    filterCategories: ["all", "web", "personal"],
    badge: "Personal Project",
    status: "Live & Open Source",
    statusType: "live",
    featured: false,
    urlDisplay: "terminal-port-eight.vercel.app",
    liveLink: "https://terminal-port-eight.vercel.app/",
    githubLink: "https://github.com/sidhu212/terminal-port",
    image: null,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10b981",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500",
    duration: "2024",
    timeline: "Personal Exploration",
    role: "Frontend Developer",
    teamSize: "Solo Developer",
    platform: "Interactive Web CLI (React)",
    metrics: {
      commands: "12+ Interactive Commands",
      themes: "Multi-Theme Engine (Matrix, Monokai, Retro)",
      features: "Neofetch & Live Resume Download",
      license: "Open Source MIT"
    },
    shortDescription: "An interactive UNIX terminal simulator built with React that allows developers and recruiters to explore my work, bio, and resume via custom command-line execution.",
    problemSolved: "Replaces traditional static resume pages with an immersive, memorable command-line developer experience complete with autocomplete, history navigation, and retro themes.",
    detailedDescription: "Terminal Portfolio is a creative web experience designed for developers and terminal enthusiasts. It emulates a authentic UNIX terminal shell within the browser, supporting command parsing, tab autocomplete, bash command history (Up/Down arrows), custom neofetch system info, theme customization, and direct resume downloads.",
    highlightsChecklist: [
      "Custom Command Parser with Tab-Completion & History Buffer",
      "Interactive `neofetch`, `theme`, `projects`, and `contact` commands",
      "Instant 1-Click Resume Download directly from CLI",
      "Dynamic Shell Theme Engine (Dark, Matrix Green, Retro Amber)",
      "Mobile-Friendly On-Screen Virtual Input Support"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "Framer Motion"],
    keyFeatures: [
      "Authentic terminal emulator with blinking cursor, custom prompts, and ANSI color styling",
      "Command execution engine supporting `about`, `projects`, `skills`, `experience`, `theme`, `neofetch`, `clear`, and `help`",
      "Keyboard shortcut navigation including Up/Down history recall and Tab autocomplete",
      "Theme switching mechanism supporting Matrix Green, Dark Obsidian, and Retro Amber colorways",
      "Executable `download` command triggering instant PDF resume transfer",
      "Fully responsive layout adapting to mobile screen keyboards and orientations"
    ],
    responsibilities: [
      "Engineered the custom string tokenizer and command dispatcher in React",
      "Implemented keyboard event listeners managing caret positions, tab completion, and input history arrays",
      "Created retro terminal aesthetic with CSS scanlines and glowing monospace typography",
      "Open-sourced repository with comprehensive documentation and MIT license on GitHub"
    ],
    caseStudy: {
      challenge: "Standard developer portfolios often look identical and fail to leave a lasting impression on technical recruiters and hiring managers who live inside the terminal every day.",
      approach: "Built a fully functional, lightweight UNIX-style shell simulator in React that gamifies portfolio exploration while retaining instant accessibility for non-technical visitors through suggested commands.",
      architecture: "State-driven React architecture maintaining command history stack, active input buffer, and scroll anchors. Custom reducer manages shell state and triggers output component rendering dynamically.",
      engineeringHighlights: [
        "Implemented authentic bash keybinding handling (Ctrl+L to clear, Tab to autocomplete matching commands).",
        "Built responsive virtual quick-command buttons for seamless mobile smartphone interaction without requiring a physical keyboard.",
        "Zero external heavy terminal dependencies—pure lightweight React and CSS."
      ],
      lessonsLearned: "Deepened expertise in low-level browser keyboard event handling, string parsing algorithms, and creative developer experience (DX) design.",
      results: "100+ GitHub stars and widespread positive feedback across developer communities on LinkedIn and X."
    }
  },
  {
    id: "jarvis-voice-assistant",
    title: "JARVIS Voice Assistant",
    tagline: "Multimodal Voice-Activated AI Web Assistant",
    category: "AI & Machine Learning",
    filterCategories: ["all", "web", "ai", "personal"],
    badge: "AI Project",
    status: "Completed & Open Source",
    statusType: "live",
    featured: false,
    urlDisplay: "github.com/sidhu212/virtual-assistant",
    liveLink: "https://sidhu212.github.io/virtual-assistant/",
    githubLink: "https://github.com/sidhu212/virtual-assistant",
    image: null,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-500",
    duration: "2024",
    timeline: "AI Exploration",
    role: "Full Stack Developer",
    teamSize: "Solo Developer",
    platform: "Web Application (Speech & AI)",
    metrics: {
      speechEngine: "Web Speech Recognition API",
      aiModel: "Gemini API Integration",
      synthesis: "Real-time Text-to-Speech",
      latency: "Low-Latency Response"
    },
    shortDescription: "A browser-based AI voice assistant powered by Web Speech Recognition and Google Gemini AI, capable of real-time natural speech interpretation and dynamic audio responses.",
    problemSolved: "Enables hands-free web exploration, voice command execution, and conversational AI interactions directly in the browser with zero native desktop app installations.",
    detailedDescription: "JARVIS Voice Assistant is an interactive AI virtual assistant built using modern JavaScript, the Web Speech Recognition and Synthesis APIs, and Google's Gemini API. The assistant continuously listens for voice triggers, interprets conversational intent, fetches AI-generated answers, and speaks them back with animated futuristic audio visualization.",
    highlightsChecklist: [
      "Continuous Voice Command Recognition with Web Speech API",
      "Google Gemini API Integration for Conversational Intelligence",
      "Real-time Text-to-Speech (TTS) Voice Synthesis Audio Output",
      "Dynamic Futuristic Audio Waveform Visualizer",
      "Automated Web Navigation & Query Execution Commands"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Gemini API", "Web Speech API"],
    keyFeatures: [
      "Real-time speech-to-text processing converting voice input into structured text commands",
      "Gemini AI reasoning engine delivering concise, witty, and informative spoken responses",
      "Speech synthesis engine with customizable voice pitch, volume, and accent modulation",
      "Built-in intent routing for common voice shortcuts (weather, time, web search, jokes, Wikipedia)",
      "Futuristic HUD visual interface featuring pulsing reactive audio visualizer waves",
      "Fallback manual text input prompt for noise-sensitive environments"
    ],
    responsibilities: [
      "Integrated browser SpeechRecognition and SpeechSynthesis lifecycle events",
      "Constructed asynchronous REST connection to Gemini API with conversational context",
      "Designed futuristic cyberpunk-inspired neon UI with CSS glow filters and audio animations",
      "Deployed static application to GitHub Pages with public repository and setup guide"
    ],
    caseStudy: {
      challenge: "Most voice assistant experiments require hefty Python desktop installations or complex server runtimes, making them difficult for casual users to test and interact with directly in the browser.",
      approach: "Constructed a 100% client-side web application harnessing modern HTML5 Web Speech APIs combined with Gemini's high-speed generative API, delivering instant voice interactions without any backend server overhead.",
      architecture: "Event-driven JavaScript pipeline: Microphone Audio -> Web Speech Recognition -> Intent Classifier -> Gemini API -> Speech Synthesis Engine -> Canvas Audio Waveform Renderer.",
      engineeringHighlights: [
        "Handled microphone permission edge cases, ambient noise dropouts, and browser recognition timeouts gracefully with auto-reconnection.",
        "Engineered response summarizer to format Gemini's responses into natural, speakable dialogue rather than dense blocks of text.",
        "Constructed fluid 60fps CSS audio particle pulse animation reactive to speech states."
      ],
      lessonsLearned: "Mastered browser audio stream manipulation, asynchronous speech lifecycle state machines, and real-time generative AI integration.",
      results: "Hosted live on GitHub Pages with hundreds of unique test interactions."
    }
  }
];

export const techPillStyles = {
  "React": { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", dot: "bg-cyan-400" },
  "React.js": { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", dot: "bg-cyan-400" },
  "JavaScript": { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-400" },
  "PHP": { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-500", dot: "bg-indigo-400" },
  "MySQL": { bg: "bg-sky-500/10", border: "border-sky-500/30", text: "text-sky-500", dot: "bg-sky-400" },
  "Flutter": { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", dot: "bg-cyan-400" },
  "Dart": { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500", dot: "bg-blue-400" },
  "Gemini API": { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-500", dot: "bg-purple-400" },
  "HTML5": { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-500", dot: "bg-orange-400" },
  "HTML": { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-500", dot: "bg-orange-400" },
  "CSS3": { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500", dot: "bg-blue-400" },
  "CSS": { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-500", dot: "bg-blue-400" },
  "Tailwind CSS": { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-500", dot: "bg-teal-400" },
  "Bootstrap": { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-500", dot: "bg-purple-400" },
  "Figma": { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-500", dot: "bg-pink-400" },
  "REST API": { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-500", dot: "bg-emerald-400" },
  "Google Maps API": { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-500", dot: "bg-rose-400" },
  "Vite": { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-500", dot: "bg-amber-400" },
  "Framer Motion": { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-500", dot: "bg-violet-400" },
  "Chart.js": { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-500", dot: "bg-orange-400" },
  "Web Speech API": { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-500", dot: "bg-cyan-400" },
  "WordPress": { bg: "bg-sky-500/10", border: "border-sky-500/30", text: "text-sky-500", dot: "bg-sky-400" },
  "Node.js": { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-500", dot: "bg-emerald-400" },
  "Firebase": { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-500", dot: "bg-amber-400" }
};
