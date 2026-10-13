import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { HeritageSection } from '../components/HeritageSection';
import { VisualLinesSection } from '../components/VisualLinesSection';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { EnterpriseMatrixSection } from '../components/EnterpriseMatrixSection';
import { ProcessSection } from '../components/ProcessSection';
import { LeadCaptureSection } from '../components/LeadCaptureSection';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection
        onExploreLines={() => {
          const el = document.querySelector('#visual-lines');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onCommission={() => navigate('/contact')}
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
