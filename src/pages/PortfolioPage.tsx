import React from 'react';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { useLanguage } from '../context/LanguageContext';
import { Award, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';

export const PortfolioPage: React.FC = () => {
  const { isRTL } = useLanguage();
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <Award className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{isRTL ? 'معرض الأعمال والتحف الفنية' : 'Complete Masterpiece Archive'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {isRTL 
            ? 'سجل الإبداع: من المجسمات الفردية إلى المعالم الميدانية' 
            : 'Artisanal Realism Engineered for the Region’s Finest Brands'}
        </h1>

        <p className="text-base sm:text-lg text-[#1C1917]/75 max-w-3xl leading-relaxed">
          {isRTL
            ? 'استكشف تشكيلتنا الحصرية من مجسمات الأطعمة فائقة الواقعية 1:1، والمنحوتات الخارجية الضخمة، ومحطات الطاولات التفاعلية الذكية.'
            : 'Explore our curated vault of museum-grade culinary replicas, monumental urban landmarks, and interactive digital dining tables.'}
        </p>
      </div>

      <PortfolioGallery />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {isRTL ? 'هل لديك طبق مميز أو فكرة لمعلم تود تجسيدها؟' : 'Have a Signature Menu Item or Landmark Concept in Mind?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/70 mb-8 max-w-xl mx-auto">
            {isRTL 
              ? 'يقوم فريقنا بنمذجة ومسح أطباقك بدقة ميكرونية لتخليدها كتحف فنية تدوم لسنوات.'
              : 'Our master artisans and 3D photogrammetry rigs capture your exact recipe plating down to the micron.'}
          </p>
          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105 cursor-pointer border border-[#D8B26E]/40"
          >
            <Sparkles className="w-4 h-4 text-[#D8B26E]" />
            <span>{isRTL ? 'اطلب تنفيذ طبقك الخاص الآن' : 'Commission a Custom Masterpiece'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
