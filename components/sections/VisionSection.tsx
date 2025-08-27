import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const VisionSection = () => {
    const ref = useScrollAnimation();
    return (
        <section className="py-24 md:py-32 text-left bg-[var(--bg-secondary)]">
            <div ref={ref} className="section-fade-in max-w-screen-xl mx-auto px-6 md:px-[60px]">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--apx-navy)] mb-4">
                    리더가 가장 먼저 찾는 성장 파트너
                </h2>
                <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 max-w-3xl">
                    단순 해결사가 아닌 생각의 파트너
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a href="#" className="bg-[var(--apx-navy)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:bg-[var(--growth-blue)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]">
                        뉴스레터 신청하기
                    </a>
                    <a href="#" className="bg-transparent border-2 border-[var(--apx-navy)] text-[var(--apx-navy)] font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:bg-[var(--apx-navy)] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--apx-navy)]">
                        자료실 확인하기
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;