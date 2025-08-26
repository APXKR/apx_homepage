import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import StrategyIcon from '../icons/StrategyIcon';
import TalentIcon from '../icons/TalentIcon';
import ProcessIcon from '../icons/ProcessIcon';

const elements = [
  {
    icon: <StrategyIcon />,
    title: '전략',
    description: '명확한 목표와 방향성을 설정하여 조직의 모든 노력을 한 곳으로 집중시킵니다.',
  },
  {
    icon: <TalentIcon />,
    title: '인재',
    description: '탁월한 인재를 확보하고 육성하여 전략 실행의 핵심 동력을 만듭니다.',
  },
  {
    icon: <ProcessIcon />,
    title: '프로세스',
    description: '효율적이고 유기적인 업무 방식을 구축하여 전략과 인재의 시너지를 극대화합니다.',
  },
];

const KeyElementsVisualization: React.FC = () => {
  const ref = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className="section-fade-in mt-16 max-w-6xl mx-auto">
        <style>{`
            .element-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .visible .element-card {
                opacity: 1;
                transform: translateY(0);
            }
        `}</style>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elements.map((element, index) => (
                <div 
                    key={element.title} 
                    className="element-card bg-white rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[var(--border-light)]"
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    <div className="mb-6 self-center">{element.icon}</div>
                    <h3 className="text-center text-2xl font-bold text-[var(--apx-navy)] mb-4">{element.title}</h3>
                    <p className="text-left text-[var(--text-secondary)] flex-grow break-keep">{element.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default KeyElementsVisualization;