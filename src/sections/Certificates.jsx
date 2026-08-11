import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-pink-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ACCREDITATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 group-hover:border-pink-500/40 group-hover:text-pink-300 transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-pink-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-400 mb-6">
                  Issuer: <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                  {cert.role && (
                    <span className="block text-xs text-pink-300/90 mt-1 font-normal">
                      Role: {cert.role}
                    </span>
                  )}
                </p>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all duration-200 w-full"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
