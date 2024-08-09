// import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Heading, Text, Button, Link as ChakraLink } from '@chakra-ui/react';

interface Error404Props {
  view: string
};

function Page404(props:Error404Props) {  
  return (
    <Container className="section" id="404" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <Heading
          display="inline-block"
          as="h2"
          size="3xl"
          bgColor="teal"
          backgroundClip="text"
        >
          404
        </Heading>

        <Text fontSize="xl" mt={2} mb={2}>
          Page Not Found
        </Text>

        <Text color={'gray.500'} mb={8}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <ChakraLink as={RouterLink} to={`/${props.view}`}>
          <Button
            colorScheme="teal"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </ChakraLink>

      </Box>
    </Container>
  );
}

export default Page404;