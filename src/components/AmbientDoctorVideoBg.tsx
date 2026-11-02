import React from 'react';

interface AmbientDoctorVideoBgProps {
  variant?: 'lime' | 'soft-lime' | 'light' | 'dark';
}

export const AmbientDoctorVideoBg: React.FC<AmbientDoctorVideoBgProps> = ({ variant = 'lime' }) => {
  // Exact path of the generated high-fidelity image of a joyful Korean clinic doctor
  const doctorImgUrl = '/src/assets/images/doctor_happy_clinic_1793625407499.jpg';

  const getOverlayClasses = () => {
    switch (variant) {
      case 'lime':
        return 'bg-gradient-to-r from-[#B4D82E]/88 via-[#B4D82E]/82 to-[#B4D82E]/90 mix-blend-hard-light';
      case 'soft-lime':
        return 'bg-gradient-to-b from-[#F2F8D9]/92 via-[#F2F8D9]/88 to-[#F2F8D9]/94';
      case 'dark':
        return 'bg-gradient-to-r from-[#1B1D1A]/92 via-[#1B1D1A]/85 to-[#1B1D1A]/94';
      case 'light':
      default:
        return 'bg-gradient-to-b from-white/94 via-white/88 to-white/95';
    }
  };

  const getImageOpacity = () => {
    switch (variant) {
      case 'lime':
        return 'opacity-25 mix-blend-multiply';
      case 'soft-lime':
        return 'opacity-16 mix-blend-multiply';
      case 'dark':
        return 'opacity-18 mix-blend-screen filter brightness-110';
      case 'light':
      default:
        return 'opacity-12 mix-blend-multiply';
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Cinematic Looping Doctor Visual Layer (Ken Burns slow panning & breathing) */}
      <div className={`w-full h-full animate-ken-burns ${getImageOpacity()}`}>
        <img
          src={doctorImgUrl}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Ambient Pulsing Flash & Shimmer Light Sweep Layer */}
      <div className="absolute inset-0 animate-flash-ambient bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />

      {/* Color Tint & Contrast Protection Overlay */}
      <div className={`absolute inset-0 ${getOverlayClasses()}`} />
    </div>
  );
};
