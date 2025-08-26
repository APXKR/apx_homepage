import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[101] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[#2E5BBA] focus:text-white focus:rounded-md">
        메인 콘텐츠로 건너뛰기
      </a>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;