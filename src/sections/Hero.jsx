import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download, Sparkles, Database, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/15 via-purple-600/15 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-pink-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Seeking Backend & Software Internships / Entry-Level Roles
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
              <span className="block">{personalInfo.name}</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-semibold gradient-text mb-6">
              {personalInfo.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              "{personalInfo.heroDescription}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-pink-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full sm:w-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/60 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-slate-800/60 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Glowing Gradient Border Card */}
              <div className="p-1 rounded-3xl bg-gradient-to-b from-pink-500/40 via-purple-500/30 to-slate-800/80 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950/90 aspect-[4/5]">
                  <img
                    src={profileImg}
                    alt="Shalini Richhariya"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle bottom gradient overlay for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">Shalini Richhariya</div>
                      <div className="text-[11px] font-medium text-pink-300">B.Tech CSE (AI)</div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent elements */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-3xl border border-purple-500/20 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
