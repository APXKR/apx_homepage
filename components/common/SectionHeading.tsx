import React from 'react';

const SectionHeading: React.FC<{ title: React.ReactNode; subtitle?: string; theme?: 'light' | 'dark', align?: 'left' | 'center' }> = ({ title, subtitle, theme = 'light', align = 'left' }) => (
    <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
        {subtitle && <p className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-[var(--growth-blue)]' : 'text-[var(--growth-blue)]'}`}>{subtitle}</p>}
        <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-[var(--apx-navy)]'}`}>
            {title}
        </h2>
    </div>
);

export default SectionHeading;