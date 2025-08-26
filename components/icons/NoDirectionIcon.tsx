import React from 'react';

const NoDirectionIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="icon-grad-compass" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="26" stroke="#94a3b8" strokeWidth="3" fill="url(#icon-grad-compass)" />
        <path d="M32 12L36 32L32 36L28 32Z" fill="#e11d48" />
        <path d="M32 52L28 32L32 36L36 32Z" fill="#f8fafc" />
    </svg>
);

export default NoDirectionIcon;