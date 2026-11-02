import React from 'react';

export const LiveChatStickerGif: React.FC = () => {
  return (
    <div className="relative inline-flex items-center gap-2.5 bg-[#252823] border border-[#3A3F36] rounded-2xl p-2.5 px-3.5 shadow-md">
      {/* Animated Kakao Bubble with Ping */}
      <div className="relative w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center shrink-0 shadow-xs">
        <span className="absolute inset-0 rounded-full bg-[#FEE500] animate-ping opacity-50" />
        <svg className="w-4 h-4 fill-[#381E1F]" viewBox="0 0 24 24">
          <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.723 1.777 5.118 4.464 6.442l-.934 3.471c-.083.308.232.553.497.388l4.137-2.617c.594.077 1.206.118 1.836.118 5.523 0 10-3.477 10-7.767S17.523 3 12 3z" />
        </svg>
      </div>

      {/* Typing animation & live response text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-extrabold text-[#FEE500]">
            전담 디렉터 1:1 대기 중
          </span>
          {/* Animated 3 typing dots */}
          <div className="flex items-center gap-0.5">
            <span className="w-1 h-1 rounded-full bg-[#FEE500] animate-[typingDots_1.4s_infinite]" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-1 rounded-full bg-[#FEE500] animate-[typingDots_1.4s_infinite]" style={{ animationDelay: '200ms' }} />
            <span className="w-1 h-1 rounded-full bg-[#FEE500] animate-[typingDots_1.4s_infinite]" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">
          평균 5분 이내 병원 진단 답변
        </span>
      </div>
    </div>
  );
};
