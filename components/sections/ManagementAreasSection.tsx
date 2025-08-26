import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { managementAreas } from '../../data/managementAreas';

const ManagementAreasSection = () => {
    const ref = useScrollAnimation();
    return (
        <section className="py-20 md:py-28 bg-white">
            <div ref={ref} className="section-fade-in max-w-screen-xl mx-auto px-6 md:px-[60px]">
                <SectionHeading 
                    title="성과에 영향을 미치는 6가지 핵심 관리 영역"
                />
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {managementAreas.map((area, index) => (
                        <div 
                            key={area.id} 
                            className="bg-white p-8 rounded-xl border border-gray-200 text-left shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            style={{ transitionDelay: `${index * 100}ms`}}
                        >
                            <span className="text-3xl font-bold text-[#2E5BBA]">{area.id}.</span>
                            <h3 className="text-2xl font-bold text-[#1B365D] mt-2">{area.title}</h3>
                            <p className="text-gray-500">{area.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagementAreasSection;
