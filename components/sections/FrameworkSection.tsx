import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import ManagementAreasGrid from '../infographics/ManagementAreasGrid';
import ManagementAreaModal from '../ManagementAreaModal';
import type { ManagementAreaDetail } from '../../data/managementAreaDetails';

const FrameworkSection = () => {
    const [activeArea, setActiveArea] = useState<ManagementAreaDetail | null>(null);

    const handleAreaClick = (area: ManagementAreaDetail) => {
        // Toggle modal: if same area is clicked, close it. Otherwise, open the new one.
        setActiveArea(current => (current?.id === area.id ? null : area));
    };

    return (
        <section className="py-20 md:py-28 bg-[var(--bg-primary)] relative">
            <SectionWrapper>
                <SectionHeading
                    title={
                        <>
                            3가지 핵심 요소를
                            <br />
                            관리 가능한 6개 영역으로 구체화
                        </>
                    }
                />
                <ManagementAreasGrid onAreaClick={handleAreaClick} />
            </SectionWrapper>
            <ManagementAreaModal
                area={activeArea}
                isOpen={!!activeArea}
                onClose={() => setActiveArea(null)}
            />
        </section>
    );
};

export default FrameworkSection;