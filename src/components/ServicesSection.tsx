import React, { useState } from 'react';
import {
  FileText,
  Search,
  Video,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/marketingData';
import { MarketingService } from '../types/marketing';
import { ServiceCardGif } from './animations/ServiceCardGif';
import { AmbientDoctorVideoBg } from './AmbientDoctorVideoBg';

interface ServicesSectionProps {
  onSelectService: (service: MarketingService) => void;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onContactClick
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blog' | 'geo' | 'reels' | 'branding'>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === activeFilter);

  const getServiceIcon = (iconName: string, isLightHeader: boolean) => {
    const strokeClass = isLightHeader ? 'stroke-[#1B1D1A]' : 'stroke-[#B4D82E]';
    switch (iconName) {
      case 'blog':
        return (
          <svg className={`w-16 h-16 ${strokeClass}`} viewBox="0 0 32 32" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="20" height="24" rx="3" />
            <path d="M11 11h10M11 16h10M11 21h6" />
          </svg>
        );
      case 'ai':
        return (
          <svg className={`w-16 h-16 ${strokeClass}`} viewBox="0 0 32 32" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="14" cy="14" r="8" />
            <path d="M20 20l7 7" />
            <path d="M14 10v8M10 14h8" />
          </svg>
        );
      case 'reels':
        return (
          <svg className={`w-16 h-16 ${strokeClass}`} viewBox="0 0 32 32" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="6" width="24" height="20" rx="5" />
            <path d="M13 12l8 4-8 4z" />
          </svg>
        );
      case 'branding':
      default:
        return (
          <svg className={`w-16 h-16 ${strokeClass}`} viewBox="0 0 32 32" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4l3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L16 22.4 8.8 26.3l1.4-8.1-5.9-5.7 8.1-1.1z" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="relative bg-white overflow-hidden">
      {/* Ambient Faint Doctor Flash Background */}
      <AmbientDoctorVideoBg variant="light" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[#5E7F00] font-bold text-sm tracking-wider uppercase mb-1">
              MARKETING PROGRAM
            </div>
            <h2 className="text-3xl md:text-[36px] font-black tracking-[-0.025em] text-[#1B1D1A]">
              이달의 추천 마케팅 프로그램
            </h2>
          </div>
          <div className="text-[15px] text-[#5B5F58] font-medium">
            병원 상황에 맞춰 단독 또는 패키지로 조합해서 진행할 수 있어요.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4F5F0] rounded-xl max-w-fit mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-white text-[#1B1D1A] shadow-xs'
                : 'text-[#5B5F58] hover:text-[#1B1D1A]'
            }`}
          >
            전체 프로그램 ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveFilter('blog')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'blog'
                ? 'bg-white text-[#1B1D1A] shadow-xs'
                : 'text-[#5B5F58] hover:text-[#1B1D1A]'
            }`}
          >
            네이버 블로그
          </button>
          <button
            onClick={() => setActiveFilter('geo')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'geo'
                ? 'bg-white text-[#1B1D1A] shadow-xs'
                : 'text-[#5B5F58] hover:text-[#1B1D1A]'
            }`}
          >
            AI 검색 GEO
          </button>
          <button
            onClick={() => setActiveFilter('reels')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'reels'
                ? 'bg-white text-[#1B1D1A] shadow-xs'
                : 'text-[#5B5F58] hover:text-[#1B1D1A]'
            }`}
          >
            인스타 릴스
          </button>
          <button
            onClick={() => setActiveFilter('branding')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'branding'
                ? 'bg-white text-[#1B1D1A] shadow-xs'
                : 'text-[#5B5F58] hover:text-[#1B1D1A]'
            }`}
          >
            브랜딩 패키지
          </button>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const isDarkHeader = service.headerBg === '#1B1D1A';
            return (
              <div
                key={service.id}
                className="border border-[#E3E7D6] rounded-[22px] overflow-hidden bg-white flex flex-col hover:shadow-xl hover:border-[#B4D82E] transition-all duration-200 group"
              >
                {/* Visual Header Box */}
                <div
                  className="relative h-[170px] flex items-center justify-center transition-transform group-hover:scale-[1.02] duration-200"
                  style={{ backgroundColor: service.headerBg }}
                >
                  {/* Badge */}
                  <div
                    className={`absolute top-3.5 left-3.5 text-xs font-bold rounded-md px-2.5 py-1 ${
                      service.badgeStyle === 'dark'
                        ? 'bg-[#1B1D1A] text-white'
                        : service.badgeStyle === 'lime'
                        ? 'bg-[#B4D82E] text-[#1B1D1A]'
                        : 'bg-white text-[#1B1D1A] border border-[#E3E7D6]'
                    }`}
                  >
                    {service.badge}
                  </div>
                  <ServiceCardGif type={service.iconName} isDarkHeader={isDarkHeader} />
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <div className="text-xs font-bold text-[#5E7F00]">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1B1D1A] tracking-[-0.015em] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.65] text-[#5B5F58] flex-1 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 text-xs font-bold">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F2F8D9] text-[#1B1D1A] rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom CTA Bar */}
                  <div className="mt-auto pt-4 border-t border-[#E3E7D6] flex items-center justify-between gap-2">
                    <span className="font-extrabold text-base text-[#1B1D1A]">
                      상담 후 견적
                    </span>
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-sm font-bold text-[#5E7F00] hover:text-[#1B1D1A] inline-flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5"
                    >
                      <span>자세히 보기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to Contact */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F4F5F0] rounded-[24px] border border-[#E3E7D6] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg md:text-xl font-extrabold text-[#1B1D1A]">
              어떤 프로그램이 우리 병원에 맞을지 고민되시나요?
            </h4>
            <p className="text-sm text-[#5B5F58] mt-1">
              병원 상권과 현재 경쟁 상황을 분석하여 불필요한 비용 없는 최적의 마케팅 믹스를 무료로 진단해 드립니다.
            </p>
          </div>
          <a
            href={COMPANY_INFO.kakaoChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#1B1D1A] hover:bg-black text-white font-extrabold px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap cursor-pointer shrink-0 inline-flex items-center justify-center"
          >
            무료 진단 리포트 받기
          </a>
        </div>
      </div>
    </section>
  );
};
