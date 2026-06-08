import React from 'react';
import { motion } from 'motion/react';

const metrics = [
  { value: '500+', label: 'Quality Checks' },
  { value: '10 Years', label: 'Structural Warranty' },
  { value: '100%', label: 'On-Time Delivery' },
  { value: '24/7', label: 'Live Project Tracking' }
];

export default function TrustMetrics() {
  return (
    <section className="py-16 bg-[#07152E] border-y border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${idx === 0 ? '' : 'pl-8'}`}
            >
              <span className="font-display text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-2">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] text-[#FF6B2C] uppercase tracking-widest font-bold">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
