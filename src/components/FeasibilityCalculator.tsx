import React, { useState, useMemo } from "react";
import {
  Sliders,
  Calculator,
  ShieldCheck,
  HelpCircle,
  FileText,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react"; // Configuration profiles for calculation sectors
interface SectorConfig {
  name: string;
  baseCostPerSqFt: number; // in INR
  baseConcreteMultiplier: number; // cubic meters per sq ft
  baseSteelMultiplier: number; // metric tons per 10k sq ft
  carbonReductionFactor: number; // percentage
  baseTimelineMonths: number;
}
const SECTORS: Record<string, SectorConfig> = {
  office: {
    name: "Corporate Skyscraper Headquarter",
    baseCostPerSqFt: 5800,
    baseConcreteMultiplier: 0.18,
    baseSteelMultiplier: 12.5,
    carbonReductionFactor: 28,
    baseTimelineMonths: 18,
  },
  residential: {
    name: "Luxury Residential Coastal Estates",
    baseCostPerSqFt: 7200,
    baseConcreteMultiplier: 0.22,
    baseSteelMultiplier: 14.0,
    carbonReductionFactor: 32,
    baseTimelineMonths: 14,
  },
  datacenter: {
    name: "High-Tech Hyper-Scale Server Campus",
    baseCostPerSqFt: 9500,
    baseConcreteMultiplier: 0.3,
    baseSteelMultiplier: 19.5,
    carbonReductionFactor: 42,
    baseTimelineMonths: 22,
  },
  infrastructure: {
    name: "Heavy Pre-Cast Segmental Overpass/Bridge",
    baseCostPerSqFt: 11000,
    baseConcreteMultiplier: 0.38,
    baseSteelMultiplier: 24.0,
    carbonReductionFactor: 18,
    baseTimelineMonths: 24,
  },
};
const MATERIAL_STANDARDS = [
  {
    id: "standard",
    name: "Standard Enterprise Certified",
    costFactor: 1.0,
    carbonFactor: 1.0,
    qualityRating: "99.92%",
  },
  {
    id: "vanguard",
    name: "Zero-Carbon E-Crete™ Eco-Vanguard",
    costFactor: 1.15,
    carbonFactor: 0.38,
    qualityRating: "99.98%",
  },
  {
    id: "fortress",
    name: "Seismic Base-Isolator Heavy Fortress",
    costFactor: 1.25,
    carbonFactor: 0.9,
    qualityRating: "99.99%",
  },
];
export default function FeasibilityCalculator() {
  const [sector, setSector] = useState<string>("office");
  const [materialStandard, setMaterialStandard] = useState<string>("standard");
  const [totalArea, setTotalArea] = useState<number>(350000); // in sq ft const [storeys, setStoreys] = useState<number>(24); const activeSector = SECTORS[sector]; const activeStandard = MATERIAL_STANDARDS.find(s => s.id === materialStandard) || MATERIAL_STANDARDS[0]; // Perform Calculations const calculatedOutputs = useMemo(() => { const costFactor = activeStandard.costFactor; const carbonFactor = activeStandard.carbonFactor; // Total cost projection (Range +- 10%) const baseCost = totalArea * activeSector.baseCostPerSqFt; // Add height factors for tall properties const heightFactor = storeys > 40 ? 1.35 : storeys > 15 ? 1.15 : 1.0; const finalEstimatedBase = baseCost * costFactor * heightFactor; const costMinCr = Math.round((finalEstimatedBase * 0.95) / 10000000); const costMaxCr = Math.round((finalEstimatedBase * 1.05) / 10000000); // Concrete volume in cubic meters const totalConcrete = Math.round(totalArea * activeSector.baseConcreteMultiplier * (storeys > 15 ? 1.1 : 1.0)); // Steel tendons requirements in tons const totalSteel = Math.round((totalArea / 10000) * activeSector.baseSteelMultiplier * (storeys > 30 ? 1.25 : 1.0)); // CO2 Emissions reduced (measured in metric tons of carbon equivalent saved) const carbonDefaultCO2 = totalArea * 0.082; // average benchmark carbon output per sq ft const carbonSaved = Math.round(carbonDefaultCO2 * (1 - (0.72 * carbonFactor))); // Timeline calculation const baseTimeline = activeSector.baseTimelineMonths; const storeyAddition = Math.round(storeys * 0.25); const timeline = Math.round((baseTimeline + storeyAddition) * (materialStandard === 'fortress' ? 1.15 : 1.0)); return { costRange: `₹${costMinCr} Cr - ₹${costMaxCr} Cr`, concreteVolume: `${totalConcrete.toLocaleString()} m³`, steelVolume: `${totalSteel.toLocaleString()} Metric Tons`, co2Saved: `${carbonSaved.toLocaleString()} Tons`, timelineMonths: `${timeline} Months`, reliabilityScore: activeStandard.qualityRating};}, [sector, materialStandard, totalArea, storeys, activeSector, activeStandard]); return ( <section id="calculator"className="py-24 bg-[#111844] relative overflow-hidden border-t border-white/10"> {/* Structural background details */} <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]"/> <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"> {/* Header */} <div className="max-w-3xl mb-16"> <div className="flex items-center space-x-2 text-[#4B5694] font-mono text-sm tracking-widest uppercase mb-4 font-semibold"> <Calculator className="w-4 h-4 text-[#4B5694]"/> <span>Feasibility Modeling Core</span> </div> <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white"> Model Your Architectural Plan. </h2> <p className="mt-4 text-slate-400 text-base md:text-lg"> Configure raw scope dimensions instantly. Our dynamic estimation equations parse core civil blueprints to draft real-world budgets, timing windows, and structural weights. </p> </div> <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> {/* Controls Panel */} <div className="lg:col-span-7 bg-[#0D2248]/40 p-8 md:p-10 rounded-[20px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-[rgba(255,107,44,0.3)] backdrop-blur-[10px] space-y-8"> <h3 className="font-display text-lg font-bold text-white flex items-center border-b border-white/10 pb-4"> <Sliders className="w-5 h-5 text-[#4B5694] mr-3"/> Structural Parameters </h3> {/* Step 1: Corporate Sector */} <div className="space-y-3"> <label className="block text-sm font-mono font-bold uppercase tracking-wider text-slate-400"> 1. Project Assets Category Focus </label> <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"> {Object.entries(SECTORS).map(([key, value]) => ( <button key={key} onClick={() => setSector(key)} className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${ sector === key ? 'border-[#4B5694] bg-[#4B5694]/10 text-white shadow-[0_4px_20px_rgba(255,107,44,0.15)]' : 'border-white/10 bg-[#111844]/30 text-slate-400 hover:bg-[#111844]/50 hover:text-white'}`} > <span className="block font-sans font-bold text-sm"> {value.name.split(' ').slice(0, 2).join(' ')} </span> <span className="block text-sm text-slate-500 font-mono mt-1 leading-normal truncate group-hover:text-slate-400"> {value.name} </span> </button> ))} </div> </div> {/* Step 2: Slider for Size Area */} <div className="space-y-3"> <div className="flex justify-between items-center text-sm font-mono"> <span className="font-bold text-slate-400 uppercase">2. Planned Building Footprint Area</span> <span className="text-[#4B5694] font-semibold"> {totalArea.toLocaleString()} Sq. Ft. </span> </div> <input type="range"min="50000"max="2500000"step="25000"value={totalArea} onChange={(e) => setTotalArea(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4B5694]"/> <div className="flex justify-between text-sm font-mono text-slate-500"> <span>50K sq ft</span> <span>1M sq ft</span> <span>2.5M sq ft (Mega-scale)</span> </div> </div> {/* Step 3: Slider for Heights / Storeys */} <div className="space-y-3"> <div className="flex justify-between items-center text-sm font-mono"> <span className="font-bold text-slate-400 uppercase">3. Total Floor Count / Height Profile</span> <span className="text-[#4B5694] font-semibold"> {storeys} Storeys ({Math.round(storeys * 3.6)} meters estimated) </span> </div> <input type="range"min="1"max="100"step="1"value={storeys} onChange={(e) => setStoreys(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4B5694]"/> <div className="flex justify-between text-sm font-mono text-slate-500"> <span>Low-Rise (1 Storey)</span> <span>Mid-Rise (40)</span> <span>Super-tall Skyscraper (100 storeys)</span> </div> </div> {/* Step 4: Quality & Materials formulation */} <div className="space-y-3"> <label className="block text-sm font-mono font-bold uppercase tracking-wider text-slate-400"> 4. Select Material Spec & Quality Grade </label> <div className="space-y-3"> {MATERIAL_STANDARDS.map((std) => ( <div key={std.id} onClick={() => setMaterialStandard(std.id)} className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${ materialStandard === std.id ? 'border-[#4B5694] bg-[#4B5694]/5' : 'border-white/10 hover:border-white/30 bg-[#111844]/30'}`} > <div> <span className="block font-sans font-bold text-sm text-white"> {std.name} </span> <span className="block text-sm font-mono text-slate-400 mt-0.5"> {std.id === 'vanguard' && 'Infused with Carbon-Negative E-Crete™ concrete technology'} {std.id === 'fortress' && 'High structural resilience using custom pendulum core dampers'} {std.id === 'standard' && 'Exceeds standard bureau building regulations under IS 456'} </span> </div> <div className="text-right"> <span className="block text-sm text-slate-500 font-mono">Reliability Rating</span> <span className="block font-mono text-sm font-bold text-[#4B5694]">{std.qualityRating}</span> </div> </div> ))} </div> </div> </div> {/* Results Visual Display */} <div className="lg:col-span-5 bg-[#0D2248] text-white p-8 md:p-10 rounded-[20px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-[rgba(255,107,44,0.3)] relative overflow-hidden flex flex-col justify-between self-stretch"> {/* Gloss grid over overlay */} <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,44,0.15),transparent_40%)]"/> <div className="relative z-10"> <div className="flex items-center space-x-2 text-[#4B5694] font-mono text-sm tracking-widest uppercase mb-12"> <ShieldCheck className="w-4 h-4"/> <span>Calculated Civil Matrix Output</span> </div> {/* Big Estimated cost layout */} <div className="border-b border-white/10 pb-8 mb-8 space-y-1.5"> <span className="block font-mono text-sm text-[#4B5694] uppercase tracking-widest"> Comprehensive Investment Projection </span> <h4 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight"> {calculatedOutputs.costRange} </h4> <p className="text-sm leading-relaxed text-slate-400"> Calculated based on local market factors, complex safety structures, structural damping and steel index. </p> </div> {/* Grid of details */} <div className="grid grid-cols-2 gap-x-6 gap-y-8"> <div> <span className="block font-mono text-sm text-slate-400 uppercase tracking-widest">Concrete Core</span> <span className="block font-sans font-bold text-lg text-white mt-1"> {calculatedOutputs.concreteVolume} </span> </div> <div> <span className="block font-mono text-sm text-slate-400 uppercase tracking-widest">Structural Steel</span> <span className="block font-sans font-bold text-lg text-white mt-1"> {calculatedOutputs.steelVolume} </span> </div> <div> <span className="block font-mono text-sm text-slate-400 uppercase tracking-widest">Duration</span> <span className="block font-sans font-bold text-lg text-white mt-1"> {calculatedOutputs.timelineMonths} </span> </div> <div> <span className="block font-mono text-sm text-[#4B5694] uppercase tracking-widest flex items-center"> <TrendingDown className="w-3.5 h-3.5 mr-1"/> Carbon Saved </span> <span className="block font-sans font-bold text-lg text-emerald-400 mt-1"> {calculatedOutputs.co2Saved} </span> </div> </div> </div> {/* Action Section */} <div className="mt-12 pt-8 border-t border-white/5 space-y-4"> <div className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10"> <div className="w-1.5 h-1.5 bg-[#4B5694] rounded-full mt-1.5 mr-3 shrink-0"/> <p className="text-sm text-slate-300 font-sans leading-relaxed"> Calculated structural parameters represent Level 2 approximate simulation accuracy. Agaon guarantees these figures within a ±5% drift threshold on final RFP approval. </p> </div> <button onClick={() => { const inquirySec = document.getElementById('inquiry-terminal'); if (inquirySec) { inquirySec.scrollIntoView({ behavior: 'smooth'}); // Preset some fields if any integration states}}} className="w-full bg-[#4B5694] hover:bg-[#7288AE] text-white py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer shadow-lg"> <span>Request Formal Cost Analysis Brochure</span> <ArrowRight className="ml-2 w-4 h-4"/> </button> </div> </div> </div> </div> </section> );
}
