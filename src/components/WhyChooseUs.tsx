import React from "react";
import { motion } from "motion/react";
const blockData = [
  {
    title: "Fixed Cost Guarantee",
    desc: "Financial absolute certainty. We absorb the risk of material fluctuations.",
  },
  {
    title: "Zero Budget Overruns",
    desc: "A strict contractual cap on final project delivery costs.",
  },
  {
    title: "Dedicated Manager",
    desc: "One senior project lead assigned exclusively to your asset.",
  },
  {
    title: "500+ Inspections",
    desc: "Rigorous multi-point audits at every critical structural phase.",
  },
  {
    title: "Live Tracking",
    desc: "Continuous telemetry, drone footage, and timeline updates.",
  },
  {
    title: "Structural Warranty",
    desc: "A decade-long guarantee securing your generational investment.",
  },
];
export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#111844] relative z-10">
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {" "}
          <div className="lg:col-span-5">
            {" "}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
              {" "}
              Why Choose Us.{" "}
            </h2>{" "}
            <p className="text-white/60 font-sans text-lg font-light leading-relaxed max-w-sm mb-12">
              {" "}
              We eliminate the traditional frictions of construction through
              aggressive accountability and systemic precision. Our operational
              framework ensures complete peace of mind.{" "}
            </p>{" "}
            <div className="w-full h-[1px] bg-white/20" />{" "}
          </div>{" "}
          <div className="lg:col-span-6 lg:col-start-7">
            {" "}
            <div className="flex flex-col space-y-0 relative border-t border-white/20">
              {" "}
              {blockData.map((block, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-8 border-b border-white/20 hover:border-[#4B5694] transition-colors duration-500 cursor-pointer"
                >
                  {" "}
                  <div className="flex items-baseline space-x-6">
                    {" "}
                    <span className="font-mono text-sm text-white/40 group-hover:text-[#4B5694] transition-colors">
                      {" "}
                      0{idx + 1}{" "}
                    </span>{" "}
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-white group-hover:text-[#4B5694] transition-colors">
                      {" "}
                      {block.title}{" "}
                    </h3>{" "}
                  </div>{" "}
                  <p className="text-white/40 font-sans text-sm mt-4 sm:mt-0 sm:ml-12 max-w-[240px] text-left sm:text-right group-hover:text-white/70 transition-colors">
                    {" "}
                    {block.desc}{" "}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
