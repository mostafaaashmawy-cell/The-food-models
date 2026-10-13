import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Maximize2, 
  ShieldCheck, 
  Sun, 
  Wind, 
  Flame, 
  Award, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Sparkles,
  Layers,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const MonumentalPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const data = t.outscaleOutdoor;
  const [monumentScale, setMonumentScale] = useState(6);

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <Maximize2 className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{data.tag}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {data.headline}
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-[#BA2B43] mb-6 max-w-3xl">
          "{data.subtitle}"
        </p>

        <div className="p-4 rounded-2xl bg-white border border-[#D8B26E]/40 shadow-sm max-w-3xl mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#BA2B43] shrink-0" />
          <span className="text-xs font-bold text-[#4E1420]">
            {data.heritageBadge}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#1C1917]/80 max-w-4xl leading-relaxed">
          {data.introParagraph}
        </p>
      </div>

      {/* Featured Outdoor Projects Grid (From Outscale Models) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BA2B43] block mb-1">
            {isRTL ? 'معالم معمارية ميدانية حقيقية' : 'Signature Architectural Outdoor Installations'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            {isRTL ? 'أعمال ميدانية نفذت لكبرى العلامات التجارية' : 'Proven Monumental Scale Brand Landmarks'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#BA2B43]/15 shadow-luxury flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#350B14]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#D8B26E] text-[#350B14] shadow-sm">
                    {proj.client}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-[#D8B26E] font-medium block">
                    {proj.scale}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#1C1917]/75 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="pt-3 border-t border-[#4E1420]/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#4E1420]/70 font-semibold">{isRTL ? 'الخامات الهندسية:' : 'Materials:'}</span>
                  <span className="font-bold text-[#BA2B43]">{proj.materials}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Scale Simulator (1m to 10+m) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#BA2B43]/20 shadow-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#4E1420]">
                {t.lines.line2.sliderTitle}
              </h2>
              <p className="text-xs text-[#1C1917]/70 mt-1">
                {t.lines.line2.sliderHint}
              </p>
            </div>
            <span className="text-xs font-extrabold text-[#4E1420] bg-[#D8B26E]/20 px-4 py-2 rounded-full border border-[#D8B26E]/50">
              {monumentScale} {isRTL ? 'أمتار ارتفاع هندسي' : 'Meters Monumental Height'}
            </span>
          </div>

          {/* Scale Canvas Preview */}
          <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-[#F4EAEB]/50 to-[#FAF8F5] rounded-2xl border border-[#4E1420]/15 flex items-end justify-center px-6 pb-6 gap-10 overflow-hidden">
            {/* Height Grid Lines */}
            <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between pointer-events-none opacity-20 px-4">
              <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">10m</div>
              <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">7.5m</div>
              <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">5m</div>
              <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">2.5m</div>
            </div>

            {/* Human Silhouette Comparison (1.8m) */}
            <div className="flex flex-col items-center z-10">
              <div className="h-[50px] w-7 bg-[#1C1917] rounded-t-full flex items-center justify-center opacity-70">
                <span className="text-[7px] text-white font-bold">1.8m</span>
              </div>
              <span className="text-[10px] font-bold text-[#1C1917]/70 mt-1 whitespace-nowrap">
                {isRTL ? 'مقياس الإنسان (1.8م)' : 'Human Scale (1.8m)'}
              </span>
            </div>

            {/* Dynamically Scaled Sculpture */}
            <div className="flex flex-col items-center z-10">
              <motion.div
                animate={{ height: `${Math.min(270, monumentScale * 27)}px` }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-36 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#BA2B43] relative"
              >
                <img
                  src="/outdoor/danette-chocolate.webp"
                  alt="Danette Monumental Model"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2 justify-center">
                  <span className="text-xs font-black text-white drop-shadow-md">
                    {monumentScale}m Architecture
                  </span>
                </div>
              </motion.div>
              <span className="text-[10px] font-bold text-[#BA2B43] mt-1 whitespace-nowrap">
                {isRTL ? 'مجسم Outscale & City Scale المعماري' : 'City Scale & Outscale Monument'}
              </span>
            </div>
          </div>

          {/* Slider Control */}
          <div className="mt-8">
            <div className="flex justify-between text-xs font-bold text-[#4E1420] mb-2">
              <span>1 Meter (Entrance Lobby)</span>
              <span>5 Meters (Drive-Thru Canopy)</span>
              <span>10+ Meters (Highway Landmark Beacon)</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={monumentScale}
              onChange={(e) => setMonumentScale(Number(e.target.value))}
              className="w-full h-2 bg-[#F4EAEB] rounded-lg appearance-none cursor-pointer accent-[#BA2B43]"
            />
          </div>
        </div>
      </div>

      {/* Leadership Profile: Dr. Ahmad Mousa (Outscale Art Director) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#350B14] rounded-3xl p-8 sm:p-12 text-white border border-[#D8B26E]/30 relative overflow-hidden dark-mesh-gradient">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8B26E] block mb-2">
              {data.doctorBio.title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              {data.doctorBio.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#D8B26E] font-medium mb-8">
              {data.doctorBio.role}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
              <div>
                <h4 className="font-serif text-base font-bold text-white mb-3">
                  {isRTL ? 'المؤهلات الأكاديمية والدرجات العلمية:' : 'Academic Qualifications & Chairs:'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {data.doctorBio.degrees.map((deg, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B26E] shrink-0 mt-0.5" />
                      <span>{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-white mb-3">
                  {isRTL ? 'الاعتمادات واللجان العليا:' : 'Official Accreditations & Juries:'}
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {data.doctorBio.accolades.map((acc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-[#D8B26E] shrink-0 mt-0.5" />
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Engineering Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BA2B43] block mb-1">
            {isRTL ? 'المواصفات الإنشائية والمعمارية' : 'Engineering & Material Science'}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
            {isRTL ? 'هندسة تقاوم الرياح والشمس لسنوات طويلة' : 'Structural Longevity Built to Last Decades'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.engineeringSpecs.map((spec, idx) => (
            <div key={idx} className="bg-white p-7 rounded-3xl border border-[#BA2B43]/15 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#4E1420] mb-2">
                {spec.title}
              </h3>
              <p className="text-xs text-[#1C1917]/70 leading-relaxed mb-4">
                {spec.desc}
              </p>
              <ul className="space-y-2 border-t border-[#4E1420]/10 pt-4 text-xs font-medium text-[#1C1917]/85">
                {spec.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BA2B43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-10 sm:p-12 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {data.ctaBox.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/75 max-w-2xl mx-auto mb-8">
            {data.ctaBox.desc}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
          >
            <span>{data.ctaBox.btn}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>

    </div>
  );
};
