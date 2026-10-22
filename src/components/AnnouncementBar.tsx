import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onApplyClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onApplyClick }) => {
  return (
    <div className="bg-[#1B1D1A] text-white px-4 py-2.5 text-center text-sm font-medium border-b border-[#2A2D28] tracking-tight">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>병원 마케팅 무료 진단 상담 접수 중</span>
        <button
          onClick={onApplyClick}
          className="inline-flex items-center gap-1 text-[#B4D82E] font-bold hover:underline transition-all cursor-pointer focus:outline-none"
        >
          <span>신청하기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
