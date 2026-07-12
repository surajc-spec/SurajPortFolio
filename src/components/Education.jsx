import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Building2 } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering'
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-[#4F6EF7] uppercase mb-3">
            ACADEMICS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Education
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Building a strong foundation in computer science, software engineering, and problem-solving.
          </p>
        </div>

        {/* Education Premium Layout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -4, borderColor: 'rgba(79, 110, 247, 0.3)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-300 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-10 gap-0 items-stretch">
            
            {/* Left Column - Quick education summary */}
            <div className="md:col-span-3 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 text-left bg-slate-900/20">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mb-5 shadow-inner">
                <GraduationCap size={20} className="text-[#4F6EF7]" />
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">
                Bachelor's Degree
              </h3>
              <p className="text-xs font-semibold text-[#4F6EF7] uppercase tracking-wider mt-1 mb-6">
                INFORMATION TECHNOLOGY
              </p>

              <div className="space-y-3 text-slate-400 text-xs font-medium">
                <div className="flex items-center space-x-2.5">
                  <Calendar size={14} className="text-slate-400" />
                  <span>2023 – 2027</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin size={14} className="text-slate-400" />
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Column - Academic Details */}
            <div className="md:col-span-7 p-8 md:p-10 text-left flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-1.5">
                  Bachelor of Engineering 
                </h3>
                <h4 className="text-sm font-semibold text-[#4F6EF7] mb-4 flex items-center space-x-2">
                  <Building2 size={15} />
                  <span>International Institute of Information Technology (I²IT), Pune</span>
                </h4>

                <p className="text-base text-slate-400 leading-relaxed font-normal">
                  Pursuing a Bachelor of Engineering in Information Technology with a focus on software development, data structures, algorithms, database systems, and modern web technologies.
                </p>
              </div>

              {/* Coursework Badges */}
              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3.5 flex items-center space-x-1.5">
                  <BookOpen size={12} />
                  <span>Relevant Coursework</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 text-slate-400 border border-white/5 hover:border-[#4F6EF7]/40 hover:text-white transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

