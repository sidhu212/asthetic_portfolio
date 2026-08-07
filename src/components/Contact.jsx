import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock submit
    alert(`Thank you, ${formState.name}! Your message has been sent.`);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-6 md:px-12 border-t border-borderColors bg-primary relative overflow-hidden flex flex-col justify-center items-center">
      <div className="container mx-auto z-10 w-full max-w-4xl">
        
        {/* Call to Action */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em] block mb-6">Let's build something</span>
          <h2 className="text-6xl md:text-[8rem] font-display uppercase leading-tight tracking-tight hover:text-transparent hover:text-border transition-colors duration-500 cursor-pointer">
            Work Together
          </h2>
        </motion.div>

        {/* Form area */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 w-full max-w-2xl mx-auto backdrop-blur-md p-6 lg:p-12 border border-borderColors bg-secondary/30 rounded-lg shadow-2xl"
        >
          <div className="group relative">
            <input 
              type="text" 
              name="name" 
              required 
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-borderColors pb-4 font-serif text-xl text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accent transition-colors peer"
              placeholder="Your Name *"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 peer-focus:w-full"></span>
          </div>

          <div className="group relative">
            <input 
              type="email" 
              name="email" 
              required 
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-borderColors pb-4 font-serif text-xl text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accent transition-colors peer"
              placeholder="Your Email *"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 peer-focus:w-full"></span>
          </div>

          <div className="group relative">
            <textarea 
              name="message" 
              required 
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-borderColors pb-4 font-serif text-xl text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accent transition-colors resize-none peer"
              placeholder="Message *"
            />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 peer-focus:w-full"></span>
          </div>

          <button 
            type="submit" 
            className="self-end md:self-center w-full md:w-auto mt-8 bg-accent text-primary px-12 py-5 font-mono uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-transform duration-300 font-bold"
            data-hover
          >
            Send Inquiry
          </button>
        </motion.form>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-borderColors flex flex-col md:flex-row justify-between items-center text-textSecondary font-mono text-xs uppercase tracking-widest gap-4">
          <span>&copy; {new Date().getFullYear()} Siddharth Singh</span>
          <div className="flex gap-8">
             <a href="https://github.com/sidhu212" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
             <a href="https://www.linkedin.com/in/siddharth-singh-4b8416262/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
