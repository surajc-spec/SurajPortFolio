import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, Cpu, Terminal, ShieldCheck } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '🏆 1st Prize – Dhruva Nexus Hackathon',
    description: 'Secured the first prize at Pune university hackathon by engineering an end-to-end recruitment matching portal in under 36 hours.',
    accent: 'border-yellow-500/20 bg-yellow-950/10 text-yellow-400',
    shadow: 'shadow-[0_4px_30px_rgba(234,179,8,0.05)] hover:shadow-[0_4px_40px_rgba(234,179,8,0.15)]'
  },
  {
    icon: Rocket,
    title: '🚀 Built NoteShare with 220+ Users',
    description: 'Developed and scaled a college note management application to support university students, resolving file storage and routing paths.',
    accent: 'border-violet-500/20 bg-violet-950/10 text-violet-400',
    shadow: 'shadow-[0_4px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_4px_40px_rgba(139,92,246,0.15)]'
  },
  {
    icon: Cpu,
    title: '🤖 Developed DermScan AI (85%+ Accuracy)',
    description: 'Created a deep learning image diagnostic scanner for skin lesions using MobileNetV2 with dynamic Grad-CAM model activations.',
    accent: 'border-blue-500/20 bg-blue-950/10 text-blue-400',
    shadow: 'shadow-[0_4px_30px_rgba(59,130,246,0.05)] hover:shadow-[0_4px_40px_rgba(59,130,246,0.15)]'
  },
  {
    icon: Terminal,
    title: '💻 Practicing DSA & Problem Solving',
    description: 'Consistently practicing algorithms, queues, hashes, graphs, and system designs to ensure write-speed and clean solution engineering.',
    accent: 'border-emerald-500/20 bg-emerald-950/10 text-emerald-400',
    shadow: 'shadow-[0_4px_30px_rgba(16,185,129,0.05)] hover:shadow-[0_4px_40px_rgba(16,185,129,0.15)]'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/20 border-b border-white/5">
      {/* Background glow orb */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-[10%] right-[-10%]" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Key Achievements
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A testament to my drive for building systems, taking initiative in competitive events, and engineering platforms that add value.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-6 rounded-2xl glass-card border border-white/5 transition-all duration-300 hover:border-white/10 flex items-start space-x-5 text-left ${ach.shadow}`}
              >
                {/* Accent Icon Frame */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${ach.accent} shadow-sm`}>
                  <Icon size={20} />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-heading font-bold text-white tracking-wide mb-2 flex items-center">
                    <span>{ach.title}</span>
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Soft glow background dot */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/2 rounded-tl-full pointer-events-none opacity-50" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
