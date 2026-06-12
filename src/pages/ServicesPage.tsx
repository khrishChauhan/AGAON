import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
const services = [
  {
    number: "01",
    title: "Turnkey Residential Construction",
    description:
      "Foundation-to-finish home building. We handle everything from soil testing and architectural design to brickwork and final coat of paint.",
    features: [
      "End-to-end management",
      "IS-Code compliant materials",
      "Timely Handover Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    imageLeft: true,
  },
  {
    number: "02",
    title: "Commercial & Institutional",
    description:
      "Scalable construction solutions for clinics, coaching institutes, schools, and corporate offices ensuring compliance with municipal codes.",
    features: [
      "End-to-end management",
      "IS-Code compliant materials",
      "Timely Handover Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    imageLeft: false,
  },
  {
    number: "03",
    title: "Facade Engineering",
    description:
      "Specialized exterior treatments, structural glazing, and ACP cladding that defines your building's identity in the skyline.",
    features: [
      "End-to-end management",
      "IS-Code compliant materials",
      "Timely Handover Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&q=80&w=1200",
    imageLeft: true,
  },
  {
    number: "04",
    title: "Interior Architecture",
    description:
      "Custom woodwork, advanced lighting planning, and spatial design that perfectly aligns with structural realities.",
    features: [
      "End-to-end management",
      "IS-Code compliant materials",
      "Timely Handover Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    imageLeft: false,
  },
];
export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-24 bg-gradient-to-b from-[#EAE0CF] to-white min-h-screen relative overflow-hidden"
    >
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
              OUR DISCIPLINES
            </span>{" "}
          </motion.div>{" "}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold tracking-tight text-[#111844] leading-[1.1] mb-10"
          >
            {" "}
            Our Services{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-xl md:text-2xl text-[#4B5694] font-light leading-relaxed max-w-3xl"
          >
            {" "}
            Enterprise-grade execution tailored for your specific project needs.
            We provide full-stack construction solutions.{" "}
          </motion.p>{" "}
        </header>{" "}
        {/* Services Iterations */}{" "}
        <div className="flex flex-col space-y-32 md:space-y-48 pb-32">
          {" "}
          {services.map((service, idx) => (
            <div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {" "}
              {/* Image Column */}{" "}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className={`lg:col-span-7 relative group ${service.imageLeft ? "lg:order-1" : "lg:order-2"}`}
              >
                {" "}
                <div className="absolute inset-0 bg-[#4B5694]/5 translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />{" "}
                <div className="relative border border-[#111844]/10 bg-white p-3 md:p-4 shadow-[0_20px_50px_rgba(17,24,68,0.06)]">
                  {" "}
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-50">
                    {" "}
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />{" "}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111844]/10 to-transparent pointer-events-none" />{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* Content Column */}{" "}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className={`lg:col-span-5 space-y-8 ${service.imageLeft ? "lg:order-2" : "lg:order-1"}`}
              >
                {" "}
                <div className="flex items-center space-x-4">
                  {" "}
                  <span className="font-sans text-[#4B5694] text-sm font-bold tracking-widest">
                    {service.number}
                  </span>{" "}
                  <div className="w-8 h-[1px] bg-[#111844]/15" />{" "}
                  <span className="font-sans text-[#4B5694] text-sm font-bold uppercase tracking-wider">
                    SERVICE DIVISION
                  </span>{" "}
                </div>{" "}
                <h2 className="font-display text-3xl md:text-4xl text-[#111844] font-bold tracking-tight">
                  {" "}
                  {service.title}{" "}
                </h2>{" "}
                <p className="font-sans text-[#4B5694] text-base md:text-lg font-light leading-relaxed">
                  {" "}
                  {service.description}{" "}
                </p>{" "}
                <div className="pt-8 border-t border-[#111844]/10">
                  {" "}
                  <span className="font-sans text-sm text-[#4B5694] tracking-widest uppercase font-bold block mb-4">
                    Core Standards
                  </span>{" "}
                  <ul className="space-y-3">
                    {" "}
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center space-x-3 text-[#111844] font-sans text-sm font-medium"
                      >
                        {" "}
                        <div className="w-5 h-5 rounded-full bg-[#4B5694]/10 flex items-center justify-center shrink-0">
                          {" "}
                          <Check
                            className="w-3 h-3 text-[#4B5694]"
                            strokeWidth={3}
                          />{" "}
                        </div>{" "}
                        <span>{feature}</span>{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
              </motion.div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
