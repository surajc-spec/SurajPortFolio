import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Maintainable. Scalable. Readable.'
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    desc: 'Fast. Optimized. Production-ready.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    desc: 'Real problems. Smart solutions.'
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Profile Photo */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-4 flex justify-center items-center"
            >
              <div className="relative group w-full max-w-[280px] lg:w-[300px] lg:h-[420px] aspect-[3/4] lg:aspect-auto rounded-2xl overflow-hidden border border-[#4F6EF7]/20 shadow-[0_0_20px_rgba(79,110,247,0.1)] transition-all duration-300 hover:border-[#5B7CFA]/30 hover:shadow-[0_0_30px_rgba(79,110,247,0.2)]">
                <img 
                  src="/ProfilePhoto2.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* CENTER COLUMN: Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col justify-center text-left space-y-6"
            >
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-widest text-[#4F6EF7] uppercase block">
                  ABOUT ME
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Turning ideas into <span className="text-[#4F6EF7]">real-world products.</span>
                </h2>
                
                <p className="text-base text-slate-400 leading-relaxed font-normal">
                  I'm a Full Stack Developer passionate about building modern web applications and turning ideas into real-world products. I enjoy solving complex problems, learning new technologies, and creating scalable, performance-focused solutions with clean user experiences.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-[#4F6EF7] hover:text-[#5B7CFA] font-semibold group transition-colors duration-300"
                >
                  <span>Know more about me</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Divider & Features */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3 flex flex-col justify-center relative lg:pl-8"
            >
              {/* Subtle vertical divider on desktop */}
              <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-px bg-white/5" />
              
              <div className="flex flex-col space-y-6 text-left">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center shadow-inner">
                        <Icon size={18} className="text-[#4F6EF7]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white tracking-wide">
                          {feature.title}
                        </h4>
                        <p className="text-base text-slate-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

