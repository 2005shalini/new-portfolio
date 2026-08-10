import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Database, Sparkles, Brain } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-pink-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main About Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Final-Year CSE (Artificial Intelligence) Student</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Interest Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Core Engineering Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs font-medium text-pink-300">
                  <Database className="w-3.5 h-3.5" /> Backend Development
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                  <Code className="w-3.5 h-3.5" /> Web Development
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                  <Brain className="w-3.5 h-3.5" /> AI-Based Applications
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300">
                  Python & SQL Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-1">
                Education
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                {aboutData.educationCard.degree}
              </h4>
              <p className="text-sm font-medium text-slate-400 mb-6">
                Status: <span className="text-pink-300 font-semibold">{aboutData.educationCard.status}</span> ({aboutData.educationCard.timeline})
              </p>

              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Key Coursework & Focus:
                </span>
                {aboutData.educationCard.focusAreas.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              Expected Graduation: <span className="font-semibold text-slate-200">{aboutData.educationCard.timeline.split('-')[1].trim()}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
