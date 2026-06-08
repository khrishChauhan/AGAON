import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="py-24 bg-[#0D2248]/30 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div className="space-y-12">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Let's Build Something Great.</h1>
            <p className="text-slate-400 text-sm leading-relaxed">Reach out to our corporate teams for bespoke quotes, site visits, and comprehensive feasibility analysis.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center mr-4 shrink-0">
                <Phone className="w-4 h-4 text-[#FF6B2C]" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Phone Number</h4>
                <p className="text-white font-sans text-sm mt-1">+91 (022) 4800-AGAON</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center mr-4 shrink-0">
                <Mail className="w-4 h-4 text-[#FF6B2C]" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Email Address</h4>
                <p className="text-white font-sans text-sm mt-1">proposals@agaon.co.in</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center mr-4 shrink-0">
                <MapPin className="w-4 h-4 text-[#FF6B2C]" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Office Address</h4>
                <p className="text-white font-sans text-sm mt-1">Level 42, Agaon Tower, BKC, Mumbai 400051</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center mr-4 shrink-0">
                <Clock className="w-4 h-4 text-[#FF6B2C]" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Business Hours</h4>
                <p className="text-white font-sans text-sm mt-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md w-full sm:w-auto text-center">
              Download Home Construction Guide
            </button>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-[#07152E]/80 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2C]/5 blur-3xl rounded-full" />
          
          <h3 className="font-display text-2xl font-bold text-white mb-8 relative z-10">Submit Inquiry</h3>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Full Name</label>
              <input type="text" className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FF6B2C] transition-colors" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Phone Number</label>
              <input type="tel" className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FF6B2C] transition-colors" placeholder="+91 98765 43210" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Project Type</label>
              <select className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#FF6B2C] transition-colors">
                <option>Residential Construction</option>
                <option>Commercial Tower</option>
                <option>Facade Engineering</option>
                <option>Interior Architecture</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Message</label>
              <textarea rows={4} className="w-full bg-[#0D2248]/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FF6B2C] transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[#FF6B2C] hover:bg-white hover:text-[#07152E] text-white py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,44,0.3)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
