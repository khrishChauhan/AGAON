import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Layers, ExternalLink } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    category: 'Residential',
    name: 'The Sapphire Residence',
    location: 'Bandra West, Mumbai',
    area: '12,500 Sq.Ft.',
    duration: '18 Months',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Commercial',
    name: 'Agaon Tech Park Phase II',
    location: 'Cyber City, Gurgaon',
    area: '450,000 Sq.Ft.',
    duration: '24 Months',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'Institutional',
    name: 'Vedic Research Institute',
    location: 'Pune, Maharashtra',
    area: '85,000 Sq.Ft.',
    duration: '14 Months',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'Residential',
    name: 'Oasis Luxury Villas',
    location: 'Alibaug',
    area: '34,000 Sq.Ft.',
    duration: '20 Months',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'Commercial',
    name: 'Meridian Corporate HQ',
    location: 'BKC, Mumbai',
    area: '120,000 Sq.Ft.',
    duration: '16 Months',
    image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'Institutional',
    name: 'Global Medical Campus',
    location: 'Whitefield, Bangalore',
    area: '250,000 Sq.Ft.',
    duration: '22 Months',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
  }
];

const filters = ['All', 'Residential', 'Commercial', 'Institutional'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      <div className="py-24 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Execution Portfolio</h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">Explore our gallery of completed structural assets across various sectors.</p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold transition-all ${
                activeFilter === f 
                  ? 'bg-[#FF6B2C] text-white' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-[#0D2248]/40 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF6B2C]/30 transition-colors"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152E] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 bg-[#FF6B2C] text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-[#FF6B2C] transition-colors">{project.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-slate-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-xs text-slate-400 font-mono">
                      <Layers className="w-3.5 h-3.5 mr-2 text-slate-500" />
                      {project.area}
                    </div>
                    <div className="flex items-center text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-slate-500" />
                      {project.duration}
                    </div>
                  </div>
                </div>

                {/* Hover overlay icon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
