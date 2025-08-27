
import React from 'react';
import type { Solution } from '../types';
import CloseIcon from './icons/CloseIcon';
import TrashIcon from './icons/TrashIcon';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: Solution[];
  onRemove: (solutionId: string) => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, portfolio, onRemove }) => {
  if (!isOpen) return null;

  const areaColors: { [key: string]: string } = {
    '리더십 역량': 'border-blue-500',
    '인재경영': 'border-green-500',
    '조직운영': 'border-purple-500',
    '문화혁신': 'border-yellow-500',
    '성과관리': 'border-red-500',
    '인사분석': 'border-indigo-500',
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-[110] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-[#1B365D]">나의 솔루션 포트폴리오</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E5BBA]">
            <CloseIcon />
            <span className="sr-only">닫기</span>
          </button>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {portfolio.length === 0 ? (
            <p className="text-center text-gray-500 py-10">아직 담은 솔루션이 없습니다. 관심 있는 솔루션을 추가해보세요.</p>
          ) : (
            <ul className="space-y-4">
              {portfolio.map((solution) => (
                <li key={solution.id} className={`flex items-start justify-between p-4 border-l-4 ${areaColors[solution.area] || 'border-gray-300'} bg-gray-50 rounded-r-md`}>
                  <div>
                    <h3 className="font-bold text-lg text-[#1B365D]">{solution.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{solution.description}</p>
                  </div>
                  <button onClick={() => onRemove(solution.id)} className="ml-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-100 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
                    <TrashIcon />
                    <span className="sr-only">{solution.name} 제거</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            className={`w-full font-bold text-white py-3 px-8 rounded-full text-lg transition-all transform ${portfolio.length > 0 ? 'bg-[#1B365D] hover:bg-[#2E5BBA] hover:scale-105' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={portfolio.length === 0}
          >
            포트폴리오 문의하기 ({portfolio.length}개)
          </button>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioModal;