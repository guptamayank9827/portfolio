import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Text, Button, Link as ChakraLink } from '@chakra-ui/react';
import SectionHeading from './components/SectionHeading';

interface Error404Props {
  view: string
};

function Page404(props:Error404Props) {  
  return (
    <Container className="section" id="404" minHeight={{ base:"100vh", lg:"100vh" }} my={{ base:0, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>


        <SectionHeading
          heading="404"
          subheading="Page Not Found"
        />

        <Text mb={8}>
          The page you&apos;re looking for does not seem to exist
        </Text>

        <ChakraLink as={RouterLink} href={`/${props.view}`}>
          <Button
            colorPalette="teal"
            variant="solid"
            size={"lg"}
            rounded={"lg"}
          >
            Go to Home
          </Button>
        </ChakraLink>

      </Box>
    </Container>
  );
}

export default Page404;