import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import KeyElementsVisualization from '../infographics/KeyElementsVisualization';

const PhilosophySection = () => (
    <section className="py-20 md:py-28 bg-[var(--bg-secondary)]">
        <SectionWrapper>
            <SectionHeading 
                title={
                    <>
                        성과를 필연으로 만드는
                        <br />
                        운영체제의 3가지 핵심 요소
                    </>
                }
            />
            <div className="max-w-3xl mt-8 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                    성과를 우연이 아닌 '설계된 필연'으로 만들기 위해, 성과 운영체제의 3가지 핵심 요소를 정의합니다.
                </p>
                <p>
                    요소들은 어느 하나라도 약해지면 전체 시스템의 효율성이 급격히 저하되는 강력한 시너지 구조를 형성합니다.
                </p>
            </div>
            <KeyElementsVisualization />
        </SectionWrapper>
    </section>
);

export default PhilosophySection;