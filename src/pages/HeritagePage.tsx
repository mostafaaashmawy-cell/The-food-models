import React from 'react';
import { HeritageSection } from '../components/HeritageSection';
import { ProcessSection } from '../components/ProcessSection';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Award, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeritagePage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <Award className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{isRTL ? 'الاعتماد الهندسي والتاريخ' : 'Engineering Pedigree & Heritage'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {isRTL 
            ? 'امتياز سيتي للمجسمات المعمارية في خدمة قطاع الضيافة' 
            : 'City Scale Models Pedigree: Architectural Mastery for Fine Dining'}
        </h1>

        <p className="text-base sm:text-lg text-[#1C1917]/75 max-w-3xl leading-relaxed">
          {isRTL
            ? 'منذ عام 2011، تصدّرت سيتي للمجسمات المشهد في الشرق الأوسط في تنفيذ مجسمات أضخم المشاريع القومية والعمرانية. نضع اليوم هذه الترسانة الصناعية بين أيدي كبرى علامات الأغذية والمشروبات.'
            : 'For over 15 years, City Scale Models has been the Middle East authority in microscopic architectural accuracy. We now deploy this exact industrial precision to elevate premier gastronomy and enterprise F&B brands.'}
        </p>
      </div>

      <HeritageSection />

      <ProcessSection />

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {isRTL ? 'تعاقد مع مؤسسة هندسية متكاملة تضمن نجاح مشروعك' : 'Partner with an Accredited Industrial Design House'}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/70 mb-8 max-w-xl mx-auto">
            {isRTL 
              ? 'شهادات اعتماد رسمي، ضمان شامل، وتوريد مباشر لكافة عواصم ومدن الشرق الأوسط.'
              : 'Certified engineering blueprints, full material guarantees, and white-glove turnkey installation.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
          >
            <span>{isRTL ? 'طلب اجتماع استشاري مع الإدارة الهندسية' : 'Request Engineering Consultation'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};
