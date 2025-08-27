import React from 'react';
import ApxLogo from './icons/ApxLogoWhite';


const Footer: React.FC = () => {
  const scrollUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const footerLinks = {
    '솔루션': ['리더십 역량', '인재경영', '조직운영', '문화혁신', '성과관리', '인사분석'],
    '아카데미': ['리더십 아카데미', '공통역량 아카데미', '직무전문 아카데미', '조직혁신 아카데미'],
    '리소스': ['인사이트', '성공사례', '뉴스레터', '자료실', 'FAQ'],
  };

  return (
    <footer className="bg-[var(--bg-dark)] text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-[60px] pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr] gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" onClick={scrollUp} className="inline-block mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-dark)] focus-visible:ring-white rounded-sm">
              <ApxLogo variant="white" className="h-10" />
            </a>
            <address className="not-italic text-sm text-[var(--text-tertiary)] space-y-1">
              <p className="font-semibold text-white mb-2">(주)에이피엑스컨설팅</p>
              <p><strong className="font-semibold text-gray-300">대표이사</strong> 김혜숙</p>
              <p><strong className="font-semibold text-gray-300">사업자등록번호</strong> 368-87-03618</p>
              <p><strong className="font-semibold text-gray-300">본사</strong> 06234 서울특별시 강남구 테헤란로 128, 317호</p>
              <p><strong className="font-semibold text-gray-300">이메일</strong> support@apxc.co.kr</p>
            </address>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-base mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[var(--text-tertiary)] text-sm hover:text-white transition-colors duration-300 focus:outline-none focus-visible:underline focus-visible:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--excellence-gray)] flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-[var(--text-tertiary)] mb-4 md:mb-0">
            Copyright &copy; 2025 APX Consulting Inc. All rights reserved.
          </p>
          <div className="text-xs text-[var(--text-tertiary)] flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">사업자정보</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;