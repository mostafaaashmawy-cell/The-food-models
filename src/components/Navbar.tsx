import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal }) => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.links.craft, href: '#heritage' },
    { label: t.nav.links.visualLines, href: '#visual-lines' },
    { label: t.nav.links.portfolio, href: '#portfolio' },
    { label: t.nav.links.matrix, href: '#enterprise-roi' },
    { label: t.nav.links.process, href: '#process' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel shadow-luxury py-3 border-b border-[#BA2B43]/15'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Sub-tag */}
            <a
              href="#"
              className="flex items-center gap-3.5 group text-left focus:outline-none"
            >
              <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/assets/01.png"
                  alt="The Food Models Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden lg:flex flex-col border-l border-[#4E1420]/20 pl-3 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#BA2B43]">
                  City Scale Models
                </span>
                <span className="text-[10px] text-[#4E1420]/70 font-medium">
                  {t.nav.subsidiary}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-[#1C1917]/80 hover:text-[#BA2B43] transition-colors group cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#BA2B43] to-[#D8B26E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rtl:origin-right" />
                </button>
              ))}
            </nav>

            {/* Actions: Deck, Language Switcher, CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              
              {/* Executive Concept Deck Button */}
              <button
                onClick={onOpenProposal}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#4E1420] border border-[#BA2B43]/25 rounded-full hover:bg-[#F4EAEB] transition-all hover:border-[#BA2B43]/50 cursor-pointer"
                title={t.nav.proposalButton}
              >
                <FileText className="w-3.5 h-3.5 text-[#BA2B43]" />
                <span className="hidden md:inline">{t.nav.proposalButton}</span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-[#4E1420]/15 bg-white/70 hover:bg-[#FAF8F5] text-[#4E1420] shadow-sm hover:border-[#BA2B43]/40 transition-all cursor-pointer"
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#BA2B43]" />
                <span className="tracking-wider uppercase">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              {/* Header Primary CTA */}
              <button
                onClick={() => scrollTo('#lead-form')}
                className="relative group overflow-hidden rounded-full bg-[#4E1420] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold tracking-wide text-[#FAF8F5] transition-all duration-300 hover:bg-[#350B14] shadow-luxury hover:shadow-luxury-hover border border-[#BA2B43]/30 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8B26E] animate-pulse" />
                  <span className="whitespace-nowrap">{t.nav.cta}</span>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#D8B26E]/20 to-transparent" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-[#4E1420] hover:text-[#BA2B43] rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#BA2B43]/20 shadow-2xl xl:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(link.href)}
                  className="text-left rtl:text-right py-2 text-sm font-semibold text-[#1C1917] hover:text-[#BA2B43] transition-colors border-b border-[#4E1420]/10 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#BA2B43]/60" />
                </button>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProposal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#BA2B43]/30 text-xs font-semibold text-[#4E1420] bg-white flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#BA2B43]" />
                  <span>{t.nav.proposalButton}</span>
                </button>

                <button
                  onClick={() => scrollTo('#lead-form')}
                  className="w-full py-3 px-4 rounded-xl bg-[#4E1420] text-xs font-semibold text-white shadow-luxury flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#D8B26E]" />
                  <span>{t.nav.cta}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
