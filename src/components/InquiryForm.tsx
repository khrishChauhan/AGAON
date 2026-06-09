import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, FileCheck, CheckCircle2, Loader2, Landmark, HelpCircle, HardHat, Compass, FileText } from 'lucide-react';

interface InquiryFormProps {
  initialSector?: string;
}

export default function InquiryForm({ initialSector = 'Commercial' }: InquiryFormProps) {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [valProgress, setValProgress] = useState<string>('');
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [rfpId, setRfpId] = useState<string>('');

  // Form Fields State
  const [formData, setFormData] = useState({
    sector: initialSector,
    investmentScale: '₹100 Cr - ₹500 Cr',
    clientName: '',
    organization: '',
    corporateEmail: '',
    corporatePhone: '',
    siteLocation: '',
    siteReadyState: 'Approved for Excavation',
    specialRequirements: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number): boolean => {
    const errors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.sector) errors.sector = 'Sector description is required';
    } else if (currentStep === 2) {
      if (!formData.clientName.trim()) errors.clientName = 'Corporate client name is required';
      if (!formData.organization.trim()) errors.organization = 'Enterprise organization is required';
      if (!formData.corporateEmail.trim()) {
        errors.corporateEmail = 'Secure corporate email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.corporateEmail)) {
        errors.corporateEmail = 'Provide a valid corporate email format';
      }
      if (!formData.corporatePhone.trim()) errors.corporatePhone = 'Authorized point of contact number is required';
    } else if (currentStep === 3) {
      if (!formData.siteLocation.trim()) errors.siteLocation = 'Site location parameters are required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const pipelineStages = [
    'Parsing site geolocation coordinates...',
    'Initializing level-2 BIM model layout...',
    'Correlating concrete stress indicators under M80 code...',
    'Validating timeline buffers and steel requirements...',
    'Allocating regional chief architectural supervisor...',
    'Generating secure RFP-Reference index token...'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate real-time engineering validation loop
    for (let i = 0; i < pipelineStages.length; i++) {
      setValProgress(pipelineStages[i]);
      await new Promise(resolve => setTimeout(resolve, 600));
    }

    // Generate specific RFP parameters
    const randomHex = Math.floor(100000 + Math.random() * 900000).toString(16).toUpperCase();
    const generatedRfpId = `AGAON-RFP-2026-${randomHex}`;
    setRfpId(generatedRfpId);
    
    setIsSubmitting(false);
    setSubmissionSuccess(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmissionSuccess(false);
    setFormData({
      sector: 'Commercial',
      investmentScale: '₹100 Cr - ₹500 Cr',
      clientName: '',
      organization: '',
      corporateEmail: '',
      corporatePhone: '',
      siteLocation: '',
      siteReadyState: 'Approved for Excavation',
      specialRequirements: ''
    });
    setRfpId('');
  };

  return (
    <section id="inquiry-terminal" className="py-24 bg-[#111844] text-white overflow-hidden relative">
      {/* Structural backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0D2248]/40 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#4B5694] font-mono text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            <Compass className="w-4 h-4 text-[#4B5694] animate-spin-slow" />
            <span>Request for Proposal Portal</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white">
            Secure RFP Terminal.
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Begin an formal client partnership. Submit your preliminary building parameters directly to our senior structural panel for formal evaluation.
          </p>
        </div>

        {/* Diagnostic Form Panel */}
        <div className="bg-[#0D2248]/30 border border-[#0D2248] rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {/* 1. Submitting screen loading tick */}
            {isSubmitting && (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-[350px] flex flex-col items-center justify-center space-y-6 text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-[#0D2248] border-t-[#4B5694] animate-spin" />
                  <HardHat className="w-7 h-7 text-[#4B5694] absolute inset-y-0 inset-x-0 mx-auto my-auto animate-pulse" />
                </div>
                <div className="space-y-2">
                  <span className="block font-mono text-xs text-[#4B5694] uppercase tracking-widest">
                    AGAON Structural Engine Processing
                  </span>
                  <p className="font-sans font-semibold text-lg text-white">
                    Running Civil Validation Framework...
                  </p>
                  <p className="font-mono text-[11px] text-emerald-400 max-w-md animate-pulse">
                    {valProgress}
                  </p>
                </div>
              </motion.div>
            )}

            {/* 2. Success screen */}
            {submissionSuccess && !isSubmitting && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-white">
                    RFP Document Vaulted Successfully
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Your structural data has been verified against standard IS codes and compiled for senior engineering review.
                  </p>
                </div>

                {/* Simulated Certificate Block */}
                <div className="bg-[#111844] border border-emerald-500/20 rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto font-mono text-xs">
                  <div className="flex justify-between items-start border-b border-[#0D2248] pb-4">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Document Class</span>
                      <span className="text-white font-bold uppercase">Pre-Feasibility RFP</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-slate-500">Security Index</span>
                      <span className="text-emerald-400 font-bold">Active Shield</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[11px]">
                    <div>
                      <span className="block text-slate-500">CLIENT CODE:</span>
                      <span className="text-white font-bold uppercase truncate block">
                        {formData.organization.replace(/\s+/g, '-').slice(0, 10).toUpperCase()}-2026
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-500">SECURE TOKEN REDIRECT:</span>
                      <span className="text-[#4B5694] font-bold block truncate">{rfpId}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">PROPOSED SCALE:</span>
                      <span className="text-white font-bold block">{formData.investmentScale}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">GEOLOCATION SITE:</span>
                      <span className="text-white font-bold block truncate">{formData.siteLocation}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0D2248] flex items-center space-x-3 text-slate-400 text-[10px] leading-relaxed">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full shrink-0" />
                    <span>Agaon Partner response pipeline scheduled. Expect dynamic proposal index updates inside 24 standard working hours.</span>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-[#0D2248] hover:bg-[#122c5c] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Initiate Secondary Structure
                  </button>
                </div>
              </motion.div>
            )}

            {/* 3. Stepper Core Form View */}
            {!isSubmitting && !submissionSuccess && (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Visual wizard tracker */}
                <div className="flex items-center justify-between pb-6 border-b border-[#0D2248] mb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        step === s
                          ? 'bg-[#4B5694] text-white shadow-md'
                          : step > s
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#111844] text-slate-500 border border-[#0D2248]'
                      }`}>
                        {step > s ? '✓' : s}
                      </div>
                      <span className={`hidden sm:inline font-sans text-xs font-bold uppercase tracking-wider ${
                        step === s ? 'text-[#4B5694]' : 'text-slate-400'
                      }`}>
                        {s === 1 && 'Structural Focus'}
                        {s === 2 && 'Identity Logs'}
                        {s === 3 && 'Site Blueprint'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* STEP 1: Categories & Investment */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Primary Asset Sector
                        </label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors"
                        >
                          <option value="Commercial">High-Rise Commercial</option>
                          <option value="Residential">Bespoke Premium Residential</option>
                          <option value="Infrastructure">Heavy Civil / Bridge Infrastructure</option>
                          <option value="Industrial">High-Tech Industrial / Server Campus</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Investment Scale Target
                        </label>
                        <select
                          value={formData.investmentScale}
                          onChange={(e) => setFormData({ ...formData, investmentScale: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors"
                        >
                          <option value="₹50 Cr - ₹100 Cr">₹50 Cr - ₹100 Cr</option>
                          <option value="₹100 Cr - ₹500 Cr">₹100 Cr - ₹500 Cr</option>
                          <option value="₹500 Cr - ₹1000 Cr">₹500 Cr - ₹1,000 Cr</option>
                          <option value="₹1000 Cr+">₹1,000 Cr+ (Industrial / Megaports)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-start space-x-3">
                      <Landmark className="w-5 h-5 text-[#4B5694] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-sans font-bold text-white mb-0.5">Note on scale margins:</span>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          Agaon targets projects exceeding ₹50 Crore in capital scale, enabling high-performance post-tensioning setups, seismic analysis, and ISO safety standards.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Principal identity details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Principal Client Representative Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Chawla"
                          value={formData.clientName}
                          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650"
                        />
                        {formErrors.clientName && (
                          <span className="block text-[10px] text-red-400 font-mono">{formErrors.clientName}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Enterprise Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Crest Development Group"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650"
                        />
                        {formErrors.organization && (
                          <span className="block text-[10px] text-red-400 font-mono">{formErrors.organization}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Secure Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="v.chawla@crestgroup.com"
                          value={formData.corporateEmail}
                          onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650"
                        />
                        {formErrors.corporateEmail && (
                          <span className="block text-[10px] text-red-400 font-mono">{formErrors.corporateEmail}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Authorized Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98XXX XXXXX"
                          value={formData.corporatePhone}
                          onChange={(e) => setFormData({ ...formData, corporatePhone: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650"
                        />
                        {formErrors.corporatePhone && (
                          <span className="block text-[10px] text-red-400 font-mono">{formErrors.corporatePhone}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Site layout & details */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Proposed Site Location Parameters (State/City/Zone) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sector-65 High Street Corridor, Gurgaon"
                          value={formData.siteLocation}
                          onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650"
                        />
                        {formErrors.siteLocation && (
                          <span className="block text-[10px] text-red-400 font-mono">{formErrors.siteLocation}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                          Land / Excavation Legal Status
                        </label>
                        <select
                          value={formData.siteReadyState}
                          onChange={(e) => setFormData({ ...formData, siteReadyState: e.target.value })}
                          className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors font-sans"
                        >
                          <option value="Approved for Excavation">Approved & Cleared for Excavation</option>
                          <option value="Acquisition Phase">Under Acquisition Phase</option>
                          <option value="Planning Approval Needed">Zoning/Environmental Approval Pending</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                        Special Engineering Directives or Seismic Tolerances (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Define custom clear spans, high-humidity requirements, or tuned mass damper benchmarks..."
                        value={formData.specialRequirements}
                        onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                        className="w-full bg-[#111844] border border-[#0D2248] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#4B5694] transition-colors placeholder:text-slate-650 resize-none font-sans"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Footer Controls */}
                <div className="flex justify-between items-center pt-8 border-t border-[#0D2248] mt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 bg-[#111844] hover:bg-[#122c5c] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Step Backward
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 bg-[#4B5694] hover:bg-[#7288AE] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center"
                    >
                      <span>Proceed Forward</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#4B5694] hover:bg-[#7288AE] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-colors cursor-pointer flex items-center shadow-[0_4px_14px_rgba(255,107,44,0.3)]"
                    >
                      <span>Transmit RFP Proposal</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
