import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/marketingData';

interface ProcessSectionProps {
  onStartClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartClick }) => {
  return (
    <section id="process" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[#5E7F00] font-bold text-sm tracking-wider uppercase mb-1">
              PROCESS
            </div>
            <h2 className="text-3xl md:text-[36px] font-black tracking-[-0.025em] text-[#1B1D1A]">
              이렇게 진행돼요
            </h2>
          </div>
          <p className="text-sm md:text-[15px] text-[#5B5F58]">
            원장님의 진료 시간을 아끼면서도 체계적인 4단계 루틴으로 성과를 만듭니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="border border-[#E3E7D6] rounded-[20px] p-7 flex flex-col gap-3 bg-white hover:border-[#B4D82E] hover:shadow-lg transition-all duration-200 relative group"
            >
              {/* Step Number Circle with Live Pulse Ring */}
              <div className="flex items-center justify-between">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#B4D82E] flex items-center justify-center font-black text-xl text-[#1B1D1A] shadow-xs group-hover:scale-105 transition-transform relative z-10">
                    {step.step}
                  </div>
                  <span className="absolute inset-0 rounded-full bg-[#B4D82E] animate-ping opacity-35 pointer-events-none" />
                </div>
                <span className="text-xs font-bold text-neutral-400">
                  STEP 0{step.step}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-extrabold text-[#1B1D1A] mt-2">
                {step.title}
              </h3>

              {/* Step Summary */}
              <p className="text-sm leading-[1.7] text-[#5B5F58]">
                {step.description}
              </p>

              {/* Detailed Breakdown */}
              <div className="mt-auto pt-3 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.kakaoChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1B1D1A] hover:bg-black text-white font-extrabold px-8 py-3.5 rounded-full text-base transition-all duration-150 shadow-md cursor-pointer active:scale-95"
          >
            <span>1단계 무료 진단 바로 신청하기</span>
            <ArrowRight className="w-4 h-4 text-[#B4D82E]" />
          </a>
        </div>
      </div>
    </section>
  );
};
