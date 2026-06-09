import React from "react";
import { motion } from "motion/react";
import {
  Home,
  Lightbulb,
  Grid,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
const solutions = [
  {
    title: "Residential",
    description: "Turnkey foundation-to-finish home building.",
    icon: Home,
    delay: 0.1,
  },
  {
    title: "Commercial",
    description: "Scalable solutions for clinics, schools, and offices.",
    icon: LayoutDashboard,
    delay: 0.2,
  },
  {
    title: "Facade",
    description: "Specialized exterior treatments & structural glazing.",
    icon: Grid,
    delay: 0.3,
  },
  {
    title: "Interior",
    description: "Custom woodwork, lighting, and spatial planning.",
    icon: Lightbulb,
    delay: 0.4,
  },
];
export default function ComprehensiveSolutions() {
  return (
    <section className="relative py-32 bg-[#111844] overflow-hidden">
      {" "}
      {/* Blueprint / Architectural Grid Background */}{" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: ` linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px) `,
          backgroundSize: "40px 40px",
        }}
      />{" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: ` linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px) `,
          backgroundSize: "200px 200px",
        }}
      />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {" "}
        <div className="text-center max-w-3xl mx-auto mb-24">
          {" "}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            {" "}
            Comprehensive Solutions{" "}
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/60 font-sans text-lg lg:text-xl font-light leading-relaxed"
          >
            {" "}
            We manage the complete lifecycle of your project—from architectural
            conception to final interior execution.{" "}
          </motion.p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative bg-[#111844] p-10 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden flex flex-col h-full cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 ease-out"
            >
              {" "}
              {/* Subtle architectural hover line */}{" "}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4B5694] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />{" "}
              <div className="mb-10 text-white/40 group-hover:text-[#4B5694] transition-colors duration-500 transform group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                {" "}
                <solution.icon className="w-8 h-8" strokeWidth={1} />{" "}
              </div>{" "}
              <div className="flex-grow flex flex-col justify-end">
                {" "}
                <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-[#4B5694] transition-colors duration-300">
                  {" "}
                  {solution.title}{" "}
                </h3>{" "}
                <p className="text-white/50 font-sans text-sm tracking-wide leading-relaxed mb-10 group-hover:text-white/70 transition-colors duration-300">
                  {" "}
                  {solution.description}{" "}
                </p>{" "}
                <div className="mt-auto self-start relative inline-flex items-center space-x-2 pb-1 overflow-hidden group/link">
                  {" "}
                  <span className="font-sans text-sm uppercase tracking-widest font-bold text-white group-hover:text-[#4B5694] transition-colors">
                    {" "}
                    Explore{" "}
                  </span>{" "}
                  <ArrowRight className="w-3 h-3 text-white group-hover:text-[#4B5694] transition-all transform group-hover:translate-x-1" />{" "}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20">
                    {" "}
                    <div className="absolute top-0 left-0 h-full bg-[#4B5694] w-0 group-hover:w-full transition-all duration-500 ease-out" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
