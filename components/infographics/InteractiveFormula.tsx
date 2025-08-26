
import React, { useEffect, useRef, useState } from 'react';

const MultiplyIcon = () => (
    <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
  
const DownArrowIcon = () => (
    <svg className="w-12 h-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
);

const factors = [
  { name: '전략', color: '#1B365D', description: '조직이 나아갈 명확한 방향과 목표를 설정합니다.' },
  { name: '인재', color: '#2E5BBA', description: '목표 달성에 필요한 역량을 갖춘 인재를 확보하고 육성합니다.' },
  { name: '프로세스', color: '#4A5568', description: '전략과 인재가 시너지를 낼 수 있도록 효율적으로 일하는 방식을 구축합니다.' },
];

const InteractiveFormula: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            }, { threshold: 0.2 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const cardBaseClass = "formula-card bg-white border border-gray-200 rounded-2xl shadow-lg p-6 text-center transition-all duration-700 flex flex-col min-h-[180px]";
    const connectorClass = "connector flex items-center justify-center transition-opacity duration-500";

    return (
        <div ref={ref} className={`mt-16 max-w-5xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <style>{`
                .formula-card, .connector {
                    opacity: 0;
                    transform: translateY(20px);
                }
                .is-visible .formula-card, .is-visible .connector {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
            <div className={`${isVisible ? 'is-visible' : ''}`}>
                {/* Factors Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 relative">
                    {factors.map((factor, i) => (
                        <div key={factor.name} className={`${cardBaseClass} hover:-translate-y-2 hover:shadow-xl`} style={{ transitionDelay: `${i * 150}ms` }}>
                            <h3 className="text-3xl font-bold" style={{ color: factor.color }}>
                                {factor.name}
                            </h3>
                             <p className="text-sm text-slate-600 mt-4 flex-grow">{factor.description}</p>
                        </div>
                    ))}
                     {/* Multiplication Symbols for Desktop */}
                    <div className="absolute hidden md:flex justify-between items-center w-full h-full top-0 left-0 px-[16.66%] pointer-events-none">
                        <div className={connectorClass} style={{ transitionDelay: '450ms' }}><MultiplyIcon /></div>
                        <div className={connectorClass} style={{ transitionDelay: '550ms' }}><MultiplyIcon /></div>
                    </div>
                </div>

                {/* Connector to Result */}
                <div className="flex justify-center my-6 md:my-10">
                    <div className={connectorClass} style={{ transitionDelay: '650ms' }}>
                        <DownArrowIcon />
                    </div>
                </div>

                {/* Result Card */}
                <div className={`${cardBaseClass} bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:-translate-y-2 hover:shadow-xl`} style={{ transitionDelay: '750ms' }}>
                    <h3 className="text-3xl font-bold text-[#1B365D]">
                        조직 성과
                    </h3>
                    <p className="text-slate-600 mt-4 max-w-md mx-auto">세 요소의 곱셈적 시너지를 통해 조직의 잠재력이 폭발적으로 성장합니다.</p>
                </div>
            </div>
        </div>
    );
};

export default InteractiveFormula;
