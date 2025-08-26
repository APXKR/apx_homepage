import React from 'react';

const TalentStrategyIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="icon-grad-talent" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#93c5fd"/>
            </linearGradient>
        </defs>
        <circle cx="22" cy="18" r="6" stroke="#e2e8f0" strokeWidth="3"/>
        <path d="M12 42C12 34 32 34 32 42Z" stroke="#e2e8f0" strokeWidth="3" fill="#94a3b8" fillOpacity="0.3"/>
        <rect x="40" y="34" width="8" height="16" fill="url(#icon-grad-talent)" rx="2"/>
        <rect x="50" y="26" width="8" height="24" fill="url(#icon-grad-talent)" rx="2"/>
    </svg>
);

export default TalentStrategyIcon;