
import React from 'react';
import HeroSection from './sections/HeroSection';
import OperatingSystemSection from './sections/OperatingSystemSection';
import PhilosophySection from './sections/PhilosophySection';
import FrameworkSection from './sections/FrameworkSection';
import InsightFunnelSection from './sections/InsightFunnelSection';
import ProcessSection from './sections/ProcessSection';
import InteractiveSolutionSection from './sections/InteractiveSolutionSection';
import VisionSection from './sections/VisionSection';

const MainContent: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <OperatingSystemSection />
      <PhilosophySection />
      <FrameworkSection />
      <InsightFunnelSection />
      <ProcessSection />
      <InteractiveSolutionSection />
      <VisionSection />
    </main>
  );
};

export default MainContent;