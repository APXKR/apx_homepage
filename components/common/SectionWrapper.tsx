import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionWrapper: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => {
    const ref = useScrollAnimation();
    return (
        <div ref={ref} className={`section-fade-in max-w-screen-xl mx-auto px-6 md:px-[60px] ${className}`}>
            {children}
        </div>
    );
};

export default SectionWrapper;