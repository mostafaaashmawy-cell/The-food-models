import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Cpu, Flame, Layers, Sparkles } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const HeritageSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const techPillars = [
    {
      icon: <Cpu className="w-5 h-5 text-[#D8B26E]" />,
      title: isRTL ? 'المسح الضوئي 3D Photogrammetry' : '3D Laser Photogrammetry',
      desc: isRTL ? 'التقاط دقيق لهندسة الأطباق بدرجة خطأ تقل عن 0.1 مليمتر.' : 'Capturing dish geometry with sub-millimeter precision rigs.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#BA2B43]" />,
      title: isRTL ? 'أفران الطلاء الحرارية الصناعية' : 'Industrial Thermal Curing Ovens',
      desc: isRTL ? 'طبقات بولي يوريثان مقاومة للحرارة والزيوت والشمس المباشرة.' : 'Polyurethane coats cured to resist extreme desert UV & oils.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#D8B26E]" />,
      title: isRTL ? 'قوالب سيليكون مخصصة ومطاطية' : 'Bespoke Silicone Matrix',
      desc: isRTL ? 'حفظ تفاصيل القرمشة والتفحم الدقيق دون أي فقدان للشكل.' : 'Locking microscopic crust cracks and charring textures permanently.',
    },
  ];

  return (
    <section
      id="heritage"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#350B14] text-[#FAF8F5] overflow-hidden dark-mesh-gradient border-y border-[#D8B26E]/20"
    >
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D8B26E_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4E1420] border border-[#D8B26E]/40 text-[#D8B26E] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
            <span>{t.heritage.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight mb-4"
          >
            {t.heritage.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg text-[#D8B26E] font-serif italic"
          >
            {t.heritage.quote}
          </motion.p>
        </div>

        {/* Narrative Split: Story + Seal Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8 flex flex-col gap-6 text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed"
          >
            <p className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D8B26E] pl-4 rtl:pl-0 rtl:pr-4 py-1 font-medium text-[#FAF8F5]">
              {t.heritage.p1}
            </p>
            <p>{t.heritage.p2}</p>
            <p>{t.heritage.p3}</p>

            {/* Industrial Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {techPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#4E1420]/60 border border-[#D8B26E]/20 backdrop-blur-sm flex flex-col gap-2"
                >
                  <div className="p-2 rounded-lg bg-[#350B14] w-fit border border-[#D8B26E]/20">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold text-[#FAF8F5] tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#FAF8F5]/70 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Stamp Seal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-[#4E1420]/80 to-[#2A0810]/90 border border-[#D8B26E]/30 shadow-2xl relative text-center"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-white/95 shadow-glow-gold border-2 border-[#D8B26E] flex items-center justify-center mb-6">
              <img
                src="/assets/02.png"
                alt="City Scale Authenticity Seal"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#D8B26E] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#D8B26E]" />
              <span>Official Subsidiary</span>
            </div>

            <p className="text-xs text-[#FAF8F5]/80 font-serif">
              City Scale Models Engineering S.A.E.
            </p>
            <p className="text-[11px] text-[#D8B26E]/80 mt-1">
              {isRTL ? 'المراكز الهندسية: مصر • المملكة العربية السعودية' : 'Engineering Centers: Egypt • Saudi Arabia'}
            </p>
          </motion.div>

        </div>

        {/* 4 Live Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-[#D8B26E]/20">
          
          {/* Stat 1: 28+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#4E1420]/40 border border-[#D8B26E]/25 text-center flex flex-col items-center justify-center hover:border-[#D8B26E]/60 transition-colors"
          >
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D8B26E] mb-2 tracking-tight">
              <AnimatedNumber end={28} suffix="+" />
            </div>
            <div className="text-sm font-bold text-[#FAF8F5] mb-1">
              {t.heritage.stats.years.label}
            </div>
            <div className="text-xs text-[#FAF8F5]/65">
              {t.heritage.stats.years.desc}
            </div>
          </motion.div>

          {/* Stat 2: 100% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-[#4E1420]/40 border border-[#D8B26E]/25 text-center flex flex-col items-center justify-center hover:border-[#D8B26E]/60 transition-colors"
          >
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D8B26E] mb-2 tracking-tight">
              <AnimatedNumber end={100} suffix="%" />
            </div>
            <div className="text-sm font-bold text-[#FAF8F5] mb-1">
              {t.heritage.stats.fidelity.label}
            </div>
            <div className="text-xs text-[#FAF8F5]/65">
              {t.heritage.stats.fidelity.desc}
            </div>
          </motion.div>

          {/* Stat 3: Infinity ∞ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-2xl bg-[#4E1420]/40 border border-[#D8B26E]/25 text-center flex flex-col items-center justify-center hover:border-[#D8B26E]/60 transition-colors"
          >
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D8B26E] mb-2 tracking-tight">
              ∞
            </div>
            <div className="text-sm font-bold text-[#FAF8F5] mb-1">
              {t.heritage.stats.scale.label}
            </div>
            <div className="text-xs text-[#FAF8F5]/65">
              {t.heritage.stats.scale.desc}
            </div>
          </motion.div>

          {/* Stat 4: 365 Days */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 rounded-2xl bg-[#4E1420]/40 border border-[#D8B26E]/25 text-center flex flex-col items-center justify-center hover:border-[#D8B26E]/60 transition-colors"
          >
            <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D8B26E] mb-2 tracking-tight">
              <AnimatedNumber end={365} suffix="" />
            </div>
            <div className="text-sm font-bold text-[#FAF8F5] mb-1">
              {t.heritage.stats.freshness.label}
            </div>
            <div className="text-xs text-[#FAF8F5]/65">
              {t.heritage.stats.freshness.desc}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
