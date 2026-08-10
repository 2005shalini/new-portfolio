import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate interactive frontend submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Connect
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm max-w-xl mt-4">
            Whether you are looking for an intern, entry-level backend engineer, or web developer, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Details
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking software development, backend engineering, and web development opportunities. Let’s start a conversation!
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">Email</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-pink-300 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">LinkedIn</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-pink-300 transition-colors">
                      LinkedIn Profile
                    </div>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400">GitHub</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-pink-300 transition-colors">
                      GitHub Repositories
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all placeholder:text-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-pink-500/25 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
