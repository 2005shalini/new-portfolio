import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Terminal, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Languages: Terminal,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Workflow": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const IconComponent = categoryIcons[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6 relative group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 group-hover:border-pink-500/40 group-hover:text-pink-300 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/30 hover:bg-slate-900 transition-all"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
