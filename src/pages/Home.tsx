import React from 'react';
import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import Services from '../components/Services';
import TechnologyAdvantage from '../components/TechnologyAdvantage';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import VRCta from '../components/VRCta';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <Services />
      <TechnologyAdvantage />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <VRCta />
    </>
  );
}
