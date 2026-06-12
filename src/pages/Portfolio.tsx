import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
const portfolioData = [
  {
    id: 1,
    category: "Residential",
    name: "The Sapphire Residence",
    location: "Bandra West, Mumbai",
    area: "12,500 Sq.Ft.",
    duration: "18 Months",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Commercial",
    name: "Agaon Tech Park Phase II",
    location: "Cyber City, Gurgaon",
    area: "450,000 Sq.Ft.",
    duration: "24 Months",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Institutional",
    name: "Vedic Research Institute",
    location: "Pune, Maharashtra",
    area: "85,000 Sq.Ft.",
    duration: "14 Months",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Residential",
    name: "Oasis Luxury Villas",
    location: "Alibaug",
    area: "34,000 Sq.Ft.",
    duration: "20 Months",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Commercial",
    name: "Meridian Corporate HQ",
    location: "BKC, Mumbai",
    area: "120,000 Sq.Ft.",
    duration: "16 Months",
    image:
      "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Institutional",
    name: "Global Medical Campus",
    location: "Whitefield, Bangalore",
    area: "250,000 Sq.Ft.",
    duration: "22 Months",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
];
const filters = ["All", "Residential", "Commercial", "Institutional"];
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-24 bg-[#EAE0CF] min-h-screen"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {" "}
        {/* Header */}{" "}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          {" "}
          <div className="max-w-2xl">
            {" "}
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-[0.3em] block mb-6">
              {" "}
              Our Legacy{" "}
            </span>{" "}
            <h1 className="font-display text-[clamp(2.5rem,10vw,4.5rem)] font-extrabold text-[#111844] tracking-tight leading-[1.05]">
              {" "}
              Execution
              <br />{" "}
              <span className="font-extrabold font-medium text-[#4B5694]">
                Portfolio.
              </span>{" "}
            </h1>{" "}
          </div>{" "}
          <div className="flex overflow-x-auto w-full md:w-auto gap-x-6 gap-y-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {" "}
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-sm whitespace-nowrap shrink-0 uppercase font-bold tracking-widest pb-1 border-b transition-all duration-300 cursor-pointer ${activeFilter === f ? "border-[#111844] text-[#111844]" : "border-transparent text-[#7288AE] hover:text-[#111844]"}`}
              >
                {" "}
                {f}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Gallery */}{" "}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          {" "}
          <AnimatePresence>
            {" "}
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={project.id}
                className="group cursor-pointer flex flex-col"
              >
                {" "}
                {/* Image */}{" "}
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  {" "}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1s] ease-out"
                  />
                  <div className="absolute inset-0 bg-[#111844] opacity-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />{" "}
                </div>{" "}
                {/* Details */}{" "}
                <div className="flex flex-col flex-grow">
                  {" "}
                  <div className="flex items-center justify-between mb-4">
                    {" "}
                    <span className="font-sans text-sm uppercase tracking-widest text-[#111844] font-bold">
                      {" "}
                      {project.category}{" "}
                    </span>{" "}
                    <span className="font-sans text-sm uppercase tracking-widest text-[#4B5694]">
                      {" "}
                      {project.location}{" "}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-display text-3xl font-bold text-[#111844] mb-6 group-hover:text-[#4B5694] transition-colors">
                    {project.name}
                  </h3>{" "}
                  <div className="mt-auto border-t border-[#111844]/10 pt-4 flex items-center justify-between">
                    {" "}
                    <div>
                      {" "}
                      <span className="block font-sans text-sm text-[#4B5694] tracking-widest uppercase mb-1">
                        Scale
                      </span>{" "}
                      <span className="block font-display text-[#111844]">
                        {project.area}
                      </span>{" "}
                    </div>{" "}
                    <div className="w-8 h-8 rounded-full border border-[#111844]/20 flex items-center justify-center group-hover:bg-[#111844] group-hover:text-white text-[#111844] transition-colors">
                      {" "}
                      <ArrowRight className="w-3 h-3" />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </AnimatePresence>{" "}
        </motion.div>{" "}
      </div>{" "}
    </motion.div>
  );
}
