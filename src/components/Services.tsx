import React from 'react';
import { motion } from 'motion/react';
import { Home, Building, PencilRuler, Component } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    description: 'Bespoke luxury estates and smart homes engineered for generational durability.',
    icon: Home,
    delay: 0.1
  },
  {
    title: 'Commercial Construction',
    description: 'High-performance corporate assets, retail spaces, and intelligent office environments.',
    icon: Building,
    delay: 0.2
  },
  {
    title: 'Facade Engineering',
    description: 'Aerodynamic, multi-climate structural envelopes utilizing advanced kinetic glazing.',
    icon: Component,
    delay: 0.3
  },
  {
    title: 'Interior Architecture',
    description: 'Immersive, ergonomically optimized internal environments with premium finishes.',
    icon: PencilRuler,
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0D2248]/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF6B2C] text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Our Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Comprehensive Construction Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              key={idx}
              className="group bg-[#07152E]/60 backdrop-blur-md p-8 rounded-xl border border-white/5 hover:border-[#FF6B2C]/50 hover:bg-[#07152E] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/5 group-hover:bg-[#FF6B2C]/10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-white group-hover:text-[#FF6B2C] transition-colors duration-300" />
              </div>
              <h3 className="font-sans font-bold text-lg text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
