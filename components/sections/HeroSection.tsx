import React from 'react';

const HeroSection = () => (
    <section className="relative flex flex-col justify-center min-h-[80vh] py-24 bg-gradient-to-br from-[var(--apx-navy)] to-[var(--growth-blue)] text-white overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-[60px]">
            <div className="relative max-w-4xl text-left" style={{ animation: 'fadeInUp 0.8s 0.2s ease-out forwards', opacity: 0 }}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    조직의 잠재력을 성과로 바꾸는<br />성장 시스템을 지원합니다
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10" style={{ animation: 'fadeInUp 0.8s 0.4s ease-out forwards', opacity: 0 }}>
                    문제가 아니라 원인, 캠페인이 아니라 시스템
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start" style={{ animation: 'fadeInUp 0.8s 0.6s ease-out forwards', opacity: 0 }}>
                    <a href="#" className="bg-[var(--apx-navy)] text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:bg-white hover:text-[var(--apx-navy)] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
                        솔루션 문의하기
                    </a>
                    <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-all hover:bg-white hover:text-[var(--apx-navy)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
                        아카데미 탐색하기
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;