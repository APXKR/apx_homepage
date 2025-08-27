import React, { useState, useEffect } from 'react';
import type { NavLink } from '../types';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import ApxLogo from './icons/ApxLogoWhite';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('솔루션');

  const navLinks: NavLink[] = [
    { name: '솔루션', href: '#' },
    { name: '아카데미', href: '#' },
    { name: '인사이트', href: '#' },
    { name: '성공사례', href: '#' },
    { name: '회사소개', href: '#' },
  ];

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMobileMenuOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
    return () => {
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, [isMobileMenuOpen]);


  const NavItem: React.FC<{ link: NavLink; isMobile?: boolean }> = ({ link, isMobile = false }) => (
    <a
      href={link.href}
      onClick={() => {
          setActiveLink(link.name);
          if(isMobile) setIsMobileMenuOpen(false);
      }}
      className={`relative group font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)] rounded-sm
        ${isMobile 
          ? 'text-3xl py-4 text-center' 
          : 'text-base tracking-[-0.02em]'}
        ${activeLink === link.name ? 'text-[var(--apx-navy)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--apx-navy)]'}
      `}
    >
      {link.name}
      {!isMobile && (
        <span
          className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--growth-blue)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${activeLink === link.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
          style={{ transformOrigin: 'center' }}
        ></span>
      )}
    </a>
  );

  return (
    <header className="sticky top-0 z-[100] h-[64px] md:h-[72px] bg-white/95 backdrop-blur-md border-b border-[var(--border-light)]">
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto px-6 md:px-[60px]">
        <a href="#" aria-label="APX Consulting 홈페이지로 이동" onClick={() => setActiveLink('')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--growth-blue)] rounded-sm">
          <ApxLogo variant="black" className="h-8 md:h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-x-10" aria-label="메인 네비게이션">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline-block font-semibold text-white bg-[var(--apx-navy)] border-2 border-transparent px-6 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[var(--growth-blue)] hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]"
          >
            문의하기
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--apx-navy)] z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)] rounded-md"
            aria-label="메뉴 열기/닫기"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center gap-y-6" aria-label="모바일 네비게이션">
                {navLinks.map((link) => (
                    <NavItem key={link.name} link={link} isMobile />
                ))}
            </nav>
            <a
                href="#"
                className="mt-12 font-semibold text-white bg-[var(--apx-navy)] border-2 border-transparent px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:bg-[var(--growth-blue)] hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                문의하기
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;