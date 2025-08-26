import React from 'react';

const ShortTermFixIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="icon-grad-fix" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7b2c3"/>
                <stop offset="100%" stopColor="#e2e8f0"/>
            </linearGradient>
        </defs>
        <path d="M16 32 C16 19.85 26.85 9 39 9" stroke="url(#icon-grad-fix)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M35 9L39 5L43 9" stroke="url(#icon-grad-fix)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 32 C48 44.15 37.15 55 25 55" stroke="url(#icon-grad-fix)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
        <path d="M29 55L25 59L21 55" stroke="url(#icon-grad-fix)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default ShortTermFixIcon;