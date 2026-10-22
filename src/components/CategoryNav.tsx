import React from 'react';
import {
  FileText,
  Search,
  Video,
  Sparkles,
  ShieldCheck,
  Globe,
  ArrowDown
} from 'lucide-react';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'blog',
      label: '네이버 블로그',
      icon: FileText,
      description: '의료법 준수 상위 노출 원고'
    },
    {
      id: 'geo',
      label: 'AI 검색 GEO',
      icon: Search,
      description: '생성형 AI 추천 인덱싱'
    },
    {
      id: 'reels',
      label: '인스타 릴스',
      icon: Video,
      description: '원장님 신뢰 숏폼 제작'
    },
    {
      id: 'branding',
      label: '병원 브랜딩',
      icon: Sparkles,
      description: '전방위 마케팅 통합 설계'
    },
    {
      id: 'law',
      label: '의료법 기준 점검',
      icon: ShieldCheck,
      description: '보건소 민원 사전 차단'
    },
    {
      id: 'place',
      label: '플레이스·홈페이지',
      icon: Globe,
      description: '지도 순위 및 환자 전환 UI'
    }
  ];

  return (
    <section className="bg-white border-b border-[#E3E7D6]">
      <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-16">
        <div className="text-center mb-10">
          <span className="text-[#5E7F00] font-bold text-xs tracking-wider uppercase mb-1 block">
            NEED MARKETING?
          </span>
          <h2 className="text-2xl md:text-[30px] font-black tracking-[-0.025em] text-[#1B1D1A]">
            어떤 마케팅이 필요하세요?
          </h2>
          <p className="text-sm text-[#5B5F58] mt-2">
            아이콘을 클릭하면 세부 프로그램과 지원 내용을 바로 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {categories.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className="group flex flex-col items-center gap-3 w-full max-w-[150px] p-2 rounded-2xl hover:bg-[#F2F8D9]/40 transition-all cursor-pointer focus:outline-none"
              >
                <div className="w-[84px] h-[84px] rounded-full bg-[#F2F8D9] group-hover:bg-[#B4D82E] transition-all duration-200 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:scale-105">
                  <IconComponent className="w-9 h-9 text-[#1B1D1A] stroke-[1.8] group-hover:rotate-3 transition-transform" />
                </div>
                <div className="text-center">
                  <div className="font-extrabold text-[15px] text-[#1B1D1A] group-hover:text-[#5E7F00] transition-colors leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#5B5F58] mt-1 line-clamp-1">
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
