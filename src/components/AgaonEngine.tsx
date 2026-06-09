import React, { useState } from 'react';
import { METHODOLOGIES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, CheckCircle2, ChevronRight, Zap, Target, Sliders } from 'lucide-react';

export default function AgaonEngine() {
  const [activeTab, setActiveTab] = useState<string>(METHODOLOGIES[0].id);

  const activeMethod = METHODOLOGIES.find(m => m.id === activeTab) || METHODOLOGIES[0];

  return (
    <section id="technology" className="py-24 bg-[#111844] text-white relative overflow-hidden">
      {/* Absolute decorative glow circles to resemble premium SaaS backgrounds like Stripe/Linear */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#4B5694]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#0D2248]/60 rounded-full blur-[200px] pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center space-x-2 text-[#4B5694] font-mono text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            <Cpu className="w-4 h-4 text-[#4B5694] animate-spin-slow" />
            <span>Operational Technology</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            The Agaon Engineering Engine.
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            We operate like a physics laboratory. Our hardware, site diagnostics, and materials-science divisions replace guessing with absolute, digital certainty.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0D2248]/40 border border-[#0D2248] rounded-3xl p-6 md:p-10 backdrop-blur-md">
          
          {/* Navigation Sidebar inside Dashboard */}
          <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
            {METHODOLOGIES.map((method) => {
              const isActive = method.id === activeTab;
              return (
                <button
                  key={method.id}
                  onClick={() => setActiveTab(method.id)}
                  className={`group text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-[#111844] text-white border-[#4B5694] shadow-lg'
                      : 'bg-[#111844]/30 text-slate-400 hover:text-white border-transparent hover:bg-[#111844]/50'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-[#4B5694]">
                      R&D Protocols
                    </span>
                    <span className="block font-sans font-bold text-sm tracking-wide md:text-base">
                      {method.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'text-[#4B5694] translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display */}
          <div className="lg:col-span-8 bg-[#111844]/80 border border-[#0D2248]/80 rounded-2xl p-8 md:p-10 min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMethod.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Visual spec badge with numerical indicator */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#0D2248]">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[#4B5694] font-mono text-[10px] uppercase rounded-full mb-2">
                      Active Technology Protocol
                    </span>
                    <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight">
                      {activeMethod.title}
                    </h3>
                  </div>

                  {/* Mega Stat */}
                  <div className="bg-[#0D2248] border border-[#4B5694]/20 px-6 py-4 rounded-xl flex items-center space-x-4">
                    <div>
                      <span className="block font-sans font-bold text-2xl text-[#4B5694]">
                        {activeMethod.metric.value}
                      </span>
                      <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                        {activeMethod.metric.label}
                      </span>
                    </div>
                    <Target className="w-5 h-5 text-[#4B5694]" />
                  </div>
                </div>

                {/* Narrative */}
                <div className="space-y-4">
                  <p className="text-[#4B5694] font-sans font-semibold text-sm italic">
                    "{activeMethod.subtitle}"
                  </p>
                  <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed">
                    {activeMethod.longDesc}
                  </p>
                </div>

                {/* Sub-system checklist */}
                <div className="space-y-3">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    Integration Outcomes
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeMethod.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start bg-[#0D2248]/20 p-3 rounded-lg border border-[#0D2248]/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mr-3 mt-0.5" />
                        <span className="text-slate-300 font-sans text-xs leading-normal">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Scientific footer */}
            <div className="mt-8 pt-6 border-t border-[#0D2248] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center space-x-2 text-slate-400">
                <Sliders className="w-4 h-4 text-[#4B5694]" />
                <span>R&D Machinery Specifications Link:</span>
              </div>
              <span className="text-[#4B5694] font-semibold bg-[#4B5694]/10 px-3 py-1 rounded">
                {activeMethod.techSpec}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
