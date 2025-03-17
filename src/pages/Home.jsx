import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AuctionsSection from '@/components/home/AuctionsSection';
import CoBuyingSection from '@/components/home/CoBuyingSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AuctionsSection />
      <CoBuyingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}