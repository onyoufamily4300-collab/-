import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/marketingData';
import { LiveChatStickerGif } from './animations/LiveChatStickerGif';
import { AmbientDoctorVideoBg } from './AmbientDoctorVideoBg';

interface ContactSectionProps {
  prefillData?: {
    dept?: string;
    stage?: string;
    channels?: string[];
    serviceTitle?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillData }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle prefill if passed from estimator or service cards
  useEffect(() => {
    if (prefillData) {
      if (prefillData.dept) setSpecialty(prefillData.dept);
      if (prefillData.channels && prefillData.channels.length > 0) {
        setMessage((prev) => {
          const channelNote = `[희망 채널: ${prefillData.channels?.join(', ')}] [진행 상황: ${prefillData.stage || '미정'}]`;
          return prev ? `${prev}\n${channelNote}` : channelNote;
        });
      } else if (prefillData.serviceTitle) {
        setMessage((prev) => {
          const note = `[관심 프로그램: ${prefillData.serviceTitle}]`;
          return prev ? `${prev}\n${note}` : note;
        });
      }
    }
  }, [prefillData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!hospitalName.trim()) {
      setErrorMessage('병원명을 입력해 주세요.');
      return;
    }
    if (!specialty.trim()) {
      setErrorMessage('진료과를 입력해 주세요.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('연락 가능한 전화번호를 입력해 주세요.');
      return;
    }
    if (!privacyAgreed) {
      setErrorMessage('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    // Successful submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setHospitalName('');
    setSpecialty('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative bg-[#1B1D1A] text-white overflow-hidden">
      {/* Ambient Faint Doctor Flash Background */}
      <AmbientDoctorVideoBg variant="dark" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Contact Copy & Direct Info */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="text-[#B4D82E] font-bold text-sm tracking-wider uppercase">
                CONTACT
              </div>
              <LiveChatStickerGif />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-[1.2] tracking-[-0.03em] text-white">
              우리 병원 마케팅,<br />
              먼저 진단받아 보세요
            </h2>

            <p className="text-base sm:text-[17px] leading-[1.75] text-[#D4D9C8] max-w-lg">
              병원 이름과 진료과를 남겨주시면 현재 상황을 살펴보고 맞는 프로그램을 제안드려요.
              불필요한 과다 광고비 지출 없이 실질적인 신환 성장에 집중합니다.
            </p>

            {/* Direct Contact Table */}
            <div className="flex flex-col gap-4 text-[15px] pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-4">
                <span className="text-[#B4D82E] font-bold w-20 shrink-0">
                  전화
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-white hover:text-[#B4D82E] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#B4D82E] font-bold w-20 shrink-0">
                  이메일
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#B4D82E] font-bold w-20 shrink-0">
                  카카오톡
                </span>
                <a
                  href={COMPANY_INFO.kakaoChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#FEE500] hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>오픈채팅 1:1 상담 바로가기</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#B4D82E] font-bold w-20 shrink-0">
                  상담 시간
                </span>
                <span className="text-neutral-300">
                  {COMPANY_INFO.hours}
                </span>
              </div>
            </div>

            {/* Fast direct call & Kakao chat banner */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-[#252823] rounded-2xl border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#B4D82E] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1B1D1A]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#B4D82E] font-bold">전화 직통 상담</div>
                    <div className="text-xs font-extrabold text-white">{COMPANY_INFO.phone}</div>
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-xs font-bold bg-[#B4D82E] text-[#1B1D1A] px-3 py-1.5 rounded-full hover:bg-[#a5cb23] transition-colors whitespace-nowrap"
                >
                  전화
                </a>
              </div>

              <div className="p-4 bg-[#252823] rounded-2xl border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#FEE500] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-[#381E1F]" viewBox="0 0 24 24">
                      <path d="M12 3C6.477 3 2 6.477 2 10.767c0 2.723 1.777 5.118 4.464 6.442l-.934 3.471c-.083.308.232.553.497.388l4.137-2.617c.594.077 1.206.118 1.836.118 5.523 0 10-3.477 10-7.767S17.523 3 12 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#FEE500] font-bold">카카오톡 오픈채팅</div>
                    <div className="text-xs font-extrabold text-white">실시간 빠른 연결</div>
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.kakaoChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold bg-[#FEE500] text-[#191919] px-3 py-1.5 rounded-full hover:bg-[#FADA0A] transition-colors whitespace-nowrap"
                >
                  채팅
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form (Matching attachment style) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white text-[#1B1D1A] rounded-[26px] p-7 sm:p-9 shadow-2xl border border-[#E3E7D6]">
              {submitted ? (
                <div className="text-center py-8 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#F2F8D9] flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-[#5E7F00]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1B1D1A]">
                    무료 진단 신청이 접수되었습니다!
                  </h3>
                  <p className="text-sm text-[#5B5F58] leading-relaxed max-w-sm">
                    남겨주신 <strong>{hospitalName}</strong> ({specialty})의 현재 채널 및 경쟁 상권을 전담 매니저가 분석한 후 <strong>{phone}</strong> 번호로 빠르게 안내드리겠습니다.
                  </p>
                  <div className="p-4 bg-[#F8FAF2] rounded-xl text-xs text-neutral-600 text-left w-full space-y-1">
                    <div>• 접수 시간: 실시간 접수 완료</div>
                    <div>• 담당자 배정: 병원 마케팅 전담 팀장 1:1 배정</div>
                    <div>• 무료 제공: 현재 블로그 지수 + AI 검색 답변 현황 리포트</div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-xs font-bold text-[#5E7F00] hover:underline cursor-pointer"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1B1D1A] tracking-tight">
                      무료 진단 상담 신청
                    </h3>
                    <p className="text-xs text-[#5B5F58] mt-1">
                      원장님과 실장님의 소중한 시간을 위해 꼭 필요한 내용만 빠르게 확인합니다.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Hospital Name */}
                  <div>
                    <label
                      htmlFor="mm-hospital"
                      className="block text-xs sm:text-[13px] font-bold text-[#5B5F58] mb-1.5"
                    >
                      병원명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mm-hospital"
                      type="text"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                      placeholder="예: ○○치과의원, ○○피부과"
                      className="w-full px-3.5 py-3 border border-[#CDD3BE] rounded-xl text-sm sm:text-[15px] text-[#1B1D1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#B4D82E] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Specialty */}
                  <div>
                    <label
                      htmlFor="mm-dept"
                      className="block text-xs sm:text-[13px] font-bold text-[#5B5F58] mb-1.5"
                    >
                      진료과 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mm-dept"
                      type="text"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      placeholder="예: 치과, 피부과, 정형외과, 한의원, 내과 등"
                      className="w-full px-3.5 py-3 border border-[#CDD3BE] rounded-xl text-sm sm:text-[15px] text-[#1B1D1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#B4D82E] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="mm-phone"
                      className="block text-xs sm:text-[13px] font-bold text-[#5B5F58] mb-1.5"
                    >
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mm-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="예: 010-1234-5678 (원장님 또는 담당자 번호)"
                      className="w-full px-3.5 py-3 border border-[#CDD3BE] rounded-xl text-sm sm:text-[15px] text-[#1B1D1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#B4D82E] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Inquiry Message */}
                  <div>
                    <label
                      htmlFor="mm-msg"
                      className="block text-xs sm:text-[13px] font-bold text-[#5B5F58] mb-1.5"
                    >
                      문의 내용
                    </label>
                    <textarea
                      id="mm-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="지금 가장 고민되는 점을 적어주세요 (예: 블로그 노출 저하, 신규 개원 마케팅, AI 검색 노출 준비 등)"
                      className="w-full px-3.5 py-3 border border-[#CDD3BE] rounded-xl text-sm sm:text-[15px] text-[#1B1D1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#B4D82E] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="w-4 h-4 rounded text-[#5E7F00] accent-[#B4D82E] cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-[#5B5F58] cursor-pointer select-none">
                      개인정보 수집 및 상담 목적 이용에 동의합니다 (필수)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full min-h-[48px] border-0 rounded-full bg-[#B4D82E] hover:bg-[#a6ca24] text-[#1B1D1A] text-base font-extrabold cursor-pointer transition-all duration-150 shadow-sm active:scale-98 mt-2"
                  >
                    무료 진단 신청하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
