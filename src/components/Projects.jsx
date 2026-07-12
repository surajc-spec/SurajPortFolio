import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Flame, Brain, Award } from 'lucide-react';
import { Github } from './Icons';

const projects = [
  {
    title: 'NoteShare',
    description: 'A MERN-based student platform for sharing academic notes and previous-year question papers. Features authentication, admin dashboard, search functionality, analytics, and note management.',
    image: '/noteshare1.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/surajc-spec/NotesApp',
    live: 'https://noteshare.online',
    highlight: '220+ Registered Users',
    badgeIcon: Flame,
    badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-800/30'
  },
  {
    title: 'DermScan AI',
    description: 'AI-powered skin cancer detection system built using MobileNetV2 and deep learning techniques. Achieved over 85% accuracy and includes Grad-CAM explainability.',
    image: '/dermscan.png',
    tech: ['Python', 'TensorFlow', 'MobileNetV2', 'Flask'],
    github: 'https://github.com/surajchougule/dermscan-ai',
    live: 'https://dermscan-ai.render.com',
    highlight: '85%+ Scanning Accuracy',
    badgeIcon: Brain,
    badgeColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-800/30'
  },
  {
    title: 'Internship Portal',
    description: 'Hackathon-winning internship platform with resume parsing, internship discovery, and candidate management features.',
    image: '/internship.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/surajchougule/internship-portal',
    live: 'https://internship-portal.vercel.app',
    highlight: 'Hackathon Winner Platform',
    badgeIcon: Award,
    badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/30'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/10 border-b border-white/5">
      {/* Background glow orb */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] bottom-[-20%] left-[-10%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A showcase of applications combining modern frontend frameworks, backend server engineering, databases, and AI modeling to solve real problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const BadgeIcon = project.badgeIcon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group rounded-2xl glass-card border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] bg-slate-950/60"
              >
                {/* Project Image Panel */}
                <div className="relative overflow-hidden aspect-video border-b border-white/5 bg-[#0a071a]">
                  <img
                    src={project.image}
                    alt={`${project.title} Interface Mockup`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Floating metric badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1.5  text-xs font-semibold  `}>
                      {/* <BadgeIcon size={12} /> */}
                      {/* <span>{project.highlight}</span> */}
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex flex-col flex-grow justify-between text-left">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-3 group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono tracking-wider font-semibold bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <Github size={14} />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-200 ml-auto"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
