import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Shield, Lock } from "lucide-react";
export default function Estimator() {
  const [city, setCity] = useState("Begusarai, BR");
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState("Ground Only (G)");
  const [quality, setQuality] = useState("Premium");
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault(); // In a real app, this would process the estimate or proceed to a result page/modal.
  };
  return (
    <div className="pt-24 pb-32 bg-gradient-to-b from-[#EAE0CF] to-white min-h-screen relative overflow-hidden flex flex-col justify-center">
      {" "}
      {/* Premium Texture */}{" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: ` linear-gradient(#111844 1px, transparent 1px), linear-gradient(90deg, #111844 1px, transparent 1px) `,
          backgroundSize: "40px 40px",
        }}
      />{" "}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#4B5694]/5 blur-[120px] rounded-full pointer-events-none" />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        {" "}
        {/* Page Header */}{" "}
        <div className="text-center mb-16 max-w-2xl">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            {" "}
            <div className="w-8 h-[1px] bg-[#4B5694]" />{" "}
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-widest">
              BUDGET PLANNING
            </span>{" "}
            <div className="w-8 h-[1px] bg-[#4B5694]" />{" "}
          </motion.div>{" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl text-[#111844] font-extrabold tracking-tight mb-6"
          >
            {" "}
            Construction Cost Estimator{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-[#7288AE]/60 font-light leading-relaxed"
          >
            {" "}
            Get a highly accurate preliminary budget for your project in
            seconds.{" "}
          </motion.p>{" "}
        </div>{" "}
        {/* Estimator Card */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white border border-[#111844]/10 shadow-[0_30px_80px_rgba(17,24,68,0.06)] rounded-sm overflow-hidden flex flex-col lg:flex-row"
        >
          {" "}
          {/* Left Panel: Form */}{" "}
          <div className="lg:w-[60%] p-10 md:p-14 order-2 lg:order-1">
            {" "}
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#111844] tracking-tight mb-10">
              {" "}
              Project Details{" "}
            </h2>{" "}
            <form onSubmit={handleCalculate} className="space-y-8">
              {" "}
              {/* Output Fields */}{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {" "}
                {/* City Selection */}{" "}
                <div className="flex flex-col space-y-2">
                  {" "}
                  <label className="font-sans text-sm uppercase font-bold tracking-wider text-[#7288AE]/70">
                    {" "}
                    City of Construction{" "}
                  </label>{" "}
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#111844]/10 pb-3 pt-2 text-[#111844] font-display text-xl font-medium focus:outline-none focus:border-[#4B5694] transition-colors"
                  />{" "}
                </div>{" "}
                {/* Plot Area */}{" "}
                <div className="flex flex-col space-y-2">
                  {" "}
                  <label className="font-sans text-sm uppercase font-bold tracking-wider text-[#7288AE]/70">
                    {" "}
                    Plot Area (Sq. Ft.){" "}
                  </label>{" "}
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 1500"
                    className="w-full bg-transparent border-b-2 border-[#111844]/10 pb-3 pt-2 text-[#111844] font-display text-xl font-medium placeholder:text-[#7288AE]/20 focus:outline-none focus:border-[#4B5694] transition-colors"
                  />{" "}
                </div>{" "}
                {/* Floors */}{" "}
                <div className="flex flex-col space-y-2">
                  {" "}
                  <label className="font-sans text-sm uppercase font-bold tracking-wider text-[#7288AE]/70">
                    {" "}
                    Number of Floors{" "}
                  </label>{" "}
                  <select
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#111844]/10 pb-3 pt-2 text-[#111844] font-display text-xl font-medium focus:outline-none focus:border-[#4B5694] transition-colors appearance-none cursor-pointer rounded-none"
                  >
                    {" "}
                    <option value="Ground Only (G)">
                      Ground Only (G)
                    </option>{" "}
                    <option value="G + 1">G + 1</option>{" "}
                    <option value="G + 2">G + 2</option>{" "}
                    <option value="G + 3">G + 3</option>{" "}
                  </select>{" "}
                </div>{" "}
                {/* Finish Quality */}{" "}
                <div className="flex flex-col space-y-2">
                  {" "}
                  <label className="font-sans text-sm uppercase font-bold tracking-wider text-[#7288AE]/70">
                    {" "}
                    Finish Quality{" "}
                  </label>{" "}
                  <select
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#111844]/10 pb-3 pt-2 text-[#111844] font-display text-xl font-medium focus:outline-none focus:border-[#4B5694] transition-colors appearance-none cursor-pointer rounded-none"
                  >
                    {" "}
                    <option value="Standard">Standard</option>{" "}
                    <option value="Premium">Premium</option>{" "}
                    <option value="Luxury">Luxury</option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              {/* Submit CTA */}{" "}
              <div className="pt-8">
                {" "}
                <button
                  type="submit"
                  className="w-full py-5 bg-[#111844] text-white font-sans text-sm uppercase font-bold tracking-widest shadow-[0_15px_30px_rgba(17,24,68,0.15)] hover:shadow-[0_20px_40px_rgba(17,24,68,0.25)] hover:bg-[#4B5694] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {" "}
                  CALCULATE ESTIMATE{" "}
                </button>{" "}
                <div className="mt-6 flex items-center justify-center space-x-2 text-[#7288AE]/50">
                  {" "}
                  <Lock className="w-4 h-4" />{" "}
                  <span className="font-sans text-sm font-semibold tracking-wide uppercase">
                    Secure & Confidential
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
          {/* Right Panel: What's Included */}{" "}
          <div className="lg:w-[40%] bg-gradient-to-br from-[#111844] to-[#111844] p-10 md:p-14 text-white relative flex flex-col justify-center order-1 lg:order-2">
            {" "}
            <div className="absolute inset-0 bg-[#4B5694]/5 pointer-events-none" />{" "}
            <div className="relative z-10">
              {" "}
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-10 text-white tracking-tight">
                {" "}
                What's Included?{" "}
              </h2>{" "}
              <ul className="space-y-6">
                {" "}
                {[
                  "Architectural Design & 3D Elevations",
                  "Structural Engineering & Approvals",
                  "IS-Code Branded Materials",
                  "Plumbing, Electrical & Finishing",
                  "Dedicated Project Manager",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    {" "}
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                      {" "}
                      <Check className="w-3 h-3 text-[#4B5694]" />{" "}
                    </div>{" "}
                    <span className="font-sans text-sm tracking-wide font-light leading-relaxed text-white/90">
                      {" "}
                      {item}{" "}
                    </span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
}
