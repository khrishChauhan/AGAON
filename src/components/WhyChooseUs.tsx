import React from 'react';
import { motion } from 'motion/react';
import { Lock, Target, HeadphonesIcon, Settings2, Eye, ShieldCheck } from 'lucide-react';

const blocks = [
  { title: 'Fixed Cost Guarantee', label: '01', icon: Lock },
  { title: 'Zero Budget Overruns', label: '02', icon: Target },
  { title: 'Dedicated Manager', label: '03', icon: HeadphonesIcon },
  { title: '500+ Inspections', label: '04', icon: Settings2 },
  { title: 'Live Tracking', label: '05', icon: Eye },
  { title: 'Structural Warranty', label: '06', icon: ShieldCheck }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0D2248]/20 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {blocks.map((block, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
              className="bg-[#07152E]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center hover:border-[#FF6B2C]/40 transition-colors group cursor-pointer"
            >
              <block.icon className="w-8 h-8 text-slate-500 group-hover:text-[#FF6B2C] transition-colors mb-4" />
              <h3 className="font-sans font-bold text-white text-sm md:text-base tracking-wide text-center">
                {block.title}
              </h3>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-2 block">
                Feature {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
