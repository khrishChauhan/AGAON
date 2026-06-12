import React from "react";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#111844] pt-32 pb-12 relative z-10 w-full overflow-hidden">
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full">
        {" "}
        {/* Top Massive Typography */}{" "}
        <div className="mb-24 md:mb-32">
          {" "}
          <h2 className="font-display text-[clamp(4.5rem,15vw,10rem)] font-extrabold text-white tracking-tighter leading-none mb-6">
            {" "}
            AGAON{" "}
          </h2>{" "}
          <div className="w-full h-[1px] bg-white/20" />{" "}
        </div>{" "}
        {/* Middle Links */}{" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-24 md:mb-32">
          {" "}
          <div className="col-span-2 md:col-span-1 space-y-8">
            {" "}
            <h4 className="font-sans text-sm uppercase tracking-widest text-[#4B5694] font-bold">
              AGAON CONSTRUCTION.
            </h4>{" "}
            <div className="text-white/60 font-sans text-sm leading-relaxed">
              {" "}
              Engineering Your Vision. Delivering Absolute Certainty. The smart
              way to build your dream project in India.{" "}
            </div>{" "}
            <div className="text-white font-sans text-sm tracking-wide">
              {" "}
              +91 8051911111{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="font-sans text-sm uppercase tracking-widest text-[#4B5694] font-bold mb-8">
              Company
            </h4>{" "}
            <ul className="space-y-4 font-sans text-sm text-white/60">
              {" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/about")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  About Agaon{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/portfolio")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Project Portfolio{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/estimator")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Cost Estimator{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Contact Us{" "}
                </button>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="font-sans text-sm uppercase tracking-widest text-[#4B5694] font-bold mb-8">
              Services
            </h4>{" "}
            <ul className="space-y-4 font-sans text-sm text-white/60">
              {" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Residential Construction{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Commercial Builders{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Interior Architecture{" "}
                </button>{" "}
              </li>{" "}
              <li>
                {" "}
                <button
                  onClick={() => handleNavigate("/services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {" "}
                  Facade Engineering{" "}
                </button>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h4 className="font-sans text-sm uppercase tracking-widest text-[#4B5694] font-bold mb-8">
              Regional Office
            </h4>{" "}
            <ul className="space-y-4 font-sans text-sm text-white/60">
              {" "}
              <li className="font-bold text-white">
                Patna Regional Office
              </li>{" "}
              <li className="leading-relaxed">
                {" "}
                Boring Road,
                <br /> Patna, Bihar 800001{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Legal */}{" "}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-sm uppercase tracking-widest text-white/40">
          {" "}
          <p>&copy; 2026 Agaon Construction. All rights reserved.</p>{" "}
          <div className="flex gap-8">
            {" "}
            <button
              onClick={() => handleNavigate("/about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {" "}
              Privacy Policy{" "}
            </button>{" "}
            <button
              onClick={() => handleNavigate("/about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {" "}
              Terms of Service{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
