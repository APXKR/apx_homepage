import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const VisionSection = () => {
    const ref = useScrollAnimation();
    return (
        <section className="py-20 md:py-32 text-left bg-[var(--bg-secondary)]">
            <div ref={ref} className="section-fade-in max-w-screen-xl mx-auto px-6 md:px-[60px]">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--apx-navy)] mb-4">
                    리더가 가장 먼저 찾는 성장 파트너
                </h2>
                <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 max-w-3xl">
                    단순 해결사가 아닌 생각의 파트너
                </p>
                <a href="#" className="bg-[var(--apx-navy)] text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 inline-block mt-4 hover:bg-[var(--growth-blue)]">
                    성과 실현 파트너십 시작하기
                </a>
            </div>
        </section>
    );
};

export default VisionSection;