import React from 'react';
import { Glasses } from 'lucide-react';

export default function VRCta() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center text-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888086925-081eb5d064dd?auto=format&fit=crop&w=2400&q=80"
          alt="VR Visualization"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07152E] via-[#07152E]/80 to-[#07152E]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm">
          <Glasses className="w-8 h-8 text-[#FF6B2C]" />
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          See The Future. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B2C]">Literally.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-xl">
          Experience your project in high-definition Virtual Reality before a single brick is laid. Walk through rooms, feel the dimensions, and approve finishes.
        </p>
        
        <button className="px-10 py-5 bg-[#FF6B2C] hover:bg-white hover:text-[#07152E] text-white font-sans font-bold text-sm uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_10px_30px_rgba(255,107,44,0.3)]">
          Book VR Consultation
        </button>
      </div>
    </section>
  );
}
