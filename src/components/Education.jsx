import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Compass } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Object Oriented Programming',
  'Database Management Systems',
  'Software Engineering & Design',
  'Web Technology & Networks'
];

export default function Education() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/10 border-b border-white/5">
      {/* Background glow mesh */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-[10%] left-[-10%]" />
      <div className="glow-orb glow-orb-cyan w-[350px] h-[350px] bottom-[20%] right-[-5%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-sm font-bold tracking-widest text-violet-400 uppercase mb-3">
            Academics
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Education
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Structuring a strong theoretical foundation in software engineering and algorithms at a top technical institute.
          </p>
        </div>

        {/* Education Premium Layout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl glass-card border border-white/5 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Column - Graphic/Highlight Banner */}
            <div className="md:col-span-4 bg-gradient-to-br from-violet-950/50 via-slate-950 to-blue-950/40 p-8 flex flex-col justify-between border-r border-white/5 text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center mb-6">
                  <GraduationCap size={24} className="text-violet-400" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-white leading-tight mb-2">
                  IT Engineering
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Undergraduate
                </p>
              </div>

              <div className="space-y-3 pt-8 border-t border-white/5 text-slate-400 text-sm font-medium">
                <div className="flex items-center space-x-2.5">
                  <Calendar size={15} className="text-violet-400" />
                  <span>2023 - 2027</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin size={15} className="text-blue-400" />
                  <span>Pune, India</span>
                </div>
              </div>
            </div>

            {/* Right Column - Academic Details */}
            <div className="md:col-span-8 p-8 md:p-10 text-left flex flex-col justify-between bg-slate-900/10">
              <div>
                <h3 className="text-xl font-heading font-bold text-white tracking-wide mb-1">
                  Bachelor of Engineering
                </h3>
                <p className="text-sm font-bold text-violet-400 mb-4 uppercase tracking-wider">
                  Information Technology
                </p>
                <h4 className="text-slate-200 font-medium mb-6 flex items-center space-x-2">
                  <Compass size={16} className="text-slate-400" />
                  <span>International Institute of Information Technology (I2IT), Pune</span>
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Studying technical frameworks, relational models, object-oriented concepts, and computational theory. Active member of technical coding environments, organizing bootcamps and practicing developer pipelines.
                </p>
              </div>

              {/* Coursework Badges */}
              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center space-x-1.5">
                  <BookOpen size={13} />
                  <span>Relevant Coursework</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-950 text-slate-300 border border-slate-800 hover:border-violet-500/20 transition-all duration-200"
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
