import React from 'react';

const CoreFocusIcon: React.FC = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="icon-grad-focus" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="26" fill="url(#icon-grad-focus)" opacity="0.5"/>
        <circle cx="32" cy="32" r="18" fill="url(#icon-grad-focus)" opacity="0.75"/>
        <circle cx="32" cy="32" r="10" fill="#2563eb"/>
    </svg>
);

export default CoreFocusIcon;