import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#07152E] border-t border-white/10 pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF6B2C] flex items-center justify-center rounded-sm font-bold text-[#07152E]">
                A
              </div>
              <span className="text-xl font-semibold tracking-widest uppercase text-white">
                Agaon <span className="font-light opacity-60">Construction</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Engineering Your Vision. Delivering Absolute Certainty. The smart way to build premium generational spaces.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B2C] font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B2C] font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Residential Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Towers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facade Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Architecture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B2C] font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Cost Estimator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VR Experiences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>&copy; 2026 Agaon Construction. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Social Media</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
