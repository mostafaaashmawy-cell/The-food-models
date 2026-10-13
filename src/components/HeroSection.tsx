import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ShieldCheck, Award, Eye } from 'lucide-react';

interface HeroSectionProps {
  onExploreLines: () => void;
  onCommission: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreLines, onCommission }) => {
  const { t, isRTL } = useLanguage();

  const previewCards = [
    {
      title: isRTL ? 'مجسمات 1:1 فائقة الدقة' : '1:1 Hyper-Realistic Replicas',
      subtitle: isRTL ? 'صفر هدر في واجهات العرض' : 'Zero Kitchen Spoilage',
      image: '/food/burger.jpg',
      badge: isRTL ? 'دقة ميكرونية' : 'Micron Precision',
    },
    {
      title: isRTL ? 'منحوتات فايبر جلاس عملاقة' : 'Monumental Outdoor Sculptures',
      subtitle: isRTL ? 'معالم معمارية بأي حجم' : 'Urban Drive-Thru Landmarks',
      image: '/food/Pizza.PNG',
      badge: isRTL ? 'مقاومة للأشعة UV' : 'UV Weatherproof',
    },
    {
      title: isRTL ? 'طاولات ذكية تفاعلية' : 'Smart Interactive Touch Tables',
      subtitle: isRTL ? 'قوائم رقمية وترفيه عائلي' : 'Next-Gen Dining Experience',
      image: '/food/gateau.jpg',
      badge: isRTL ? 'تقنية لمس 120Hz' : 'Multi-Touch Dining',
    },
  ];

  return (
    <section className="relative min-h-[95vh] pt-28 sm:pt-36 pb-20 overflow-hidden hero-mesh-gradient flex flex-col justify-center">
      {/* Decorative ambient radial auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#BA2B43]/10 to-[#D8B26E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-20 w-96 h-96 bg-[#4E1420]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#BA2B43]/8 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right rtl:items-start">
            
            {/* Heritage Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/30 text-[#4E1420] text-xs font-semibold tracking-wide shadow-sm mb-6"
            >
              <Award className="w-3.5 h-3.5 text-[#BA2B43]" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline with staggered reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.12] mb-6"
            >
              <span className="block">{t.hero.headline.split('..')[0] || t.hero.headline}</span>
              <span className="luxury-gradient-text block mt-1">
                {t.hero.headline.includes('..') ? t.hero.headline.split('..')[1] : ''}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#1C1917]/75 font-normal leading-relaxed max-w-2xl mb-8"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onCommission}
                className="relative group overflow-hidden w-full sm:w-auto px-8 py-4 rounded-full bg-[#4E1420] text-[#FAF8F5] font-semibold text-sm tracking-wide shadow-luxury hover:shadow-luxury-hover border border-[#D8B26E]/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D8B26E]" />
                  <span>{t.hero.primaryCta}</span>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#D8B26E]/25 to-transparent" />
              </button>

              <button
                onClick={onExploreLines}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/70 hover:bg-white text-[#4E1420] font-semibold text-sm border border-[#4E1420]/15 hover:border-[#BA2B43]/40 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#BA2B43] group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>

            {/* Proof Points Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#4E1420]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-[#4E1420]">
                    {t.hero.trustPoints.years.val}
                  </div>
                  <div className="text-xs text-[#1C1917]/70 font-medium leading-snug">
                    {t.hero.trustPoints.years.label}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-[#4E1420]">
                    {t.hero.trustPoints.fidelity.val}
                  </div>
                  <div className="text-xs text-[#1C1917]/70 font-medium leading-snug">
                    {t.hero.trustPoints.fidelity.label}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold text-[#4E1420]">
                    {t.hero.trustPoints.engineering.val}
                  </div>
                  <div className="text-xs text-[#1C1917]/70 font-medium leading-snug">
                    {t.hero.trustPoints.engineering.label}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Visual Showcase Column (Cards + Rotating Stamp Badge) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Circular Stamp 02 with Rotating Border Animation */}
              <div className="absolute -top-10 -right-6 sm:-top-12 sm:-right-8 z-30 flex items-center justify-center pointer-events-auto">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                  
                  {/* Rotating SVG Ring Text */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 160 160" className="w-full h-full">
                      <path
                        id="stampRingPath"
                        d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] uppercase font-bold tracking-[2.8px] fill-[#4E1420]">
                        <textPath href="#stampRingPath" startOffset="0%">
                          {t.hero.stampText}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Stamp Core Badge Image (02.png) */}
                  <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full p-1 bg-white shadow-xl border border-[#BA2B43]/20 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/02.png"
                      alt="The Food Models Seal of Quality"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* 3-Card Staggered Layered Showcase */}
              <div className="relative flex flex-col gap-4 pt-6">
                {previewCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="relative group bg-white/80 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#BA2B43]/15 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center gap-4 overflow-hidden"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 relative border border-[#4E1420]/10">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4E1420]/30 to-transparent" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#F4EAEB] text-[#BA2B43] mb-1.5 border border-[#BA2B43]/20">
                        {card.badge}
                      </span>
                      <h2 className="text-sm sm:text-base font-bold text-[#1C1917] truncate group-hover:text-[#BA2B43] transition-colors">
                        {card.title}
                      </h2>
                      <p className="text-xs text-[#1C1917]/70 font-medium truncate mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Ambient hover glow line */}
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#BA2B43] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Museum Vitrine Footnote */}
              <div className="mt-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#D8B26E]/30 text-center">
                <p className="text-[11px] text-[#4E1420] font-medium tracking-wide">
                  ✦ {isRTL ? 'معتمدة للاستخدام في كبرى سلاسل الفرانشايز والفنادق العالمية' : 'Engineered for International Franchises & Five-Star Hospitality'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
