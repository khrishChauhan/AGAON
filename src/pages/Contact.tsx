import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  DownloadCloud,
  FileText,
  Clock,
} from "lucide-react";
export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.inquiryType) {
      setSubmitError("Please fill in all required fields.");
      return;
    }
    
    // Validate Indian mobile number
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[456789]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitError("Please enter a valid Indian mobile number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@agaonconstruction.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Agaon Construction Inquiry",
          Name: formData.fullName,
          Phone: formData.phone,
          "Project Type": formData.inquiryType,
          Message: formData.message,
          "Submitted At": new Date().toLocaleString(),
        }),
      });

      const result = await response.json();
      if (result.success === "true" || result.success === true || response.ok) {
        setSubmitSuccess(true);
        setFormData({ fullName: "", phone: "", email: "", inquiryType: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Transmission failed. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    { title: "Direct Line", info: "+91 80519 11111", icon: Phone },
    { title: "Email Us", info: "info@agaonconstruction.com", icon: Mail },
    {
      title: "Patna Regional Office",
      info: "Boring Road, Patna, Bihar 800001",
      icon: MapPin,
    },
    {
      title: "Business Hours",
      info: "Mon-Sat, 9:00 AM – 7:00 PM",
      icon: Clock,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-24 min-h-screen bg-gradient-to-b from-slate-50 to-[#EAE0CF] relative overflow-hidden"
    >
      {" "}
      {/* Subtle Grid Background */}{" "}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        {" "}
        {/* Top Hero Section */}{" "}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          {" "}
          <span className="text-[#4B5694] font-semibold tracking-widest text-sm uppercase mb-4 block">
            {" "}
            Get In Touch{" "}
          </span>{" "}
          <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold tracking-tight text-[#111844] leading-[1.1]">
            {" "}
            Let's Build Something Great.{" "}
          </h1>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {" "}
          {/* Left Column */}{" "}
          <div className="lg:col-span-5 space-y-8">
            {" "}
            <div className="space-y-6">
              {" "}
              {contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(7,21,46,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex items-start space-x-4 sm:space-x-6 border border-slate-100 overflow-hidden"
                >
                  {" "}
                  {/* Subtle accent line on hover */}{" "}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#4B5694] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />{" "}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#111844] rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#4B5694] transition-colors duration-500">
                    {" "}
                    <method.icon
                      className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                      strokeWidth={1.5}
                    />{" "}
                  </div>{" "}
                  <div className="pt-1.5 min-w-0 w-full">
                    {" "}
                    <h4 className="font-sans font-bold text-sm tracking-widest text-[#4B5694] uppercase mb-2 group-hover:text-[#111844] transition-colors duration-300">
                      {" "}
                      {method.title}{" "}
                    </h4>{" "}
                    <p className="font-display text-lg md:text-xl font-medium text-[#111844] leading-relaxed break-words break-all sm:break-words">
                      {" "}
                      {method.info}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            {/* Download Guide Card */}{" "}
            <div className="relative overflow-hidden rounded-3xl mt-12 bg-gradient-to-br from-[#111844] to-[#111844] p-8 shadow-[0_20px_40px_rgb(7,21,46,0.2)] group">
              {" "}
              {/* Decorative architectural lines */}{" "}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />{" "}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4B5694]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />{" "}
              <div className="relative z-10">
                {" "}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#4B5694]/20 transition-colors duration-500">
                  {" "}
                  <FileText
                    className="w-6 h-6 text-white"
                    strokeWidth={1.5}
                  />{" "}
                </div>{" "}
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {" "}
                  Planning a Home?{" "}
                </h3>{" "}
                <p className="font-sans text-white/70 text-sm leading-relaxed mb-8">
                  {" "}
                  Download our comprehensive 2026 Home Construction Guide. Learn
                  about modern materials, cost estimations, and architectural
                  timelines.{" "}
                </p>{" "}
                <button className="flex items-center space-x-2 text-white bg-[#4B5694] px-6 py-3 rounded-xl font-sans font-semibold text-sm hover:bg-[#7288AE] transition-colors shadow-[0_8px_20px_rgba(255,107,44,0.3)] w-fit hover:shadow-[0_12px_25px_rgba(255,107,44,0.4)]">
                  {" "}
                  <span>Download Guide</span>{" "}
                  <DownloadCloud
                    className="w-4 h-4 ml-2"
                    strokeWidth={2}
                  />{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Column: Inquiry Form Card */}{" "}
          <div className="lg:col-span-7">
            {" "}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-slate-100 relative">
              {" "}
              <h3 className="font-display text-3xl font-bold text-[#111844] mb-10">
                {" "}
                Send an Inquiry{" "}
              </h3>{" "}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {" "}
                  {/* Name Input */}{" "}
                  <div className="space-y-2">
                    {" "}
                    <label
                      htmlFor="fullName"
                      className="font-sans text-sm font-semibold text-[#4B5694] uppercase tracking-wider ml-1"
                    >
                      {" "}
                      Full Name{" "}
                    </label>{" "}
                    <input
                      type="text"
                      id="fullName"
                      required
                      onFocus={() => setFocusedInput("fullName")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full h-[56px] bg-slate-50 rounded-xl px-5 font-sans text-sm text-[#111844] outline-none border border-transparent transition-all duration-300 focus:border-[#4B5694] focus:bg-white focus:shadow-[0_4px_20px_rgba(255,107,44,0.08)]"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />{" "}
                  </div>{" "}
                  {/* Phone Input */}{" "}
                  <div className="space-y-2">
                    {" "}
                    <label
                      htmlFor="phone"
                      className="font-sans text-sm font-semibold text-[#4B5694] uppercase tracking-wider ml-1"
                    >
                      {" "}
                      Phone Number{" "}
                    </label>{" "}
                    <input
                      type="tel"
                      id="phone"
                      required
                      onFocus={() => setFocusedInput("phone")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full h-[56px] bg-slate-50 rounded-xl px-5 font-sans text-sm text-[#111844] outline-none border border-transparent transition-all duration-300 focus:border-[#4B5694] focus:bg-white focus:shadow-[0_4px_20px_rgba(255,107,44,0.08)]"
                      placeholder="+91 80519 11111"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Email Input */}{" "}
                <div className="space-y-2">
                  {" "}
                  <label
                    htmlFor="email"
                    className="font-sans text-sm font-semibold text-[#4B5694] uppercase tracking-wider ml-1"
                  >
                    {" "}
                    Email Address{" "}
                  </label>{" "}
                  <input
                    type="email"
                    id="email"
                    required
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full h-[56px] bg-slate-50 rounded-xl px-5 font-sans text-sm text-[#111844] outline-none border border-transparent transition-all duration-300 focus:border-[#4B5694] focus:bg-white focus:shadow-[0_4px_20px_rgba(255,107,44,0.08)]"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />{" "}
                </div>{" "}
                {/* Project Type Input */}{" "}
                <div className="space-y-2">
                  {" "}
                  <label
                    htmlFor="inquiryType"
                    className="font-sans text-sm font-semibold text-[#4B5694] uppercase tracking-wider ml-1"
                  >
                    {" "}
                    Project Type{" "}
                  </label>{" "}
                  <div className="relative">
                    {" "}
                    <select
                      id="inquiryType"
                      onFocus={() => setFocusedInput("inquiryType")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full h-[56px] bg-slate-50 rounded-xl pl-5 pr-12 font-sans text-sm text-[#111844] outline-none border border-transparent transition-all duration-300 focus:border-[#4B5694] focus:bg-white focus:shadow-[0_4px_20px_rgba(255,107,44,0.08)] appearance-none cursor-pointer"
                      value={formData.inquiryType}
                      required
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      {" "}
                      <option value="">Select an option</option>{" "}
                      <option value="residential">Residential</option>{" "}
                      <option value="commercial">Commercial</option>{" "}
                      <option value="renovation">Renovation</option>{" "}
                      <option value="interior">Interior Design</option>{" "}
                    </select>{" "}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      {" "}
                      <svg
                        className="w-4 h-4 text-[#4B5694]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Message Input */}{" "}
                <div className="space-y-2">
                  {" "}
                  <label
                    htmlFor="message"
                    className="font-sans text-sm font-semibold text-[#4B5694] uppercase tracking-wider ml-1"
                  >
                    {" "}
                    Message{" "}
                  </label>{" "}
                  <textarea
                    id="message"
                    rows={4}
                    required
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-slate-50 rounded-xl p-5 font-sans text-sm text-[#111844] outline-none border border-transparent transition-all duration-300 focus:border-[#4B5694] focus:bg-white focus:shadow-[0_4px_20px_rgba(255,107,44,0.08)] resize-none"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>{" "}
                </div>{" "}
                {/* Submit Button */}{" "}
                <div className="pt-6">
                  {" "}
                  {submitSuccess && (
                    <div className="mb-4 p-4 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-sans">
                      Thank you for contacting Agaon Construction. Our team will reach out shortly.
                    </div>
                  )}
                  {submitError && (
                    <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-sans">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 h-[56px] bg-[#111844] text-white rounded-xl font-sans font-bold text-sm tracking-wide flex items-center justify-center hover:bg-[#4B5694] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,107,44,0.35)] transform hover:-translate-y-1 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {" "}
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>{" "}
                    <ArrowRight
                      className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform"
                      strokeWidth={2}
                    />{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
