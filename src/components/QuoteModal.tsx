import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  CheckCircle, 
  Clock, 
  User, 
  Briefcase, 
  Building2, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomCode = `TFM-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setReferenceId(randomCode);

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#4E1420', '#BA2B43', '#D8B26E', '#25D366'],
        });
      } catch (err) {}
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md">
        
        {/* Backdrop click dismiss */}
        <div 
          className="fixed inset-0" 
          onClick={onClose} 
          aria-hidden="true" 
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#BA2B43]/20 shadow-2xl z-10 overflow-hidden my-auto"
        >
          {/* Top ambient luxury aura */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D8B26E]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#BA2B43]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2 rounded-full bg-[#FAF8F5] text-[#4E1420] hover:bg-[#4E1420] hover:text-white transition-colors cursor-pointer shadow-sm border border-[#4E1420]/10 z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with Logo */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-[#4E1420]/10">
            <div className="flex items-center gap-3">
              <img
                src="/assets/01.png"
                alt="The Food Models"
                className="h-9 sm:h-11 w-auto object-contain"
              />
              <div className="border-l rtl:border-l-0 rtl:border-r border-[#4E1420]/20 pl-3 rtl:pl-0 rtl:pr-3">
                <span className="text-[11px] font-bold text-[#BA2B43] tracking-widest uppercase block">
                  {isRTL ? 'إدارة المشاريع الكبرى' : 'Enterprise Commissions'}
                </span>
                <span className="text-[10px] text-[#4E1420]/70 font-semibold block">
                  City Scale Models Engineering
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[11px] font-bold text-[#4E1420] w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BA2B43]" />
              <span>{lead.ndaBadge}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <div>
                <div className="mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420]">
                    {isRTL ? 'طلب عرض سعر واجتماع استشاري' : 'Request an Executive Quotation & Briefing'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1C1917]/70 mt-1">
                    {isRTL 
                      ? 'املأ البيانات أدناه وسيتواصل معك المدير الهندسي التنفيذي لمناقشة مشروعك خلال 24 ساعة.' 
                      : 'Complete the briefing form below. Our executive engineering director will connect within 24 hours.'}
                  </p>
                </div>

                {/* Direct WhatsApp Callout Button */}
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-left rtl:text-right">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.879.814 2.802.814 3.176 0 5.764-2.588 5.765-5.767.001-3.181-2.584-5.767-5.767-5.767zm7.683 5.767c-.002 4.237-3.454 7.686-7.685 7.686-.976 0-1.927-.19-2.827-.55l-3.957 1.038 1.057-3.864c-.451-.976-.689-1.996-.689-3.047.002-4.238 3.456-7.688 7.688-7.688 4.232 0 7.685 3.455 7.685 7.688zm-3.076 2.342c-.08-.133-.293-.213-.613-.373-.32-.16-1.892-.933-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-.1.013 1.226-.187.187-.373.213-.693.053-.32-.16-1.359-.501-2.589-1.597-.959-.854-1.606-1.91-1.793-2.23-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.523-.538-.72-.547l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.762.329 1.357.525 1.821.673.765.243 1.46.209 2.01.127.613-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1C1917] block">
                        {isRTL ? 'تفضل التواصل الفوري والمباشر؟' : 'Prefer Instant Direct Connection?'}
                      </span>
                      <span className="text-[11px] text-[#1C1917]/70">
                        {isRTL ? 'تحدث مباشرة مع الإدارة الهندسية عبر واتساب' : 'Chat instantly with our Engineering Director'}
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/201005554321?text=Hello%20The%20Food%20Models%2C%20I%20would%20like%20to%20request%20an%20executive%20quotation%20for%20my%20brand."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-105 shrink-0"
                  >
                    <span>{isRTL ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp'}</span>
                  </a>
                </div>

                {/* 4-Field Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4E1420] mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                      />
                    </div>

                    {/* Job Title */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4E1420] mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                      />
                    </div>

                    {/* Company / Brand Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4E1420] mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                      />
                    </div>

                    {/* Direct Phone / WhatsApp */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4E1420] mb-1.5">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/15 text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#BA2B43] focus:ring-1 focus:ring-[#BA2B43] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4E1420] text-[#FAF8F5] font-semibold text-xs tracking-wide shadow-luxury hover:bg-[#350B14] transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 border border-[#D8B26E]/40"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin text-[#D8B26E]" />
                          <span>{lead.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D8B26E]" />
                          <span>{isRTL ? 'إرسال طلب عرض السعر' : 'Submit Quotation Request'}</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-[#1C1917]/60 text-center sm:text-right rtl:sm:text-left">
                      {isRTL ? 'استجابة سريعة خلال 24 ساعة بمصر والسعودية' : 'Fast response within 24 hours in Egypt & KSA'}
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center flex flex-col items-center justify-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4EAEB] border-2 border-[#BA2B43] flex items-center justify-center text-[#BA2B43] shadow-glow-crimson">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#4E1420] text-[#D8B26E] border border-[#D8B26E]/40">
                  REF: {referenceId}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#4E1420]">
                  {isRTL ? 'تم استلام طلب عرض السعر بنجاح' : 'Quotation Request Received'}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C1917]/80 max-w-md leading-relaxed">
                  {isRTL 
                    ? 'شكراً لتواصلك مع The Food Models. سيقوم فريقنا الهندسي بدراسة بيانات مشروعك والتواصل معك فوراً.' 
                    : 'Thank you for connecting with The Food Models. Our engineering team is reviewing your project details and will connect immediately.'}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 justify-center">
                  <a
                    href={`https://wa.me/201005554321?text=${encodeURIComponent(
                      `Hello, I submitted quotation request REF: ${referenceId} for The Food Models.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>{isRTL ? 'متابعة فورية عبر واتساب' : 'Follow up on WhatsApp'}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-5 py-3 rounded-full border border-[#4E1420]/20 text-xs font-bold text-[#4E1420] hover:bg-[#F4EAEB] transition-colors cursor-pointer"
                  >
                    {isRTL ? 'إرسال طلب آخر' : 'Submit Another Request'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
