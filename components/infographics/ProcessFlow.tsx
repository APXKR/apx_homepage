import React, { useEffect, useRef } from 'react';

const steps = [
  { title: '1. 진단', subtitle: 'Diagnosis', description: '데이터와 정성적 분석을 통해 현재 상태를 정확히 파악하고, 성장의 기회와 핵심 문제를 객관적으로 식별합니다.', color: 'var(--apx-navy)' },
  { title: '2. 설계', subtitle: 'Design', description: '진단 결과를 바탕으로, 조직의 고유한 상황과 목표에 최적화된 ‘성장 청사진’을 설계합니다.', color: 'var(--growth-blue)' },
  { title: '3. 실행', subtitle: 'Execution', description: '설계된 솔루션을 조직 전체에 확산하고, 일회성 프로젝트가 아닌 ‘스스로 운영되는 시스템’으로 내재화합니다.', color: 'var(--excellence-gray)' },
];

const ProcessFlow: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current?.classList.add('animate-in');
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return (
        <div ref={ref} className="mt-16 max-w-6xl mx-auto">
            <style>{`
                .process-step, .process-arrow {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .animate-in .process-step, .animate-in .process-arrow {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
            <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        {index > 0 && (
                            <div className="process-arrow hidden md:flex items-center justify-center mx-4" style={{transitionDelay: `${index * 200 + 100}ms`}}>
                                <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        )}
                        <div className="process-step flex-1" style={{transitionDelay: `${index * 200}ms`}}>
                            <div className="h-full p-8 border border-[var(--border-light)] border-t-4 rounded-lg shadow-lg bg-white flex flex-col text-left" style={{ borderColor: step.color }}>
                                <h3 className="text-2xl font-bold text-[var(--apx-navy)]">{step.title}</h3>
                                <p className="text-sm font-medium text-gray-400 mb-4">{step.subtitle}</p>
                                <p className="text-[var(--text-secondary)] flex-grow break-keep">{step.description}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProcessFlow;