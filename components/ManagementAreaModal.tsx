import React from 'react';
import type { ManagementAreaDetail } from '../data/managementAreaDetails';
import CloseIcon from './icons/CloseIcon';

interface ModalProps {
  area: ManagementAreaDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ManagementAreaModal: React.FC<ModalProps> = ({ area, isOpen, onClose }) => {
  if (!isOpen || !area) return null;

  const Icon = area.icon;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 z-[110] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--growth-blue)]/10 rounded-lg flex items-center justify-center">
                    <Icon />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[var(--apx-navy)]">{area.title}</h2>
                    <p className="text-sm text-gray-500">{area.subtitle}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-sm font-bold text-gray-400 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4">{area.id}</span>
                <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]">
                    <CloseIcon />
                    <span className="sr-only">닫기</span>
                </button>
            </div>
        </div>

        {/* Body */}
        <div className="flex-grow px-6 pb-6 overflow-y-auto">
          <p className="text-[var(--text-secondary)] mb-6 pb-6 border-b">{area.description}</p>
          
          <div>
            <h3 className="text-lg font-bold text-[var(--apx-navy)] mb-3">핵심 관리 포인트</h3>
            <ul className="space-y-2 mb-6">
              {area.keyPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--growth-blue)] rounded-full mr-3"></span>
                  <span className="text-[var(--text-secondary)]">{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-[var(--apx-navy)] mb-3">주요 측정 지표</h3>
            <div className="space-y-2">
                {area.metrics.map((metric, index) => (
                    <div key={index} className="bg-[var(--growth-blue)]/10 text-[var(--growth-blue)] text-sm font-medium px-4 py-2 rounded-md">
                        {metric}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementAreaModal;