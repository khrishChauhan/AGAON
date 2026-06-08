import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: 'How accurate is the estimate?', a: 'Our dynamic engine utilizes 5D BIM and real-time commodity indices to provide a structural estimate within a 5% margin of actual costs. Once contracted, the cost is absolutely fixed.' },
  { q: 'How do you ensure zero delays?', a: 'We employ rigorous critical-path planning alongside dedicated procurement teams that secure materials months in advance, isolating your project from local supply chain fluctuations.' },
  { q: 'Can I track my project remotely?', a: 'Yes. Our proprietary client portal gives you 24/7 access to live CCTV site feeds, automated drone progression scanning, and digitized billing milestones.' },
  { q: 'Do you handle approvals?', a: 'We handle comprehensive, end-to-end statutory compliances, structural clearances, environmental zoning permissions, and local municipality NOCs before breaking ground.' },
  { q: 'What warranty do you provide?', a: 'Every structure we hand over includes a certified 10-year structural warranty, shielding you from core foundation, load-bearing, and water-proofing defects.' }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0D2248]/30 border-y border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`border rounded-lg transition-colors duration-300 ${openIdx === idx ? 'bg-[#07152E]/80 border-[#FF6B2C]/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-sans font-bold text-white pr-8">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'border-[#FF6B2C]/30 text-[#FF6B2C] bg-[#FF6B2C]/10' : 'border-white/10 text-white'}`}>
                  {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
