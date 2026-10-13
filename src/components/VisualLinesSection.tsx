import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Maximize2, 
  Tablet, 
  CheckCircle2, 
  Sliders, 
  Gamepad2, 
  UtensilsCrossed, 
  Lightbulb,
  Shield,
  Sun,
  Flame,
  ArrowRight
} from 'lucide-react';

export const VisualLinesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'line1' | 'line2' | 'line3'>('line1');

  // LINE 01: Before/After Slider State
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

  // LINE 02: Scale Slider State (1m to 12m)
  const [monumentScale, setMonumentScale] = useState(6);

  // LINE 03: Smart Table Simulator State
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
    <section id="visual-lines" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background radial soft lights */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#BA2B43]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#D8B26E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-[#BA2B43]" />
            <span>{t.lines.sectionTag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            {t.lines.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1917]/70">
            {t.lines.sectionSubtitle}
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/80 border border-[#BA2B43]/15 shadow-sm max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab('line1')}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'line1'
                  ? 'bg-[#4E1420] text-[#FAF8F5] shadow-md'
                  : 'text-[#1C1917]/70 hover:text-[#4E1420] hover:bg-[#F4EAEB]/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#D8B26E]" />
              <span>{isRTL ? '01. المجسمات 1:1' : '01. Replicas 1:1'}</span>
            </button>

            <button
              onClick={() => setActiveTab('line2')}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'line2'
                  ? 'bg-[#4E1420] text-[#FAF8F5] shadow-md'
                  : 'text-[#1C1917]/70 hover:text-[#4E1420] hover:bg-[#F4EAEB]/50'
              }`}
            >
              <Maximize2 className="w-4 h-4 text-[#BA2B43]" />
              <span>{isRTL ? '02. المنحوتات الضخمة' : '02. Monumental Sculptures'}</span>
            </button>

            <button
              onClick={() => setActiveTab('line3')}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'line3'
                  ? 'bg-[#4E1420] text-[#FAF8F5] shadow-md'
                  : 'text-[#1C1917]/70 hover:text-[#4E1420] hover:bg-[#F4EAEB]/50'
              }`}
            >
              <Tablet className="w-4 h-4 text-[#D8B26E]" />
              <span>{isRTL ? '03. الطاولات الذكية' : '03. Smart Tables'}</span>
            </button>
          </div>
        </div>

        {/* Tabbed Display Content */}
        <AnimatePresence mode="wait">
          
          {/* TAB 01: LINE 01 */}
          {activeTab === 'line1' && (
            <motion.div
              key="line1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Text / Features Column */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F4EAEB] text-[#BA2B43] mb-3 border border-[#BA2B43]/20">
                    {t.lines.line1.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-2">
                    {t.lines.line1.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#BA2B43] italic">
                    "{t.lines.line1.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#1C1917]/80 leading-relaxed">
                  {t.lines.line1.overview}
                </p>

                {/* Key Benefits */}
                <div className="space-y-4 pt-2">
                  {t.lines.line1.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#4E1420]/10 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#BA2B43] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917] mb-0.5">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dedicated Page Link Button */}
                <Link
                  to="/lines/replicas"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold w-fit hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                >
                  <span>{t.lines.viewDedicatedPage}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>

              {/* Interactive Before / After Comparison Showcase */}
              <div className="lg:col-span-6">
                <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#BA2B43]/15 shadow-luxury">
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4E1420] flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#BA2B43]" />
                      <span>{isRTL ? 'مقارنة التطابق البصري التفاعلية' : 'Interactive Visual Match Slider'}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-[#BA2B43] bg-[#F4EAEB] px-2.5 py-0.5 rounded-full">
                      100% 1:1 Match
                    </span>
                  </div>

                  {/* Draggable Comparison Card */}
                  <div
                    ref={sliderContainerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onClick={(e) => handleSliderMove(e.clientX)}
                    className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#4E1420]/15"
                  >
                    <img
                      src="/food/burger.jpg"
                      alt="Real Culinary Dish"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wide">
                      {t.lines.line1.sliderRealLabel}
                    </div>

                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src="/food/burger 2.jfif"
                        alt="The Food Models Artisan Replica"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : '100%' }}
                      />
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-[#4E1420]/90 backdrop-blur-md text-[#D8B26E] text-[11px] font-bold tracking-wide border border-[#D8B26E]/40">
                        {t.lines.line1.sliderReplicaLabel}
                      </div>
                    </div>

                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center -translate-x-1/2"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#4E1420] border-2 border-white shadow-lg flex items-center justify-center text-white">
                        <Sliders className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#1C1917]/60 text-center mt-3 font-medium">
                    {t.lines.line1.interactiveHint}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 02: LINE 02 */}
          {activeTab === 'line2' && (
            <motion.div
              key="line2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F4EAEB] text-[#BA2B43] mb-3 border border-[#BA2B43]/20">
                    {t.lines.line2.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-2">
                    {t.lines.line2.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#BA2B43] italic">
                    "{t.lines.line2.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#1C1917]/80 leading-relaxed">
                  {t.lines.line2.overview}
                </p>

                <div className="space-y-4 pt-2">
                  {t.lines.line2.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#4E1420]/10 shadow-sm">
                      <Shield className="w-5 h-5 text-[#BA2B43] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917] mb-0.5">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dedicated Page Link Button */}
                <Link
                  to="/lines/monumental"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold w-fit hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                >
                  <span>{isRTL ? 'استكشف مشاريع Outscale ومواصفات المنحوتات العملاقة ←' : 'Explore Outscale Models Alliance & Landmark Projects →'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>

              {/* Interactive Monumental Scale Simulator Column */}
              <div className="lg:col-span-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BA2B43]/15 shadow-luxury flex flex-col">
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4E1420] flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#BA2B43]" />
                      <span>{t.lines.line2.sliderTitle}</span>
                    </span>
                    <span className="text-xs font-extrabold text-[#4E1420] bg-[#D8B26E]/20 px-3 py-1 rounded-full border border-[#D8B26E]/40">
                      {monumentScale} {isRTL ? 'أمتار' : 'Meters Tall'}
                    </span>
                  </div>

                  <p className="text-xs text-[#1C1917]/65 mb-6">
                    {t.lines.line2.sliderHint}
                  </p>

                  <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-[#F4EAEB]/40 to-[#FAF8F5] rounded-2xl border border-[#4E1420]/15 flex items-end justify-center px-6 pb-6 gap-8 overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between pointer-events-none opacity-20 px-4">
                      <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">10m</div>
                      <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">7.5m</div>
                      <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">5m</div>
                      <div className="border-b border-dashed border-[#4E1420] w-full text-[10px] text-right">2.5m</div>
                    </div>

                    <div className="flex flex-col items-center z-10">
                      <div className="h-[45px] w-6 bg-[#1C1917] rounded-t-full flex items-center justify-center opacity-70">
                        <span className="text-[7px] text-white font-bold">1.8m</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#1C1917]/70 mt-1 whitespace-nowrap">
                        {isRTL ? 'إنسان (1.8م)' : 'Human (1.8m)'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center z-10">
                      <motion.div
                        animate={{ height: `${Math.min(240, monumentScale * 24)}px` }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="w-32 sm:w-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#BA2B43] relative"
                      >
                        <img
                          src="/outdoor/danette-chocolate.webp"
                          alt="Monumental Food Model"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4E1420]/60 via-transparent to-transparent flex items-end p-2 justify-center">
                          <span className="text-xs font-black text-white drop-shadow-md">
                            {monumentScale}m Architecture
                          </span>
                        </div>
                      </motion.div>
                      <span className="text-[10px] font-bold text-[#BA2B43] mt-1 whitespace-nowrap">
                        {isRTL ? 'مجسم سيتي للمجسمات المعماري' : 'City Scale & Outscale Monument'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between text-xs font-bold text-[#4E1420] mb-2">
                      <span>1 Meter (Entrance)</span>
                      <span>5 Meters (Drive-Thru)</span>
                      <span>10+ Meters (Highway Beacon)</span>
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
            </motion.div>
          )}

          {/* TAB 03: LINE 03 */}
          {activeTab === 'line3' && (
            <motion.div
              key="line3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F4EAEB] text-[#BA2B43] mb-3 border border-[#BA2B43]/20">
                    {t.lines.line3.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-2">
                    {t.lines.line3.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#BA2B43] italic">
                    "{t.lines.line3.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#1C1917]/80 leading-relaxed">
                  {t.lines.line3.overview}
                </p>

                <div className="space-y-4 pt-2">
                  {t.lines.line3.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#4E1420]/10 shadow-sm">
                      <Tablet className="w-5 h-5 text-[#BA2B43] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917] mb-0.5">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-[#1C1917]/70 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dedicated Page Link Button */}
                <Link
                  to="/lines/smart-tables"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold w-fit hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                >
                  <span>{isRTL ? 'شاهد مقاطع الفيديو الحية والمواصفات الكاملة للطاولات ←' : 'Watch Live Video Footage & Hardware Specifications →'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>

              {/* Interactive Smart Table Simulator */}
              <div className="lg:col-span-6">
                <div
                  className="p-6 sm:p-8 rounded-3xl border border-[#BA2B43]/20 shadow-2xl relative transition-colors duration-500 overflow-hidden"
                  style={{
                    backgroundColor: '#1C1917',
                    boxShadow: `0 25px 60px -15px ${ambientColor}40`,
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D8B26E] flex items-center gap-1.5">
                      <Tablet className="w-4 h-4 text-[#D8B26E]" />
                      <span>{t.lines.line3.simTitle}</span>
                    </span>

                    <div className="flex items-center gap-1 p-1 rounded-xl bg-white/10 backdrop-blur-md">
                      <button
                        onClick={() => setSimMode('menu')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          simMode === 'menu' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <UtensilsCrossed className="w-3.5 h-3.5 inline mr-1" />
                        {t.lines.line3.tabs.menu}
                      </button>
                      <button
                        onClick={() => setSimMode('arcade')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          simMode === 'arcade' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <Gamepad2 className="w-3.5 h-3.5 inline mr-1" />
                        {t.lines.line3.tabs.arcade}
                      </button>
                      <button
                        onClick={() => setSimMode('lighting')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          simMode === 'lighting' ? 'bg-[#BA2B43] text-white' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        <Lightbulb className="w-3.5 h-3.5 inline mr-1" />
                        {t.lines.line3.tabs.lighting}
                      </button>
                    </div>
                  </div>

                  <div
                    onClick={handleTableTouch}
                    className="relative w-full h-80 rounded-2xl border-2 bg-gradient-to-b from-black/80 to-[#2A0810]/70 overflow-hidden cursor-pointer select-none p-6 flex flex-col justify-between"
                    style={{ borderColor: ambientColor }}
                  >
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
                          boxShadow: `0 0 20px ${ambientColor}`,
                        }}
                      />
                    ))}

                    {simMode === 'menu' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs text-white/80 border-b border-white/10 pb-2">
                          <span className="font-mono text-[#D8B26E]">TABLE 07 • VIP LOUNGE</span>
                          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">
                            Live POS Connected
                          </span>
                        </div>

                        <div className="flex items-center gap-4 my-auto">
                          <img
                            src="/food/burger.jpg"
                            alt="3D Dish Preview"
                            className="w-24 h-24 rounded-xl object-cover border border-white/20 shadow-lg animate-float"
                          />
                          <div className="flex-1">
                            <h5 className="text-white font-bold text-base">
                              {t.lines.line3.menuDemo.item}
                            </h5>
                            <span className="text-[#D8B26E] font-bold text-sm block mt-0.5">
                              {t.lines.line3.menuDemo.price}
                            </span>
                            <p className="text-xs text-white/70 mt-1 line-clamp-2">
                              {t.lines.line3.menuDemo.desc}
                            </p>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-md text-[11px] text-white/90 flex items-center justify-between">
                          <span>{t.lines.line3.menuDemo.pairing}</span>
                          <span className="text-[#D8B26E] font-bold underline cursor-pointer">
                            + Add to Ticket
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {simMode === 'arcade' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center p-4">
                        <div className="w-14 h-14 rounded-full bg-[#BA2B43]/30 border border-[#BA2B43] flex items-center justify-center text-[#D8B26E] mb-3 animate-bounce">
                          <Gamepad2 className="w-7 h-7" />
                        </div>
                        <h5 className="text-white font-bold text-sm mb-1">
                          {t.lines.line3.arcadeDemo.score}
                        </h5>
                        <p className="text-xs text-white/70 max-w-xs mb-3">
                          {t.lines.line3.arcadeDemo.prompt}
                        </p>
                        <span className="text-[10px] font-mono text-[#D8B26E] bg-white/10 px-3 py-1 rounded-full">
                          {t.lines.line3.arcadeDemo.active}
                        </span>
                      </motion.div>
                    )}

                    {simMode === 'lighting' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center gap-4 text-center">
                        <h5 className="text-white font-bold text-sm">
                          {isRTL ? 'اختر نمط الإضاءة المحيطية للطاولة' : 'Select Dynamic Ambiance Glow'}
                        </h5>
                        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto w-full">
                          {t.lines.line3.lightingDemo.modes.map((mode) => (
                            <button
                              key={mode.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setAmbientColor(mode.color);
                              }}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
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
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};
