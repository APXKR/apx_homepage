import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import InsightFunnelDiagram from '../infographics/InsightFunnelDiagram';

const InsightFunnelSection = () => (
    <section className="py-20 md:py-28 bg-[var(--bg-dark)]">
        <SectionWrapper>
             <SectionHeading 
                title={
                    <>
                        APX 인사이트 퍼널:
                        <br />
                        현상에서 핵심으로, 문제에서 해결책으로
                    </>
                }
                theme="dark"
            />
            <div className="max-w-3xl mt-8 text-lg text-gray-300 leading-relaxed">
                <p>
                    6개 관리 영역의 어떤 문제든, APX는 감이나 직관에 의존하지 않습니다.
                </p>
                <p>
                    'APX 인사이트 퍼널'은 문제의 진짜 원인을 진단하고,
                </p>
                <p>
                    가장 효과적인 해결책을 논리적으로 도출하는 APX만의 체계적인 프레임워크입니다.
                </p>
            </div>
             <InsightFunnelDiagram />
        </SectionWrapper>
    </section>
);

export default InsightFunnelSection;