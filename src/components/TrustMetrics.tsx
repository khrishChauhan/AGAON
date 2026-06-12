import React from "react";
import { motion } from "motion/react";
const metrics = [
  { value: "500+", label: "Quality Checks" },
  { value: "10 Years", label: "Structural Warranty" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "24/7", label: "Live Project Tracking" },
];
export default function TrustMetrics() {
  return (
    <section className="py-20 bg-white border-y border-[#111844]/10 relative z-10">
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-[#111844]/10">
          {" "}
          {metrics.map((metric, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${idx % 2 !== 0 || idx > 0 ? "md:pl-8" : ""}`}
            >
              {" "}
              <span className="font-display text-4xl md:text-5xl font-extrabold text-[#111844] mb-3">
                {" "}
                {metric.value}{" "}
              </span>{" "}
              <span className="font-sans text-sm text-[#4B5694] uppercase tracking-widest font-medium">
                {" "}
                {metric.label}{" "}
              </span>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
