import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Smartphone } from "lucide-react";
const bullets = [
  "Guaranteed Price Protection with penalty-backed delivery.",
  "Stage-wise transparent payments tied to actual progress.",
  "24/7 Real-time tracking via your dedicated Client Portal.",
];
export default function TechnologyAdvantage() {
  return (
    <section className="py-32 bg-[#111844] relative overflow-hidden">
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
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: ` radial-gradient(circle at 100% 0%, rgba(255, 107, 44, 0.15), transparent 40%), radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.05), transparent 40%) `,
        }}
      />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {" "}
          {/* Left Side: Content */}{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3 mb-6"
              >
                {" "}
                <div className="w-8 h-[1px] bg-[#4B5694]" />{" "}
                <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
                  {" "}
                  THE BUILDER-FOUNDER EDGE{" "}
                </span>{" "}
              </motion.div>{" "}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-8"
              >
                {" "}
                Built on Technology.
                <br />{" "}
                <span className="text-white/60 font-light">
                  Grounded in Reality.
                </span>{" "}
              </motion.h2>{" "}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 font-sans text-lg lg:text-xl font-light leading-relaxed max-w-lg"
              >
                {" "}
                Most contractors use technology just for marketing. At Agaon,
                technology is baked into our foundation. We bridge the gap
                between complex engineering and customer peace of mind.{" "}
              </motion.p>{" "}
            </div>{" "}
            <div className="space-y-6 pt-4 max-w-lg">
              {" "}
              {bullets.map((bullet, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  key={idx}
                  className="flex items-start space-x-4 group"
                >
                  {" "}
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#4B5694]/20 group-hover:border-[#4B5694]/50 transition-colors duration-300">
                    {" "}
                    <ShieldCheck
                      className="w-3 h-3 text-white/50 group-hover:text-[#4B5694] transition-colors"
                      strokeWidth={2}
                    />{" "}
                  </div>{" "}
                  <p className="text-white/80 text-base leading-relaxed font-sans">
                    {bullet}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Side: Image with Floating Card */}{" "}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:ml-auto w-full max-w-md lg:max-w-none ml-6 lg:ml-0"
          >
            {" "}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111844]/50 aspect-[4/5] lg:aspect-[3/4] shadow-[0_20px_60px_rgba(0,0,0,0.5)] group/img">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111844] via-transparent to-transparent z-10 opacity-70" />{" "}
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="Construction Site Engineering"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-105 group-hover/img:scale-100 transition-transform duration-[2s] ease-out"
              />{" "}
            </div>{" "}
            {/* Premium Floating Client App Card */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-6 lg:-left-16 bottom-[10%] bg-[#111844]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 flex items-center space-x-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:bg-[#111844]/80 transition-colors duration-500 overflow-hidden group/card z-20"
            >
              {" "}
              {/* Subtle background glow */}{" "}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-[#4B5694]/10 blur-2xl rounded-full pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />{" "}
              <div className="w-16 h-16 bg-[#4B5694] rounded-[20px] flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(255,107,44,0.4)] z-10 relative transition-transform duration-500 group-hover/card:scale-105">
                {" "}
                <Smartphone className="w-8 h-8 text-white stroke-[1.5]" />{" "}
              </div>{" "}
              <div className="z-10 relative">
                {" "}
                <p className="font-display text-2xl font-bold text-white tracking-tight leading-none mb-2 group-hover/card:text-[#4B5694] transition-colors duration-300">
                  {" "}
                  Client App{" "}
                </p>{" "}
                <div className="flex items-center space-x-2">
                  {" "}
                  <div className="w-2 h-2 rounded-full border border-white/30 flex items-center justify-center p-[2px]">
                    {" "}
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />{" "}
                  </div>{" "}
                  <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-white/50">
                    {" "}
                    Live Updates{" "}
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
