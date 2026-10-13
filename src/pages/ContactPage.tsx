import React from 'react';
import { LeadCaptureSection } from '../components/LeadCaptureSection';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{isRTL ? 'حجز الاستشارات الخاصة لكبار العملاء' : 'VIP Enterprise Commissions & Briefings'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] leading-tight mb-4">
          {isRTL 
            ? 'احجز استشارتك الخاصة مع الإدارة الهندسية' 
            : 'Schedule a Private Briefing with Our Chief Architectural Director'}
        </h1>

        <p className="text-base sm:text-lg text-[#1C1917]/75 leading-relaxed max-w-2xl mx-auto mb-10">
          {isRTL
            ? 'نقبل عدداً محدوداً ومختاراً من المشاريع الكبرى كل ربع سنوي لضمان أعلى مستويات الإتقان والدقة الهندسية.'
            : 'Due to our uncompromising hand-finishing standards, we accept a selective roster of enterprise commissions each quarter.'}
        </p>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left rtl:text-right">
          <a
            href="https://wa.me/201005554321"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-[#BA2B43]/15 shadow-sm hover:border-[#BA2B43] transition-all flex items-center gap-3.5"
          >
            <div className="p-3 rounded-xl bg-[#F4EAEB] text-[#BA2B43] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#1C1917]/60 block font-semibold">Executive WhatsApp</span>
              <span className="text-xs font-bold text-[#4E1420]">+20 100 555 4321</span>
            </div>
          </a>

          <a
            href="mailto:concierge@thefoodmodels.com"
            className="p-5 rounded-2xl bg-white border border-[#BA2B43]/15 shadow-sm hover:border-[#BA2B43] transition-all flex items-center gap-3.5"
          >
            <div className="p-3 rounded-xl bg-[#F4EAEB] text-[#BA2B43] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#1C1917]/60 block font-semibold">Confidential Inquiries</span>
              <span className="text-xs font-bold text-[#4E1420]">concierge@thefoodmodels.com</span>
            </div>
          </a>

          <div className="p-5 rounded-2xl bg-white border border-[#BA2B43]/15 shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-[#F4EAEB] text-[#BA2B43] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#1C1917]/60 block font-semibold">Engineering Hubs</span>
              <span className="text-xs font-bold text-[#4E1420]">Cairo • Riyadh • Dubai</span>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureSection />
    </div>
  );
};
