import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AI_PREVIEW_SAMPLES } from '../data/marketingData';

interface HeroSectionProps {
  onDiagnoseClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiagnoseClick,
  onExploreClick,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(0);
  const currentPreview = AI_PREVIEW_SAMPLES[selectedSpecialty];

  return (
    <section className="bg-[#B4D82E] text-[#1B1D1A] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white text-[#1B1D1A] px-4 py-1.5 rounded-full text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1B1D1A]" />
              <span>병원 마케팅 전문 대행사</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black leading-[1.12] tracking-[-0.035em] text-[#1B1D1A]">
              우리 병원,<br />
              검색에서 먼저 보이게
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-[19px] leading-[1.7] text-[#2F3A0B] max-w-[540px] font-medium">
              네이버 블로그부터 AI 검색(GEO)까지. 의료법 기준에 맞춰 병원의 매출과 병원만의 브랜딩을 함께 키웁니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <button
                onClick={onDiagnoseClick}
                className="w-full sm:w-auto bg-[#1B1D1A] hover:bg-black text-white font-extrabold px-7 py-3.5 rounded-full text-base transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer text-center active:scale-95"
              >
                무료 진단 상담 받기
              </button>
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-white hover:bg-neutral-50 text-[#1B1D1A] font-extrabold px-7 py-3.5 rounded-full text-base transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer text-center border border-transparent"
              >
                프로그램 둘러보기
              </button>
            </div>

            {/* Quick Keyword Badges */}
            <div className="flex flex-wrap gap-2 pt-2 text-sm font-bold text-[#1B1D1A]">
              <span className="bg-[#D7EC7A] px-3.5 py-1.5 rounded-full transition-transform hover:scale-105 cursor-default">
                네이버 블로그
              </span>
              <span className="bg-[#D7EC7A] px-3.5 py-1.5 rounded-full transition-transform hover:scale-105 cursor-default">
                AI 검색 GEO
              </span>
              <span className="bg-[#D7EC7A] px-3.5 py-1.5 rounded-full transition-transform hover:scale-105 cursor-default">
                인스타 릴스
              </span>
              <span className="bg-[#D7EC7A] px-3.5 py-1.5 rounded-full transition-transform hover:scale-105 cursor-default">
                병원 브랜딩
              </span>
            </div>
          </div>

          {/* Right Column: Interactive AI Search Card Preview */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[480px] bg-white rounded-[28px] p-6 sm:p-7 flex flex-col gap-4 shadow-[0_16px_36px_rgba(47,58,11,0.18)] border border-[#E3E7D6]/60">
              {/* Card Header & Specialty Selector */}
              <div className="flex items-center justify-between gap-3 border-b border-[#F4F5F0] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5E7F00]" />
                  <span className="font-extrabold text-[15px] text-[#1B1D1A]">
                    AI 검색 답변 예시
                  </span>
                </div>
                <div className="bg-[#1B1D1A] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  실제 시연
                </div>
              </div>

              {/* Specialty Segmented Pills */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F4F5F0] rounded-xl overflow-x-auto">
                {AI_PREVIEW_SAMPLES.map((sample, idx) => (
                  <button
                    key={sample.id}
                    onClick={() => setSelectedSpecialty(idx)}
                    className={`flex-1 py-1.5 px-2.5 text-xs font-bold rounded-lg transition-all text-center whitespace-nowrap cursor-pointer ${
                      selectedSpecialty === idx
                        ? 'bg-white text-[#1B1D1A] shadow-xs'
                        : 'text-[#5B5F58] hover:text-[#1B1D1A]'
                    }`}
                  >
                    {sample.name}
                  </button>
                ))}
              </div>

              {/* Patient Query Prompt Bubble */}
              <div className="self-end max-w-[90%] bg-[#F2F8D9] text-[#1B1D1A] rounded-2xl rounded-br-xs px-4 py-3 text-[14px] sm:text-[15px] font-semibold leading-snug border border-[#E3E7D6]">
                <p className="text-xs text-[#5E7F00] font-bold mb-0.5">환자의 자연어 질문</p>
                {currentPreview.query}
              </div>

              {/* Generative AI Answer Output Bubble */}
              <div className="self-start max-w-[96%] bg-[#F4F5F0] text-[#1B1D1A] rounded-2xl rounded-bl-xs p-4 text-[14px] sm:text-[15px] leading-[1.65] border border-neutral-200/60">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="font-extrabold text-[16px] text-[#1B1D1A] flex items-center gap-1.5">
                    <span>{currentPreview.hospitalName}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#5E7F00]" />
                  </div>
                  <span className="text-[11px] font-semibold bg-[#E3E7D6] text-[#2F3A0B] px-2 py-0.5 rounded-full">
                    {currentPreview.tag}
                  </span>
                </div>
                <p className="text-neutral-700 text-sm">
                  {currentPreview.summary}
                </p>
              </div>

              {/* Bottom Explanatory Caption */}
              <div className="pt-2 border-t border-[#F4F5F0] flex items-start gap-2 text-xs sm:text-[13px] text-[#5B5F58] leading-relaxed">
                <span className="font-bold text-[#5E7F00] shrink-0">GEO TIP:</span>
                <span>
                  환자가 AI에게 물었을 때 원장님의 병원이 1순위로 추천되도록 구조화된 콘텐츠와 병원 데이터를 설계합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
