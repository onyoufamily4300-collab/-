export interface MarketingService {
  id: string;
  category: string;
  badge: 'BEST' | 'NEW' | '추천' | '패키지';
  badgeStyle: 'dark' | 'lime' | 'white';
  title: string;
  description: string;
  tags: string[];
  features: string[];
  expectedImpact: string;
  targetClinics: string;
  headerBg: string;
  iconName: 'blog' | 'ai' | 'reels' | 'branding';
}

export interface CaseStudy {
  id: string;
  clinicType: string;
  name: string;
  location: string;
  mainService: string;
  headline: string;
  metricLabel: string;
  metricValue: string;
  subMetric: string;
  story: string;
  quote: string;
  directorName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: '법률/의료법' | '서비스/운영' | '효과/성과';
}

export interface ConsultationFormData {
  hospitalName: string;
  specialty: string;
  applicantName: string;
  phone: string;
  email: string;
  selectedServices: string[];
  message: string;
  privacyAgreed: boolean;
}
