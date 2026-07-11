import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Award, Code, FolderGit, Users } from 'lucide-react';

function Counter({ from = 0, to, duration = 1.5, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: 'easeOut',
        onUpdate: (value) => setCount(Math.floor(value))
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const statsData = [
  {
    icon: Code,
    value: 300,
    suffix: '+',
    label: 'DSA Problems Solved',
    desc: 'Practiced on LeetCode & GFG',
    color: 'from-violet-500/20 to-purple-500/5',
    iconColor: 'text-violet-400'
  },
  {
    icon: FolderGit,
    value: 15,
    suffix: '+',
    label: 'Projects Built',
    desc: 'Full-stack & AI applications',
    color: 'from-blue-500/20 to-indigo-500/5',
    iconColor: 'text-blue-400'
  },
  {
    icon: Users,
    value: 220,
    suffix: '+',
    label: 'NoteShare Users',
    desc: 'Active students platform',
    color: 'from-emerald-500/20 to-teal-500/5',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Award,
    value: 1,
    suffix: 'st',
    label: 'Prize Hackathon Winner',
    desc: 'Dhruva Nexus Hackathon',
    color: 'from-amber-500/20 to-yellow-500/5',
    iconColor: 'text-amber-400'
  }
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      {/* Background Glow */}
      <div className="glow-orb glow-orb-blue w-[350px] h-[350px] top-[10%] left-[20%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl glass-card overflow-hidden text-center flex flex-col items-center justify-center border-white/5"
              >
                {/* Accent Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-30 pointer-events-none`} />
                
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-slate-900/90 flex items-center justify-center mb-4 border border-white/5 shadow-md">
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>

                {/* Animated Stat Value */}
                <div className="text-4xl font-heading font-extrabold text-white tracking-tight mb-2">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>

                {/* Labels */}
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
