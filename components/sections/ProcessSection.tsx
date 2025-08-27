import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import ProcessFlow from '../infographics/ProcessFlow';

const ProcessSection = () => (
     <section className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <SectionWrapper>
            <SectionHeading 
                title={
                    <>
                        아이디어를 실질적 성과로 바꾸는
                        <br />
                        3단계 성과 창출 프로세스
                    </>
                }
            />
             <div className="max-w-3xl mt-8 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                    'APX 인사이트 퍼널'을 통해 도출된 명확한 해결책은 보고서에 머무르지 않습니다.
                    <br />
                    우리는 '진단-설계-실행'의 완결성 있는 3단계 프로세스를 통해
                    <br />
                    조직 내부에 실질적인 변화를 만들고, 지속 가능한 시스템으로 내재화합니다.
                </p>
            </div>
            <ProcessFlow />
        </SectionWrapper>
    </section>
);

export default ProcessSection;