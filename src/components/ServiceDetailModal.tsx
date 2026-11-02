import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Target, Zap } from 'lucide-react';
import { MarketingService } from '../types/marketing';
import { COMPANY_INFO } from '../data/marketingData';

interface ServiceDetailModalProps {
  service: MarketingService | null;
  onClose: () => void;
  onApplyService: (service: MarketingService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onApplyService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[26px] max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E3E7D6] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with service color */}
        <div
          className="p-6 sm:p-7 relative rounded-t-[26px] flex items-start justify-between"
          style={{ backgroundColor: service.headerBg }}
        >
          <div>
            <div className="inline-block bg-[#1B1D1A] text-white text-xs font-bold px-2.5 py-1 rounded-md mb-2">
              {service.badge} · {service.category}
            </div>
            <h3 className={`text-2xl sm:text-3xl font-black ${service.headerBg === '#1B1D1A' ? 'text-white' : 'text-[#1B1D1A]'}`}>
              {service.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-neutral-800 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-bold text-[#5E7F00] uppercase tracking-wider mb-1">
              핵심 개요
            </h4>
            <p className="text-base text-[#1B1D1A] font-semibold leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Detailed Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#5E7F00] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <span>제공 세부 항목 및 실행 내용</span>
            </h4>
            <div className="bg-[#F8FAF2] rounded-2xl p-4 sm:p-5 border border-[#E3E7D6] space-y-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#5E7F00] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Impact */}
          <div className="bg-[#F2F8D9]/70 rounded-2xl p-4 sm:p-5 border border-[#E3E7D6]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2F3A0B] mb-1">
              <Target className="w-4 h-4 text-[#5E7F00]" />
              <span>기대 효과</span>
            </div>
            <p className="text-sm text-[#1B1D1A] font-medium leading-relaxed">
              {service.expectedImpact}
            </p>
          </div>

          {/* Target Clinics */}
          <div className="text-xs text-neutral-500 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#5E7F00] shrink-0 mt-0.5" />
            <span>
              <strong>추천 대상:</strong> {service.targetClinics}
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={COMPANY_INFO.kakaoChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-[#1B1D1A] hover:bg-black text-white font-extrabold py-3.5 px-6 rounded-full text-base transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>이 프로그램으로 무료 진단 신청하기</span>
              <ArrowRight className="w-4 h-4 text-[#B4D82E]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
