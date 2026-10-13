import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { VisualLinesSection } from './components/VisualLinesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { EnterpriseMatrixSection } from './components/EnterpriseMatrixSection';
import { ProcessSection } from './components/ProcessSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { MessageSquare } from 'lucide-react';

export const MainContent: React.FC = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] transition-colors duration-300">
      
      {/* Sticky Glassmorphic Header */}
      <Navbar onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreLines={() => handleScrollTo('#visual-lines')}
          onCommission={() => handleScrollTo('#lead-form')}
        />

        <HeritageSection />

        <VisualLinesSection />

        <PortfolioGallery />

        <EnterpriseMatrixSection />

        <ProcessSection />

        <LeadCaptureSection />
      </main>

      {/* Footer */}
      <Footer onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Proposal Lookbook Modal */}
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
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
