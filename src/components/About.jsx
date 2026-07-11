import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, clean, and scalable software with standard design patterns.',
    color: 'group-hover:text-purple-400 group-hover:border-purple-500/30'
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    desc: 'Building optimized and efficient systems focusing on load speed and bundle size.',
    color: 'group-hover:text-blue-400 group-hover:border-blue-500/30'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    desc: 'Finding practical, optimized solutions to real-world software and architectural challenges.',
    color: 'group-hover:text-amber-400 group-hover:border-amber-500/30'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Working effectively in cross-functional teams with agile values and clear communication.',
    color: 'group-hover:text-cyan-400 group-hover:border-cyan-500/30'
  }
];

export default function About() {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (idx) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: idx * 0.1
      }
    })
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Subtle background glow */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-[20%] right-[-10%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3"
          >
            About Me
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Turning ideas into <span className="text-gradient-purple-blue">real-world products</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            I am a passionate software developer who enjoys building impactful applications, solving real-world problems, and continuously learning modern technologies. My goal is to create products that provide meaningful value and excellent user experiences.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group relative p-6 rounded-2xl glass-card glass-card-hover text-left flex flex-col justify-between min-h-[220px]"
              >
                {/* Glow border overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-900 shadow-inner">
                    <Icon className="w-6 h-6 text-slate-400 transition-all duration-300 group-hover:text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                
                {/* Bottom line accent */}
                <div className="w-8 h-1 rounded bg-slate-800 mt-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
