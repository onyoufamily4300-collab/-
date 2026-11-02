import React from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';

export const QuickFloatCTA: React.FC = () => {
  const kakaoUrl = COMPANY_INFO.kakaoChatUrl || 'https://open.kakao.com/o/sa5jpiVh';

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
      {/* Quick Phone Call Button (desktop) */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="hidden md:flex items-center gap-2 bg-white text-[#1B1D1A] font-bold text-xs px-3.5 py-3 rounded-full shadow-lg border border-[#E3E7D6] hover:bg-neutral-50 transition-all hover:scale-105"
        title="전화 바로걸기"
      >
        <Phone className="w-3.5 h-3.5 text-[#5E7F00]" />
        <span>{COMPANY_INFO.phoneDisplay}</span>
      </a>

      {/* Prominent Eye-Catching KakaoTalk Open Chat Floating Tab */}
      <a
        href={kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-black text-sm sm:text-[15px] px-5 sm:px-6 py-3.5 rounded-full shadow-[0_8px_25px_rgba(254,229,0,0.55),0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_rgba(254,229,0,0.75),0_6px_16px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-105 active:scale-95 border border-[#F5DC00]/80 cursor-pointer"
        aria-label="카카오톡 오픈채팅문의 새 창 열기"
      >
        {/* Kakao Speech Bubble Icon */}
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <svg
            className="w-5 h-5 fill-[#381E1F]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.723 1.777 5.118 4.464 6.442l-.934 3.471c-.083.308.232.553.497.388l4.137-2.617c.594.077 1.206.118 1.836.118 5.523 0 10-3.477 10-7.767S17.523 3 12 3z" />
          </svg>
        </div>

        {/* Text Label */}
        <span className="tracking-tight whitespace-nowrap text-[#191919] font-extrabold text-[15px]">
          카카오톡 오픈채팅문의
        </span>

        {/* External Link Icon indicator */}
        <ExternalLink className="w-3.5 h-3.5 text-[#381E1F]/70 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};
