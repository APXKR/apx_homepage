
import React from 'react';
import type { NavigationLink } from '../data/navigation';

const ArrowRightSmallIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

interface MegaMenuProps {
  isOpen: boolean;
  menuData?: NavigationLink['megaMenu'];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuData, onMouseEnter, onMouseLeave }) => {
  if (!menuData) return null;

  const hasFeatured = menuData.featured && menuData.featured.length > 0;
  const colCount = menuData.columns.length;

  const gridColsClass = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[colCount] || 'lg:grid-cols-3'; // Default to 3 for safety

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
      role="region"
      aria-label="메가 메뉴"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-[60px] py-10">
        <div className="grid grid-cols-12 gap-x-8">
          {hasFeatured && (
            <div className="col-span-12 md:col-span-3 mb-8 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">주요 기능</h3>
              <ul className="space-y-4">
                {menuData.featured?.map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="group block p-3 -m-3 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--growth-blue)]">
                      <p className="font-semibold text-[var(--apx-navy)]">{item.name}</p>
                      {item.description && <p className="text-sm text-gray-600 group-hover:text-[var(--apx-navy)] transition-colors">{item.description}</p>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`col-span-12 ${hasFeatured ? 'md:col-span-9' : ''} grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-x-8 gap-y-6`}>
            {menuData.columns.map(col => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{col.heading}</h3>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 group text-gray-700 hover:text-[var(--growth-blue)] transition-colors py-1 focus:outline-none focus-visible:underline">
                        <span className="font-medium">{link.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true">
                          <ArrowRightSmallIcon />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;