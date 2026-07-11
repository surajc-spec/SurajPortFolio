import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { Github } from './Icons';

// Mock GitHub Contribution Data (approx 200 grid boxes with different commit counts)
const generateGridData = () => {
  const weeks = 28;
  const daysPerWeek = 7;
  const levels = [0, 1, 2, 3, 4];
  const grid = [];
  
  for (let i = 0; i < weeks * daysPerWeek; i++) {
    // Random level biased towards 0-2
    const level = Math.random() < 0.4 ? 0 : Math.random() < 0.5 ? 1 : Math.random() < 0.6 ? 2 : Math.random() < 0.7 ? 3 : 4;
    const commits = level === 0 ? 0 : level * 2 + Math.floor(Math.random() * 3);
    grid.push({
      id: i,
      level,
      commits
    });
  }
  return grid;
};

const contributionData = generateGridData();

const languages = [
  { name: 'JavaScript / React', percentage: 55, color: 'bg-violet-500' },
  { name: 'Node.js / Express', percentage: 25, color: 'bg-blue-500' },
  { name: 'Python (TensorFlow)', percentage: 12, color: 'bg-cyan-500' },
  { name: 'Java', percentage: 8, color: 'bg-amber-500' }
];

const repos = [
  {
    name: 'noteshare-mern',
    desc: 'Main codebase for student note sharing web platform with authentication.',
    stars: 12,
    forks: 4,
    lang: 'JavaScript'
  },
  {
    name: 'dermscan-ai-model',
    desc: 'Deep learning classification pipelines for skin diagnostic modeling.',
    stars: 8,
    forks: 2,
    lang: 'Python'
  }
];

export default function GitHubShowcase() {
  const [hoveredBox, setHoveredBox] = useState(null);

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-violet-950/60 border-violet-900/30';
      case 2: return 'bg-violet-800/40 border-violet-700/30';
      case 3: return 'bg-violet-600/50 border-violet-500/30';
      case 4: return 'bg-violet-500 border-violet-400/50 shadow-[0_0_8px_rgba(139,92,246,0.5)]';
      default: return 'bg-slate-950/80 border-slate-900';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20 border-b border-white/5">
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] top-[10%] right-[10%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            GitHub Contributions
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I actively practice algorithms, maintain personal projects, and publish code. Here is a snapshot of my coding consistency and language breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Language Breakdown & Repos */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Languages Card */}
            <div className="p-6 rounded-2xl glass-card border-white/5 text-left">
              <div className="flex items-center space-x-2.5 mb-6">
                <Terminal size={18} className="text-violet-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Most Used Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1.5 font-medium">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-slate-950 border border-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full ${lang.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repos Card */}
            <div className="p-6 rounded-2xl glass-card border-white/5 text-left">
              <div className="flex items-center space-x-2.5 mb-6">
                <BookOpen size={18} className="text-violet-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Active Repositories</h3>
              </div>
              
              <div className="space-y-4">
                {repos.map((repo) => (
                  <div 
                    key={repo.name}
                    className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-violet-500/20 hover:bg-slate-900/60 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white font-mono">{repo.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {repo.lang}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {repo.desc}
                    </p>
                    <div className="flex items-center space-x-4 text-slate-500 text-xs">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-amber-500" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={12} />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Contribution Graph */}
          <div className="lg:col-span-7 p-6 rounded-2xl glass-card border-white/5 text-left relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2.5">
                <Github size={18} className="text-violet-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Contribution Activity</h3>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                <Sparkles size={12} className="text-violet-400" />
                <span>650+ commits this year</span>
              </div>
            </div>

            {/* Grid Box */}
            <div className="relative">
              <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-4 scrollbar-thin">
                {contributionData.map((box) => (
                  <div
                    key={box.id}
                    className={`w-3.5 h-3.5 rounded border transition-all duration-150 cursor-pointer ${getLevelColor(box.level)}`}
                    onMouseEnter={() => setHoveredBox(box)}
                    onMouseLeave={() => setHoveredBox(null)}
                  />
                ))}
              </div>

              {/* Tooltip Overlay */}
              {hoveredBox && (
                <div className="absolute bottom-[-16px] left-4 bg-slate-950 text-white border border-violet-500/30 px-3 py-1.5 rounded-lg text-xs font-mono shadow-xl z-20">
                  {hoveredBox.commits === 0 ? 'No contributions' : `${hoveredBox.commits} contributions`} on this day.
                </div>
              )}
            </div>

            {/* Grid Legend */}
            <div className="flex items-center justify-end space-x-2 text-[10px] text-slate-500 font-mono pt-4 border-t border-white/5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded bg-slate-950 border border-slate-900" />
              <div className="w-2.5 h-2.5 rounded bg-violet-950/60 border border-violet-900/30" />
              <div className="w-2.5 h-2.5 rounded bg-violet-800/40 border border-violet-700/30" />
              <div className="w-2.5 h-2.5 rounded bg-violet-600/50 border border-violet-500/30" />
              <div className="w-2.5 h-2.5 rounded bg-violet-500 border border-violet-400/50" />
              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
