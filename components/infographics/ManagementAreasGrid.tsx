import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { ManagementAreaDetail } from '../../data/managementAreaDetails';
import { managementAreaDetails } from '../../data/managementAreaDetails';

const areasByFactor: { [key: string]: { color: string; items: string[] } } = {
  '전략': {
    color: 'text-[var(--apx-navy)]',
    items: ['리더십 역량', '성과관리'],
  },
  '인재': {
    color: 'text-[var(--apx-navy)]',
    items: ['인재경영', '문화혁신'],
  },
  '프로세스': {
    color: 'text-[var(--apx-navy)]',
    items: ['조직운영', '인사분석'],
  },
};

interface ManagementAreasGridProps {
    onAreaClick: (area: ManagementAreaDetail) => void;
}

const ManagementAreasGrid: React.FC<ManagementAreasGridProps> = ({ onAreaClick }) => {
  const ref = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} className="section-fade-in mt-16 max-w-6xl mx-auto">
        <style>{`
            .factor-column {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .visible .factor-column {
                opacity: 1;
                transform: translateY(0);
            }
        `}</style>
        <div className="bg-[var(--bg-secondary)]/50 rounded-2xl p-8 md:p-12 border border-[var(--border-light)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {Object.entries(areasByFactor).map(([factor, data], index) => (
                    <div
                        key={factor}
                        className="factor-column text-center"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <h3 className={`text-2xl font-bold mb-6 ${data.color}`}>{factor}</h3>
                        <div className="space-y-6">
                            {data.items.map(itemName => {
                                const areaDetail = managementAreaDetails[itemName];
                                if (!areaDetail) return null;

                                return (
                                    <button
                                        type="button"
                                        key={areaDetail.id}
                                        onClick={() => onAreaClick(areaDetail)}
                                        className="block w-full text-center text-white bg-[var(--growth-blue)] border-2 border-transparent px-6 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[var(--apx-navy)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]"
                                    >
                                        <span className="block font-semibold text-lg">{areaDetail.title}</span>
                                        <span className="block text-sm opacity-90 font-normal">{areaDetail.brief}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ManagementAreasGrid;