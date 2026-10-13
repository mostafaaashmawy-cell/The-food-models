import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#4E1420', '#BA2B43', '#D8B26E'],
        });
      } catch (err) {}
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D8B26E]/40 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/90 text-[#4E1420] hover:bg-[#4E1420] hover:text-white transition-colors cursor-pointer shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with Horizontal Logo 01 */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#4E1420]/10">
            <img
              src="/assets/01.png"
              alt="The Food Models"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="border-l border-[#4E1420]/20 pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
              <span className="text-xs font-bold text-[#BA2B43] tracking-widest uppercase block">
                Executive Dossier
              </span>
              <span className="text-[11px] text-[#4E1420]/70 font-medium">
                City Scale Models Engineering S.A.E.
              </span>
            </div>
          </div>

          {/* Title & Narrative */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-2">
            {t.proposalModal.title}
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-[#BA2B43] mb-4">
            {t.proposalModal.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#1C1917]/75 leading-relaxed mb-6">
            {t.proposalModal.desc}
          </p>

          {/* Key Topics List */}
          <div className="space-y-2.5 mb-8 bg-white p-5 rounded-2xl border border-[#4E1420]/10">
            <span className="text-xs font-bold text-[#4E1420] block uppercase tracking-wider mb-2">
              {isRTL ? 'محتويات الدليل التنفيذي:' : 'Dossier Highlights & Specifications:'}
            </span>
            {t.proposalModal.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1C1917]/85">
                <CheckCircle2 className="w-4 h-4 text-[#BA2B43] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {!downloaded ? (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all flex items-center justify-center gap-2 shadow-luxury cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#D8B26E]" />
                <span>
                  {downloading
                    ? (isRTL ? 'جاري تجهيز وتحميل الملف...' : 'Preparing Executive Deck...')
                    : t.proposalModal.downloadBtn}
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {isRTL ? 'تم تجهيز الملف بنجاح! يبدأ التحميل الفوري.' : 'Executive Lookbook Ready! Instant Download Initialized.'}
                </span>
              </div>
            )}

            <button
              onClick={onClose}
              className="text-xs text-[#1C1917]/70 hover:text-[#4E1420] font-semibold underline cursor-pointer"
            >
              {t.proposalModal.close}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
