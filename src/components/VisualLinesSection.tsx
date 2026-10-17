import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useQuoteModal } from '../context/QuoteModalContext';
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
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';

export const VisualLinesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<'line1' | 'line2' | 'line3'>('line1');

  // LINE 01: Visual Match Slider State & Dishes
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeDishKey, setActiveDishKey] = useState<'burger' | 'pizza' | 'dessert'>('burger');
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const dishes = {
    burger: {
      name: isRTL ? 'برجر الذواقة المزدوج' : 'Gourmet Double Smash Burger',
      image: '/food/burger.jpg',
      shelfLife: isRTL ? 'يتلف ويفقد نضارته خلال 4 ساعات' : 'Perishable — Spoils in 4 Hours',
      features: [
        isRTL ? 'مطابقة ميكرونية 100% لعروق اللحم' : '100% Micro-Cellular Meat Grain',
        isRTL ? 'طلاء بولي يوريثان حراري لمعان صوص الشيدر' : 'Permanent UV-Resistant Cheddar Glaze',
        isRTL ? 'حبات سمسم سيليكونية ثلاثية الأبعاد' : '3D Silicone Sesame Seeds',
      ],
    },
    pizza: {
      name: isRTL ? 'بيتزا إيطالية بالبيبروني والأعشاب' : 'Stone-Baked Pepperoni Pizza',
      image: '/food/pizza 2.PNG',
      shelfLife: isRTL ? 'تتصلب وتجف الجبنة خلال 3 ساعات' : 'Perishable — Congeals in 3 Hours',
      features: [
        isRTL ? 'محاكاة لحروق الخبز بالفرن الخشبي' : 'Wood-Fired Leopard Char Simulation',
        isRTL ? 'لمعان زيت البابريكا الدائم بالراتنج المرن' : 'Flexible Resin Paprika Oil Pools',
        isRTL ? 'أوراق ريحان وأعشاب غير قابلة للذبول' : 'Permanent Non-Wilted Herbal Flakes',
      ],
    },
    dessert: {
      name: isRTL ? 'كيك الشوكولاتة الذائبة الفاخر' : 'Molten Chocolate Lava Cake',
      image: '/food/molten cake.jpg',
      shelfLife: isRTL ? 'يذوب ويفقد شكله الجمالي خلال 30 دقيقة' : 'Perishable — Melts in 30 Mins',
      features: [
        isRTL ? 'تدفق الشوكولاتة بقوام جيلاتيني دائم' : 'Permanent Fluid Lava Gel Matrix',
        isRTL ? 'حبيبات سكر البودرة بتقنية الراتنج المتبلور' : 'Crystalline Polymer Powdered Sugar',
        isRTL ? 'قشرة كيك إسفنجية مقاومة للرطوبة' : 'Moisture-Resistant Sponge Crust',
      ],
    },
  };

  const currentDish = dishes[activeDishKey];

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

  // LINE 02: Scale Slider State (2m to 12m) & Monumental Models
  const [monumentScale, setMonumentScale] = useState(6);
  const [selectedMonumentKey, setSelectedMonumentKey] = useState<'chipsy' | 'vacuum' | 'danette'>('chipsy');

  const monumentModels = {
    chipsy: {
      name: isRTL ? 'مجسم شيبسي وبليز العملاق' : 'Chipsy Playz Monumental Sculpture',
      image: '/outdoor/chipsy-playz.png',
      category: isRTL ? 'مجسم عبوة تجارية للواجهات والدرايف ثرو' : 'Commercial Facade & Drive-Thru Monument',
    },
    vacuum: {
      name: isRTL ? 'مجسم الزجاجة الهندسية بالفاكيوم' : 'Vacuum-Formed Giant Bottle Beacon',
      image: '/outdoor/vacuum-formed.webp',
      category: isRTL ? 'مجسم معماري بتقنية التشكيل الحراري' : 'Thermoformed Architectural Landmark',
    },
    danette: {
      name: isRTL ? 'مجسم دانيت المعماري الفاخر' : 'Danette Giant Dessert Landmark',
      image: '/outdoor/danette-chocolate.webp',
      category: isRTL ? 'نصب فايبر جلاس معالج حرارياً ومقاوم لـ UV' : 'UV-Cured FRP Monumental Sculpture',
    },
  };

  const currentMonument = monumentModels[selectedMonumentKey];

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

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/lines/replicas"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                  >
                    <span>{t.lines.viewDedicatedPage}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>

                  <button
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#BA2B43]/40 bg-white hover:bg-[#F4EAEB] text-[#4E1420] text-xs font-bold transition-all shadow-sm hover:scale-105 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#BA2B43]" />
                    <span>{isRTL ? 'طلب عرض سعر للمجسمات 1:1' : 'Request Quote for 1:1 Replicas'}</span>
                  </button>
                </div>
              </div>

              {/* Interactive Visual Match Showcase (Pixel-Perfect Alignment & Dish Switcher) */}
              <div className="lg:col-span-6">
                <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#BA2B43]/15 shadow-luxury">
                  
                  {/* Top Bar with Dish Selector */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#4E1420] flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-[#BA2B43]" />
                        <span>{isRTL ? 'مقارنة التطابق البصري التفاعلية' : 'Interactive Visual Match Slider'}</span>
                      </span>
                      <span className="text-[11px] text-[#BA2B43] font-semibold block mt-0.5">
                        {currentDish.name}
                      </span>
                    </div>

                    {/* Dish Selector Pills */}
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10">
                      {(Object.keys(dishes) as Array<keyof typeof dishes>).map((key) => (
                        <button
                          key={key}
                          onClick={() => setActiveDishKey(key)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            activeDishKey === key
                              ? 'bg-[#4E1420] text-white shadow-sm'
                              : 'text-[#1C1917]/70 hover:text-[#4E1420]'
                          }`}
                        >
                          {key === 'burger' ? (isRTL ? 'برجر' : 'Burger') : key === 'pizza' ? (isRTL ? 'بيتزا' : 'Pizza') : (isRTL ? 'كيك' : 'Dessert')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pixel-Perfect Comparison Box */}
                  <div
                    ref={sliderContainerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onClick={(e) => handleSliderMove(e.clientX)}
                    className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#4E1420]/15 bg-black"
                  >
                    {/* Layer 1: Real Perishable Culinary Dish */}
                    <img
                      src={currentDish.image}
                      alt="Real Culinary Dish"
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.97]"
                    />

                    {/* Real Dish Warning Badge (Top Left) */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20 shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span>{t.lines.line1.sliderRealLabel}</span>
                      </div>
                      <span className="text-[9px] text-amber-300 block font-mono mt-0.5">
                        {currentDish.shelfLife}
                      </span>
                    </div>

                    {/* Layer 2: The Food Models Engineered Replica (Geometric Pixel-Match via clipPath) */}
                    <div
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                      style={{
                        clipPath: isRTL
                          ? `polygon(${100 - sliderPosition}% 0, 100% 0, 100% 100%, ${100 - sliderPosition}% 100%)`
                          : `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                      }}
                    >
                      <img
                        src={currentDish.image}
                        alt="The Food Models Artisan Replica"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Subtle Replica Authenticity Shading */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4E1420]/40 via-transparent to-transparent" />

                      {/* Replica Badge (Top Right) */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-[#4E1420]/90 backdrop-blur-md text-[#D8B26E] text-[11px] font-bold tracking-wide border border-[#D8B26E]/50 shadow-lg">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
                          <span>{t.lines.line1.sliderReplicaLabel}</span>
                        </div>
                        <span className="text-[9px] text-emerald-300 block font-mono mt-0.5">
                          {isRTL ? 'ضمان ثبات دائم: +10 سنوات' : 'Guaranteed Shelf-Life: 10+ Years'}
                        </span>
                      </div>

                      {/* Engineering Callout Badges */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
                        {currentDish.features.map((feat, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] text-white border border-[#D8B26E]/30 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#D8B26E]" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider Line & Draggable Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 flex items-center justify-center -translate-x-1/2"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#4E1420] border-2 border-white shadow-xl flex items-center justify-center text-[#D8B26E]">
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

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/lines/monumental"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold w-fit hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                  >
                    <span>{isRTL ? 'استكشف مشاريع ومواصفات سيتي سكيل للمجسمات ←' : 'Explore City Scale Landmark Projects →'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>

                  <button
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#BA2B43]/40 bg-white hover:bg-[#F4EAEB] text-[#4E1420] text-xs font-bold transition-all shadow-sm hover:scale-105 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#BA2B43]" />
                    <span>{isRTL ? 'طلب عرض سعر للمنحوتات العملاقة' : 'Request Quote for Monumental Scale'}</span>
                  </button>
                </div>
              </div>

              {/* Architectural CAD Monumental Scale Simulator (Special Model on Pedestal Stage) */}
              <div className="lg:col-span-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BA2B43]/15 shadow-luxury flex flex-col">
                  
                  {/* Top Bar with Model Selector */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#4E1420] flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#BA2B43]" />
                        <span>{t.lines.line2.sliderTitle}</span>
                      </span>
                      <span className="text-[11px] text-[#1C1917]/65 block mt-0.5">
                        {currentMonument.category}
                      </span>
                    </div>

                    <span className="text-sm font-extrabold text-[#4E1420] bg-[#D8B26E]/20 px-3.5 py-1 rounded-full border border-[#D8B26E]/50">
                      {monumentScale} {isRTL ? 'أمتار' : 'Meters Tall'}
                    </span>
                  </div>

                  {/* Model Switcher Tabs */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10 mb-4 max-w-fit">
                    {(Object.keys(monumentModels) as Array<keyof typeof monumentModels>).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedMonumentKey(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedMonumentKey === key
                            ? 'bg-[#4E1420] text-white shadow-sm'
                            : 'text-[#1C1917]/70 hover:text-[#4E1420]'
                        }`}
                      >
                        {key === 'chipsy' ? (isRTL ? 'شيبسي بليز' : 'Chipsy') : key === 'vacuum' ? (isRTL ? 'زجاجة فاكيوم' : 'Bottle') : (isRTL ? 'دانيت' : 'Dessert')}
                      </button>
                    ))}
                  </div>

                  {/* Architectural CAD Stage Container */}
                  <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-[#1C1917] via-[#2A151B] to-[#14080B] rounded-2xl border border-[#4E1420]/30 flex items-end justify-center px-6 pb-8 gap-8 overflow-hidden select-none">
                    
                    {/* Architectural Elevation Grid Lines */}
                    <div className="absolute inset-x-0 bottom-8 top-0 flex flex-col justify-between pointer-events-none opacity-25 px-4">
                      <div className="border-b border-dashed border-[#D8B26E] w-full text-[10px] text-[#D8B26E] font-mono text-right rtl:text-left">12m Elevation</div>
                      <div className="border-b border-dashed border-[#D8B26E] w-full text-[10px] text-[#D8B26E] font-mono text-right rtl:text-left">9m Elevation</div>
                      <div className="border-b border-dashed border-[#D8B26E] w-full text-[10px] text-[#D8B26E] font-mono text-right rtl:text-left">6m Elevation</div>
                      <div className="border-b border-dashed border-[#D8B26E] w-full text-[10px] text-[#D8B26E] font-mono text-right rtl:text-left">3m Elevation</div>
                    </div>

                    {/* Upward Spotlight Beams */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-72 bg-gradient-to-t from-[#D8B26E]/15 to-transparent blur-2xl pointer-events-none" />

                    {/* Ground Asphalt / Concrete Pavement */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-[#181514] border-t border-white/10 flex items-center justify-between px-6">
                      <div className="flex gap-2 opacity-30">
                        <span className="w-6 h-1 bg-white rounded" />
                        <span className="w-6 h-1 bg-white rounded" />
                        <span className="w-6 h-1 bg-white rounded" />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 uppercase">Turnkey Ground Zero • Structural Foundation</span>
                    </div>

                    {/* Figure 1: Human Reference (1.8m) */}
                    <div className="flex flex-col items-center z-10 mb-0">
                      <div className="h-[44px] w-4 bg-white/70 rounded-t-full flex items-center justify-center shadow-lg relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-white absolute -top-3" />
                      </div>
                      <span className="text-[9px] font-mono text-white/70 mt-1 whitespace-nowrap bg-black/60 px-1.5 py-0.5 rounded">
                        {isRTL ? 'إنسان (1.8م)' : 'Human (1.8m)'}
                      </span>
                    </div>

                    {/* Figure 2: Drive-Thru Car Reference (2.2m) */}
                    <div className="hidden sm:flex flex-col items-center z-10 mb-0">
                      <div className="h-[52px] w-14 bg-white/20 border border-white/30 rounded-t-xl flex items-center justify-center">
                        <span className="text-[8px] font-mono text-white/60">CAR 2.2m</span>
                      </div>
                      <span className="text-[9px] font-mono text-white/50 mt-1 whitespace-nowrap bg-black/60 px-1.5 py-0.5 rounded">
                        Drive-Thru
                      </span>
                    </div>

                    {/* Figure 3: The Monumental Food Model (Special Cut-Out Model on Plinth) */}
                    <div className="flex flex-col items-center z-10 relative">
                      
                      {/* Dynamic Scaled Model with Aspect Ratio Preserved */}
                      <motion.div
                        animate={{ 
                          height: `${Math.min(255, monumentScale * 22 + 25)}px`,
                        }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="relative flex items-end justify-center filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                      >
                        <img
                          src={currentMonument.image}
                          alt={currentMonument.name}
                          className="h-full w-auto object-contain max-h-[255px]"
                        />

                        {/* Monument Height Callout Badge */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#BA2B43] text-white text-[10px] font-bold border border-white/40 shadow-lg">
                          {monumentScale}.0m
                        </div>
                      </motion.div>

                      {/* Engineered Concrete Plinth / Pedestal */}
                      <div className="w-24 sm:w-32 h-3.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 rounded-t border-t border-white/40 flex items-center justify-around px-2 shadow-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                        <span className="text-[8px] font-bold text-gray-800 uppercase tracking-widest">Base Anchor</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                      </div>
                    </div>
                  </div>

                  {/* Scale Range Slider */}
                  <div className="mt-5">
                    <div className="flex justify-between text-xs font-bold text-[#4E1420] mb-2">
                      <span>2 Meters (Entrance Totem)</span>
                      <span>6 Meters (Flagship Drive-Thru)</span>
                      <span>12 Meters (Highway Beacon)</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={12}
                      step={1}
                      value={monumentScale}
                      onChange={(e) => setMonumentScale(Number(e.target.value))}
                      className="w-full h-2.5 bg-[#F4EAEB] rounded-lg appearance-none cursor-pointer accent-[#BA2B43]"
                    />
                  </div>

                  {/* Real-time Engineering CAD Specs Grid */}
                  <div className="mt-4 pt-4 border-t border-[#4E1420]/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10">
                      <span className="text-[10px] text-[#1C1917]/60 block">{isRTL ? 'عمق الأساس الخرساني' : 'Anchor Depth'}</span>
                      <span className="text-xs font-bold text-[#4E1420]">{(monumentScale * 0.25).toFixed(1)}m C40</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10">
                      <span className="text-[10px] text-[#1C1917]/60 block">{isRTL ? 'مقاومة الرياح' : 'Wind Resistance'}</span>
                      <span className="text-xs font-bold text-emerald-700">140 km/h</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10">
                      <span className="text-[10px] text-[#1C1917]/60 block">{isRTL ? 'الوزن التقديري' : 'Estimated Weight'}</span>
                      <span className="text-xs font-bold text-[#4E1420]">{Math.round(monumentScale * 135)} kg</span>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#4E1420]/10">
                      <span className="text-[10px] text-[#1C1917]/60 block">{isRTL ? 'مدى الرؤية البصرية' : 'Sightline'}</span>
                      <span className="text-xs font-bold text-[#BA2B43]">{monumentScale * 75}m</span>
                    </div>
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

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to="/lines/smart-tables"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4E1420] text-white text-xs font-bold w-fit hover:bg-[#350B14] transition-all shadow-luxury hover:scale-105"
                  >
                    <span>{isRTL ? 'شاهد مقاطع الفيديو الحية والمواصفات الكاملة للطاولات ←' : 'Watch Live Video Footage & Hardware Specifications →'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>

                  <button
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#BA2B43]/40 bg-white hover:bg-[#F4EAEB] text-[#4E1420] text-xs font-bold transition-all shadow-sm hover:scale-105 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#BA2B43]" />
                    <span>{isRTL ? 'طلب عرض سعر للطاولات الذكية' : 'Request Quote for Smart Tables'}</span>
                  </button>
                </div>
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

                  {/* Surface Touch Screen Canvas */}
                  <div
                    onClick={handleTableTouch}
                    className="relative w-full h-72 sm:h-80 rounded-2xl border-2 border-white/20 overflow-hidden cursor-pointer select-none bg-black/60 flex flex-col justify-between p-4"
                  >
                    {/* Simulated Touch Ripples */}
                    {ripples.map((rip) => (
                      <motion.div
                        key={rip.id}
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 border-2 border-[#D8B26E]"
                        style={{
                          left: rip.x,
                          top: rip.y,
                          width: '60px',
                          height: '60px',
                        }}
                      />
                    ))}

                    {/* Mode Content */}
                    {simMode === 'menu' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs text-[#D8B26E] font-bold">
                          <span>{isRTL ? 'طاولة ضيافة VIP 04' : 'Guest: VIP Table 04'}</span>
                          <span className="px-2 py-0.5 rounded bg-[#BA2B43] text-white text-[10px]">
                            {isRTL ? 'قائمة ثلاثية الأبعاد' : '3D Visual Menu'}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl backdrop-blur-md">
                          <img
                            src="/smart-tables/youtube-maxres.jpg"
                            alt="3D Interactive Dish"
                            className="w-16 h-16 rounded-lg object-cover border border-white/20"
                          />
                          <div>
                            <h5 className="text-white font-bold text-sm">
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
