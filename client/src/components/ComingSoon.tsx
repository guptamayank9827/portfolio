import { Container, Box } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

function ComingSoon() {

    return(
        <Container className="section" id="coming-soon" minHeight={{ base:"100vh", lg:"100vh" }} my={{ base:0, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
            <Box className="section-div" textAlign={"center"}>

                <SectionHeading
                    heading="Coming Soon..."
                />

            </Box>
        </Container>
    );
}

export default ComingSoon;