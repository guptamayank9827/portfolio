// import React from 'react';
import { Box, Stack, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';


function Introduction() {
  return (
    <div className="section" id="introduction">
      <Box className="section-div" width={"80%"} textAlign={"left"}>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={2} align={'left'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Text color={'teal'} as={'span'} fontSize={"xl"}>
                Hey, I am
              </Text>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
                <Text color={'teal'} as={'span'}>
                  Web Developer
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                I am a Full-Stack Developer with experience in designing and developing web applications.
              </Text>
              {/* add button to download resume */}
            </Stack>
          </Flex>
          <Flex flex={1} align={'right'}>
            {/* insert image */}
          </Flex>
        </Stack>

      </Box>
    </div>
  );
}

export default Introduction;