import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ReplicasPage } from './pages/ReplicasPage';
import { MonumentalPage } from './pages/MonumentalPage';
import { SmartTablesPage } from './pages/SmartTablesPage';
import { HeritagePage } from './pages/HeritagePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

import { MessageSquare } from 'lucide-react';

export const MainLayout: React.FC = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] transition-colors duration-300">
      <ScrollToTop />

      {/* Sticky Glassmorphic Header */}
      <Navbar onOpenProposal={() => setIsProposalOpen(true)} />

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
      <Footer onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Executive Proposal Lookbook Modal */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* Floating Concierge WhatsApp Action Button */}
      <aside aria-label="Executive Concierge" className="fixed bottom-6 right-6 z-40 rtl:right-auto rtl:left-6">
        <a
          href="https://wa.me/201005554321?text=Hello%20The%20Food%20Models%2C%20I%20would%20like%20to%20discuss%20a%20bespoke%20commission%20for%20my%20brand."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#BA2B43] text-white shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white/50"
          aria-label="Direct Executive Concierge WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="sr-only">Executive WhatsApp</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-16 rtl:right-auto rtl:left-16 bg-[#1C1917] text-white text-[11px] font-bold py-1.5 px-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            VIP Concierge WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
