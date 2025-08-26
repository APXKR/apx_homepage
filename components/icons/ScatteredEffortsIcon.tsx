import React from 'react';

const ScatteredEffortsIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="icon-grad-scatter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a7b2c3"/>
                <stop offset="100%" stopColor="#e2e8f0"/>
            </linearGradient>
        </defs>
        <path d="M32 32L12 12M16 12H12V16" stroke="url(#icon-grad-scatter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 32L52 12M48 12H52V16" stroke="url(#icon-grad-scatter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 32L12 52M12 48V52H16" stroke="url(#icon-grad-scatter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 32L52 52M52 48V52H48" stroke="url(#icon-grad-scatter)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default ScatteredEffortsIcon;