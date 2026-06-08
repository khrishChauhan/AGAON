import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, MapPin, Layers, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [floors, setFloors] = useState('');

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury Architecture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152E] via-[#07152E]/90 to-[#07152E]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-[#FF6B2C] rounded-full animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-white uppercase font-bold">
              The Smart Way To Build Your Dream Home
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Engineering Your Vision.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#FF6B2C]">
              Delivering Absolute Certainty.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 max-w-xl text-base md:text-lg lg:text-xl font-sans font-light leading-relaxed"
          >
            Experience transparent pricing, zero delays, and real-time project tracking from foundation to handover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="px-8 py-4 bg-[#FF6B2C] hover:bg-white hover:text-[#07152E] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Calculate Cost</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center">
              View Portfolio
            </button>
          </motion.div>
        </div>

        {/* Right Glassmorphism Estimator */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="bg-[#0D2248]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Cost Estimator</h3>
              <p className="text-slate-400 text-sm">Get an instant structural and finish estimate.</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#07152E]/50 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  >
                    <option value="" disabled>Select project city</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi NCR</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Plot Area (Sq.Ft)</label>
                <div className="relative">
                  <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    type="number" 
                    placeholder="e.g. 2400"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-[#07152E]/50 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Number of Floors</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <select 
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full bg-[#07152E]/50 border border-white/10 rounded-lg py-3.5 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  >
                    <option value="" disabled>Select floors</option>
                    <option value="1">G + 1 (2 Floors)</option>
                    <option value="2">G + 2 (3 Floors)</option>
                    <option value="3">G + 3 (4 Floors)</option>
                    <option value="4">G + 4 (5 Floors)</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-[#FF6B2C] hover:bg-white hover:text-[#07152E] text-white py-4 rounded-lg font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,44,0.3)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] mt-4">
                Get Instant Estimate
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
