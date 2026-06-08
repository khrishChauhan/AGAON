import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: 'residential',
    title: 'Residential Construction',
    subtitle: 'Bespoke Luxury Homes & Private Estates',
    description: 'We construct highly personalized, generational residential assets. From vast suburban estates to ultra-modern smart homes, our residential structures are built to exceed international quality standards with premium finishes and robust underlying engineering.',
    features: ['Vastu Compliant Layouts', 'Smart Home Integration', 'Energy Efficient Envelopes', 'Premium Imported Finishes'],
    deliverables: 'Turnkey architectural delivery including custom millwork, lighting, HVAC, and landscape integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    reverse: false
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    subtitle: 'High-Performance Corporate Assets',
    description: 'Complex commercial projects demand absolute adherence to timelines and specialized civil engineering. We deliver sustainable, tech-integrated office parks, retail centers, and high-rise structures optimized for modern enterprise use cases.',
    features: ['Grade-A Technical Specs', 'Post-Tension Slabs', 'High-speed Elevators', 'Advanced Fire Suppression Base'],
    deliverables: 'Core & Shell or complete fit-out delivery with LEED certification compliance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    reverse: true
  },
  {
    id: 'facade',
    title: 'Facade Engineering',
    subtitle: 'High-Performance Structural Envelopes',
    description: 'The exterior envelope is the critical interface between the environment and the structure. We design and install advanced kinetic glazing, ventilated facades, and energy-efficient skins that define the aesthetic and performative qualities of the building.',
    features: ['Unitized Glazing Systems', 'Thermal Break Technology', 'Acoustic Insulation', 'Parametric Designs'],
    deliverables: 'End-to-end design, load testing, fabrication logistics, and site installation of the complete building skin.',
    image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=1200&q=80',
    reverse: false
  },
  {
    id: 'interior',
    title: 'Interior Architecture',
    subtitle: 'Immersive Spatial Ecosystems',
    description: 'Going beyond basic fit-outs, our interior architecture division harmonizes structural integrity with ergonomic design. We craft interior spaces that elevate human experience through meticulous material selection and layout acoustics.',
    features: ['Custom Acoustic Paneling', 'Bespoke Millwork', 'Integrated Automation', 'Curated Lighting Systems'],
    deliverables: 'Fully integrated, move-in ready interior spaces executed to millimeter precision matching exact 3D renders.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    reverse: true
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="py-24 text-center bg-[#0D2248]/30 border-b border-white/5">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Comprehensive construction solutions covering every phase of development from foundational civil work to bespoke interior finishes.</p>
      </div>

      {sections.map((section, idx) => (
        <section key={section.id} className={`py-24 border-b border-white/5 ${section.reverse ? 'bg-[#07152E]' : 'bg-[#0D2248]/10'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: section.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`space-y-8 ${section.reverse ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <div>
                <span className="text-[#FF6B2C] font-mono text-xs uppercase tracking-widest font-bold block mb-3">{section.subtitle}</span>
                <h2 className="font-display text-4xl font-bold text-white">{section.title}</h2>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {section.description}
              </p>

              <div>
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-widest mb-4">Core Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B2C] mr-3 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-widest mb-2">Final Deliverable</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{section.deliverables}</p>
              </div>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: section.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative h-[500px] rounded-2xl overflow-hidden ${section.reverse ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <img 
                src={section.image} 
                alt={section.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152E]/80 to-transparent" />
            </motion.div>

          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-32 text-center bg-[#FF6B2C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to initiate your build?</h2>
          <p className="text-white/90 mb-10">Consult with our structural engineering team for an exact project feasibility analysis.</p>
          <button className="px-8 py-4 bg-white text-[#07152E] font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-slate-100 transition-colors shadow-xl">
            Schedule Technical Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
