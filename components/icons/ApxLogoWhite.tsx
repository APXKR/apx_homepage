import React from 'react';

const ApxLogoWhite: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 350 70"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="APX Consulting 로고"
    {...props}
  >
    <g fill="white">
      {/* Symbol */}
      <path d="M35 0C15.67 0 0 15.67 0 35s15.67 35 35 35 35-15.67 35-35S54.33 0 35 0zm0 63C19.56 63 7 50.44 7 35S19.56 7 35 7s28 12.56 28 28-12.56 28-28 28z"/>
      <path d="M35 15.4L15.75 52.5h7.7L35 32.2l11.55 20.3h7.7L35 15.4z"/>

      {/* Separator */}
      <rect x="80" y="5" width="2" height="60" />

      {/* Text */}
      <text x="95" y="22" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="400" letterSpacing="1">APX CONSULTING</text>
      <text x="95" y="52" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="400" letterSpacing="1">COMPANY</text>
    </g>
  </svg>
);

export default ApxLogoWhite;