import React, { useState } from 'react';

const stepsWithDetails = [
  {
    name: '관리영역 (Area)',
    description: '성과 저하에 가장 큰 영향을 미치는 핵심 영역을 식별합니다.',
    color: 'var(--apx-navy)',
    details: '리더십, 인재, 조직운영 등 6가지 핵심 관리 영역 중, 조직의 성과 저하에 가장 큰 영향을 미치는 병목 지점을 데이터와 인터뷰를 통해 객관적으로 식별합니다. 문제의 범위를 명확히 하는 첫 단계입니다.'
  },
  {
    name: '문제요인군 (Factor Class)',
    description: '구조적, 역량적, 문화적, 환경적 요인을 분석해 문제의 근본 원인을 분류합니다.',
    color: 'var(--growth-blue)',
    details: [
        { title: '구조적 요인', text: '조직 구조, R&R, 프로세스 등 시스템 자체의 비효율성 (예: 불명확한 보고 체계)' },
        { title: '역량적 요인', text: '구성원의 지식, 스킬, 태도 등 개인/조직 역량의 부족 (예: 리더의 코칭 역량 부족)' },
        { title: '문화적 요인', text: '조직 내 암묵적인 규범, 가치, 일하는 방식의 문제 (예: 실패를 용납하지 않는 문화)' },
        { title: '환경적 요인', text: '외부 시장 변화, 내부 자원 제약 등 통제하기 어려운 환경의 영향 (예: 급격한 시장 변화)' },
    ]
  },
  {
    name: '개입수단 (Intervention Lever)',
    description: '분석된 원인에 가장 효과적인 표준화된 해결 방향을 설정합니다.',
    color: 'var(--excellence-gray)',
    details: [
        { title: '교육/코칭', text: '구성원의 역량 강화를 위한 교육, 워크샵, 1:1 코칭 등을 통해 지식과 스킬을 향상시킵니다.' },
        { title: '제도/프로세스 개선', text: '비효율적인 제도, 규정, 업무 프로세스를 재설계하여 구조적 문제를 해결합니다.' },
        { title: '조직/문화 개발', text: '조직 구조 개편, 가치 내재화 활동, 소통 활성화 등을 통해 조직의 체질을 개선합니다.' },
        { title: 'IT/인프라 지원', text: '업무 효율성을 높이는 새로운 기술이나 도구를 도입하여 환경적 제약을 극복합니다.' },
    ]
  },
  {
    name: '솔루션 (Solution)',
    description: '설정된 방향에 따라 APX의 검증된 솔루션을 맞춤형으로 매칭합니다.',
    color: 'var(--insight-orange)',
    details: '선택된 개입 수단을 실행하기 위한 가장 효과적인 APX의 구체적인 솔루션 패키지를 조합하여 제안합니다. 이는 단순한 제안을 넘어, 실행 계획과 측정 지표를 포함한 종합적인 ‘성과 개선 로드맵’입니다.'
  },
];

const InsightFunnelDiagram: React.FC = () => {
    const [expandedStep, setExpandedStep] = useState<string | null>(null);

  return (
    <div className="mt-16 max-w-3xl mx-auto flex flex-col items-center">
      {stepsWithDetails.map((step, index) => (
        <React.Fragment key={step.name}>
          {index > 0 && (
            <div className="h-16 w-8 flex items-center justify-center transition-transform duration-300" style={{ transform: expandedStep ? 'scaleY(0.8)' : 'scaleY(1)' }}>
                <svg className="w-full h-full text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
          )}
          <div
            className="w-full bg-[var(--bg-primary)] rounded-lg shadow-lg border border-[var(--border-light)] border-l-4 overflow-hidden transition-all duration-500 ease-in-out"
            style={{ borderColor: step.color }}
            onMouseEnter={() => setExpandedStep(step.name)}
            onMouseLeave={() => setExpandedStep(null)}
          >
            <div className="p-6">
                <span className="text-sm font-bold" style={{color: step.color}}>Step {index + 1}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--apx-navy)] mt-1">{step.name}</h3>
                <p className="text-gray-300 mt-2">{step.description}</p>
            </div>
            <div className={`transition-all duration-500 ease-in-out ${expandedStep === step.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                    <div className="border-t pt-4">
                    {typeof step.details === 'string' ? (
                        <p className="text-gray-400 text-sm">{step.details}</p>
                    ) : (
                        <ul className="space-y-3">
                            {step.details.map(item => (
                                <li key={item.title}>
                                    <p className="font-bold text-sm text-gray-200">{item.title}</p>
                                    <p className="text-gray-400 text-xs pl-2">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                    </div>
                </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default InsightFunnelDiagram;