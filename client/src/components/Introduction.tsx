// import React from 'react';
import { Box, Container, Stack, Flex, Heading, Text, useBreakpointValue, Image } from '@chakra-ui/react';

function Introduction() {
  return (
    <Container className="section" id="introduction" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"left"}>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex flex={2} align={'left'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Text color={'teal'} as={'span'} fontSize={"2xl"}>
                Hey, I am
              </Text>
              <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'teal.400',
                    zIndex: -1,
                  }}>
                  Mayank Gupta
                </Text>
                <br />{' '}
                <Text color={'teal'} as={'span'} fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
                  Web Developer
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.500'}>
                I am a Full-Stack Developer with experience in designing and developing web applications.
              </Text>
              {/* add button to download resume */}
            </Stack>
          </Flex>
          <Flex flex={1} align={'right'}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
              mt={{ base:8, md:0 }}
            />
          </Flex>
        </Stack>

      </Box>
    </Container>
  );
}

export default Introduction;