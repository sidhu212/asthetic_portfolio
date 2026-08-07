import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function Particles() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate ~40 subtle particles
    const arr = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 100 + 50,
      delay: Math.random() * -100
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: 'var(--particle-color)',
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`
          }}
          animate={{
            y: [0, -1000], 
            x: [0, Math.sin(p.id) * 300]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = '';
    
    const timer = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      window.__lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        window.__lenis = null;
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-primary bg-grid text-textPrimary selection:bg-accent selection:text-white min-h-screen transition-colors duration-300">
        <Particles />

        <AnimatePresence mode="wait">
          {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
        </AnimatePresence>
        
        <CustomCursor />
        <div className={`${loading ? 'opacity-0 h-screen pointer-events-none' : 'opacity-100 transition-opacity duration-[1500ms]'}`}>
          <Navigation theme={theme} toggleTheme={toggleTheme} />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
