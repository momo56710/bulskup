import React from 'react'
import { Box, Heading, Container, Text, Stack, Button, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import momo from './assets/team/Mohamed Amine Metidji.jpg'
import islem from './assets/team/islem_amrouche.webp'
import akram from './assets/team/Akram Said Seghir.jpg'
import anas from './assets/team/1703713437383.jpeg'
import madjid from './assets/team/Abdelmadjid Benimam.jpg'
import riad from './assets/team/Riad Marmouz.jpg'
import fares from './assets/team/Fares Slimani.jpg'
import mouad from './assets/team/Mouadh Haceini.jpg'
const OurTeam = () => {
    const team = [
        {
            name: 'Metidji Mohamed Amine',
            image: momo,
            description : 'video editor and graphic designer'
        },
        {
            name: 'Mouadh Haceini',
            image: mouad,
            description : 'graphic designer'
        },
        {
            name: 'Riad Marmouz',
            image: riad,
            description : 'UI/UX designer'
        },
        {
            name: 'Islem amrouche',
            image: islem,
            description : 'backend and mobile developer'
        },
        {
            name: 'Akram Said Seghir',
            image: akram,
            description : 'Fullstack Developer'
        },
        {
            name: 'Mohamed Anes Ben khaoua',
            image: anas,
            description : 'Fullstack Developer'
        },
        {
            name: 'Abdelmadjid Benimam',
            image: madjid,
            description : 'backend and mobile developer'
        },
        {
            name: 'Fares Slimani',
            image: fares,
            description : 'mobile developer'
        },
        
    ]
    return (
        <>
            <Heading
                color={'white'}
                textAlign={'center'}
                padding={'2em 0'}
                fontSize={'4em'}
            >
                Meet our team
            </Heading>
            <Box className='flex' padding={'2em'}>
                {team.map(e => (
                    <Box w={{ base: '100%', sm: '250px' }}
                        bg={'white'}
                        boxShadow={'2xl'}
                        color={'#683BA4'}
                        rounded={'lg'}
                        p={6}
                    >
                        <Image src={e.image} rounded={'full'} />
                        <Heading paddingTop={'1em'} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'}>
                            {e.name}
                        </Heading>
                        <Text paddingTop={'1em'} textAlign={'center'} fontSize={'1.2em'} fontFamily={'body'}>
                            {e.description}
                        </Text>
                        
                    </Box>
                ))}




            </Box>
        </>
    )
}

export default OurTeam