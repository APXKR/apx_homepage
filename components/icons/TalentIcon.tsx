import React from 'react';

const TalentIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="talent-grad-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBD5E0" />
        <stop offset="100%" stopColor="#718096" />
      </linearGradient>
       <linearGradient id="talent-grad-head" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--text-tertiary)" />
        <stop offset="100%" stopColor="var(--excellence-gray)" />
      </linearGradient>
      <radialGradient id="talent-grad-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--innovation-purple)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="var(--innovation-purple)" stopOpacity="0" />
      </radialGradient>
      <filter id="drop-shadow-talent" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2"/>
      </filter>
    </defs>
    <g filter="url(#drop-shadow-talent)">
      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="14" ry="4" fill="#000000" fillOpacity="0.1"/>

      {/* Upward Arrow / Glow */}
      <path d="M32 10 L40 22 L24 22 Z" fill="url(#talent-grad-glow)"/>
      <path d="M32 18 L32 40" stroke="url(#talent-grad-glow)" strokeWidth="4" strokeLinecap="round" />

      {/* Body */}
      <path d="M24 54 C 24 42, 40 42, 40 54 Z" fill="url(#talent-grad-body)" />
      
      {/* Head */}
      <circle cx="32" cy="28" r="9" fill="url(#talent-grad-head)" />
    </g>
  </svg>
);

export default TalentIcon;