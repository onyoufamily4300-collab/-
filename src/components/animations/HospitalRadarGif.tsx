import React from 'react';

export const HospitalRadarGif: React.FC = () => {
  return (
    <div className="relative flex items-center gap-3 bg-[#1B1D1A] text-white px-3.5 py-2 rounded-2xl border border-[#2F3A0B] shadow-lg animate-float-slow">
      {/* Animated Radar Pulse Container */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        {/* Outer expanding ripple */}
        <span className="absolute w-8 h-8 rounded-full bg-[#B4D82E]/30 animate-ping opacity-75" />
        {/* Middle pulsing ring */}
        <span className="absolute w-6 h-6 rounded-full bg-[#B4D82E]/40 animate-pulse" />
        {/* Radar Rotating Beam */}
        <svg
          className="absolute w-8 h-8 animate-spin-slow opacity-60"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="14" stroke="#B4D82E" strokeWidth="1" strokeDasharray="2 3" />
          <path
            d="M16 16 L30 16 A14 14 0 0 0 16 2"
            fill="url(#radarGradient)"
            opacity="0.7"
          />
          <defs>
            <linearGradient id="radarGradient" x1="16" y1="16" x2="28" y2="6">
              <stop offset="0%" stopColor="#B4D82E" stopOpacity="0" />
              <stop offset="100%" stopColor="#B4D82E" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Hospital Cross Pin */}
        <div className="relative z-10 w-4 h-4 rounded-full bg-[#B4D82E] flex items-center justify-center shadow-xs">
          <svg className="w-2.5 h-2.5 fill-[#1B1D1A]" viewBox="0 0 24 24">
            <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
          </svg>
        </div>
      </div>

      {/* Live Status Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B4D82E] animate-pulse" />
          <span className="text-[11px] font-black text-[#B4D82E] tracking-tight uppercase">
            실시간 검색 1위 점유
          </span>
        </div>
        <span className="text-xs font-bold text-neutral-200">
          지역 환자 유입 레이더 가동 중
        </span>
      </div>
    </div>
  );
};
