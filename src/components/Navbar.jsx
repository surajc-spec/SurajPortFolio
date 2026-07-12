import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section on scroll
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300">
            SC
          </div>
          <span className="font-heading font-bold text-xl tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
            Suraj Chougule
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full hover:text-white ${
                activeSection === item.href.substring(1) ? 'text-white' : 'text-slate-400'
              }`}
            >
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          {/* <a
            href="#contact"
            className="mr-4 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            Hire Me
          </a> */}
          <a
  href="/SurajResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#4F6EF7] hover:bg-[#5B7CFA] text-white font-semibold shadow-[0_4px_25px_rgba(79,110,247,0.3)] hover:shadow-[0_4px_35px_rgba(79,110,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 group"
>
  <span>View Resume</span>
  <Download size={18} />
</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-navbar border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-violet-400 border-l-2 border-violet-500 pl-3'
                      : 'text-slate-300 pl-3'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
            <a
  href="/SurajResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#4F6EF7] hover:bg-[#5B7CFA] text-white font-semibold shadow-[0_4px_25px_rgba(79,110,247,0.3)] hover:shadow-[0_4px_35px_rgba(79,110,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 group"
>
  <span>View Resume</span>
  <Download size={18} />
</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
