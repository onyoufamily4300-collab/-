import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';

interface EstimatorSectionProps {
  onApplyPlan: (planSummary: {
    dept: string;
    stage: string;
    channels: string[];
  }) => void;
}

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({ onApplyPlan }) => {
  const [selectedDept, setSelectedDept] = useState('치과');
  const [selectedStage, setSelectedStage] = useState('매출 확대 (기존 의원)');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    '네이버 블로그 운영 대행',
    'AI 검색 GEO 마케팅'
  ]);

  const departments = [
    '치과',
    '피부과·성형외과',
    '정형외과·통증의학과',
    '한의원·한방병원',
    '안과',
    '내과·이비인후과·소아과',
    '기타 진료과'
  ];

  const stages = [
    '신규 개원 준비 (개원 전 3개월)',
    '매출 확대 (기존 의원)',
    '경쟁 병원 침투 방어 및 리뉴얼'
  ];

  const channelsList = [
    { name: '네이버 블로그 운영 대행', bestFor: '증상별/수술별 검색 상위 노출' },
    { name: 'AI 검색 GEO 마케팅', bestFor: 'ChatGPT/네이버Cue 추천 선점' },
    { name: '인스타그램 릴스·숏폼', bestFor: '원장님 신뢰도 & 잠재 환자 도달' },
    { name: '네이버 스마트플레이스 리뷰/순위', bestFor: '지도 검색 및 길찾기 유입' },
    { name: '병원 브랜딩 및 웹 최적화', bestFor: '신환 예약 전환 깔때기 완성' }
  ];

  const toggleChannel = (name: string) => {
    if (selectedChannels.includes(name)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== name));
      }
    } else {
      setSelectedChannels([...selectedChannels, name]);
    }
  };

  const handleApply = () => {
    onApplyPlan({
      dept: selectedDept,
      stage: selectedStage,
      channels: selectedChannels
    });
  };

  return (
    <section className="bg-white border-t border-[#E3E7D6]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F2F8D9] text-[#2F3A0B] px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#B4D82E]/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#5E7F00] animate-ping" />
            <Calculator className="w-3.5 h-3.5 text-[#5E7F00]" />
            <span>30초 병원 맞춤 인터랙티브 진단기</span>
          </div>
          <h2 className="text-3xl md:text-[34px] font-black tracking-[-0.025em] text-[#1B1D1A]">
            우리 병원에 꼭 맞는 마케팅 플랜 진단
          </h2>
          <p className="text-sm md:text-[15px] text-[#5B5F58] mt-2">
            진료과와 병원 상황을 선택하시면 최적화된 마케팅 믹스와 중점 실행 전략을 산출해 드립니다.
          </p>
        </div>

        <div className="bg-[#F8FAF2] rounded-[28px] border border-[#E3E7D6] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Department */}
            <div>
              <label className="block text-xs font-bold text-[#5E7F00] uppercase tracking-wider mb-2">
                STEP 1. 진료과목 선택
              </label>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      selectedDept === dept
                        ? 'bg-[#1B1D1A] text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-[#E3E7D6]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Clinic Stage */}
            <div>
              <label className="block text-xs font-bold text-[#5E7F00] uppercase tracking-wider mb-2">
                STEP 2. 병원 현재 상황
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                      selectedStage === stage
                        ? 'bg-[#1B1D1A] text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-[#E3E7D6]'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Desired Channels */}
            <div>
              <label className="block text-xs font-bold text-[#5E7F00] uppercase tracking-wider mb-2">
                STEP 3. 희망 채널 (복수 선택 가능)
              </label>
              <div className="space-y-2">
                {channelsList.map((ch) => {
                  const isChecked = selectedChannels.includes(ch.name);
                  return (
                    <div
                      key={ch.name}
                      onClick={() => toggleChannel(ch.name)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#F2F8D9] border-[#B4D82E]'
                          : 'bg-white border-[#E3E7D6] hover:bg-neutral-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-[#1B1D1A] text-white' : 'border border-neutral-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-[#1B1D1A]">
                          {ch.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 hidden sm:inline">
                        {ch.bestFor}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 sm:p-7 border border-[#E3E7D6] shadow-sm flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-extrabold text-[#5E7F00] uppercase tracking-wider">
                맞춤 추천 진단 결과
              </span>
              <span className="bg-[#B4D82E] text-[#1B1D1A] text-[11px] font-bold px-2 py-0.5 rounded-full">
                실시간 산출
              </span>
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-[#1B1D1A] mb-1">
                [{selectedDept}] 맞춤 성장 로드맵
              </h4>
              <p className="text-xs text-neutral-500">
                상황: {selectedStage}
              </p>
            </div>

            <div className="bg-[#F4F5F0] rounded-xl p-4 space-y-2.5 text-xs">
              <div className="font-bold text-neutral-800">선택된 권장 채널 ({selectedChannels.length}개)</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedChannels.map((c) => (
                  <span
                    key={c}
                    className="bg-white border border-[#E3E7D6] text-[#1B1D1A] px-2.5 py-1 rounded-md font-semibold text-[11px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#5B5F58] leading-relaxed">
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#5E7F00] shrink-0 mt-0.5" />
                <span>
                  <strong>핵심 방향:</strong> {selectedDept} 환자의 탐색 질문(“과잉진료 없는 곳”, “부작용 사후관리”)에 맞춘 신뢰 중심 지식베이스 구축
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#5E7F00] shrink-0 mt-0.5" />
                <span>
                  <strong>의료법 보증:</strong> 심의 가이드 100% 사전 필터링으로 보건소 민원 위험 제로화
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100">
              <a
                href={COMPANY_INFO.kakaoChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#B4D82E] hover:bg-[#a5cb23] text-[#1B1D1A] font-extrabold py-3.5 px-4 rounded-full text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>이 플랜으로 무료 진단 신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-neutral-400 mt-2">
                * 클릭 시 카카오톡 오픈채팅으로 1:1 맞춤 상담이 바로 연결됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
