import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const faqs = [
  {
    q: "How accurate is the estimate?",
    a: "Our initial estimate is highly accurate, leveraging technology and current market rates. Once the site is inspected and designs are finalized, we provide a 100% fixed-cost agreement to prevent any budget overruns.",
  },
  {
    q: "How do you ensure zero delays?",
    a: "We employ rigorous critical-path planning alongside dedicated procurement teams that secure materials months in advance, isolating your project from local supply chain fluctuations.",
  },
  {
    q: "Can I track my project remotely?",
    a: "Yes. Our proprietary client portal gives you 24/7 access to live CCTV site feeds, automated drone progression scanning, and digitized billing milestones.",
  },
  {
    q: "Do you handle approvals?",
    a: "We handle comprehensive, end-to-end statutory compliances, structural clearances, environmental zoning permissions, and local municipality NOCs before breaking ground.",
  },
  {
    q: "What warranty do you provide?",
    a: "Every structure we hand over includes a certified 10-year structural warranty, shielding you from core foundation, load-bearing, and water-proofing defects.",
  },
];
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-32 bg-white relative z-10 border-t border-[#111844]/10">
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        {" "}
        {/* Left Intro */}{" "}
        <div className="md:col-span-5">
          {" "}
          <span className="text-[#4B5694] text-sm uppercase font-bold tracking-[0.3em] block mb-4">
            {" "}
            Common Inquiries{" "}
          </span>{" "}
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[#111844] mb-6 leading-tight">
            {" "}
            Clarity in construction.{" "}
          </h2>{" "}
          <p className="text-[#7288AE]/60 font-sans text-sm font-light leading-relaxed mb-8 max-w-sm">
            {" "}
            Clear answers to help you make informed decisions about your
            construction journey.{" "}
          </p>{" "}
        </div>{" "}
        {/* Right Accordion */}{" "}
        <div className="md:col-span-7">
          {" "}
          <div className="space-y-0 border-t border-[#111844]/10">
            {" "}
            {faqs.map((faq, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                key={idx}
                className="border-b border-[#111844]/10"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span
                    className={`font-display text-xl transition-colors ${openIdx === idx ? "text-[#4B5694]" : "text-[#111844] group-hover:text-[#4B5694]"}`}
                  >
                    {faq.q}
                  </span>
                  <span className="ml-8 text-[#111844] group-hover:text-[#4B5694] transition-colors">
                    {openIdx === idx ? (
                      <Minus className="w-5 h-5" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-5 h-5" strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-12 text-[#7288AE]/70 text-sm font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
