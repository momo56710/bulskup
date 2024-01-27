import React, { useEffect } from 'react';
import Hero from './src/heading';

import OurServices from './src/OurServices';
import AboutUs from './src/AboutUs';
import PlansAndPricingBtn from '../PlansAndPricingBtn';
import { Box } from '@chakra-ui/react';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box maxW={'1400px'} m={'auto'}>
        <Hero />
      </Box>
      <AboutUs />
      <OurServices />

    </>
  );
}
