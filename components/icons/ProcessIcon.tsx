import React from 'react';

const ProcessIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="process-grad-gear-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--text-tertiary)" />
        <stop offset="100%" stopColor="var(--excellence-gray)" />
      </linearGradient>
      <linearGradient id="process-grad-gear-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#718096" />
      </linearGradient>
       <radialGradient id="process-grad-center" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--bg-primary)" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </radialGradient>
      <filter id="drop-shadow-process" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2"/>
      </filter>
    </defs>
    
    <g filter="url(#drop-shadow-process)">
      {/* Large Gear */}
      <g transform="translate(25 25)">
        <path d="M22 11 A11 11 0 0 1 11 22 A11 11 0 0 1 0 11 A11 11 0 0 1 11 0 A11 11 0 0 1 22 11Z" fill="url(#process-grad-gear-main)"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <path key={angle} d="M-3 -13 H3 L5 -11 H-5 L-3 -13Z" fill="url(#process-grad-gear-main)" transform={`rotate(${angle} 11 11)`}/>
        ))}
        <circle cx="11" cy="11" r="5" fill="url(#process-grad-center)"/>
        <circle cx="11" cy="11" r="3" fill="var(--growth-blue)"/>
      </g>
      
       {/* Small Gear */}
      <g transform="translate(42 42)">
        <path d="M14 7 A7 7 0 0 1 7 14 A7 7 0 0 1 0 7 A7 7 0 0 1 7 0 A7 7 0 0 1 14 7Z" fill="url(#process-grad-gear-secondary)"/>
        {[0, 60, 120, 180, 240, 300].map(angle => (
             <path key={angle} d="M-2 -8 H2 L3 -7 H-3 L-2 -8Z" fill="url(#process-grad-gear-secondary)" transform={`rotate(${angle} 7 7)`}/>
        ))}
        <circle cx="7" cy="7" r="3" fill="url(#process-grad-center)"/>
      </g>
    </g>
  </svg>
);

export default ProcessIcon;