import { Container, Box, Heading } from '@chakra-ui/react';

function ComingSoon() {

    return(
        <Container className="section" id="coming-soon" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
            <Box className="section-div" textAlign={"center"}>
                
                <Heading
                    display="inline-block"
                    as="h3"
                    size="xl"
                    bgColor="teal"
                    backgroundClip="text"
                >
                    Coming Soon...
                </Heading>

            </Box>
        </Container>
    );
}

export default ComingSoon;