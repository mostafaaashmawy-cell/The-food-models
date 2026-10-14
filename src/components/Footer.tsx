import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageSquare, Mail, Phone, MapPin, ArrowUp, Sparkles, Layers, Maximize2, Tablet } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => {
  const { t, isRTL } = useLanguage();
  const footer = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-20 pb-12 border-t border-[#BA2B43]/20 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4E1420]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D8B26E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info & Seal (02.png) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left rtl:text-right rtl:items-start">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white p-1 border-2 border-[#D8B26E] shadow-glow-gold flex items-center justify-center shrink-0">
                <img
                  src="/assets/02.png"
                  alt="The Food Models Seal of Quality"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  The Food Models
                </span>
                <span className="text-[11px] text-[#D8B26E] font-medium tracking-wide block">
                  Crafted to Look Real • Architectural Quality
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-sm">
              {footer.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 max-w-sm">
              <span className="font-semibold text-[#D8B26E] block mb-0.5">
                {footer.parentCompany}
              </span>
              <span className="text-[11px] text-white/60">
                {isRTL ? 'إحدى الشركات المتخصصة التابعة لمجموعة سيتي للمجسمات المعمارية (City Scale Models)' : 'Specialized Subsidiary of City Scale Models Engineering S.A.E.'}
              </span>
            </div>
          </div>

          {/* Quick Dedicated Line Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#D8B26E] mb-4">
              {t.nav.links.visualLines}
            </h4>
            <div className="space-y-2 text-xs">
              <Link
                to="/lines/replicas"
                className="block text-white/80 hover:text-[#D8B26E] transition-colors py-1"
              >
                • {t.nav.lineDropdown.line1}
              </Link>
              <Link
                to="/lines/monumental"
                className="block text-white/80 hover:text-[#D8B26E] transition-colors py-1"
              >
                • {t.nav.lineDropdown.line2}
              </Link>
              <Link
                to="/lines/smart-tables"
                className="block text-white/80 hover:text-[#D8B26E] transition-colors py-1"
              >
                • {t.nav.lineDropdown.line3}
              </Link>
              <Link
                to="/heritage"
                className="block text-white/80 hover:text-[#D8B26E] transition-colors py-1"
              >
                • {t.nav.links.craft}
              </Link>
              <Link
                to="/portfolio"
                className="block text-white/80 hover:text-[#D8B26E] transition-colors py-1"
              >
                • {t.nav.links.portfolio}
              </Link>
            </div>
          </div>

          {/* Regional Hubs */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#D8B26E] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#BA2B43]" />
              <span>{isRTL ? 'المراكز الإقليمية' : 'Regional Hubs'}</span>
            </h4>
            <div className="flex flex-col gap-2">
              {footer.locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/90 flex items-center justify-between"
                >
                  <span className="font-medium">{loc}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Concierge & Fast Actions */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#D8B26E] mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#BA2B43]" />
              <span>{footer.contactTitle}</span>
            </h4>
            
            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/201005554321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#4E1420]/80 hover:bg-[#BA2B43] transition-colors border border-[#D8B26E]/30 text-xs font-semibold text-white"
              >
                <MessageSquare className="w-4 h-4 text-[#D8B26E]" />
                <div>
                  <span className="block text-[10px] text-white/70">Executive WhatsApp Concierge</span>
                  <span>+20 100 555 4321</span>
                </div>
              </a>

              <a
                href="mailto:concierge@thefoodmodels.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-xs font-semibold text-white"
              >
                <Mail className="w-4 h-4 text-[#D8B26E]" />
                <div>
                  <span className="block text-[10px] text-white/70">Confidential Enquiries</span>
                  <span>concierge@thefoodmodels.com</span>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenProposal}
              className="text-xs text-[#D8B26E] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRTL ? 'تحميل الملف التعريفي للشركات 2026' : 'Download 2026 Enterprise Deck'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>{footer.copyright} {footer.rights}</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#BA2B43] hover:text-white transition-colors text-white/80 cursor-pointer text-xs font-semibold"
          >
            <span>{isRTL ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
