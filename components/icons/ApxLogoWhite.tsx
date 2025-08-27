import React from 'react';

// Note: The filename is ApxLogoWhite.tsx due to file system constraints.
// It has been updated to render a text-based logo.

interface ApxLogoProps {
  variant?: 'black' | 'white';
  className?: string;
}

const ApxLogo: React.FC<ApxLogoProps> = ({ variant = 'black', className = '' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-[var(--apx-navy)]';
  
  return (
    <span 
      className={`font-extrabold text-3xl md:text-4xl tracking-tight flex items-center ${textColor} ${className}`}
      aria-label="APX Consulting Company Logo"
    >
      APX
    </span>
  );
};

export default ApxLogo;
