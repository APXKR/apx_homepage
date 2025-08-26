
import React, { useEffect, useRef } from 'react';

const factors = [
  { name: '전략', color: '#1B365D' },
  { name: '인재', color: '#2E5BBA' },
  { name: '프로세스', color: '#4A5568' },
];

const areas = [
  { name: '리더십 역량', factor: 0 }, { name: '성과관리', factor: 0 },
  { name: '인재경영', factor: 1 }, { name: '문화혁신', factor: 1 },
  { name: '조직운영', factor: 2 }, { name: '인사분석', factor: 2 },
];

const FrameworkDiagram: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });
    
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

  return (
    <div ref={ref} className="mt-16 max-w-5xl mx-auto">
      <style>{`
        .diagram-item, .diagram-line {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .factor-item { 
          transform: translateX(-20px); 
        }
        .area-item { 
          transform: translateX(20px); 
        }
        .diagram-line {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            transition: stroke-dashoffset 1s ease-out 0.4s, opacity 0.5s 0.4s;
        }

        .animate-in .diagram-item { 
          opacity: 1; 
          transform: translateX(0); 
        }
        .animate-in .diagram-line { 
          stroke-dashoffset: 0; 
          opacity: 0.7; 
        }
      `}</style>
      <div className="flex flex-col md:flex-row justify-between items-center relative">
        {/* Factors Column */}
        <div className="w-full md:w-1/3 space-y-16 md:space-y-24 flex md:flex-col items-center justify-around md:justify-center mb-8 md:mb-0">
          {factors.map((factor, i) => (
            <div key={factor.name} className="diagram-item factor-item text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-md mx-auto" style={{ backgroundColor: factor.color }}>
                {factor.name}
              </div>
            </div>
          ))}
        </div>

        {/* Areas Column */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-x-4 gap-y-8 text-center">
          {areas.map((area, i) => (
            <div key={area.name} className="diagram-item area-item" style={{ transitionDelay: `${i * 100 + 300}ms` }}>
              <div className="p-4 bg-white border-2 rounded-lg h-full flex items-center justify-center font-semibold text-[#1B365D]" style={{ borderColor: factors[area.factor].color }}>
                {area.name}
              </div>
            </div>
          ))}
        </div>

        {/* SVG Lines for Desktop */}
        <svg className="hidden md:block absolute top-0 left-0 w-full h-full" aria-hidden="true">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#A0AEC0" />
                </marker>
            </defs>
            {areas.map((area, i) => (
                <line
                    key={i}
                    x1="33%"
                    y1={`${area.factor * 33.3 + 16.6}%`}
                    x2="50%"
                    y2={`${Math.floor(i / 2) * 33.3 + 16.6}%`}
                    stroke={factors[area.factor].color}
                    strokeWidth="2"
                    className="diagram-line"
                    markerEnd="url(#arrowhead)"
                    style={{ transitionDelay: `${i * 100 + 500}ms` }}
                />
            ))}
        </svg>
      </div>
    </div>
  );
};

export default FrameworkDiagram;
