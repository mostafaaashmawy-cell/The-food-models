import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { QuoteModalProvider, useQuoteModal } from './context/QuoteModalContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ReplicasPage } from './pages/ReplicasPage';
import { MonumentalPage } from './pages/MonumentalPage';
import { SmartTablesPage } from './pages/SmartTablesPage';
import { HeritagePage } from './pages/HeritagePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export const MainLayout: React.FC = () => {
  const { isRTL } = useLanguage();
  const { isOpen, openQuoteModal, closeQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] transition-colors duration-300">
      <ScrollToTop />

      {/* Sticky Glassmorphic Header */}
      <Navbar onOpenProposal={openQuoteModal} />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lines/replicas" element={<ReplicasPage />} />
          <Route path="/lines/monumental" element={<MonumentalPage />} />
          <Route path="/lines/smart-tables" element={<SmartTablesPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenProposal={openQuoteModal} />

      {/* Pop-up Modal with 4-Field Quote Form & Direct WhatsApp */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
      />

      {/* Floating Concierge WhatsApp Action Button with Authentic WhatsApp Brand Color & SVG Icon */}
      <aside aria-label="Executive WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 rtl:right-auto rtl:left-6">
        <a
          href="https://wa.me/201005554321?text=Hello%20The%20Food%20Models%2C%20I%20would%20like%20to%20discuss%20a%20bespoke%20commission%20for%20my%20brand."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 border-2 border-white/80"
          aria-label="Direct Executive WhatsApp"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.879.814 2.802.814 3.176 0 5.764-2.588 5.765-5.767.001-3.181-2.584-5.767-5.767-5.767zm7.683 5.767c-.002 4.237-3.454 7.686-7.685 7.686-.976 0-1.927-.19-2.827-.55l-3.957 1.038 1.057-3.864c-.451-.976-.689-1.996-.689-3.047.002-4.238 3.456-7.688 7.688-7.688 4.232 0 7.685 3.455 7.685 7.688zm-3.076 2.342c-.08-.133-.293-.213-.613-.373-.32-.16-1.892-.933-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-.1.013 1.226-.187.187-.373.213-.693.053-.32-.16-1.359-.501-2.589-1.597-.959-.854-1.606-1.91-1.793-2.23-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.523-.538-.72-.547l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.762.329 1.357.525 1.821.673.765.243 1.46.209 2.01.127.613-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52z" />
          </svg>
          <span className="sr-only">Executive WhatsApp</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] animate-pulse" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-16 rtl:right-auto rtl:left-16 bg-[#1C1917] text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            {isRTL ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          </span>
        </a>
      </aside>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <QuoteModalProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </QuoteModalProvider>
    </LanguageProvider>
  );
};

export default App;
