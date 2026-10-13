import React from 'react';
import { EnterpriseMatrixSection } from '../components/EnterpriseMatrixSection';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, ArrowRight, DollarSign, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EnterpriseRoiPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const economicStats = [
    {
      metric: '60 - 90',
      unit: isRTL ? 'يوماً' : 'Days',
      label: isRTL ? 'فترة استرداد الاستثمار (Amortization)' : 'Full Investment Payback',
      desc: isRTL ? 'توفير تكلفة هدر إعداد أطباق العرض اليومية يغطي تكلفة المجسم بالكامل خلال شهرين إلى ثلاثة.' : 'Eliminating daily display prep ingredient waste pays off the model in under 3 months.',
    },
    {
      metric: '365',
      unit: isRTL ? 'يوماً' : 'Days/Year',
      label: isRTL ? 'نضارة وجاذبية بيع مستمرة' : 'Perpetual Display Freshness',
      desc: isRTL ? 'لا ذبول للخضار، ولا تغير في لون الصلصات، ولا جفاف للخبز في واجهات البيع المزدحمة.' : 'Zero discoloration, melting glazes, or stale appearance in customer-facing vitrines.',
    },
    {
      metric: '+28%',
      unit: '',
      label: isRTL ? 'ارتفاع مبيعات الأطباق المعروضة' : 'Impulse Purchase Lift',
      desc: isRTL ? 'رؤية مجسم طبق ثلاثي الأبعاد واقعي يحفز الرغبة البصرية اللحظية مقارنة بالصور الورقية.' : 'Tangible 3D realism triggers visual appetite triggers significantly higher than 2D print menus.',
    },
  ];

  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <TrendingUp className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{isRTL ? 'العائد الاستثماري والاقتصادي' : 'Enterprise Economics & ROI'}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {isRTL 
            ? 'دراسة الجدوى: لماذا يعتبر التعاقد معنا استثماراً رابحاً؟' 
            : 'The Economics of Desire: Turning Visual Craft into Measurable ROI'}
        </h1>

        <p className="text-base sm:text-lg text-[#1C1917]/75 max-w-3xl leading-relaxed">
          {isRTL
            ? 'تكلفة إعداد وتغيير أطباق العرض يومياً في المطاعم الراقية وسلاسل البرجر والحلويات تستنزف ميزانيات ضخمة في الهدر. مجسماتنا الدائمة تمنحك استدامة فورية ونضارة مستمرة 365 يوماً في العام.'
            : 'Replacing daily kitchen prep for display cases with museum-grade permanent replicas eliminates thousands in ingredient waste while capturing high-margin impulse sales.'}
        </p>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {economicStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-7 rounded-3xl border border-[#BA2B43]/15 shadow-sm">
              <div className="font-serif text-4xl sm:text-5xl font-extrabold text-[#4E1420] mb-1">
                {stat.metric} <span className="text-base font-sans font-bold text-[#BA2B43]">{stat.unit}</span>
              </div>
              <h3 className="text-sm font-bold text-[#1C1917] mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <EnterpriseMatrixSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {isRTL ? 'اطلب دراسة جدوى مخصصة لشبكة فروع علامتك التجارية' : 'Request a Custom Fleet Amortization Model'}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/70 mb-8 max-w-xl mx-auto">
            {isRTL 
              ? 'نقدم للشركات والسلاسل الكبرى تحليلاً دقيقاً للوفر المالي المتوقع بناءً على عدد الفروع وتوزيع واجهات العرض.'
              : 'Our enterprise director will prepare a tailored cost-savings breakdown based on your active store footprint.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
          >
            <span>{isRTL ? 'تواصل لحساب عائد استثمار مشروعك' : 'Calculate Your Enterprise ROI'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};
