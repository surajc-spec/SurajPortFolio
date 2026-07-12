import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Terminal, ExternalLink, Code2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Floating icon badges around the workstation
  const techBadges = [
    { name: 'React', color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/50', top: '15%', left: '-5%', delay: 0 },
    { name: 'MongoDB', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/50', bottom: '25%', left: '-8%', delay: 1.5 },
    { name: 'NodeJS', color: 'text-green-400 bg-green-950/40 border-green-800/50', top: '10%', right: '-4%', delay: 0.8 },
    { name: 'Express', color: 'text-white bg-slate-900/60 border-slate-700/50', bottom: '20%', right: '-6%', delay: 2.2 }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden">
      
      {/* Background Glow Mesh Orbs */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] top-[-10%] left-[-10%]" />
      <div className="glow-orb glow-orb-blue w-[500px] h-[500px] bottom-[10%] right-[-10%]" />
      <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] top-[30%] left-[45%]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="self-start">
            {/* <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-violet-500/10 text-violet-300 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping mr-2"></span>
              Open to Internship Opportunities
            </span> */}
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Hi, I'm <span className="text-gradient-purple-blue">Suraj Chougule</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 font-semibold text-slate-300">
              Full Stack Developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-xl leading-relaxed">
            I build modern web applications using React, Node.js, Express, and MongoDB with a strong focus on performance, clean architecture, scalability, and exceptional user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
          <a
  href="#projects"
  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#4F6EF7] hover:bg-[#5B7CFA] text-white font-semibold shadow-[0_4px_25px_rgba(79,110,247,0.3)] hover:shadow-[0_4px_35px_rgba(79,110,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 group"
>
              <span>View Projects</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageSquare size={18} className="text-violet-400" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Workstation Mockup */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Main IDE Glass frame */}
          <div className="w-full max-w-[480px] glass-card rounded-2xl overflow-hidden border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 group">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/5">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 block"></span>
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center space-x-1">
                <Terminal size={12} className="text-violet-400" />
                <span>suraj_chougule_dev.js</span>
              </div>
              <div className="w-8"></div>
            </div>

            {/* Code Lines */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-left min-h-[300px] bg-[#07051a]/40">
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">1</span>
                <span className="text-violet-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-pink-400">=</span>{' '}
                <span className="text-violet-400">new</span>{' '}
                <span className="text-emerald-400">Developer</span>
                <span className="text-slate-400">();</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">2</span>
                <span>&nbsp;</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">3</span>
                <span className="text-blue-400">developer</span>
                <span className="text-slate-400">.</span>
                <span className="text-yellow-400">setSkills</span>
                <span className="text-slate-400">([</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">4</span>
                <span className="text-slate-400">&nbsp;&nbsp;</span>
                <span className="text-amber-300">'React.js'</span>
                <span className="text-slate-400">,</span>{' '}
                <span className="text-amber-300">'Node.js'</span>
                <span className="text-slate-400">,</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">5</span>
                <span className="text-slate-400">&nbsp;&nbsp;</span>
                <span className="text-amber-300">'Express.js'</span>
                <span className="text-slate-400">,</span>{' '}
                <span className="text-amber-300">'MongoDB'</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">6</span>
                <span className="text-slate-400">]);</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">7</span>
                <span>&nbsp;</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">8</span>
                <span className="text-blue-400">developer</span>
                <span className="text-slate-400">.</span>
                <span className="text-yellow-400">focusOn</span>
                <span className="text-slate-400">(</span>
                <span className="text-emerald-400">CleanCode</span>
                <span className="text-slate-400">);</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 select-none mr-4 w-4">9</span>
                <span className="text-blue-400">developer</span>
                <span className="text-slate-400">.</span>
                <span className="text-yellow-400">buildSolutions</span>
                <span className="text-slate-400">();</span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                <span>UTF-8</span>
                <span>React v19.0</span>
              </div>
            </div>
            
            {/* Visual gradient highlight block inside card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 blur-xl rounded-full group-hover:bg-violet-600/20 transition-all duration-500"></div>
          </div>

          {/* Floating Badges */}
          {techBadges.map((badge, idx) => (
            <motion.div
              key={badge.name}
              className={`absolute hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold glass-card ${badge.color} shadow-lg`}
              style={{
                top: badge.top || 'auto',
                bottom: badge.bottom || 'auto',
                left: badge.left || 'auto',
                right: badge.right || 'auto'
              }}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: badge.delay,
                ease: 'easeInOut'
              }}
            >
              <Code2 size={13} />
              <span>{badge.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
        {/* <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Scroll to explore</span> */}
        {/* <motion.div 
          className="w-5 h-8 rounded-full border-2 border-slate-700 flex items-start justify-center p-1"
          animate={{
            borderColor: ['rgba(51, 65, 85, 1)', 'rgba(139, 92, 246, 1)', 'rgba(51, 65, 85, 1)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-violet-400"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div> */}
      </div>
    </section>
  );
}
