import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';

export const ReplicasPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const line = t.lines.line1;

  // Before / After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleSliderMove(e.clientX);
    }
  };

  const vitrineBases = [
    {
      title: isRTL ? 'قواعد الرخام الإيطالي الفاخر' : 'Italian Carrara Marble',
      desc: isRTL ? 'رخام طبيعي مصقول يعكس بريق الأطباق في صالونات الحلويات الراقية.' : 'Honed natural marble reflecting fine pastry brilliance under showroom spots.',
      material: 'Calacatta / Carrara Pure',
    },
    {
      title: isRTL ? 'خشب الجوز الأمريكي الطبيعي' : 'Natural American Walnut',
      desc: isRTL ? 'أخشاب صلبة معالجة ومحمية بزيوت طبيعية تمنح دفئاً لمطاعم البرجر والستيك.' : 'Solid kiln-dried hardwoods with matte oil finishes suited for burger houses.',
      material: 'American Black Walnut',
    },
    {
      title: isRTL ? 'النحاس المصقول والكروم' : 'Brushed Architectural Brass',
      desc: isRTL ? 'حواف معدنية أنيقة تضيف طابعاً فندقياً ملكياً لواجهات العرض الرئيسية.' : 'PVD-coated metallic trims providing five-star hotel vitrine aesthetics.',
      material: 'PVD Brushed Brass',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{line.badge}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {line.title}
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-[#BA2B43] mb-6 max-w-3xl">
          "{line.tagline}"
        </p>

        <p className="text-sm sm:text-base text-[#1C1917]/80 max-w-3xl leading-relaxed">
          {line.overview}
        </p>
      </div>

      {/* Interactive Before / After Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#4E1420]">
                {isRTL ? 'المقارنة التفاعلية: طبق حقيقي مقابل مجسم فني دقيق' : 'Interactive Visual Comparison: Chef Dish vs 1:1 Replica'}
              </h2>
              <p className="text-xs text-[#1C1917]/70 mt-1">
                {line.interactiveHint}
              </p>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#F4EAEB] text-[#BA2B43] border border-[#BA2B43]/30 whitespace-nowrap">
              100% Micron-Level Match
            </span>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderContainerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleSliderMove(e.clientX)}
            className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#4E1420]/15 bg-black"
          >
            {/* Real Dish Base Layer */}
            <img
              src="/food/burger.jpg"
              alt="Real Culinary Dish"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.97]"
            />
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20 shadow-lg">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>{line.sliderRealLabel}</span>
              </div>
              <span className="text-[10px] text-amber-300 block font-mono mt-0.5">
                {isRTL ? 'معرض للتلف والجفاف خلال 4 ساعات' : 'Perishable — Spoils in 4 Hours'}
              </span>
            </div>

            {/* Replica Clipped Layer (Geometric Match) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: isRTL
                  ? `polygon(${100 - sliderPosition}% 0, 100% 0, 100% 100%, ${100 - sliderPosition}% 100%)`
                  : `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src="/food/burger.jpg"
                alt="Artisan Replica"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4E1420]/40 via-transparent to-transparent" />
              
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-lg bg-[#4E1420]/95 backdrop-blur-md text-[#D8B26E] text-xs font-bold tracking-wide border border-[#D8B26E]/40 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
                  <span>{line.sliderReplicaLabel}</span>
                </div>
                <span className="text-[10px] text-emerald-300 block font-mono mt-0.5">
                  {isRTL ? 'عمر افتراضي دائم: +10 سنوات' : 'Permanent Vitrine Life: 10+ Years'}
                </span>
              </div>
            </div>

            {/* Draggable Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#4E1420] border-2 border-white shadow-xl flex items-center justify-center text-[#D8B26E]">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Advantages Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-8 text-center">
          {isRTL ? 'القيمة التجارية والاستثمارية لمجسمات 1:1' : 'Commercial & Financial Impact of 1:1 Replicas'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {line.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#BA2B43]/15 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4EAEB] flex items-center justify-center text-[#BA2B43] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1917]/70 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vitrine Base Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#350B14] text-white dark-mesh-gradient border border-[#D8B26E]/30">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8B26E] block mb-2">
              {isRTL ? 'هندسة قواعد واجهات العرض' : 'Architectural Mounting Bases'}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
              {isRTL ? 'قواعد فاخرة تتناغم مع ديكورات مطعمك' : 'Custom Vitrine Mounts Designed to Match Your Interior Aesthetics'}
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {isRTL 
                ? 'لا نكتفي بصنع مجسم الطبق، بل نصمم له قاعدة تثبيت معمارية من الرخام أو الخشب الفاخر ليتكامل مع هوية علامتك التجارية في واجهات العرض.'
                : 'Every food model is paired with a museum-grade architectural display plinth engineered to withstand continuous commercial lighting.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vitrineBases.map((base, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#4E1420]/80 border border-[#D8B26E]/20">
                <span className="text-[10px] font-mono text-[#D8B26E] uppercase tracking-wider block mb-1">
                  {base.material}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {base.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {base.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Sectors & Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {isRTL ? 'جاهز لتحويل واجهات عرضك إلى نقطة بيع دائمة لا تفسد؟' : 'Ready to Eliminate Daily Food Waste & Multiply Display Sales?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/75 max-w-2xl mx-auto mb-8">
            {line.idealFor}
          </p>

          <button
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105 cursor-pointer border border-[#D8B26E]/40"
          >
            <Sparkles className="w-4 h-4 text-[#D8B26E]" />
            <span>{isRTL ? 'اطلب تسعير مجسمات قائمة مطعمك الآن' : 'Commission 1:1 Replicas for Your Menu'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
