import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function Estimator() {
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [floors, setFloors] = useState('');
  const [grade, setGrade] = useState('Standard');

  // Simple stub calculation
  const calculatedCost = (Number(area) || 0) * (Number(floors) || 1) * (grade === 'Premium' ? 4500 : grade === 'Luxury' ? 6500 : 3000);

  return (
    <div className="pt-20">
      <div className="py-24 text-center bg-[#0D2248]/30">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Construction Cost Estimator</h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">Get an instant, data-driven civil estimation based on current material indices and labor costs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Calculator Form */}
          <div className="lg:col-span-8 bg-[#07152E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="font-display text-2xl font-bold text-white flex items-center mb-10 pb-6 border-b border-white/5">
              <Calculator className="w-6 h-6 mr-3 text-[#FF6B2C]" />
              Project Parameters
            </h2>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Project City</label>
                  <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-4 px-5 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  >
                    <option value="" disabled>Select City</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi NCR</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Total Plot Area (Sq.Ft.)</label>
                  <input 
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 2400"
                    className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-4 px-5 text-white focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Number of Floors</label>
                  <select 
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-4 px-5 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  >
                    <option value="" disabled>Select Floors</option>
                    <option value="1">G + 1</option>
                    <option value="2">G + 2</option>
                    <option value="3">G + 3</option>
                    <option value="4">G + 4</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Construction Grade</label>
                  <select 
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-4 px-5 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors"
                  >
                    <option value="Standard">Standard Finishes</option>
                    <option value="Premium">Premium Imported</option>
                    <option value="Luxury">Ultra Luxury Custom</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 rounded-xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B2C]/20 blur-3xl rounded-full" />
              <span className="font-mono text-xs text-[#FF6B2C] tracking-widest uppercase font-bold block mb-2">Estimated Turnkey Cost</span>
              <span className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {calculatedCost > 0 ? `₹${(calculatedCost / 10000000).toFixed(2)} Cr` : '₹ 0.00'}
              </span>
              <p className="text-slate-400 text-[10px] mt-4 font-mono uppercase">Includes architectural design, raw civil structure, and selected grade finishes.</p>
            </div>
          </div>

          {/* Right Side Panel */}
          <div className="lg:col-span-4 bg-[#0D2248]/40 border border-white/10 rounded-2xl p-8">
            <h3 className="font-sans text-sm tracking-widest uppercase font-bold text-white mb-8 pb-4 border-b border-white/10">What's Included</h3>
            <ul className="space-y-5">
              {[
                'Architectural Design',
                'Structural Engineering',
                'Branded Materials',
                'Plumbing Systems',
                'Electrical Systems',
                'Interior Finishing',
                'Dedicated Project Manager'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full mt-10 bg-white text-[#07152E] uppercase font-bold text-[10px] tracking-widest py-4 rounded-sm hover:bg-[#FF6B2C] hover:text-white transition-colors">
              Request Detailed BoQ
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
