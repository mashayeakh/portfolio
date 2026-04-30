"use client";

import { use } from "react";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-32">
      {/* Back Button */}
      <div className="fixed top-24 left-6 md:left-12 z-50">
        <Link href="/#projects">
          <motion.div 
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </motion.div>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={`inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wide shadow-lg mb-6 ${project.badgeColor}`}>
              {project.type}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-headline-lg tracking-tight mb-4">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1200px] mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-2 space-y-16">
          {/* Description */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-headline-lg border-b border-white/10 pb-4">Overview</h2>
            <p className="text-slate-300 font-body-md text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Challenges */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-headline-lg border-b border-white/10 pb-4">Challenges Faced</h2>
            <div className="bg-surface-container-low/50 border border-[#ff014f]/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ff014f]"></div>
              <p className="text-slate-300 font-body-md leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </motion.div>

          {/* Future Plans */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-headline-lg border-b border-white/10 pb-4">Potential Improvements</h2>
            <div className="bg-surface-container-low/50 border border-[#00c2ff]/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00c2ff]"></div>
              <p className="text-slate-300 font-body-md leading-relaxed">
                {project.futurePlans}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Sidebar Info) */}
        <div className="space-y-12">
          {/* Action Buttons */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            <motion.a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#08fdd8] text-slate-950 px-6 py-4 rounded-xl font-bold font-label-md flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(8,253,216,0.3)] hover:shadow-[0_0_30px_rgba(8,253,216,0.5)] transition-shadow"
            >
              <span className="material-symbols-outlined">visibility</span>
              Live Project Link
            </motion.a>

            <motion.a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-bold font-label-md flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub Repository
            </motion.a>
          </motion.div>

          {/* Technologies Stack */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-surface-container-low/30 border border-white/5 rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6 font-headline-md">Main Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg bg-surface-container-high border border-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Features List */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-surface-container-low/30 border border-white/5 rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6 font-headline-md">Key Features</h3>
            <ul className="flex flex-col gap-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-300">
                  <span className="material-symbols-outlined text-[#00c2ff] text-[20px] mt-0.5">check_circle</span>
                  <span className="leading-relaxed text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
