import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Text, Button, Link as ChakraLink } from '@chakra-ui/react';

function Page404() {
  return (
    <div className="section" id="404">
      <Box className="section-div">
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

        <ChakraLink as={RouterLink} to="/">
          <Button
            colorScheme="teal"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </ChakraLink>
      </Box>
    </div>
  );
}

export default Page404;