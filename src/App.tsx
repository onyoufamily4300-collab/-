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
import { SERVICES } from './data/marketingData';

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
    scrollToSection('contact');
  };

  const handleCategorySelect = (categoryId: string) => {
    const matched = SERVICES.find((s) => s.id === categoryId);
    if (matched) {
      setSelectedServiceForModal(matched);
    } else if (categoryId === 'law') {
      scrollToSection('why');
    } else {
      scrollToSection('services');
    }
  };

  const handleApplyFromModal = (service: MarketingService) => {
    setSelectedServiceForModal(null);
    setPrefillData({
      serviceTitle: `${service.category} - ${service.title}`
    });
    scrollToSection('contact');
  };

  const handleApplyFromEstimator = (plan: {
    dept: string;
    stage: string;
    channels: string[];
  }) => {
    setPrefillData({
      dept: plan.dept,
      stage: plan.stage,
      channels: plan.channels
    });
    scrollToSection('contact');
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#1B1D1A] font-sans selection:bg-[#B4D82E] selection:text-[#1B1D1A]">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar onApplyClick={handleContactClick} />

      {/* 2. Primary Navigation Header */}
      <Header onContactClick={handleContactClick} />

      <main>
        {/* 3. Hero Section (Lime Green) */}
        <HeroSection
          onDiagnoseClick={handleContactClick}
          onExploreClick={() => scrollToSection('services')}
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

      {/* 14. Floating Action Consultation Button */}
      <QuickFloatCTA onContactClick={handleContactClick} />
    </div>
  );
}
