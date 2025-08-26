import React from 'react';

const StrategyIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="strategy-grad-casing-outer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--text-tertiary)"/>
        <stop offset="100%" stopColor="var(--excellence-gray)"/>
      </linearGradient>
      <linearGradient id="strategy-grad-casing-inner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0"/>
        <stop offset="100%" stopColor="#CBD5E0"/>
      </linearGradient>
      <radialGradient id="strategy-grad-face" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--bg-primary)" />
        <stop offset="100%" stopColor="var(--bg-secondary)" />
      </radialGradient>
      <filter id="drop-shadow-strategy" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="4" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.2"/>
      </filter>
    </defs>

    <g filter="url(#drop-shadow-strategy)">
      {/* Casing */}
      <circle cx="32" cy="32" r="30" fill="url(#strategy-grad-casing-outer)"/>
      <circle cx="32" cy="32" r="28" fill="url(#strategy-grad-casing-inner)"/>
      <circle cx="32" cy="32" r="26" fill="url(#strategy-grad-face)"/>

      {/* Markings */}
      <path d="M32 8 L32 12" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 56 L32 52" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 32 L12 32" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M56 32 L52 32" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"/>

      {/* Needle */}
      <g transform="rotate(45 32 32)">
        <path d="M32 32 L32 10" stroke="var(--excellence-gray)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 32 L32 10" fill="var(--growth-blue)" transform="translate(0, 0)"/>
        <path d="M32 32 L32 54" fill="#E2E8F0" stroke="var(--text-tertiary)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 10 L28 16 L36 16 Z" fill="var(--growth-blue)"/>
        <path d="M32 54 L28 48 L36 48 Z" fill="#E2E8F0"/>
      </g>
      
      {/* Center Pin */}
      <circle cx="32" cy="32" r="4" fill="var(--excellence-gray)"/>
      <circle cx="32" cy="32" r="2" fill="var(--bg-primary)"/>
    </g>
  </svg>
);

export default StrategyIcon;