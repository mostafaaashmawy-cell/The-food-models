import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Sparkles, Send, CheckCircle, Clock, MessageSquare, User, Briefcase, Building2, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LeadCaptureSection: React.FC = () => {
  const { t } = useLanguage();
  const lead = t.lead;

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury enterprise dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomCode = `TFM-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setReferenceId(randomCode);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4E1420', '#BA2B43', '#D8B26E', '#F4EAEB'],
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      title: '',
      company: '',
      phone: '',
    });
  };

  return (
    <section id="lead-form" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#BA2B43]/15">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#BA2B43]/8 via-[#D8B26E]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#BA2B43]" />
            <span>{lead.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            {lead.title}
          </h2>
          <p className="text-sm sm:text-base text-[#1C1917]/75 leading-relaxed max-w-2xl mx-auto">
            {lead.intro}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D8B26E]/50 text-xs font-semibold text-[#4E1420] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D8B26E]" />
            <span>{lead.ndaBadge}</span>
          </div>
        </div>

        {/* Lead Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#BA2B43]/20 shadow-luxury relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="border-b border-[#4E1420]/10 pb-4 mb-6">
                  <h3 className="font-serif text-2xl font-bold text-[#4E1420]">
                    {lead.formTitle}
                  </h3>
                  <p className="text-xs text-[#1C1917]/70 mt-1">
                    {lead.formSubtitle}
                  </p>
                </div>

                {/* 4-Field Grid: Name, Title, Company, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4E1420] mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#BA2B43]" />
                        {lead.fields.name} <span className="text-[#BA2B43]">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lead.fields.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                    />
                  </div>

                  {/* Job Title */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4E1420] mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#BA2B43]" />
                        {lead.fields.title} <span className="text-[#BA2B43]">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder={lead.fields.titlePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                    />
                  </div>

                  {/* Company / Brand Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4E1420] mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#BA2B43]" />
                        {lead.fields.company} <span className="text-[#BA2B43]">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={lead.fields.companyPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                    />
                  </div>

                  {/* Direct Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4E1420] mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#BA2B43]" />
                        {lead.fields.phone} <span className="text-[#BA2B43]">*</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lead.fields.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4E1420] text-[#FAF8F5] font-semibold text-sm tracking-wide shadow-luxury hover:bg-[#350B14] transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 border border-[#D8B26E]/40"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-[#D8B26E]" />
                        <span>{lead.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D8B26E]" />
                        <span>{lead.submitButton}</span>
                      </>
                    )}
                  </button>

                  <div className="text-center sm:text-right rtl:sm:text-left text-xs text-[#1C1917]/70">
                    <span className="block font-semibold text-[#4E1420]">
                      {lead.hotlineLabel}
                    </span>
                    <a
                      href={`https://wa.me/201005554321?text=${encodeURIComponent(
                        'Hello The Food Models, I would like to request an executive quotation for my brand.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#BA2B43] font-bold hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{lead.hotline}</span>
                    </a>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center flex flex-col items-center justify-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#F4EAEB] border-2 border-[#BA2B43] flex items-center justify-center text-[#BA2B43] mb-2 shadow-glow-crimson">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#4E1420] text-[#D8B26E] border border-[#D8B26E]/40">
                  REF: {referenceId}
                </span>

                <h3 className="font-serif text-3xl font-bold text-[#4E1420]">
                  {lead.successTitle}
                </h3>

                <p className="text-sm text-[#1C1917]/80 max-w-md leading-relaxed">
                  {lead.successMessage}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href={`https://wa.me/201005554321?text=${encodeURIComponent(
                      `Hello, I submitted executive brief REF: ${referenceId} for The Food Models.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#BA2B43] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#9E2036] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect on Executive WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-[#4E1420]/20 text-xs font-bold text-[#4E1420] hover:bg-[#F4EAEB] transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
