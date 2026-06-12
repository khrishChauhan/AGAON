import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Desai",
    role: "Project Director",
    location: "Mumbai",
    text: "Working with Agaon transformed our ambitious vision into a tangible reality. Their BIM integration and collision-free pipeline saved us millions in potential rework.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Vikram Mehta",
    role: "Chief Architect",
    location: "Bangalore",
    text: "The precision Agaon brings to structural execution is unmatched in the subcontinent. They are true partners in navigating complex infrastructural challenges.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    location: "NCR",
    text: "From estuarine bridges to high-density server farms, Agaon’s versatility and commitment to zero-compromise safety standards make them our primary contractor.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
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
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateDimension = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distance = trackWidth - viewportWidth;
        setScrollRange(Math.max(0, distance));
        console.log({
          trackWidth,
          viewportWidth,
          scrollRange: Math.max(0, distance),
        });
      }
    };
    
    // Delay slightly to ensure fonts and layout settle
    const timeout = setTimeout(updateDimension, 150);
    
    const observer = new ResizeObserver(updateDimension);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    window.addEventListener("resize", updateDimension);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateDimension);
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  
  const x = useTransform(scrollYProgress, (value) => -value * scrollRange);

  return (
    <>
      {/* DESKTOP HORIZONTAL SCROLL */}
      <section 
        ref={sectionRef} 
        className="hidden md:block relative bg-[#EAE0CF]"
        style={{ height: `calc(100vh + ${scrollRange}px)` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Subtle Premium Background Texture */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: ` linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px) `,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/50 blur-[100px] pointer-events-none rounded-full" />
          
          <motion.div ref={trackRef} style={{ x }} className="relative z-10 flex shrink-0 flex-nowrap items-center pl-6 lg:pl-16 pr-12 lg:pr-24 w-max gap-8 lg:gap-16">
            {/* Intro Section Header */}
            <div className="w-[85vw] lg:w-[45vw] flex flex-col items-start justify-center shrink-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-[1px] bg-[#4B5694]" />
                <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
                  CLIENT STORIES
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-7xl text-[#111844] font-extrabold tracking-tight">
                What Our Clients Say
              </h2>
            </div>
            
            {/* Testimonials */}
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-[85vw] lg:w-[50vw] xl:w-[45vw] flex flex-col items-center text-center shrink-0">
                 <div className="relative text-[#7288AE]/5 z-0 transform -translate-y-12 mb-[-80px]">
                   <Quote className="w-40 h-40 fill-current" />
                 </div>
                 <h3 className="font-display text-2xl lg:text-4xl text-[#111844] font-medium leading-relaxed mb-12 px-4 lg:px-8">
                   "{testimonial.text}"
                 </h3>
                 <div className="flex flex-col items-center">
                   <div className="w-20 h-20 rounded-full p-1 border-2 border-[#111844]/10 mb-6 bg-white shadow-xl shadow-black/5">
                     <img
                       src={testimonial.image}
                       alt={testimonial.name}
                       loading="lazy"
                       referrerPolicy="no-referrer"
                       className="w-full h-full rounded-full object-cover"
                     />
                   </div>
                   <span className="font-display text-xl text-[#111844] font-bold mb-1">
                     {testimonial.name}
                   </span>
                   <span className="font-sans text-sm text-[#7288AE]/50 font-bold uppercase tracking-widest">
                     {testimonial.role} <span className="mx-2 opacity-50">|</span> {testimonial.location}
                   </span>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERTICAL CAROUSEL */}
      <section className="md:hidden py-32 bg-gradient-to-b from-[#EAE0CF] to-white relative overflow-hidden flex flex-col justify-center">
        {/* Subtle Premium Background Texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: ` linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px) `,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/50 blur-[100px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
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
              <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
                CLIENT STORIES
              </span>
              <div className="w-8 h-[1px] bg-[#4B5694]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl text-[#111844] font-extrabold tracking-tight"
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
                <h3 className="font-display text-2xl text-[#111844] font-medium leading-relaxed mb-12 max-w-3xl">
                  "{testimonials[currentIndex].text}"
                </h3>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full p-1 border-2 border-[#111844]/10 mb-6 bg-white shadow-xl shadow-black/5">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="font-display text-xl text-[#111844] font-bold mb-1">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="font-sans text-sm text-[#7288AE]/50 font-bold uppercase tracking-widest">
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-[#4B5694] w-6" : "bg-[#111844]/20 hover:bg-[#111844]/40"}`}
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
    </>
  );
}
