import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajendra Kumar',
    location: 'Mumbai, Maharashtra',
    text: 'Agaon Construction delivered our commercial complex exactly on time and completely within budget. Their tracking app gave me total peace of mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Anjali Sharma',
    location: 'Delhi NCR',
    text: 'Building my dream home was stress-free thanks to Agaon. The 3D VR sessions before construction started helped us visualize every detail perfectly.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Dr. Subramaniam',
    location: 'Bangalore, Karnataka',
    text: 'Their commitment to quality is unmatched. The 500+ point inspection reports we received at every milestone proved their dedication to absolute certainty.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#07152E] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D2248]/60 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <Quote className="w-12 h-12 text-[#FF6B2C]/20 mx-auto mb-8" />
        
        <div className="h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <p className="font-display text-2xl md:text-4xl text-white font-medium leading-tight mb-10">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div className="text-left">
                  <h4 className="font-sans font-bold text-white text-sm">{testimonials[currentIndex].name}</h4>
                  <span className="font-mono text-[10px] text-[#FF6B2C] uppercase tracking-widest">{testimonials[currentIndex].location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center space-x-4">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF6B2C] hover:border-[#FF6B2C] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF6B2C] hover:border-[#FF6B2C] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
