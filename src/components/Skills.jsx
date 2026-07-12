import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiGit, 
  SiHtml5, 
  SiCss,
  SiRedis,
  SiJsonwebtokens,
  SiMongoose,
  SiPostman,
  SiGithub
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'REST API', icon: AiOutlineApi, color: '#4F6EF7' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' },
  { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-sm font-bold tracking-wide text-[#4F6EF7] uppercase block mb-2">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies I work with
          </h2>
        </div>

        {/* Skill Cards Showcase Layout */}
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center md:items-center gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon Card Frame */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-[#4F6EF7]/50 shadow-lg mb-3">
                  <Icon 
                    size={28} 
                    style={{ color: skill.color }} 
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Technology Name */}
                <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

