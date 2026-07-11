import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Brain, Wrench, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code,
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/10',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    color: 'text-violet-400 border-violet-500/20 bg-violet-950/10',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication']
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: Database,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/10',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    skills: ['MongoDB', 'Mongoose']
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Brain,
    color: 'text-amber-400 border-amber-500/20 bg-amber-950/10',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    skills: ['Java', 'Python', 'JavaScript']
  },
  {
    id: 'tools',
    title: 'Tools & Platform Dev',
    icon: Wrench,
    color: 'text-rose-400 border-rose-500/20 bg-rose-950/10',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render']
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-[10%] left-[-15%]" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-[10%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Technologies I work with.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I specialize in full-stack MERN development, scripting, database structures, and production-ready deployments. Here are the core languages, frameworks, and tools in my repertoire.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="relative p-6 rounded-2xl glass-card text-left transition-all duration-300 border-white/5"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  boxShadow: isHovered ? `0 0 30px ${category.glowColor}` : 'none',
                  borderColor: isHovered ? category.glowColor : 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Visual Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${category.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-col space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={skill}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/80 hover:border-white/10 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-2.5">
                        <CheckCircle2 size={15} className="text-violet-500 group-hover:text-violet-400 transition-colors" />
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                      
                      {/* Skill Status Badge / Level */}
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-600 group-hover:text-violet-400 transition-colors">
                        Verified
                      </span>
                    </div>
                  ))}
                </div>

                {/* Corner accent glow */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-white/2 pointer-events-none opacity-20" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
