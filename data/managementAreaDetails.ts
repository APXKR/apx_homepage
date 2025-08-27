import React from 'react';
import LeadershipIcon from '../components/icons/LeadershipIcon';
import TalentManagementIcon from '../components/icons/TalentManagementIcon';
import OrgOperationIcon from '../components/icons/OrgOperationIcon';
import CultureInnovationIcon from '../components/icons/CultureInnovationIcon';
import PerformanceManagementIcon from '../components/icons/PerformanceManagementIcon';
import HrAnalyticsIcon from '../components/icons/HrAnalyticsIcon';

export interface ManagementAreaDetail {
  id: string;
  title: string;
  subtitle: string;
  brief: string;
  description: string;
  icon: React.FC;
  keyPoints: string[];
  metrics: string[];
  category: '전략' | '인재' | '프로세스';
}

type ManagementAreaData = {
  [key: string]: ManagementAreaDetail;
}

export const managementAreaDetails: ManagementAreaData = {
  '리더십 역량': {
    id: 'A',
    title: '리더십 역량',
    subtitle: 'Leadership Capability',
    brief: '전략적 사고와 실행력을 갖춘 리더 양성',
    description: '전략적 사고와 실행력을 갖춘 리더를 육성하여 조직의 방향성을 제시하고 구성원을 이끌어갑니다.',
    icon: LeadershipIcon,
    keyPoints: ['전략적 사고력 개발', '의사결정 역량 강화', '팀 리딩 스킬 향상', '변화 관리 능력'],
    metrics: ['리더십 역량 평가 점수', '360도 피드백 결과', '팀 성과 달성률'],
    category: '전략',
  },
  '성과관리': {
    id: 'E',
    title: '성과관리',
    subtitle: 'Performance Management',
    brief: '목표 달성을 위한 체계적 성과관리',
    description: '조직의 목표와 개인의 목표를 연계하고, 과정과 결과를 체계적으로 관리하여 성과를 극대화합니다.',
    icon: PerformanceManagementIcon,
    keyPoints: ['OKR 기반 목표 설정', '상시 성과 피드백', '공정한 평가 시스템', '성과 연계 보상'],
    metrics: ['목표 달성률 (OKR)', '구성원 만족도', '상위/하위 평가자 비율'],
    category: '전략',
  },
  '인재경영': {
    id: 'B',
    title: '인재경영',
    subtitle: 'Talent Management',
    brief: '올바른 인재의 채용, 개발, 유지',
    description: '조직의 성공에 필요한 핵심 인재를 정의하고, 채용, 육성, 유지하는 선순환 구조를 만듭니다.',
    icon: TalentManagementIcon,
    keyPoints: ['핵심인재 정의 및 확보', '체계적 경력개발 경로', '차세대 리더 육성', '공정한 보상 및 유지'],
    metrics: ['핵심인재 확보율', '내부 승진자 비율', '인재 유지율 (Retention)'],
    category: '인재',

  },
  '문화혁신': {
    id: 'D',
    title: '문화혁신',
    subtitle: 'Culture Innovation',
    brief: '성과 중심의 협력적 조직문화 구축',
    description: '구성원의 자발적 몰입과 협력을 이끌어내는 조직문화를 구축하여 지속가능한 성장의 기반을 마련합니다.',
    icon: CultureInnovationIcon,
    keyPoints: ['핵심가치 내재화', '심리적 안정감 조성', '소통 및 협업 활성화', '자율과 책임 문화'],
    metrics: ['조직문화 진단 점수', '구성원 몰입도 지수', '부서 간 협업 평가'],
    category: '인재',
  },
  '조직운영': {
    id: 'C',
    title: '조직운영',
    subtitle: 'Organizational Operation',
    brief: '효율적이고 민첩한 조직 운영 체계',
    description: '전략 실행을 지원하고 시장 변화에 빠르게 대응할 수 있는 효율적이고 유연한 조직 구조와 프로세스를 설계합니다.',
    icon: OrgOperationIcon,
    keyPoints: ['전략 기반 조직구조 설계', '애자일 업무 방식 도입', 'R&R(역할과 책임) 명확화', '업무 프로세스 효율화'],
    metrics: ['의사결정 소요 시간', '프로세스 처리 리드타임', '부서 간 협업 만족도'],
    category: '프로세스',
  },
  '인사분석': {
    id: 'F',
    title: '인사분석',
    subtitle: 'HR Analytics',
    brief: '데이터 기반 인사 의사결정 지원',
    description: '인사 데이터를 체계적으로 수집, 분석하여 감이나 경험이 아닌 데이터에 기반한 객관적 의사결정을 지원합니다.',
    icon: HrAnalyticsIcon,
    keyPoints: ['HR 데이터 대시보드 구축', '채용/평가 데이터 분석', '핵심인재 이탈 예측', '조직 네트워크 분석'],
    metrics: ['데이터 기반 의사결정 비율', '퇴직률 예측 정확도', '인당 노동 생산성'],
    category: '프로세스',
  },
};