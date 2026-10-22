import React from 'react';
import { ShieldCheck, Sparkles, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { WHY_ITEMS } from '../data/marketingData';

export const WhySection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return (
          <svg className="w-7 h-7 stroke-[#1B1D1A]" viewBox="0 0 32 32" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4l10 4v7c0 6-4.3 10.6-10 13C10.3 25.6 6 21 6 15V8z" />
            <path d="M11.5 16l3.5 3.5 6-7" />
          </svg>
        );
      case 'sparkle':
        return (
          <svg className="w-7 h-7 stroke-[#1B1D1A]" viewBox="0 0 32 32" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4l3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L16 22.4 8.8 26.3l1.4-8.1-5.9-5.7 8.1-1.1z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-7 h-7 stroke-[#1B1D1A]" viewBox="0 0 32 32" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 25V7M5 25h22" />
            <path d="M10 20l5-6 4 3 7-9" />
          </svg>
        );
      case 'user':
      default:
        return (
          <svg className="w-7 h-7 stroke-[#1B1D1A]" viewBox="0 0 32 32" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4a6 6 0 100 12 6 6 0 000-12z" />
            <path d="M6 28v-2a8 8 0 0116 0v2" />
          </svg>
        );
    }
  };

  return (
    <section id="why" className="bg-[#F2F8D9] border-y border-[#E3E7D6]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-[#5E7F00] font-bold text-sm tracking-wider uppercase mb-1">
            WHY MAXIMIZER
          </div>
          <h2 className="text-3xl md:text-[36px] font-black tracking-[-0.025em] text-[#1B1D1A]">
            병원 마케팅은 달라야 하니까요
          </h2>
          <p className="text-base text-[#5B5F58] mt-2 max-w-xl">
            일반 쇼핑몰이나 프랜차이즈와 다른 병원만의 엄격한 의료법 규정과 환자 신뢰 메커니즘을 가장 잘 이해합니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-7 md:p-8 flex flex-col gap-4 border border-[#E3E7D6]/70 shadow-xs hover:shadow-md transition-all duration-200"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-[22px] font-extrabold text-[#1B1D1A] tracking-[-0.015em] leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-[1.7] text-[#5B5F58]">
                {item.description}
              </p>

              {/* Deep point */}
              <div className="mt-auto pt-3 border-t border-neutral-100 flex items-start gap-2 text-xs text-[#2F3A0B] font-medium leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#5E7F00] shrink-0 mt-0.5" />
                <span>{item.subtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
