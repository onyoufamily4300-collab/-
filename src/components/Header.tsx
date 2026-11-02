import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E3E7D6] transition-all">
      <div className="max-w-[1200px] mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <div className="w-[38px] h-[38px] rounded-full bg-[#B4D82E] flex items-center justify-center font-black text-xl text-[#1B1D1A] group-hover:scale-105 transition-transform shadow-xs">
            M
          </div>
          <span className="text-[22px] font-black tracking-[-0.03em] text-[#1B1D1A]">
            {COMPANY_INFO.name}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 font-bold text-[15px] text-[#1B1D1A]">
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-[#5E7F00] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            마케팅 프로그램
          </button>
          <button
            onClick={() => handleNavClick('why')}
            className="hover:text-[#5E7F00] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            맥시마이져가 다른 점
          </button>
          <button
            onClick={() => handleNavClick('process')}
            className="hover:text-[#5E7F00] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            진행 방식
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-[#5E7F00] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            자주 묻는 질문
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#5E7F00] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            문의
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.kakaoChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B4D82E] hover:bg-[#a6ca24] text-[#1B1D1A] font-extrabold text-[15px] px-5 py-2.5 rounded-full transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap shrink-0 active:scale-95 inline-flex items-center justify-center"
          >
            상담 신청
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={COMPANY_INFO.kakaoChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B4D82E] text-[#1B1D1A] font-bold text-xs px-3.5 py-1.5 rounded-full whitespace-nowrap inline-flex items-center justify-center"
          >
            상담 신청
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1B1D1A] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="메뉴 토글"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E3E7D6] px-6 py-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => handleNavClick('services')}
            className="text-left py-2 font-bold text-base text-[#1B1D1A] border-b border-neutral-100"
          >
            마케팅 프로그램
          </button>
          <button
            onClick={() => handleNavClick('why')}
            className="text-left py-2 font-bold text-base text-[#1B1D1A] border-b border-neutral-100"
          >
            맥시마이져가 다른 점
          </button>
          <button
            onClick={() => handleNavClick('process')}
            className="text-left py-2 font-bold text-base text-[#1B1D1A] border-b border-neutral-100"
          >
            진행 방식
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-left py-2 font-bold text-base text-[#1B1D1A] border-b border-neutral-100"
          >
            자주 묻는 질문
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left py-2 font-bold text-base text-[#1B1D1A]"
          >
            문의하기
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.kakaoChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#B4D82E] text-[#1B1D1A] font-extrabold py-3 rounded-full text-center inline-block"
            >
              무료 진단 상담 신청하기
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-neutral-600 bg-neutral-100 rounded-full"
            >
              <PhoneCall className="w-4 h-4 text-[#5E7F00]" />
              전화 상담 {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
