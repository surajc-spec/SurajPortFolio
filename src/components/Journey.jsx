import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Brain, Users, Award, Database } from 'lucide-react';

const timelineEvents = [
  {
    year: '2026',
    title: 'Won Dhruva Nexus Hackathon',
    description: 'Secured 1st Prize building an innovative solution under tight constraints, demonstrating rapid prototyping skills.',
    icon: Award,
    color: 'text-amber-400 border-amber-500/20 bg-amber-950/20',
    glow: 'rgba(245, 158, 11, 0.15)'
  },
  {
    year: '2026',
    title: 'Built NoteShare Platform',
    description: 'Created a MERN sharing hub for university students, launching it to over 220 registered active users.',
    icon: Database,
    color: 'text-violet-400 border-violet-500/20 bg-violet-950/20',
    glow: 'rgba(139, 92, 246, 0.15)'
  },
  {
    year: '2025',
    title: 'Built DermScan AI',
    description: 'Designed and trained deep learning models for classification of skin lesions, achieving 85%+ validation accuracy.',
    icon: Brain,
    color: 'text-blue-400 border-blue-500/20 bg-blue-950/20',
    glow: 'rgba(59, 130, 246, 0.15)'
  },
  {
    year: '2025',
    title: 'Learned MERN Stack',
    description: 'Focused heavily on backend development, REST API design, JWT auth, database schemas, and state management.',
    icon: Code,
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20',
    glow: 'rgba(6, 182, 212, 0.15)'
  },
  {
    year: '2024',
    title: 'Started Web Development',
    description: 'Discovered the programming landscape, learned HTML, CSS, JavaScript, responsive structures, and Git flows.',
    icon: Sparkles,
    color: 'text-rose-400 border-rose-500/20 bg-rose-950/20',
    glow: 'rgba(244, 63, 94, 0.15)'
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-950/10 border-b border-white/5">
      {/* Background glow orb */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-[20%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            My Journey
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A chronological timeline of my learning milestones, hackathons, and software projects, showcasing rapid skill acquisition and execution.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
          
          {/* Vertical line through timeline */}
          <div className="absolute left-[16px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-600 via-blue-500 to-transparent transform sm:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={event.title}
                  className="flex flex-col sm:flex-row items-start sm:items-center relative"
                >
                  
                  {/* Glowing Node Marker */}
                  <div className="absolute left-[-24px] sm:left-1/2 w-10 h-10 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center transform sm:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-blue-500 flex items-center justify-center shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                      <Icon size={12} className="text-white" />
                    </div>
                  </div>

                  {/* Left Spacer (only for desktop alternating layouts) */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:order-1 sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 85 }}
                      className="p-6 rounded-2xl glass-card border-white/5 relative group text-left"
                      style={{
                        boxShadow: `0 8px 30px ${event.glow}`
                      }}
                    >
                      {/* Year Indicator */}
                      <span className="inline-block text-xs font-mono font-bold tracking-widest text-violet-400 mb-2">
                        {event.year}
                      </span>
                      
                      {/* Event Title */}
                      <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                        {event.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Mini corner tab glow */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-violet-400 animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Right Spacer matching layout */}
                  <div className={`hidden sm:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
