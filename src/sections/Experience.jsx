import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>LEADERSHIP & INVOLVEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Leadership
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3" />
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-pink-400 mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300">
                    {item.organization}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.timeline}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {item.highlights.map((point, pointIdx) => (
                    <div key={pointIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
