import React from 'react';
import { Phone, MessageSquareText } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';

interface QuickFloatCTAProps {
  onContactClick: () => void;
}

export const QuickFloatCTA: React.FC<QuickFloatCTAProps> = ({ onContactClick }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Phone fast call link */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="hidden sm:flex items-center gap-2 bg-white text-[#1B1D1A] font-bold text-xs px-3.5 py-2.5 rounded-full shadow-lg border border-[#E3E7D6] hover:bg-neutral-50 transition-all hover:scale-105"
        title="전화 바로걸기"
      >
        <Phone className="w-3.5 h-3.5 text-[#5E7F00]" />
        <span>{COMPANY_INFO.phoneDisplay}</span>
      </a>

      {/* Main consultation button */}
      <button
        onClick={onContactClick}
        className="flex items-center gap-2 bg-[#B4D82E] hover:bg-[#a5cb23] text-[#1B1D1A] font-black text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer active:scale-95"
      >
        <MessageSquareText className="w-4 h-4" />
        <span>무료 진단 신청</span>
      </button>
    </div>
  );
};
