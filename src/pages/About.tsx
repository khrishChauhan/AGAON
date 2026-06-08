import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Quote, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888086925-081eb5d064dd?auto=format&fit=crop&w=2400&q=80"
            alt="Structuring The Unorganized"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07152E] via-[#07152E]/90 to-[#07152E]/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Structuring The Unorganized.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            Our mission is to bring transparency, technology, and software-level precision to the construction industry.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#0D2248]/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#FF6B2C] font-mono text-xs uppercase tracking-widest font-bold mb-4">Our Vision</h3>
            <h2 className="font-display text-3xl font-bold text-white mb-6">Redefining the skyline with unwavering integrity.</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              We envision a future where luxury real estate development is entirely devoid of delays, budget escalations, and opacity. By merging civil engineering mastery with digital precision, we aim to be the gold standard in premium construction across the country.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#FF6B2C] font-mono text-xs uppercase tracking-widest font-bold mb-4">Our Mission</h3>
            <h2 className="font-display text-3xl font-bold text-white mb-6">Certainty from blueprint to handover.</h2>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              To drastically simplify the complex process of development for our clients. We do this by implementing uncompromising quality controls, fixed-price contracts, and real-time verifiable telemetry.
            </p>
            <ul className="space-y-3">
              {['100% On-time deliveries', 'Zero hidden costs', 'Global quality compliances', 'Turnkey accountability'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B2C] mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-24 relative overflow-hidden bg-[#07152E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Our Legacy of Excellence</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Founded on the principles of precision engineering and absolute accountability, Agaon Construction stems from a lineage of structural perfection. What began as a boutique civil consultancy has rapidly matured into a comprehensive heavy civil construction powerhouse handling some of the most complex high-value residential and commercial assets in the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{ title: 'Software Precision', text: 'Applying modern technology to legacy problems.'},
              { title: 'Extreme Accountability', text: 'Taking complete ownership of every structural milimeter.'},
              { title: 'Material Honesty', text: 'Sourcing and deploying only globally-certified materials.'},
              { title: 'Client Centricity', text: 'Providing absolute peace of mind through transparency.'}].map((value, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-[#FF6B2C]/50 transition-colors"
                >
                  <div className="font-mono text-xl text-[#FF6B2C] font-bold mb-4">0{idx + 1}</div>
                  <h4 className="font-sans font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{value.text}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { count: '12+', label: 'Years Experience' },
                { count: '50+', label: 'Premium Projects' },
                { count: '500+', label: 'Engineers & Staff' },
                { count: '100%', label: 'Delivery Rate' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B2C] mb-2">{stat.count}</div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
