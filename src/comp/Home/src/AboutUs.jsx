import { Box, Heading, Text, Image, Grid } from '@chakra-ui/react';
import webImg from '../assets/—Pngtree—modern flat design concept of_5332909.png';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export default function AboutUs() {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <Box
      minH={'50vh'}
      display={'grid'}
      gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap={'2em'}
    >

      <Image src={webImg} height={{ base: 'auto', lg: '100%' }} />


      <Grid alignItems={'center'} padding={{ base: '3em 0', sm: '0' }}>
        <Grid gap={'3em'} alignItems={'center'} justifyItems={'center'}>
          <Heading color={'#DFD3EB'} textAlign={{ base: 'center', md: 'left' }}>
            MAKING THE MOST OF MEDIA MARKETING FOR YOUR BUSINESS
          </Heading>
          <Text
            fontSize={'1.5em'}
            lineHeight={'200%'}
            padding={'0 1em'}
            textAlign={{ base: 'center', md: 'left' }}
          >



            Tired of agencies? We're different. BULKSUP unites top freelance devs & designers to craft stunning websites, captivating brands, & seamless apps. Your vision, unleashed. Let's collaborate.
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
}
