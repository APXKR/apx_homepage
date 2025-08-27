
import React, { useState, useEffect, useRef } from 'react';
import { navLinks, type NavigationLink } from '../data/navigation';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import ApxLogo from './icons/ApxLogoWhite';
import MegaMenu from './MegaMenu';

interface HeaderProps {
  onMegaMenuToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMegaMenuToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('솔루션');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    onMegaMenuToggle(activeMenu !== null);
  }, [activeMenu, onMegaMenuToggle]);
  
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }
    return () => {
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, [isMobileMenuOpen]);

  const handleMouseLeave = () => {
    menuTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMouseEnter = (linkName: string) => {
    if (menuTimer.current) {
      clearTimeout(menuTimer.current);
    }
    const link = navLinks.find(l => l.name === linkName);
    if (link?.megaMenu) {
        setActiveMenu(linkName);
    } else {
        handleMouseLeave();
    }
  };

  const getActiveMenuData = () => {
    if (!activeMenu) return undefined;
    return navLinks.find(link => link.name === activeMenu)?.megaMenu;
  };

  const MobileNavItem: React.FC<{ link: NavigationLink }> = ({ link }) => (
    <a
      href={link.href}
      onClick={() => {
        setActiveLink(link.name);
        setIsMobileMenuOpen(false);
      }}
      className="text-3xl py-4 text-center font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)] rounded-sm text-[var(--text-secondary)] hover:text-[var(--apx-navy)]"
    >
      {link.name}
    </a>
  );

  return (
    <header 
      className={`sticky top-0 z-[100] h-[64px] md:h-[72px] bg-white transition-colors duration-300 ${activeMenu !== null ? 'border-b-transparent' : 'border-b border-[var(--border-light)]'}`} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto px-6 md:px-[60px]">
        <a href="#" aria-label="APX Consulting 홈페이지로 이동" onClick={() => setActiveLink('')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[var(--growth-blue)] rounded-sm">
          <ApxLogo variant="black" className="h-8 md:h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-x-10" aria-label="메인 네비게이션">
          {navLinks.map((link) => (
            <div key={link.name} onMouseEnter={() => handleMouseEnter(link.name)} className="h-full flex items-center">
              <a
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative group font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)] rounded-sm text-base tracking-[-0.02em]
                  ${activeLink === link.name ? 'text-[var(--apx-navy)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--apx-navy)]'}
                `}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--growth-blue)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${activeLink === link.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ transformOrigin: 'center' }}
                ></span>
              </a>
            </div>
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
                    <MobileNavItem key={link.name} link={link} />
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

      {/* Mega Menu */}
      <MegaMenu
        isOpen={activeMenu !== null}
        menuData={getActiveMenuData()}
        onMouseEnter={() => handleMouseEnter(activeMenu!)}
        onMouseLeave={handleMouseLeave}
      />
    </header>
  );
};

export default Header;