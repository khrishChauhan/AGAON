import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Desai',
    role: 'Director, Nexus Tech Park',
    location: 'Gurugram',
    text: 'The structural integrity and facade work done by Agaon for our tech park was exceptional. Their team handled everything from planning to final handover with complete professionalism.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Rahul Mehta',
    role: 'Homeowner',
    location: 'Mumbai',
    text: 'We wanted a premium home without the usual contractor headaches. Agaon delivered exactly what was promised, on time and within budget.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Priya Sharma',
    role: 'Villa Owner',
    location: 'Pune',
    text: 'The real-time project tracking gave us confidence throughout construction. We could monitor progress from anywhere.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Vikram Khanna',
    role: 'Business Owner',
    location: 'Bengaluru',
    text: 'The transparency in pricing and execution was unlike anything we had experienced before in the construction industry.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#EAE0CF] to-white relative overflow-hidden flex flex-col justify-center">
      {/* Subtle Premium Background Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#111844 1px, transparent 1px),
            linear-gradient(90deg, #111844 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/50 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#4B5694]" />
            <span className="text-[#4B5694] text-xs font-bold uppercase tracking-[0.2em]">
              CLIENT STORIES
            </span>
            <div className="w-8 h-[1px] bg-[#4B5694]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-[#111844] font-bold tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative w-full min-h-[400px] flex flex-col items-center justify-center">
          <div className="absolute top-0 text-[#7288AE]/5 z-0 transform -translate-y-12">
            <Quote className="w-40 h-40 fill-current" />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction * -40, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full flex flex-col items-center"
            >
              <h3 className="font-display text-2xl md:text-4xl lg:text-4xl text-[#111844] font-medium leading-relaxed mb-12 max-w-3xl">
                "{testimonials[currentIndex].text}"
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full p-1 border-2 border-[#111844]/10 mb-6 bg-white shadow-xl shadow-black/5">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="font-display text-xl text-[#111844] font-bold mb-1">{testimonials[currentIndex].name}</span>
                <span className="font-sans text-xs text-[#7288AE]/50 font-bold uppercase tracking-[0.2em]">
                  {testimonials[currentIndex].role} <span className="mx-2 opacity-50">|</span> {testimonials[currentIndex].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-6 mt-16">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-[#111844]/20 flex items-center justify-center text-[#7288AE]/50 hover:bg-[#111844] hover:border-[#111844] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <ChevronLeft className="w-5 h-5 ml-[-2px]" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-[#4B5694] w-6' 
                    : 'bg-[#111844]/20 hover:bg-[#111844]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-[#111844]/20 flex items-center justify-center text-[#7288AE]/50 hover:bg-[#111844] hover:border-[#111844] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <ChevronRight className="w-5 h-5 mr-[-2px]" />
          </button>
        </div>

      </div>
    </section>
  );
}
