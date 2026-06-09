import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Glasses } from 'lucide-react';

export default function VRCta() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-[-10%] z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400"
          alt="Luxury Modern Residence Evening VR Visualization"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111844] via-[#111844]/60 to-transparent opacity-90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111844]/80 via-transparent to-[#111844]/80" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,24,68,0.6)_100%)]" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(255,107,44,0.15)] mb-8"
        >
          <Glasses className="w-8 h-8 text-[#4B5694]" strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
        >
          See the Future.<br />
          <span className="text-white/60 italic font-light">Literally.</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mb-12"
        >
          Take a test drive of your home in Virtual Reality before a single brick is laid.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="relative inline-block group"
        >
          {/* Subtle glow effect around button */}
          <div className="absolute inset-[-4px] bg-gradient-to-r from-[#4B5694] to-[#7288AE] rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 pointer-events-none" />
          
          <button className="relative px-10 py-5 bg-white rounded-none overflow-hidden flex items-center space-x-6 border border-transparent hover:border-[#4B5694]/50 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_40px_rgba(255,107,44,0.2)] transform group-hover:-translate-y-1">
            {/* Button Hover Background Reveal */}
            <div className="absolute inset-0 bg-[#111844] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <span className="relative z-10 font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#111844] group-hover:text-white transition-colors duration-300">
              BOOK A VR CONSULTATION
            </span>
            
            <div className="relative z-10 w-8 h-8 rounded-full bg-[#111844]/5 group-hover:bg-[#4B5694] flex items-center justify-center transition-colors duration-500">
              <ArrowRight className="w-4 h-4 text-[#111844] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
