import { useState } from 'react';
import { Box, Container, Stack, Flex, Heading, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import ProfilePicture from '../icons/profile-image.png';
import { useIntersectionObserver } from 'usehooks-ts';


interface IntroductionComponentProps {
  updateComponentView: Function
}

function Introduction(props:IntroductionComponentProps) {
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    props.updateComponentView(isIntersecting ? "introduction" : "");
  }


  return (
    <Container ref={ref} className="section" id="introduction" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
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
              src={ProfilePicture}
              mt={{ base:8, md:0 }}
              borderRadius="100px"
            />
          </Flex>
        </Stack>

      </Box>
    </Container>
  );
}

export default Introduction;