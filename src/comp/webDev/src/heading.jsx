import { Box, Heading, Container, Text, Stack, Button } from '@chakra-ui/react';
import 'animate.css';
export default function Hero() {
  return (
    <>
      <Container
        maxW={'100vw'}
        h={'100vh'}
        display={'grid'}
        alignItems={'center'}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading>
            <Text
              className="animate__animated animate__fadeInDown"
              fontWeight={600}
              fontSize={'1em'}
              lineHeight={'110%'}
            >
              WEB DEVELOPMENT SERVICES FOR AN ATTRACTIVE AND USER-FRIENDLY SITE
            </Text>
            <Text
              className="animate__animated animate__fadeInUp"
              fontWeight={300}
              fontSize={'0.7em'}
              color={'white'}
            >
              WEB SITE DEVELOPMENT
            </Text>
            <br />
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
