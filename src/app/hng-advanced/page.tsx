'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import WhatIsHNG from './components/WhatIsHNG';
import WhatYouGet from './components/WhatYouGet';
import MentorSection from './components/MentorSection';
import BrandSupportSection from './components/BrandSupportSection';
import EligibilitySection from './components/EligibilitySection';
import TracksGrid from './components/TracksGrid';
import HowItWorks from './components/HowItWorks';
import ProjectFocus from './components/ProjectFocus';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import ApplicationModal from './components/ApplicationModal';
import Footer from './components/Footer';
import BidirectionalReveal from './components/BidirectionalReveal';
import ThemeFocus from './components/ThemeFocus';

export default function HNGAdvancedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>('');

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleTrackSelect = (track: string) => {
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const handleViewTracksClick = () => {
    // Scroll to tracks section
    document.getElementById('tracks-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrack('');
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-hidden">
      <HeroSection 
        onApplyClick={handleApplyClick}
        onViewTracksClick={handleViewTracksClick}
      />
      
      <BidirectionalReveal delay={100}>
        <WhatIsHNG />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={200} enableParallax={true}>
        <WhatYouGet />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={100} enableParallax={true}>
        <MentorSection />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={150}>
        <BrandSupportSection />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={100}>
        <EligibilitySection />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={200}>
        <div id="tracks-section">
          <TracksGrid onTrackSelect={handleTrackSelect} />
        </div>
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={150}>
        <HowItWorks />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={100} enableParallax={true}>
        <ThemeFocus />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={100}>
        <ProjectFocus />
      </BidirectionalReveal>
      
      
      <BidirectionalReveal delay={200}>
        <FAQSection />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={150}>
        <FinalCTA onApplyClick={handleApplyClick} />
      </BidirectionalReveal>
      
      <BidirectionalReveal delay={100}>
        <Footer />
      </BidirectionalReveal>
      
      <ApplicationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        preSelectedTrack={selectedTrack}
      />
    </div>
  );
}