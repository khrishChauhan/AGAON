import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Landmark, Maximize2, X, Calendar, ShieldCheck, Cpu } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#07152E] relative overflow-hidden border-t border-white/10">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 text-[#FF6B2C] font-mono text-xs tracking-[0.25em] h-6 uppercase mb-3 font-semibold">
              <span className="w-1.5 h-1.5 bg-[#FF6B2C] rounded-full" />
              <span>Architectural Monuments</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Portfolio of Certainty.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl text-base md:text-lg leading-relaxed">
              We design and construct generational assets worth hundreds of crores. No cutting corners, no compromises on tolerances.
            </p>
          </div>

          {/* Filtering tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white/10 text-white shadow-[0_4px_20px_rgba(255,107,44,0.15)] border border-[rgba(255,107,44,0.4)] backdrop-blur-md'
                    : 'bg-[#0D2248]/40 text-slate-400 hover:text-white border border-white/5 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0D2248]/40 rounded-[20px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-[rgba(255,107,44,0.3)] backdrop-blur-[10px] flex flex-col justify-between"
            >
              {/* Image Container with precise alignment */}
              <div className="relative aspect-[16:10] overflow-hidden bg-[#07152E]">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Visual Accent Tags */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-md text-[#07152E] font-sans font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-md">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 bg-[#FF6B2C] text-white font-mono text-[11px] tracking-wider px-3.5 py-1 rounded-md">
                  {project.value}
                </span>
              </div>

              {/* Specs and details card */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#FF6B2C] font-mono text-[11px] mb-2 uppercase">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold tracking-tight text-xl md:text-2xl text-white group-hover:text-[#FF6B2C] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-slate-300 font-sans text-sm line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div>
                      <span className="block font-mono text-[10px] text-[#FF6B2C]/70 tracking-wider uppercase">Footprint</span>
                      <span className="block font-sans text-xs font-semibold text-white">{project.size}</span>
                    </div>
                    <div className="border-r border-white/20" />
                    <div>
                      <span className="block font-mono text-[10px] text-[#FF6B2C]/70 tracking-wider uppercase">Commissioned</span>
                      <span className="block font-sans text-xs font-semibold text-white">{project.completionYear}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center space-x-2 text-white hover:text-[#FF6B2C] font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                  >
                    <span>Analyze Tech Specs</span>
                    <MaxWidthIcon />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive Modal Panel */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#07152E]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-[#0D2248] rounded-[20px] overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] relative border border-[rgba(255,107,44,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-10 p-2.5 bg-[#07152E] hover:bg-[#FF6B2C] text-white rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Column One: Spectacular Image and Client parameters */}
                <div className="lg:col-span-5 relative bg-[#07152E] flex flex-col justify-between">
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-[#07152E]/20 to-transparent" />
                  </div>

                  {/* Dark block overlaid under image for statistics */}
                  <div className="p-8 bg-[#07152E] text-white space-y-6">
                    <div className="flex items-center space-x-2 text-[#FF6B2C] font-mono text-xs tracking-widest uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Security & Quality Logs</span>
                    </div>
                    <div>
                      <span className="block font-sans text-xs text-slate-400">Assigned Client Partner</span>
                      <p className="text-sm font-semibold tracking-wide text-white">{activeProject.client}</p>
                    </div>
                    <div>
                      <span className="block font-sans text-xs text-slate-400">Accredited Deliverable Status</span>
                      <p className="text-sm font-semibold text-emerald-400">{activeProject.safetyRating}</p>
                    </div>
                  </div>
                </div>

                {/* Column Two: Technical specifications and highlights */}
                <div className="lg:col-span-7 p-8 md:p-12 text-white overflow-y-auto bg-[#07152E]">
                  <span className="font-mono text-xs text-[#FF6B2C] tracking-[0.2em] uppercase font-semibold">
                    Engineering Case Studies
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-bold mt-2 tracking-tight text-white">
                    {activeProject.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mt-4 font-mono text-xs text-slate-400">
                    <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#FF6B2C]" /> {activeProject.location}</span>
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-[#FF6B2C]" /> Completed {activeProject.completionYear}</span>
                  </div>

                  <p className="mt-8 text-slate-300 font-sans text-sm md:text-base leading-relaxed">
                    {activeProject.longDescription}
                  </p>

                  {/* Detailed specs list */}
                  <div className="mt-10">
                    <h4 className="font-sans font-bold text-sm tracking-wider uppercase text-white mb-4 flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-[#FF6B2C]" />
                      Structural & Materials Blueprint
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0D2248]/40 p-6 rounded-2xl border border-white/10">
                      {activeProject.specs.map((spec, i) => (
                        <div key={i} className="border-b border-white/10 pb-2.5">
                          <span className="block font-sans text-[10px] uppercase text-[#FF6B2C]/70 tracking-wider">{spec.label}</span>
                          <span className="font-sans font-semibold text-xs text-white mt-0.5 block">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational highlights */}
                  <div className="mt-8">
                    <h4 className="font-sans font-bold text-sm tracking-wider uppercase text-white mb-4 flex items-center">
                      <Landmark className="w-4 h-4 mr-2 text-[#FF6B2C]" />
                      Sub-Millimeter Site Innovation
                    </h4>
                    <ul className="space-y-3.5">
                      {activeProject.engineeringHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-300 leading-relaxed">
                          <span className="w-2 h-2 mt-1.5 mr-3 bg-[#FF6B2C] rounded-full shrink-0 animate-pulse" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action inside overlay */}
                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <span className="font-mono text-[10px] text-[#FF6B2C]/70 block tracking-widest uppercase">Contract Scale</span>
                      <span className="font-display tracking-tight text-2xl font-bold text-[#FF6B2C]">{activeProject.value}</span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveProject(null);
                        const calcSec = document.getElementById('calculator');
                        if (calcSec) calcSec.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-[#FF6B2C] hover:bg-[#ff7b42] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Audit Feasibility Model
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function MaxWidthIcon() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 3 6 6-6 6" />
      <path d="M9 21v-6H3" />
      <path d="M21 9H9" />
    </svg>
  );
}
