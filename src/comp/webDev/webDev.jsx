import React, { useEffect } from 'react';
import Hero from './src/heading';
import OurProjects from './src/OurProjects';
import OurService from './src/OurService';
import PlansAndPricingBtn from '../PlansAndPricingBtn';
export default function WebDev() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <OurProjects />
      <OurService />
    </>
  );
}
