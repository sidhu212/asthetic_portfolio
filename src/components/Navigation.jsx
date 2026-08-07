import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Certifications', path: '/certifications' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${scrolled ? 'py-4 bg-primary/80 backdrop-blur-md border-b border-borderColors' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl font-display font-bold tracking-widest cursor-pointer text-textPrimary" onClick={() => setMenuOpen(false)}>
            SID<span className="text-accent">.</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {links.map(link => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-sans text-[13px] uppercase tracking-[2px] py-2 transition-colors duration-300 ${isActive ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="p-2 border border-borderColors bg-transparent text-textPrimary hover:bg-borderColors/10 transition-colors flex items-center justify-center overflow-hidden w-10 h-10"
              data-hover
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ opacity: 0, scale: 0.5, rotate: -90 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.5, rotate: 90 }}>
                     <Sun className="w-5 h-5 pointer-events-none" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ opacity: 0, scale: 0.5, rotate: 90 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.5, rotate: -90 }}>
                     <Moon className="w-5 h-5 pointer-events-none" strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Let's talk button for desktop */}
            <div className="hidden md:flex">
              <Link to="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-textPrimary text-primary text-sm font-medium hover:bg-accent hover:text-primary transition-colors">
                Let's talk →
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden flex flex-col space-y-1.5 z-50 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-textPrimary block transition-transform origin-center" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-textPrimary block transition-opacity" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-textPrimary block transition-transform origin-center" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-xl z-30 flex flex-col justify-center items-center"
          >
            {links.map(link => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-4xl font-display uppercase tracking-widest my-4 ${isActive ? 'text-accent' : 'text-textPrimary'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`text-4xl font-display uppercase tracking-widest my-4 ${location.pathname === '/contact' ? 'text-accent' : 'text-textPrimary'}`}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
