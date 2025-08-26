import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScatteredEffortsIcon from '../icons/ScatteredEffortsIcon';
import CoreFocusIcon from '../icons/CoreFocusIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OperatingSystemSection = () => {
    const textRef = useScrollAnimation({ threshold: 0.5 });
    const infographicRef = useScrollAnimation({ threshold: 0.4 });

    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--apx-navy)] to-[var(--bg-dark)]">
            <div className="max-w-screen-xl mx-auto px-6 md:px-[60px]">
                <div ref={textRef} className="section-fade-in">
                    <SectionHeading
                        title={<>모든 위대한 성과는<br />강력한 '운영체제'에서 시작됩니다</>}
                        theme="dark"
                    />
                    <p className="max-w-3xl mt-6 text-lg text-gray-300">
                        단편적인 노력들이 모여도 방향이 맞지 않으면 시너지를 낼 수 없습니다.<br/>뛰어난 하드웨어도 운영체제가 없으면 무용지물이듯,<br/>조직의 성과 역시 그 근간을 이루는 핵심 운영 원리가 필요합니다.<br/>APX는 바로 이 '운영체제'의 기본 원리를 정의하는 것에서 출발합니다.
                    </p>
                </div>

                <div ref={infographicRef} className="section-fade-in mt-16 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-8 items-center text-center">
                        {/* Part 1: Scattered Efforts */}
                        <div className="infographic-part p-6 py-8 bg-slate-800/40 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
                            <div className="flex justify-center h-16 items-center">
                                <ScatteredEffortsIcon />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-white">단편적 노력</h3>
                            <p className="mt-2 text-sm text-slate-300 h-10">방향성 없는 개별 실행으로<br/>시너지가 저하됩니다.</p>
                        </div>

                        {/* Arrow in between */}
                        <div className="infographic-part flex justify-center">
                             <RightArrowIcon />
                        </div>

                        {/* Part 2: Integrated System */}
                        <div className="infographic-part p-6 py-8 bg-blue-900/30 backdrop-blur-lg border-2 border-[var(--growth-blue)] rounded-2xl shadow-lg">
                             <div className="flex justify-center h-16 items-center">
                                <CoreFocusIcon />
                             </div>
                            <h3 className="mt-4 text-xl font-bold text-[var(--growth-blue)]">APX 성장 시스템</h3>
                            <p className="mt-2 text-sm text-slate-200 h-10">전략과 연계된 통합적 실행으로<br/>성과를 극대화합니다.</p>
                        </div>
                    </div>
                </div>
                 <style>{`
                    .section-fade-in .infographic-part {
                        opacity: 0;
                        transform: translateY(20px);
                        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                    }
                    .section-fade-in.visible .infographic-part {
                       opacity: 1; transform: translateY(0);
                    }
                    .section-fade-in.visible .infographic-part:nth-child(1) { transition-delay: 0.1s; }
                    .section-fade-in.visible .infographic-part:nth-child(2) { transition-delay: 0.3s; }
                    .section-fade-in.visible .infographic-part:nth-child(3) { transition-delay: 0.5s; }
                `}</style>
            </div>
        </section>
    );
};

export default OperatingSystemSection;