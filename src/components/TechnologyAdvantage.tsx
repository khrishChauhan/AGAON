import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Activity, Users } from 'lucide-react';

const benefits = [
  { title: 'Fixed Pricing', desc: 'No hidden costs, no escalations. What we quote is what you pay.', icon: Shield },
  { title: 'Transparent Payments', desc: 'Milestone-based escrows tied directly to verified site progress.', icon: CheckCircle2 },
  { title: 'Real-Time Tracking', desc: 'Monitor your site via 24/7 CCTV and daily drone progress maps.', icon: Activity },
  { title: 'Dedicated Project Manager', desc: 'Single point of contact from mobilization to final handover.', icon: Users }
];

export default function TechnologyAdvantage() {
  return (
    <section className="py-24 bg-[#07152E] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div>
              <span className="text-[#FF6B2C] text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                The Agaon Advantage
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Built on Technology.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] to-[#FF9060]">Grounded in Reality.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((bg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded bg-[#FF6B2C]/10 flex items-center justify-center border border-[#FF6B2C]/20">
                    <bg.icon className="w-5 h-5 text-[#FF6B2C]" />
                  </div>
                  <h4 className="font-sans font-bold text-white tracking-wide">{bg.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{bg.desc}</p>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 bg-white text-[#07152E] font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#FF6B2C] hover:text-white transition-all duration-300">
              Discover Our Process
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
                alt="Construction Site"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-8 md:-left-16 bottom-12 bg-[#0D2248]/90 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-2xl max-w-[280px]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Live Project Updates
                </span>
              </div>
              <p className="text-sm text-white font-medium mb-1">Sector 65 Corporate Park</p>
              <p className="text-xs text-slate-400 font-mono">Phase 2: RC Core Pouring in progress.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
