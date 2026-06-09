import React, { useState } from "react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const categories = [
    "All",
    "Commercial",
    "Residential",
    "Infrastructure",
    "Industrial",
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);
  return (
    <section
      id="projects"
      className="py-32 bg-[#111844] relative overflow-hidden"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full mb-24">
        {" "}
        {/* Section Header */}{" "}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          {" "}
          <div className="max-w-2xl">
            {" "}
            <span className="text-[#4B5694] text-sm font-bold uppercase tracking-[0.3em] block mb-6">
              {" "}
              Our Legacy{" "}
            </span>{" "}
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              {" "}
              Generational
              <br />{" "}
              <span className="font-extrabold font-medium text-white/50">
                Structures.
              </span>{" "}
            </h2>{" "}
          </div>{" "}
          {/* Filtering tabs */}{" "}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {" "}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm uppercase font-bold tracking-widest pb-1 border-b border-white transition-all duration-300 cursor-pointer ${selectedCategory === cat ? "text-white border-white" : "text-white/40 border-transparent hover:text-white/70"}`}
              >
                {" "}
                {cat}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Projects Gallery */}{" "}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {" "}
        <div className="flex flex-col space-y-32">
          {" "}
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center group cursor-pointer`}
              onClick={() => setActiveProject(project)}
            >
              {" "}
              {/* Image Block */}{" "}
              <div className="w-full lg:w-[65%] overflow-hidden relative">
                {" "}
                <div className="aspect-[4/3] overflow-hidden">
                  {" "}
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />{" "}
                  {/* Subtle Accent overlay */}{" "}
                  <div className="absolute inset-0 bg-[#111844]/10 transition-colors group-hover:bg-transparent" />{" "}
                </div>{" "}
              </div>{" "}
              {/* Text Content */}{" "}
              <div className="w-full lg:w-[35%] flex flex-col justify-center">
                {" "}
                <div className="flex items-center space-x-4 mb-6 text-white/50 text-sm font-sans uppercase tracking-widest">
                  {" "}
                  <span>{project.category}</span>{" "}
                  <div className="w-4 h-[1px] bg-white/20" />{" "}
                  <span>{project.location}</span>{" "}
                </div>{" "}
                <h3 className="font-display font-medium tracking-tight text-3xl md:text-5xl text-white mb-6 group-hover:text-[#4B5694] transition-colors duration-500">
                  {" "}
                  {project.name}{" "}
                </h3>{" "}
                <p className="text-white/60 font-sans text-sm font-light leading-relaxed mb-10 max-w-sm">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                <div className="flex space-x-12 pt-8 border-t border-white/20 mb-10">
                  {" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-white/40 tracking-widest uppercase mb-1">
                      Scale
                    </span>{" "}
                    <span className="block font-display text-lg text-white">
                      {project.size}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-white/40 tracking-widest uppercase mb-1">
                      Delivery
                    </span>{" "}
                    <span className="block font-display text-lg text-white">
                      {project.completionYear}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="w-12 h-12 border border-white/20 flex flex-col items-center justify-center group-hover:bg-white group-hover:text-[#111844] text-white transition-colors duration-500">
                  {" "}
                  <ArrowRight className="w-4 h-4" />{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Detail Modal Overlay */}{" "}
      <AnimatePresence>
        {" "}
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-white flex flex-col pt-24"
          >
            {" "}
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow pb-32">
              {" "}
              <div className="flex justify-between items-start mb-16">
                {" "}
                <div>
                  {" "}
                  <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-[#111844] mb-4">
                    {" "}
                    {activeProject.name}{" "}
                  </h2>{" "}
                  <p className="font-sans text-sm uppercase font-bold tracking-widest text-[#4B5694]">
                    {" "}
                    {activeProject.location} — Delivered{" "}
                    {activeProject.completionYear}{" "}
                  </p>{" "}
                </div>{" "}
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-12 h-12 border border-[#111844]/20 flex items-center justify-center hover:bg-[#111844] hover:text-white transition-colors text-[#111844]"
                >
                  {" "}
                  <X className="w-5 h-5" strokeWidth={1} />{" "}
                </button>{" "}
              </div>{" "}
              <div className="w-full aspect-[21/9] bg-black mb-16">
                {" "}
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%]"
                />{" "}
              </div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                {" "}
                <div className="md:col-span-8 space-y-12">
                  {" "}
                  <p className="text-[#7288AE]/80 font-sans text-xl font-light leading-relaxed">
                    {" "}
                    {activeProject.longDescription}{" "}
                  </p>{" "}
                  <div>
                    {" "}
                    <h4 className="font-display text-2xl font-bold text-[#111844] mb-6">
                      Execution Specifications
                    </h4>{" "}
                    <div className="space-y-4">
                      {" "}
                      {activeProject.engineeringHighlights.map((hl, i) => (
                        <div
                          key={i}
                          className="flex border-t border-[#111844]/10 pt-4"
                        >
                          {" "}
                          <span className="font-mono text-[#4B5694] text-sm uppercase font-bold tracking-widest w-12 pt-1">
                            {i + 1}.
                          </span>{" "}
                          <span className="font-sans text-[#7288AE]/80 text-sm leading-relaxed">
                            {hl}
                          </span>{" "}
                        </div>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="md:col-span-4 border-t lg:border-t-0 lg:border-l border-[#111844]/10 pt-8 lg:pt-0 lg:pl-16 space-y-8">
                  {" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-[#7288AE]/50 tracking-widest uppercase mb-2">
                      Category
                    </span>{" "}
                    <span className="block font-sans text-sm text-[#111844] font-medium">
                      {activeProject.category}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-[#7288AE]/50 tracking-widest uppercase mb-2">
                      Client Profile
                    </span>{" "}
                    <span className="block font-sans text-sm text-[#111844] font-medium">
                      {activeProject.client}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-[#7288AE]/50 tracking-widest uppercase mb-2">
                      Investment Scope
                    </span>{" "}
                    <span className="block font-sans text-sm text-[#111844] font-medium">
                      {activeProject.value}
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="block font-sans text-sm text-[#7288AE]/50 tracking-widest uppercase mb-2">
                      Structural Scale
                    </span>{" "}
                    <span className="block font-sans text-sm text-[#111844] font-medium">
                      {activeProject.size}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </section>
  );
}
