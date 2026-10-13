import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  FileText, 
  Layers, 
  Maximize2, 
  Tablet, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal }) => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [linesDropdownOpen, setLinesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setLinesDropdownOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel shadow-luxury py-3 border-b border-[#BA2B43]/15'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 sm:py-5 border-b border-[#4E1420]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Sub-tag */}
            <Link
              to="/"
              onClick={closeMenus}
              className="flex items-center gap-3.5 group text-left rtl:text-right focus:outline-none"
            >
              <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/assets/01.png"
                  alt="The Food Models Logo"
                  className="h-9 sm:h-11 w-auto object-contain"
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
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
              {/* Home */}
              <Link
                to="/"
                onClick={closeMenus}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive('/') ? 'text-[#BA2B43] bg-[#F4EAEB]' : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                }`}
              >
                {t.nav.home}
              </Link>

              {/* Visual Lines Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLinesDropdownOpen(true)}
                onMouseLeave={() => setLinesDropdownOpen(false)}
              >
                <button
                  className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center gap-1.5 rounded-lg cursor-pointer ${
                    location.pathname.startsWith('/lines')
                      ? 'text-[#BA2B43] bg-[#F4EAEB]'
                      : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                  }`}
                >
                  <span>{t.nav.links.visualLines}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#BA2B43]" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {linesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-84 bg-white rounded-2xl shadow-2xl border border-[#BA2B43]/20 p-2 z-50 overflow-hidden"
                    >
                      <Link
                        to="/lines/replicas"
                        onClick={closeMenus}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4EAEB]/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] group-hover:bg-[#4E1420] group-hover:text-[#D8B26E] transition-colors shrink-0 mt-0.5">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1917] group-hover:text-[#4E1420]">
                            {t.nav.lineDropdown.line1}
                          </div>
                          <div className="text-[11px] text-[#1C1917]/60 leading-tight mt-0.5">
                            {t.nav.lineDropdown.line1Desc}
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/lines/monumental"
                        onClick={closeMenus}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4EAEB]/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] group-hover:bg-[#4E1420] group-hover:text-[#D8B26E] transition-colors shrink-0 mt-0.5">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1917] group-hover:text-[#4E1420]">
                            {t.nav.lineDropdown.line2}
                          </div>
                          <div className="text-[11px] text-[#1C1917]/60 leading-tight mt-0.5">
                            {t.nav.lineDropdown.line2Desc}
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/lines/smart-tables"
                        onClick={closeMenus}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4EAEB]/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#F4EAEB] text-[#BA2B43] group-hover:bg-[#4E1420] group-hover:text-[#D8B26E] transition-colors shrink-0 mt-0.5">
                          <Tablet className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1C1917] group-hover:text-[#4E1420]">
                            {t.nav.lineDropdown.line3}
                          </div>
                          <div className="text-[11px] text-[#1C1917]/60 leading-tight mt-0.5">
                            {t.nav.lineDropdown.line3Desc}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Craft & Heritage */}
              <Link
                to="/heritage"
                onClick={closeMenus}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive('/heritage') ? 'text-[#BA2B43] bg-[#F4EAEB]' : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                }`}
              >
                {t.nav.links.craft}
              </Link>

              {/* Masterpiece Gallery */}
              <Link
                to="/portfolio"
                onClick={closeMenus}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive('/portfolio') ? 'text-[#BA2B43] bg-[#F4EAEB]' : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                }`}
              >
                {t.nav.links.portfolio}
              </Link>

              {/* Enterprise ROI */}
              <Link
                to="/enterprise-roi"
                onClick={closeMenus}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive('/enterprise-roi') ? 'text-[#BA2B43] bg-[#F4EAEB]' : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                }`}
              >
                {t.nav.links.matrix}
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={closeMenus}
                className={`px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive('/contact') ? 'text-[#BA2B43] bg-[#F4EAEB]' : 'text-[#1C1917]/80 hover:text-[#BA2B43]'
                }`}
              >
                {t.nav.links.contact}
              </Link>
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border border-[#4E1420]/15 bg-white/80 hover:bg-[#FAF8F5] text-[#4E1420] shadow-sm hover:border-[#BA2B43]/40 transition-all cursor-pointer"
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#BA2B43]" />
                <span className="tracking-wider uppercase">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>

              {/* Header Primary CTA */}
              <Link
                to="/contact"
                onClick={closeMenus}
                className="relative group overflow-hidden rounded-full bg-[#4E1420] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold tracking-wide text-[#FAF8F5] transition-all duration-300 hover:bg-[#350B14] shadow-luxury hover:shadow-luxury-hover border border-[#BA2B43]/30 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8B26E] animate-pulse" />
                  <span className="whitespace-nowrap">{t.nav.cta}</span>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#D8B26E]/20 to-transparent" />
              </Link>

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
            className="fixed inset-x-0 top-[64px] z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-[#BA2B43]/20 shadow-2xl xl:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              <Link
                to="/"
                onClick={closeMenus}
                className="py-2.5 text-sm font-bold text-[#1C1917] hover:text-[#BA2B43] border-b border-[#4E1420]/10 flex items-center justify-between"
              >
                <span>{t.nav.home}</span>
              </Link>

              <div className="py-2 border-b border-[#4E1420]/10">
                <span className="text-xs font-bold text-[#BA2B43] uppercase tracking-wider block mb-2">
                  {t.nav.links.visualLines}
                </span>
                <div className="pl-3 rtl:pl-0 rtl:pr-3 space-y-2">
                  <Link
                    to="/lines/replicas"
                    onClick={closeMenus}
                    className="block text-xs font-semibold text-[#1C1917] hover:text-[#BA2B43]"
                  >
                    • {t.nav.lineDropdown.line1}
                  </Link>
                  <Link
                    to="/lines/monumental"
                    onClick={closeMenus}
                    className="block text-xs font-semibold text-[#1C1917] hover:text-[#BA2B43]"
                  >
                    • {t.nav.lineDropdown.line2}
                  </Link>
                  <Link
                    to="/lines/smart-tables"
                    onClick={closeMenus}
                    className="block text-xs font-semibold text-[#1C1917] hover:text-[#BA2B43]"
                  >
                    • {t.nav.lineDropdown.line3}
                  </Link>
                </div>
              </div>

              <Link
                to="/heritage"
                onClick={closeMenus}
                className="py-2.5 text-sm font-bold text-[#1C1917] hover:text-[#BA2B43] border-b border-[#4E1420]/10 flex items-center justify-between"
              >
                <span>{t.nav.links.craft}</span>
              </Link>

              <Link
                to="/portfolio"
                onClick={closeMenus}
                className="py-2.5 text-sm font-bold text-[#1C1917] hover:text-[#BA2B43] border-b border-[#4E1420]/10 flex items-center justify-between"
              >
                <span>{t.nav.links.portfolio}</span>
              </Link>

              <Link
                to="/enterprise-roi"
                onClick={closeMenus}
                className="py-2.5 text-sm font-bold text-[#1C1917] hover:text-[#BA2B43] border-b border-[#4E1420]/10 flex items-center justify-between"
              >
                <span>{t.nav.links.matrix}</span>
              </Link>

              <Link
                to="/contact"
                onClick={closeMenus}
                className="py-2.5 text-sm font-bold text-[#1C1917] hover:text-[#BA2B43] border-b border-[#4E1420]/10 flex items-center justify-between"
              >
                <span>{t.nav.links.contact}</span>
              </Link>

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    closeMenus();
                    onOpenProposal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#BA2B43]/30 text-xs font-semibold text-[#4E1420] bg-white flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#BA2B43]" />
                  <span>{t.nav.proposalButton}</span>
                </button>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="w-full py-3 px-4 rounded-xl bg-[#4E1420] text-xs font-semibold text-white shadow-luxury flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#D8B26E]" />
                  <span>{t.nav.cta}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
