import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useQuoteModal } from '../context/QuoteModalContext';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Award, Sparkles } from 'lucide-react';

export const EnterpriseMatrixSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const matrix = t.matrix;

  return (
    <section id="enterprise-roi" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden border-t border-[#BA2B43]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#BA2B43]" />
            <span>{matrix.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            {matrix.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1917]/70">
            {matrix.subtitle}
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-[#BA2B43]/20 bg-white shadow-luxury">
          <table className="w-full text-left rtl:text-right border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b border-[#4E1420]/15 bg-[#FAF8F5]">
                <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#4E1420] w-1/4">
                  {matrix.table.headers.metric}
                </th>
                <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#1C1917]/60 w-3/8 bg-gray-50/70">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-gray-400" />
                    <span>{matrix.table.headers.generic}</span>
                  </div>
                </th>
                <th className="py-5 px-6 sm:px-8 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] w-3/8 bg-[#4E1420]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D8B26E]" />
                    <span>{matrix.table.headers.theFoodModels}</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#4E1420]/10 text-xs sm:text-sm">
              {matrix.table.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#F4EAEB]/30 transition-colors"
                >
                  {/* Metric Name */}
                  <td className="py-6 px-6 sm:px-8 font-bold text-[#1C1917] align-top bg-[#FAF8F5]/50">
                    <div className="text-sm sm:text-base font-serif text-[#4E1420] mb-1">
                      {row.metric}
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F4EAEB] text-[#BA2B43] border border-[#BA2B43]/20">
                      {row.advantage}
                    </span>
                  </td>

                  {/* Generic Vendors */}
                  <td className="py-6 px-6 sm:px-8 text-[#1C1917]/70 align-top bg-gray-50/40">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-100 text-red-600 shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <p className="leading-relaxed">
                        {row.generic}
                      </p>
                    </div>
                  </td>

                  {/* The Food Models */}
                  <td className="py-6 px-6 sm:px-8 font-medium text-[#1C1917] align-top bg-[#4E1420]/[0.02]">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-[#BA2B43]/15 text-[#BA2B43] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="leading-relaxed font-semibold text-[#4E1420]">
                        {row.theFoodModels}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Bottom Trust Anchor */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-[#D8B26E]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#4E1420]">
              {isRTL ? 'معايير جودة معمارية تلائم كبار المطورين والفنادق' : 'Architectural Scale Engineering for Enterprise Hospitality'}
            </h4>
            <p className="text-xs text-[#1C1917]/70 mt-0.5">
              {isRTL ? 'نقدم شهادات اعتماد هيكلي ومقاومة حرارية رسمية مع كل مشروع.' : 'Structural certificates & thermal testing documentation provided with every commission.'}
            </p>
          </div>
          <button
            onClick={openQuoteModal}
            className="px-6 py-2.5 rounded-full bg-[#4E1420] text-white text-xs font-bold hover:bg-[#350B14] transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            {isRTL ? 'طلب عرض سعر' : 'Request Quotation'}
          </button>
        </div>

      </div>
    </section>
  );
};
