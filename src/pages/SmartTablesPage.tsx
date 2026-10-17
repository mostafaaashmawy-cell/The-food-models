import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tablet, 
  Play, 
  Sparkles, 
  Gamepad2, 
  UtensilsCrossed, 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Maximize,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '../context/QuoteModalContext';

export const SmartTablesPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const data = t.smartTablesPage;

  // Selected Clip / Video Preview State
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlayingEmbed, setIsPlayingEmbed] = useState(false);

  // Interactive Table Simulation State
  const [simMode, setSimMode] = useState<'menu' | 'arcade' | 'lighting'>('menu');
  const [ambientColor, setAmbientColor] = useState('#4E1420');
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTableTouch = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev.slice(-6), newRipple]);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-4">
          <Tablet className="w-3.5 h-3.5 text-[#BA2B43]" />
          <span>{data.tag}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] max-w-4xl leading-tight mb-4">
          {data.headline}
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-[#BA2B43] mb-6 max-w-3xl">
          "{data.subtitle}"
        </p>

        {/* 4 Quick ROI Metric Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl pt-4">
          {data.roiHighlights.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#BA2B43]/15 shadow-sm text-center">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4E1420] block">
                {stat.metric}
              </span>
              <span className="text-xs font-bold text-[#BA2B43] block mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#1C1917]/65 block mt-1 leading-snug">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Video Showcase & Screen Clips Navigator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#1C1917] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-[#D8B26E]/30 overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#BA2B43] text-white mb-2">
              {data.videoBadge}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
              {data.videoTitle}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {data.videoDesc}
            </p>
          </div>

          {/* Main Video Screen Container - Bespoke Hardware Console Display */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#D8B26E]/40 shadow-2xl bg-[#0F0C0D] mb-8">
            
            {/* Console Hardware Top Status Bar */}
            <div className="h-10 px-4 bg-[#181315] border-b border-white/10 flex items-center justify-between text-xs text-white/70 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono tracking-wider uppercase text-white font-bold">
                  {isRTL ? 'بث تجريبي حي بدقة 4K • شاشة اللمس التفاعلية' : 'LIVE 4K HARDWARE DEMO • 120Hz CAPACITIVE SURFACE'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-[#D8B26E]">
                <span>IP65 WATERPROOF TEST</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">10-POINT MULTI-TOUCH</span>
              </div>
            </div>

            {/* Video Viewport (16:9 Aspect Ratio) */}
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              {!isPlayingEmbed ? (
                <div 
                  className="relative w-full h-full group cursor-pointer" 
                  onClick={() => setIsPlayingEmbed(true)}
                >
                  <img
                    src={data.videoClips[activeClipIndex].image}
                    alt={data.videoClips[activeClipIndex].title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* High-Tech Ambient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 group-hover:via-black/20 transition-all flex items-center justify-center">
                    
                    {/* Custom Luxury Play Button */}
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-[#BA2B43]/30 blur-xl animate-pulse" />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#4E1420] to-[#BA2B43] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-2 border-[#D8B26E]">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white text-white drop-shadow-md" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Video Metadata HUD */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                    <div>
                      <span className="text-[11px] font-mono text-[#D8B26E] font-bold block mb-1">
                        {isRTL ? 'معاينة المقطع:' : 'Active Demo Segment:'} {data.videoClips[activeClipIndex].time}
                      </span>
                      <h3 className="font-serif text-base sm:text-xl font-bold drop-shadow">
                        {data.videoClips[activeClipIndex].title}
                      </h3>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-[#4E1420]/80 backdrop-blur-md text-xs font-bold border border-[#D8B26E]/40 shadow-lg text-[#D8B26E] self-start sm:self-auto flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'بدء تشغيل العرض التوضيحي' : 'Watch Hardware Demo'}</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/gN-BXxQ2mvg?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
                    title="Smart Interactive Dining Table Demonstration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 pointer-events-auto"
                  />
                  
                  {/* Floating Custom HUD Exit/Reload Button */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10">
                    <button
                      onClick={() => setIsPlayingEmbed(false)}
                      className="px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-[#BA2B43] text-white text-[11px] font-bold backdrop-blur-md border border-white/25 transition-colors cursor-pointer shadow-lg"
                    >
                      {isRTL ? '✕ إيقاف / اختيار مشهد آخر' : '✕ Reset / Select Feature'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Bottom Console Status Footer */}
            <div className="h-9 px-4 bg-[#140F11] border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="font-mono text-[#D8B26E]">
                {isRTL ? 'المواصفة: زجاج سيكوريت مقوى 8 ملم مضاد للكسر وسوائل الأطعمة' : 'Spec: 8mm Toughened Armor Glass • Liquid Resistant'}
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                120Hz ULTRA-LOW LATENCY
              </span>
            </div>
          </div>

          {/* 4 Small Video Scene Clips Selector */}
          <div>
            <span className="text-xs font-bold text-[#D8B26E] uppercase tracking-wider block mb-4">
              {isRTL ? 'اختر المشهد أو الخاصية المراد معاينتها من الفيديو:' : 'Select Video Feature Breakdown to Preview:'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.videoClips.map((clip, idx) => (
                <div
                  key={clip.id}
                  onClick={() => {
                    setActiveClipIndex(idx);
                    setIsPlayingEmbed(false);
                  }}
                  className={`p-3.5 rounded-2xl border text-left rtl:text-right cursor-pointer transition-all ${
                    activeClipIndex === idx
                      ? 'bg-[#4E1420] border-[#D8B26E] shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="relative h-28 rounded-xl overflow-hidden mb-2.5">
                    <img src={clip.image} alt={clip.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                      {clip.time}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1 line-clamp-1">
                    {clip.title}
                  </h4>
                  <p className="text-[11px] text-white/65 line-clamp-2 leading-snug">
                    {clip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Table Surface Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BA2B43] block mb-1">
            {isRTL ? 'تجربة حية تفاعلية' : 'Hands-On Simulator'}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
            {t.lines.line3.simTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/70 mt-1">
            {t.lines.line3.simSubtitle}
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border border-[#BA2B43]/20 shadow-2xl relative transition-colors duration-500 overflow-hidden"
          style={{
            backgroundColor: '#1C1917',
            boxShadow: `0 25px 60px -15px ${ambientColor}40`,
          }}
        >
          {/* Simulator Control Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8B26E] flex items-center gap-1.5">
              <Tablet className="w-4 h-4 text-[#D8B26E]" />
              <span>Simulated 4K Touch Surface</span>
            </span>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-md">
              <button
                onClick={() => setSimMode('menu')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simMode === 'menu' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5 inline mr-1" />
                {t.lines.line3.tabs.menu}
              </button>
              <button
                onClick={() => setSimMode('arcade')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simMode === 'arcade' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5 inline mr-1" />
                {t.lines.line3.tabs.arcade}
              </button>
              <button
                onClick={() => setSimMode('lighting')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  simMode === 'lighting' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 inline mr-1" />
                {t.lines.line3.tabs.lighting}
              </button>
            </div>
          </div>

          {/* Table Surface */}
          <div
            onClick={handleTableTouch}
            className="relative w-full h-84 rounded-2xl border-2 bg-gradient-to-b from-black/90 to-[#2A0810]/80 overflow-hidden cursor-pointer select-none p-6 flex flex-col justify-between"
            style={{ borderColor: ambientColor }}
          >
            {/* Ripples */}
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.9 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: ripple.x - 20,
                  top: ripple.y - 20,
                  width: 40,
                  height: 40,
                  border: `2px solid ${ambientColor}`,
                  boxShadow: `0 0 25px ${ambientColor}`,
                }}
              />
            ))}

            {simMode === 'menu' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-white/80 border-b border-white/10 pb-2">
                  <span className="font-mono text-[#D8B26E]">TABLE 07 • VIP LOUNGE</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded text-[10px]">
                    Live POS Connected
                  </span>
                </div>

                <div className="flex items-center gap-5 my-auto">
                  <img
                    src="/food/burger.jpg"
                    alt="3D Dish Preview"
                    className="w-28 h-28 rounded-xl object-cover border border-white/20 shadow-lg animate-float"
                  />
                  <div className="flex-1">
                    <h5 className="text-white font-bold text-lg">
                      {t.lines.line3.menuDemo.item}
                    </h5>
                    <span className="text-[#D8B26E] font-bold text-base block mt-0.5">
                      {t.lines.line3.menuDemo.price}
                    </span>
                    <p className="text-xs text-white/70 mt-1">
                      {t.lines.line3.menuDemo.desc}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-xs text-white/90 flex items-center justify-between">
                  <span>{t.lines.line3.menuDemo.pairing}</span>
                  <span className="text-[#D8B26E] font-bold underline cursor-pointer">
                    + Add to Ticket
                  </span>
                </div>
              </motion.div>
            )}

            {simMode === 'arcade' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-[#BA2B43]/30 border border-[#BA2B43] flex items-center justify-center text-[#D8B26E] mb-3 animate-bounce">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <h5 className="text-white font-bold text-base mb-1">
                  {t.lines.line3.arcadeDemo.score}
                </h5>
                <p className="text-xs text-white/70 max-w-sm mb-3">
                  {t.lines.line3.arcadeDemo.prompt}
                </p>
                <span className="text-[11px] font-mono text-[#D8B26E] bg-white/10 px-3 py-1 rounded-full">
                  {t.lines.line3.arcadeDemo.active}
                </span>
              </motion.div>
            )}

            {simMode === 'lighting' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center gap-4 text-center">
                <h5 className="text-white font-bold text-base">
                  {isRTL ? 'اختر نمط الإضاءة المحيطية للطاولة' : 'Select Dynamic Ambiance Glow'}
                </h5>
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto w-full">
                  {t.lines.line3.lightingDemo.modes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setAmbientColor(mode.color);
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        ambientColor === mode.color
                          ? 'border-white text-white shadow-lg'
                          : 'border-white/20 text-white/70 hover:border-white/50'
                      }`}
                      style={{ backgroundColor: `${mode.color}40` }}
                    >
                      <div
                        className="w-4 h-4 rounded-full mx-auto mb-1 border border-white"
                        style={{ backgroundColor: mode.color }}
                      />
                      {mode.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Technical Specifications Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-serif text-3xl font-bold text-[#1C1917] mb-8 text-center">
          {isRTL ? 'المواصفات التقنية والهندسية للطاولات الذكية' : 'Commercial Grade Hardware & Software Architecture'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.specifications.map((block, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#BA2B43]/15 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#4E1420] mb-4 pb-3 border-b border-[#4E1420]/10">
                {block.category}
              </h3>
              <div className="space-y-3.5">
                {block.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-start gap-4 text-xs">
                    <span className="font-bold text-[#1C1917]/70 shrink-0">{spec.label}</span>
                    <span className="font-semibold text-[#4E1420] text-right rtl:text-left">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Benefits & ROI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.guestBenefits.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#BA2B43]/15 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#F4EAEB] flex items-center justify-center text-[#BA2B43] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#1C1917] mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-10 sm:p-12 rounded-3xl border border-[#BA2B43]/20 shadow-luxury max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4E1420] mb-3">
            {isRTL ? 'جاهز لترقية تجربة ضيافتك وتثبيت الطاولات التفاعلية؟' : 'Ready to Transform Your Dining Experience with Smart Tables?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1917]/75 max-w-2xl mx-auto mb-8">
            {isRTL 
              ? 'تواصل معنا لتحديد موعد لمعاينة النظام الحي ومناقشة التوريد والربط التقني مع أنظمة نقاط البيع بمطعمك.'
              : 'Schedule a private hands-on demonstration and explore turnkey restaurant hardware integration.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E1420] text-white text-xs font-bold tracking-wide hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105 cursor-pointer border border-[#D8B26E]/40"
            >
              <Sparkles className="w-4 h-4 text-[#D8B26E]" />
              <span>{isRTL ? 'طلب عرض سعر للطاولات التفاعلية' : 'Request Smart Tables Quotation'}</span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#4E1420]/20 bg-white hover:bg-[#F4EAEB] text-[#4E1420] text-xs font-bold transition-all shadow-sm hover:scale-105"
            >
              <span>{isRTL ? 'استشارة هندسية خاصة' : 'Schedule Engineering Consultation'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
