import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ProductShowcase from './components/ProductShowcase';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <AboutSection />
      <ProcessSection />
      <ProductShowcase />
    </div>
  );
}

export default App;