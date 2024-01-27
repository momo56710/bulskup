import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Box,
  Text,
  Grid,
  Select,
  useToast,
} from '@chakra-ui/react';
import { faPhone, faClock, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
export default function Meeting() {
  const toast = useToast();
  const [payload, setPayload] = useState({
    type: 0,
    content: {
      fullName: '',
      email: '',
      phoneNumber: '',
      main: '',
    },
  });

  return (
    <Box py={'10em'}>
      <Heading
        className="animate__animated animate__fadeInDown"
        fontWeight={600}
        lineHeight={'110%'}
        textAlign={'center'}
        textTransform={'uppercase'}
      >
        don't hesitate to reach out
      </Heading>
    
      <Heading
        fontWeight={'light'}
        gridColumn={'span 2'}
        textTransform={'uppercase'}
        py={'1em'}
        textAlign={'center'}
      >
       +213562519164
      </Heading>
    </Box>
  );
}
