import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import type { Solution } from '../../types';
import { solutions } from '../../data/solutions';
import { managementAreas } from '../../data/managementAreas';
import PortfolioModal from '../PortfolioModal';
import PortfolioIcon from '../icons/PortfolioIcon';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

const areaFilters = ['전체', ...managementAreas.map(a => a.title)];

const InteractiveSolutionSection = () => {
    const [portfolio, setPortfolio] = useState<Solution[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleAddToPortfolio = (solution: Solution) => {
        setPortfolio(prev => [...prev, solution]);
    };
    
    const handleRemoveFromPortfolio = (solutionId: string) => {
        setPortfolio(prev => prev.filter(s => s.id !== solutionId));
    };

    const isInPortfolio = (solutionId: string) => portfolio.some(s => s.id === solutionId);

    const filteredSolutions = solutions.filter(solution => {
        const matchesFilter = activeFilter === '전체' || solution.area === activeFilter;
        const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) || solution.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const areaColors: { [key: string]: string } = {
        '리더십 역량': 'bg-[var(--growth-blue)]/10 text-[var(--growth-blue)]',
        '인재경영': 'bg-[var(--innovation-purple)]/10 text-[var(--innovation-purple)]',
        '조직운영': 'bg-[var(--excellence-gray)]/20 text-[var(--excellence-gray)]',
        '문화혁신': 'bg-[var(--insight-orange)]/10 text-[var(--insight-orange)]',
        '성과관리': 'bg-red-500/10 text-red-600',
        '인사분석': 'bg-indigo-500/10 text-indigo-600',
    };

    return (
        <section className="py-20 md:py-28 bg-[var(--bg-primary)]">
            <SectionWrapper>
                <div className="text-left">
                    <SectionHeading 
                        title="나만의 성과 실현 솔루션을 직접 구성해보세요"
                        subtitle="인터랙티브 솔루션"
                    />
                    <p className="max-w-3xl mt-6 text-lg text-[var(--text-secondary)]">
                        APX의 솔루션 DB에서 조직에 필요한 해결책을 필터링하고 검색하여 '나의 포트폴리오'에 담아 즉시 맞춤 상담을 요청하세요.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="my-12 sticky top-[72px] bg-[var(--bg-primary)]/80 backdrop-blur-sm z-10 py-4 -mx-6 px-6 md:-mx-[60px] md:px-[60px]">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                         <div className="w-full md:w-auto overflow-x-auto">
                             <div className="flex items-center gap-2 pb-2">
                                {areaFilters.map(area => (
                                    <button
                                        key={area}
                                        onClick={() => setActiveFilter(area)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)] ${activeFilter === area ? 'bg-[var(--apx-navy)] text-white' : 'bg-white text-[var(--text-secondary)] hover:bg-gray-200 border border-[var(--border-light)]'}`}
                                    >
                                        {area}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-full md:w-auto md:min-w-[300px]">
                            <input 
                                type="text"
                                placeholder="솔루션 검색..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--growth-blue)] focus:border-transparent"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Solution Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSolutions.map(solution => (
                        <div key={solution.id} className="bg-white border border-[var(--border-light)] rounded-xl shadow-md flex flex-col p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="flex-grow">
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${areaColors[solution.area] || 'bg-gray-100 text-gray-800'}`}>{solution.area}</span>
                                <h3 className="text-xl font-bold text-[var(--apx-navy)] my-3">{solution.name}</h3>
                                <p className="text-[var(--text-secondary)] text-sm">{solution.description}</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={() => isInPortfolio(solution.id) ? handleRemoveFromPortfolio(solution.id) : handleAddToPortfolio(solution)}
                                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isInPortfolio(solution.id) ? 'bg-white text-[var(--status-error)] border-[var(--status-error)] hover:bg-red-50' : 'bg-[var(--apx-navy)] text-white border-[var(--apx-navy)] hover:bg-[var(--growth-blue)]'}`}
                                >
                                    {isInPortfolio(solution.id) ? <MinusIcon /> : <PlusIcon />}
                                    {isInPortfolio(solution.id) ? '포트폴리오에서 제거' : '포트폴리오에 추가'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredSolutions.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        <p className="text-xl">검색 결과가 없습니다.</p>
                        <p className="mt-2">다른 필터나 검색어를 시도해보세요.</p>
                    </div>
                )}
            </SectionWrapper>
            
            {/* Floating Portfolio Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className={`fixed bottom-8 right-8 z-50 bg-[var(--growth-blue)] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${portfolio.length > 0 ? 'scale-100' : 'scale-0'}`}
                aria-label={`솔루션 포트폴리오 보기 (${portfolio.length}개 항목)`}
            >
                <PortfolioIcon />
                <span className="absolute -top-1 -right-1 bg-[var(--status-error)] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {portfolio.length}
                </span>
            </button>
            
            {/* Portfolio Modal */}
            <PortfolioModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                portfolio={portfolio}
                onRemove={handleRemoveFromPortfolio}
            />
        </section>
    );
};

export default InteractiveSolutionSection;