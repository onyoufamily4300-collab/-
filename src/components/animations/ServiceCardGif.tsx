import React from 'react';

interface ServiceCardGifProps {
  type: 'blog' | 'ai' | 'reels' | 'branding';
  isDarkHeader?: boolean;
}

export const ServiceCardGif: React.FC<ServiceCardGifProps> = ({ type, isDarkHeader = false }) => {
  if (type === 'blog') {
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Document Frame */}
        <div className="w-14 h-16 bg-white/90 rounded-lg shadow-md p-2 flex flex-col gap-1.5 border border-[#1B1D1A]/10 relative overflow-hidden">
          {/* Animated Scanning Light */}
          <div className="animate-scan-line left-0 right-0 h-1 bg-[#B4D82E] shadow-[0_0_8px_#B4D82E]" />

          {/* Animated Header Bar */}
          <div className="w-6 h-1.5 bg-[#5E7F00] rounded-full animate-pulse" />

          {/* Writing Text Lines */}
          <div className="w-9 h-1 bg-neutral-300 rounded-full" />
          <div className="w-10 h-1 bg-neutral-300 rounded-full" />
          <div className="w-7 h-1 bg-neutral-300 rounded-full" />

          {/* Medical Cross Small Stamp */}
          <div className="mt-auto self-end w-3 h-3 rounded-full bg-[#B4D82E] flex items-center justify-center">
            <svg className="w-2 h-2 fill-[#1B1D1A]" viewBox="0 0 24 24">
              <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
            </svg>
          </div>
        </div>

        {/* Animated Floating Medical Pen */}
        <div className="absolute -top-1 -right-1 w-6 h-6 animate-float-slow text-[#1B1D1A]">
          <svg className="w-6 h-6 transform rotate-45 filter drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill="#B4D82E" stroke="#1B1D1A" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'ai') {
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Outer orbital rings */}
        <div className="absolute w-16 h-16 rounded-full border border-[#B4D82E]/40 animate-ping opacity-50" />
        <div className="absolute w-14 h-14 rounded-full border border-dashed border-[#B4D82E] animate-spin-slow opacity-80" />

        {/* Inner AI Scanner Core */}
        <div className="relative z-10 w-11 h-11 rounded-full bg-[#B4D82E] flex items-center justify-center shadow-[0_0_15px_rgba(180,216,46,0.6)] animate-pulse">
          <svg className="w-6 h-6 stroke-[#1B1D1A]" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>

        {/* Orbiting AI Data Node */}
        <div className="absolute -bottom-0.5 right-1 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs animate-bounce">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B1D1A]" />
        </div>
      </div>
    );
  }

  if (type === 'reels') {
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Video Card Frame */}
        <div className="w-13 h-16 bg-[#1B1D1A] rounded-xl p-1.5 flex flex-col justify-between shadow-md border border-neutral-700 relative overflow-hidden">
          {/* Top Live Rec Dot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-[7px] text-white font-black tracking-tighter">REC</span>
            </div>
            <span className="text-[7px] text-[#B4D82E] font-bold">4K</span>
          </div>

          {/* Center Play Button Pulse */}
          <div className="self-center w-6 h-6 rounded-full bg-[#B4D82E] flex items-center justify-center shadow-xs animate-pulse">
            <svg className="w-3 h-3 fill-[#1B1D1A] ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Bottom Equalizer Audio Waves */}
          <div className="flex items-end justify-center gap-0.5 h-3">
            <span className="w-0.5 bg-[#B4D82E] rounded-full animate-[soundWave_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 bg-[#B4D82E] rounded-full animate-[soundWave_1s_ease-in-out_infinite]" style={{ animationDelay: '200ms' }} />
            <span className="w-0.5 bg-[#B4D82E] rounded-full animate-[soundWave_1s_ease-in-out_infinite]" style={{ animationDelay: '400ms' }} />
            <span className="w-0.5 bg-[#B4D82E] rounded-full animate-[soundWave_1s_ease-in-out_infinite]" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 bg-[#B4D82E] rounded-full animate-[soundWave_1s_ease-in-out_infinite]" style={{ animationDelay: '350ms' }} />
          </div>
        </div>
      </div>
    );
  }

  // Branding Package
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Rotating Star Rays */}
      <svg className="absolute w-16 h-16 animate-spin-slow opacity-30 stroke-[#1B1D1A]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" strokeDasharray="4 6" strokeWidth="2" />
      </svg>

      {/* Hospital Brand Shield & Star Badge */}
      <div className="relative z-10 w-12 h-13 bg-[#1B1D1A] rounded-xl flex items-center justify-center shadow-md animate-float-slow border border-neutral-700">
        <svg className="w-7 h-7 stroke-[#B4D82E]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#B4D82E" fillOpacity="0.2" />
        </svg>

        {/* Small verified badge pin */}
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B4D82E] flex items-center justify-center shadow-xs">
          <svg className="w-2.5 h-2.5 stroke-[#1B1D1A]" viewBox="0 0 24 24" fill="none" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};
