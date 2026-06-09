import React from "react";
import { motion } from "motion/react";
export default function About() {
  return (
    <div className="pt-24 pb-32 bg-gradient-to-b from-[#EAE0CF] to-white min-h-screen relative overflow-hidden">
      {" "}
      {/* Subtle background luxury texturing */}{" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: ` linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px) `,
          backgroundSize: "40px 40px",
        }}
      />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {" "}
        {/* Header Section */}{" "}
        <header className="py-20 md:py-28 max-w-4xl">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-3 mb-6"
          >
            {" "}
            <div className="w-12 h-[1px] bg-[#4B5694]" />{" "}
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
              ABOUT OUR MISSION
            </span>{" "}
          </motion.div>{" "}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-[#111844] leading-[1.1] mb-10"
          >
            {" "}
            Structuring the
            <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111844] to-[#4B5694]/80 font-light">
              Unorganized.
            </span>{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-xl md:text-2xl text-[#7288AE]/80 font-light leading-relaxed max-w-2xl"
          >
            {" "}
            Agaon Construction is on a mission to bring transparency,
            systematized workflows, and software-level precision to the Indian
            construction sector.{" "}
          </motion.p>{" "}
        </header>{" "}
        {/* Elegant Split Layout */}{" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pt-12 border-t border-[#111844]/10">
          {" "}
          {/* Left: Beautiful Architectural Frame & Image */}{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-6 relative group"
          >
            {" "}
            <div className="absolute inset-0 bg-[#4B5694]/5 translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />{" "}
            <div className="relative border border-[#111844]/10 bg-white p-3 md:p-4 shadow-[0_25px_60px_rgba(17,24,68,0.08)]">
              {" "}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Premium Luxury Residence Architectural Detailing"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111844]/20 to-transparent pointer-events-none" />{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* Right: Vision & Metrics Section */}{" "}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-16">
            {" "}
            {/* Vision Segment */}{" "}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              {" "}
              <div className="flex items-center space-x-3">
                {" "}
                <span className="font-sans text-sm uppercase font-bold text-[#4B5694] tracking-[0.20em]">
                  01 &mdash; PHILOSOPHY
                </span>{" "}
              </div>{" "}
              <h2 className="font-display text-3xl md:text-4xl text-[#111844] font-medium tracking-tight">
                {" "}
                The Vision{" "}
              </h2>{" "}
              <div className="space-y-6 font-sans text-base md:text-lg text-[#7288AE]/70 font-light leading-relaxed">
                {" "}
                <p>
                  {" "}
                  We recognized a massive trust deficit in the traditional
                  contracting market.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Our goal is to transform construction from a stressful chore
                  into a premium, transparent experience.{" "}
                </p>{" "}
                <div className="pl-6 border-l-2 border-[#4B5694] text-[#111844] font-medium">
                  {" "}
                  We don't just build homes; we engineer peace of mind with our
                  proprietary 500+ point inspection protocol.{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
            {/* Metrics Segment */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="border-t border-[#111844]/10 pt-10"
            >
              {" "}
              <div className="flex items-center space-x-3 mb-8">
                {" "}
                <span className="font-sans text-sm uppercase font-bold text-[#4B5694] tracking-[0.20em]">
                  02 &mdash; ARCHITECTURAL METRICS
                </span>{" "}
              </div>{" "}
              <div className="grid grid-cols-2 gap-12">
                {" "}
                <div className="space-y-3">
                  {" "}
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111844] tracking-tight flex items-baseline">
                    {" "}
                    100%{" "}
                  </div>{" "}
                  <div className="w-10 h-[2px] bg-[#4B5694]" />{" "}
                  <span className="font-sans text-sm font-bold text-[#7288AE]/50 uppercase tracking-wider block">
                    {" "}
                    Transparent Pricing{" "}
                  </span>{" "}
                </div>{" "}
                <div className="space-y-3">
                  {" "}
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111844] tracking-tight flex items-baseline">
                    {" "}
                    0{" "}
                  </div>{" "}
                  <div className="w-10 h-[2px] bg-[#111844]/20" />{" "}
                  <span className="font-sans text-sm font-bold text-[#7288AE]/50 uppercase tracking-wider block">
                    {" "}
                    Budget Overruns{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
