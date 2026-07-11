import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden bg-[#02000f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-blue-500 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            SC
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-400">
            Suraj Chougule
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 text-center font-mono">
          © 2026 Suraj Chougule. All Rights Reserved.
        </div>

        {/* Action / Social Container */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/surajc-spec"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/suraj-chougule"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:surajchougule378@gmail.com"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="w-[1px] h-4 bg-slate-800" />

          {/* Back to top arrow */}
          <button
            onClick={handleScrollTop}
            className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-500 hover:text-white hover:border-violet-500/20 transition-all duration-300 shadow-sm"
            title="Back to Top"
          >
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
