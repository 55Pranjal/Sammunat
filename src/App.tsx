import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { MetricsSection } from './components/MetricsSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
