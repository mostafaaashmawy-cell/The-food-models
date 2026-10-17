import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { HeritageSection } from '../components/HeritageSection';
import { VisualLinesSection } from '../components/VisualLinesSection';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { EnterpriseMatrixSection } from '../components/EnterpriseMatrixSection';
import { ProcessSection } from '../components/ProcessSection';
import { LeadCaptureSection } from '../components/LeadCaptureSection';
import { useQuoteModal } from '../context/QuoteModalContext';

export const HomePage: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div>
      <HeroSection
        onExploreLines={() => {
          const el = document.querySelector('#visual-lines');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCommission={openQuoteModal}
      />

      <HeritageSection />

      <VisualLinesSection />

      <PortfolioGallery />

      <EnterpriseMatrixSection />

      <ProcessSection />

      <LeadCaptureSection />
    </div>
  );
};
