import { useState } from 'react';
import { Box, Container, Button, Stack, Flex, Heading, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';
import { TypeAnimation } from 'react-type-animation';

import { DownloadIcon } from '@chakra-ui/icons';
import ProfilePicture from '../icons/profile-image.png';


interface IntroductionComponentProps {
  updateComponentView: Function
}

function Introduction(props:IntroductionComponentProps) {
  const TITLE_DURATION = 2000;
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    props.updateComponentView(isIntersecting ? "introduction" : "");
  }

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}Mayank - Resume - FullStack.pdf`;
    link.download = 'Mayank_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


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
                    height: useBreakpointValue({ base: '20%', md: '20%' }),
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

                  <TypeAnimation
                    sequence={[
                      'Web Developer',
                      TITLE_DURATION,
                      'Full Stack Developer',
                      TITLE_DURATION,
                      'Front End Developer',
                      TITLE_DURATION,
                      'Back End Developer',
                      TITLE_DURATION,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                  
                </Text>{' '}
              </Heading>

              <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.500'}>
                I build clients to servers, typed and tested - just how TypeScript likes it.
              </Text>

              <Button leftIcon={<DownloadIcon />} colorScheme='teal' variant='outline' size="lg" maxWidth={"200px"} onClick={downloadResume}>
                Download CV
              </Button>

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