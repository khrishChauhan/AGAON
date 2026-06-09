import React from "react";
import { EXECUTIVE_TEAM } from "../data";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Award,
  GraduationCap,
  ArrowUpRight,
  Scale,
} from "lucide-react";
const ACCREDITATIONS = [
  {
    title: "ISO 9001:2026",
    agency: "International Standardization Org",
    summary:
      "Absolute operational accuracy and sub-millimeter precision calibration limits during foundation casting.",
    accent: "#4B5694",
  },
  {
    title: "LEED Platinum",
    agency: "U.S. Green Building Counsel",
    summary:
      "Integration of renewable local microgrids, passive solar envelope structures, and eco-friendly foundations.",
    accent: "#47d1a0",
  },
  {
    title: "Seismic Class A",
    agency: "Global Earthquake Safety Panel",
    summary:
      "Comprehensive validation of tuned pendulum mass dampers and base rubberised core isolation elements.",
    accent: "#2f81f7",
  },
  {
    title: "IGBC Green Cement",
    agency: "Indian Green Building Council",
    summary:
      "Full environmental clearance for low-carbon E-Crete™ formulation, minimizing net clinker weight metrics.",
    accent: "#10b981",
  },
];
export default function LeadershipAccreditation() {
  return (
    <section
      id="leadership"
      className="py-24 bg-[#111844] relative overflow-hidden border-t border-white/10"
    >
      {" "}
      {/* Decorative technical grids */}{" "}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {" "}
        {/* Executive Section Header */}{" "}
        <div className="max-w-3xl mb-16">
          {" "}
          <div className="flex items-center space-x-2 text-[#4B5694] font-mono text-sm tracking-widest uppercase mb-4 font-semibold">
            {" "}
            <ShieldCheck className="w-4 h-4 text-[#4B5694]" />{" "}
            <span>Enterprise Supervision</span>{" "}
          </div>{" "}
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            {" "}
            Meticulous Leadership.{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            {" "}
            Our operational panel integrates advanced structural physics degrees
            from the world&apos;s leading institutions with decades of active
            high-rise site orchestration.{" "}
          </p>{" "}
        </div>{" "}
        {/* Leadership Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-28">
          {" "}
          {EXECUTIVE_TEAM.map((executive, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx}
              className="group bg-[#0D2248]/40 rounded-[20px] overflow-hidden border border-[rgba(255,107,44,0.3)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-[10px] flex flex-col justify-between"
            >
              {" "}
              {/* Image Block */}{" "}
              <div className="relative aspect-square overflow-hidden bg-[#111844]">
                {" "}
                <img
                  src={executive.image}
                  alt={executive.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111844]/70 via-transparent to-transparent opacity-80" />{" "}
                {/* Credentials block over image */}{" "}
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 bg-[#111844]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/5">
                  {" "}
                  <GraduationCap className="w-4 h-4 text-[#4B5694] shrink-0" />{" "}
                  <span className="font-mono text-sm text-slate-350 uppercase tracking-wider truncate">
                    {" "}
                    {executive.credentials}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Bio Block */}{" "}
              <div className="p-8 flex-1 flex flex-col justify-between">
                {" "}
                <div>
                  {" "}
                  <h3 className="font-display font-bold tracking-tight text-lg md:text-xl text-white">
                    {" "}
                    {executive.name}{" "}
                  </h3>{" "}
                  <span className="block font-mono text-sm uppercase text-[#4B5694]/80 tracking-widest font-semibold mt-1">
                    {" "}
                    {executive.role}{" "}
                  </span>{" "}
                  <p className="mt-4 text-slate-300 font-sans text-sm md:text-sm leading-relaxed">
                    {" "}
                    {executive.bio}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        {/* SECTION 2: Accreditation & Certifications Group */}{" "}
        <div id="accreditation" className="border-t border-white/10 pt-24">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {" "}
            {/* Standard texts */}{" "}
            <div className="lg:col-span-5 space-y-6">
              {" "}
              <div className="flex items-center space-x-2 text-[#4B5694] font-mono text-sm tracking-widest uppercase font-semibold">
                {" "}
                <Award className="w-4 h-4 text-[#4B5694]" />{" "}
                <span>Statutory Compliance Metrics</span>{" "}
              </div>{" "}
              <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white">
                {" "}
                Accredited Structural Compliance.{" "}
              </h3>{" "}
              <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
                {" "}
                Agaon refuses to operate under basic regional building
                guidelines. Every foundation structure is pre-engineered to
                exceed sovereign regulatory tolerances, securing structural
                asset valuations for generations.{" "}
              </p>{" "}
              <div className="flex space-x-6 pt-2">
                {" "}
                <div>
                  {" "}
                  <span className="block font-sans text-3xl font-extrabold text-white">
                    100%
                  </span>{" "}
                  <span className="block font-mono text-sm text-slate-500 uppercase tracking-widest mt-1">
                    {" "}
                    BIM Digital-Twin Check{" "}
                  </span>{" "}
                </div>{" "}
                <div className="border-r border-white/10" />{" "}
                <div>
                  {" "}
                  <span className="block font-sans text-3xl font-extrabold text-white">
                    LEED
                  </span>{" "}
                  <span className="block font-mono text-sm text-slate-500 uppercase tracking-widest mt-1">
                    {" "}
                    Platinum Base Standard{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Accreditations Cards Grid */}{" "}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {" "}
              {ACCREDITATIONS.map((acc, index) => (
                <div
                  key={index}
                  className="bg-[#0D2248]/40 p-6 rounded-[20px] border border-white/10 flex flex-col justify-between hover:border-[rgba(255,107,44,0.3)] hover:shadow-[0_10px_30px_rgba(255,107,44,0.1)] backdrop-blur-[10px] transition-all duration-300"
                >
                  {" "}
                  <div className="space-y-4">
                    {" "}
                    <div className="flex justify-between items-center">
                      {" "}
                      <span className="font-sans font-extrabold text-sm text-white tracking-tight">
                        {" "}
                        {acc.title}{" "}
                      </span>{" "}
                      <div
                        className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]"
                        style={{
                          backgroundColor: acc.accent,
                          color: acc.accent,
                        }}
                      />{" "}
                    </div>{" "}
                    <p className="text-slate-300 font-sans text-sm leading-relaxed">
                      {" "}
                      {acc.summary}{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center font-mono text-sm text-slate-500 uppercase tracking-widest">
                    {" "}
                    <span>Authorized Agency</span>{" "}
                    <span className="text-right text-[#4B5694]/80 font-bold truncate max-w-[150px]">
                      {" "}
                      {acc.agency}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
