import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Building2, MapPin, Layers, ArrowRight } from "lucide-react";

export default function Hero() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("");

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#EAE0CF] flex items-center">
      <motion.div style={{ y }} className="absolute top-0 right-0 w-full lg:w-1/2 h-[120%] -mt-[10%] lg:h-[120%] z-0 lg:block hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Architecture"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-12 lg:pt-0">
        {" "}
        {/* Left Content */}{" "}
        <div className="lg:col-span-6 space-y-10">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3"
          >
            {" "}
            <div className="w-8 h-[1px] bg-[#4B5694]" />{" "}
            <span className="font-sans text-sm tracking-widest text-[#111844] uppercase font-bold">
              {" "}
              The Smart Way To Build Your Dream Home{" "}
            </span>{" "}
          </motion.div>{" "}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight leading-[1.05] text-[#111844]"
          >
            {" "}
            Engineering Your Vision.
            <br />{" "}
            <span className="text-[#4B5694] font-extrabold font-medium pr-4">
              {" "}
              Delivering Certainty.{" "}
            </span>{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#7288AE]/70 max-w-lg text-lg font-sans font-light leading-relaxed"
          >
            {" "}
            Experience transparent pricing, zero delays, and real-time project
            tracking from foundation to handover.{" "}
          </motion.p>{" "}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            {" "}
            <button className="px-8 py-4 bg-[#111844] text-white font-sans font-bold text-sm uppercase tracking-wider rounded-none transition-colors hover:bg-[#4B5694] flex items-center justify-center space-x-3 group">
              {" "}
              <span>Calculate Cost</span>{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
            </button>{" "}
            <button className="px-8 py-4 bg-transparent border border-[#111844]/20 text-[#111844] font-sans font-bold text-sm uppercase tracking-wider rounded-none transition-colors hover:border-[#111844] flex items-center justify-center">
              {" "}
              View Portfolio{" "}
            </button>{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* Right Form Overlay */}{" "}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 lg:col-start-8 relative mt-12 lg:mt-0"
        >
          {" "}
          <div className="bg-white p-10 md:p-12 shadow-2xl border border-gray-100 relative">
            {" "}
            {/* Architectural accent */}{" "}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#4B5694] -mt-4 -mr-4 opacity-50 hidden lg:block" />{" "}
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#111844] -mb-4 -ml-4 opacity-10 hidden lg:block" />{" "}
            <div className="mb-10">
              {" "}
              <h3 className="font-display text-3xl font-bold text-[#111844] mb-3">
                Cost Estimator
              </h3>{" "}
              <p className="text-[#7288AE]/60 text-sm font-sans">
                Get an instant structural and finish estimate.
              </p>{" "}
            </div>{" "}
            <div className="space-y-6">
              {" "}
              <div className="space-y-2">
                {" "}
                <label className="text-sm font-sans uppercase tracking-wider text-[#111844] font-bold">
                  City
                </label>{" "}
                <div className="relative">
                  {" "}
                  <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5694]" />{" "}
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-b border-[#111844]/20 py-3 pl-8 pr-4 text-[#111844] appearance-none focus:outline-none focus:border-[#4B5694] transition-colors rounded-none cursor-pointer"
                  >
                    {" "}
                    <option value="" disabled>
                      Select project city
                    </option>{" "}
                    <option value="mumbai">Mumbai</option>{" "}
                    <option value="delhi">Delhi NCR</option>{" "}
                    <option value="bangalore">Bangalore</option>{" "}
                    <option value="hyderabad">Hyderabad</option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <div className="space-y-2">
                {" "}
                <label className="text-sm font-sans uppercase tracking-wider text-[#111844] font-bold">
                  Plot Area (Sq.Ft)
                </label>{" "}
                <div className="relative">
                  {" "}
                  <Layers className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5694]" />{" "}
                  <input
                    type="number"
                    placeholder="e.g. 2400"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-transparent border-b border-[#111844]/20 py-3 pl-8 pr-4 text-[#111844] focus:outline-none focus:border-[#4B5694] transition-colors rounded-none placeholder:text-[#7288AE]/30"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="space-y-2">
                {" "}
                <label className="text-sm font-sans uppercase tracking-wider text-[#111844] font-bold">
                  Number of Floors
                </label>{" "}
                <div className="relative">
                  {" "}
                  <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5694]" />{" "}
                  <select
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full bg-transparent border-b border-[#111844]/20 py-3 pl-8 pr-4 text-[#111844] appearance-none focus:outline-none focus:border-[#4B5694] transition-colors rounded-none cursor-pointer"
                  >
                    {" "}
                    <option value="" disabled>
                      Select floors
                    </option>{" "}
                    <option value="1">G + 1 (2 Floors)</option>{" "}
                    <option value="2">G + 2 (3 Floors)</option>{" "}
                    <option value="3">G + 3 (4 Floors)</option>{" "}
                    <option value="4">G + 4 (5 Floors)</option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <button className="w-full bg-[#111844] hover:bg-[#4B5694] text-white py-4 mt-8 rounded-none font-sans font-bold text-sm uppercase tracking-wider transition-colors duration-300">
                {" "}
                Get Instant Estimate{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
