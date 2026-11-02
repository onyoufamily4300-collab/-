/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryNav } from './components/CategoryNav';
import { ServicesSection } from './components/ServicesSection';
import { WhySection } from './components/WhySection';
import { EstimatorSection } from './components/EstimatorSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuickFloatCTA } from './components/QuickFloatCTA';
import { MarketingService } from './types/marketing';
import { SERVICES, COMPANY_INFO } from './data/marketingData';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<MarketingService | null>(null);
  const [prefillData, setPrefillData] = useState<{
    dept?: string;
    stage?: string;
    channels?: string[];
    serviceTitle?: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.open(COMPANY_INFO.kakaoChatUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCategorySelect = (categoryId: string) => {
    const matched = SERVICES.find((s) => s.id === categoryId);
    if (matched) {
      setSelectedServiceForModal(matched);
    } else if (categoryId === 'place') {
      const branding = SERVICES.find((s) => s.id === 'branding');
      if (branding) {
        setSelectedServiceForModal(branding);
      } else {
        scrollToSection('services');
      }
    } else if (categoryId === 'law') {
      scrollToSection('why');
    } else {
      scrollToSection('services');
    }
  };

  const handleApplyFromModal = (service: MarketingService) => {
    setSelectedServiceForModal(null);
    window.open(COMPANY_INFO.kakaoChatUrl, '_blank', 'noopener,noreferrer');
  };

  const handleApplyFromEstimator = (plan: {
    dept: string;
    stage: string;
    channels: string[];
  }) => {
    window.open(COMPANY_INFO.kakaoChatUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#1B1D1A] font-sans selection:bg-[#B4D82E] selection:text-[#1B1D1A]">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Primary Navigation Header */}
      <Header onContactClick={handleContactClick} />

      <main>
        {/* 3. Hero Section (Lime Green) */}
        <HeroSection
          onDiagnoseClick={handleContactClick}
          onExploreClick={() => scrollToSection('services')}
          onSelectCategory={handleCategorySelect}
        />

        {/* 4. Quick Category Icons */}
        <CategoryNav onSelectCategory={handleCategorySelect} />

        {/* 5. Core Services Grid */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onContactClick={handleContactClick}
        />

        {/* 6. Why Maximizer */}
        <WhySection />

        {/* 7. Interactive Estimator & Plan Diagnoser */}
        <EstimatorSection onApplyPlan={handleApplyFromEstimator} />

        {/* 8. 4-Step Process */}
        <ProcessSection onStartClick={handleContactClick} />

        {/* 10. FAQs */}
        <FaqSection />

        {/* 11. Contact & Consultation Form (Obsidian Dark) */}
        <ContactSection prefillData={prefillData} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Service In-Depth Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onApplyService={handleApplyFromModal}
      />

      {/* 14. Floating KakaoTalk Open Chat Button */}
      <QuickFloatCTA />
    </div>
  );
}
