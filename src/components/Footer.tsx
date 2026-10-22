import React from 'react';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4F5F0] text-[#5B5F58] border-t border-[#E3E7D6]">
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-12 flex flex-col gap-4 text-[13px] leading-[1.7]">
        {/* Brand Lockup */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[#1B1D1A]">
            <div className="w-[30px] h-[30px] rounded-full bg-[#B4D82E] flex items-center justify-center font-black text-base text-[#1B1D1A]">
              M
            </div>
            <span className="text-lg font-black tracking-tight">
              {COMPANY_INFO.name}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-[#1B1D1A] hover:text-[#5E7F00] transition-colors p-2 rounded-lg hover:bg-neutral-200/50 cursor-pointer"
          >
            <span>맨 위로</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Business Registration Details */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
          <span>상호 {COMPANY_INFO.name}</span>
          <span className="hidden sm:inline">·</span>
          <span>대표 {COMPANY_INFO.representative}</span>
          <span className="hidden sm:inline">·</span>
          <span>사업자등록번호 {COMPANY_INFO.businessNumber}</span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <span>전화 {COMPANY_INFO.phone}</span>
          <span className="hidden sm:inline">·</span>
          <span>이메일 {COMPANY_INFO.email}</span>
          <span className="hidden sm:inline">·</span>
          <span>상담 시간 {COMPANY_INFO.hours}</span>
        </div>

        {/* Medical Law Disclaimer */}
        <div className="text-xs text-neutral-400 pt-1 leading-normal">
          * 마케팅맥시마이져는 의료법 제56조 및 보건복지부 의료광고 가이드라인을 준수하며, 불법 환자 유인·알선 행위를 일절 진행하지 않습니다.
        </div>

        {/* Copyright */}
        <div className="pt-2 text-neutral-500 font-medium">
          {COMPANY_INFO.copyright}
        </div>
      </div>
    </footer>
  );
};
