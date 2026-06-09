import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    category: 'Architecture',
    description: 'Bespoke luxury estates and smart homes engineered for generational durability. We view residential construction not merely as building shelters, but creating deeply personal, lasting environments.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    delay: 0.1
  },
  {
    title: 'Commercial Build',
    category: 'Infrastructure',
    description: 'High-performance corporate assets, retail spaces, and intelligent office environments. Built strictly to schedule with uncompromising structural integrity and modern efficiency standards.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    delay: 0.2
  },
  {
    title: 'Facade Engineering',
    category: 'Exterior',
    description: 'Aerodynamic, multi-climate structural envelopes utilizing advanced kinetic glazing. The skin of the structure defines both its aesthetic signature and its thermodynamic efficiency.',
    image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=1200&q=80',
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-[#EAE0CF] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#111844] mb-6">
              Sectors of Expertise.
            </h2>
            <p className="text-[#7288AE]/70 font-sans text-lg font-light leading-relaxed">
              We bring software-level precision to physical structures. Our divisions operate with extreme accountability across three core construction disciplines.
            </p>
          </div>
          <button className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#111844] border-b border-[#111844] pb-1 hover:text-[#4B5694] hover:border-[#4B5694] transition-colors">
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: service.delay }}
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Block */}
              <div className="w-full lg:w-1/2 overflow-hidden bg-[#111844] relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-[#4B5694] font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-6 block">
                  0{idx + 1} // {service.category}
                </span>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-[#111844] mb-6">
                  {service.title}
                </h3>
                <p className="text-[#7288AE]/70 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                  {service.description}
                </p>
                
                <button className="self-start relative group pb-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#111844] group-hover:text-[#4B5694] transition-colors">Explore Division</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111844]/20">
                    <div className="absolute top-0 left-0 h-full bg-[#4B5694] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
