import React from 'react';

interface MedicalShieldGifProps {
  type: 'shield' | 'sparkle' | 'chart' | 'user';
}

export const MedicalShieldGif: React.FC<MedicalShieldGifProps> = ({ type }) => {
  if (type === 'shield') {
    return (
      <div className="relative w-14 h-14 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
        {/* Animated Scan Line */}
        <div className="animate-scan-line left-1 right-1 h-0.5 bg-white shadow-[0_0_6px_#ffffff]" />

        {/* Shield Icon with glowing outline */}
        <svg
          className="w-7 h-7 stroke-[#1B1D1A] transform transition-transform hover:scale-110"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4l10 4v7c0 6-4.3 10.6-10 13C10.3 25.6 6 21 6 15V8z" fill="#FFFFFF" fillOpacity="0.25" />
          <path d="M11.5 16l3.5 3.5 6-7" />
        </svg>

        {/* Pulsing Compliance Ring */}
        <span className="absolute inset-0 rounded-full border border-white/60 animate-ping opacity-40 pointer-events-none" />
      </div>
    );
  }

  if (type === 'sparkle') {
    return (
      <div className="relative w-14 h-14 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0 shadow-xs">
        {/* Sparkle Rotation */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-50">
          <svg className="w-10 h-10 stroke-[#1B1D1A]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" strokeDasharray="3 6" strokeWidth="2" />
          </svg>
        </div>

        {/* Center Star with floating motion */}
        <div className="relative z-10 animate-float-slow">
          <svg
            className="w-7 h-7 stroke-[#1B1D1A]"
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M16 4l3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L16 22.4 8.8 26.3l1.4-8.1-5.9-5.7 8.1-1.1z"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'chart') {
    return (
      <div className="relative w-14 h-14 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
        {/* Animated Rising Chart Graphic */}
        <svg
          className="w-7 h-7 stroke-[#1B1D1A]"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 25V7M5 25h22" />
          <path d="M10 20l5-6 4 3 7-9" className="animate-pulse" />
        </svg>

        {/* Small animated growth arrow badge */}
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1B1D1A] animate-ping" />
      </div>
    );
  }

  // User 1:1 Manager
  return (
    <div className="relative w-14 h-14 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0 shadow-xs">
      <div className="relative animate-pulse">
        <svg
          className="w-7 h-7 stroke-[#1B1D1A]"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4a6 6 0 100 12 6 6 0 000-12z" fill="#FFFFFF" fillOpacity="0.3" />
          <path d="M6 28v-2a8 8 0 0116 0v2" />
        </svg>
      </div>
      {/* Online indicator */}
      <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#1B1D1A] border-2 border-[#B4D82E] flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-emerald-400" />
      </span>
    </div>
  );
};
