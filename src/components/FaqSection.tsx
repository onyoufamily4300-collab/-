import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/marketingData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white border-t border-[#E3E7D6]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-[#5E7F00] font-bold text-sm tracking-wider uppercase mb-1">
            FAQ
          </div>
          <h2 className="text-3xl md:text-[36px] font-black tracking-[-0.025em] text-[#1B1D1A]">
            원장님들이 가장 많이 묻는 질문
          </h2>
          <p className="text-sm md:text-[15px] text-[#5B5F58] mt-2">
            병원 마케팅 시작 전 궁금하신 주요 사항을 투명하게 안내해 드립니다.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#E3E7D6] rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:border-[#B4D82E]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-extrabold text-sm text-[#5E7F00] bg-[#F2F8D9] px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="text-base sm:text-[17px] font-extrabold text-[#1B1D1A] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'transform rotate-180 text-[#1B1D1A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#5B5F58] leading-[1.75] border-t border-neutral-100 bg-[#F8FAF2]/50">
                    <div className="flex items-start gap-3">
                      <span className="font-extrabold text-sm text-[#1B1D1A] shrink-0 mt-0.5">
                        A.
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
