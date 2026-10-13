import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, Check, Award, Layers } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'replicas' | 'sculptures' | 'smart';
  desc: string;
  image: string;
  tags: string[];
  scale: string;
  finish: string;
}

export const PortfolioGallery: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'replicas' | 'sculptures' | 'smart'>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const items = t.portfolio.items;

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EAEB] border border-[#BA2B43]/20 text-[#4E1420] text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-[#BA2B43]" />
            <span>{t.portfolio.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-base sm:text-lg text-[#1C1917]/70">
            {t.portfolio.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: t.portfolio.categories.all },
              { id: 'replicas', label: t.portfolio.categories.replicas },
              { id: 'sculptures', label: t.portfolio.categories.sculptures },
              { id: 'smart', label: t.portfolio.categories.smart },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4E1420] text-[#FAF8F5] shadow-luxury'
                    : 'bg-white border border-[#4E1420]/15 text-[#1C1917]/70 hover:text-[#4E1420] hover:border-[#BA2B43]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveModalItem(item as PortfolioItem)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#BA2B43]/15 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Image Container with Ambient Overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#350B14]/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4E1420]/75 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#4E1420] border border-white/50 shadow-sm">
                      {item.scale}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#4E1420] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-lg font-bold drop-shadow-md group-hover:text-[#D8B26E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#1C1917]/75 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-[#4E1420]/10 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#F4EAEB] text-[#BA2B43] border border-[#BA2B43]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Luxury Hover Glow Bar */}
                <div className="h-1 bg-gradient-to-r from-[#4E1420] via-[#BA2B43] to-[#D8B26E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Masterpiece Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#D8B26E]/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#4E1420] hover:bg-[#4E1420] hover:text-white transition-colors cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Image */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-[#350B14]">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D8B26E] text-[#350B14]">
                      {activeModalItem.scale}
                    </span>
                  </div>
                </div>

                {/* Modal Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#BA2B43] block mb-1">
                      {isRTL ? 'مواصفات التحفة الهندسية' : 'Architectural Craftsmanship Specs'}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-3">
                      {activeModalItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1C1917]/80 leading-relaxed mb-6">
                      {activeModalItem.desc}
                    </p>

                    {/* Technical Specifications */}
                    <div className="space-y-3 bg-white p-4 rounded-xl border border-[#4E1420]/10 text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-[#4E1420]/10">
                        <span className="font-semibold text-[#1C1917]/70">
                          {isRTL ? 'مقياس التصنيع:' : 'Scale Ratio:'}
                        </span>
                        <span className="font-bold text-[#4E1420]">{activeModalItem.scale}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-[#4E1420]/10">
                        <span className="font-semibold text-[#1C1917]/70">
                          {isRTL ? 'المعالجة السطحية:' : 'Surface Finish:'}
                        </span>
                        <span className="font-bold text-[#4E1420]">{activeModalItem.finish}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1C1917]/70">
                          {isRTL ? 'الجهة الهندسية:' : 'Engineering Guarantee:'}
                        </span>
                        <span className="font-bold text-[#BA2B43]">City Scale Models S.A.E.</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#lead-form"
                    onClick={() => setActiveModalItem(null)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#4E1420] text-white text-xs font-bold text-center tracking-wide hover:bg-[#350B14] transition-colors shadow-luxury"
                  >
                    {isRTL ? 'طلب تسعير لهذا الصنف لمشروعك' : 'Request Commission for This Dish'}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
