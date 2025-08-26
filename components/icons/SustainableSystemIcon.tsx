import React from 'react';

const SustainableSystemIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
         <defs>
            <radialGradient id="icon-grad-system" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
        </defs>
        <path d="M24 16.25a1 1 0 0 1 1.41 0l10 10a1 1 0 0 1 0 1.41l-4 4a1 1 0 0 1-1.41-1.41L33.59 26.67 24 17.66a1 1 0 0 1 0-1.41Z"  fill="url(#icon-grad-system)" opacity="0.8"/>
        <path d="M40 26a14 14 0 1 0 14 14A14 14 0 0 0 40 26Zm0 26a12 12 0 1 1 12-12A12 12 0 0 1 40 52Z" fill="url(#icon-grad-system)"/>
        <path d="M18 18a6 6 0 1 0 6 6A6 6 0 0 0 18 18Zm0 10a4 4 0 1 1 4-4A4 4 0 0 1 18 28Z" fill="url(#icon-grad-system)"/>
    </svg>
);

export default SustainableSystemIcon;