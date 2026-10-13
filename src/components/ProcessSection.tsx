import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Compass, Scan, Sparkles, Truck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const process = t.process;

  const stepIcons = [
    <Compass className="w-6 h-6 text-[#BA2B43]" />,
    <Scan className="w-6 h-6 text-[#D8B26E]" />,
    <Sparkles className="w-6 h-6 text-[#BA2B43]" />,
    <Truck className="w-6 h-6 text-[#D8B26E]" />,
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#BA2B43]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#BA2B43]" />
            <span>{process.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            {process.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1917]/70">
            {process.subtitle}
          </p>
        </div>

        {/* 4-Stage Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {process.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white p-6 sm:p-7 rounded-3xl border border-[#BA2B43]/15 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4EAEB] flex items-center justify-center border border-[#BA2B43]/20 group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif text-3xl font-extrabold text-[#4E1420]/25 group-hover:text-[#BA2B43]/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-3 group-hover:text-[#BA2B43] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C1917]/75 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Badge */}
              <div className="pt-4 border-t border-[#4E1420]/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#BA2B43] block mb-1">
                  {isRTL ? 'المخرج الهندسي للمرحلة:' : 'Milestone Output:'}
                </span>
                <div className="flex items-start gap-1.5 text-xs font-semibold text-[#4E1420]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BA2B43] shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>

              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#BA2B43] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
