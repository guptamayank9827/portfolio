import { Heading, Text } from '@chakra-ui/react';

type SectionHeadingProps = {
    heading: string;
    subheading?: string;
};

function SectionHeading({heading, subheading}: SectionHeadingProps) {

    return(
        <>
            <Heading
                size="3xl"
                fontWeight="semibold"
                display="inline-block"
                color={"teal"}
                colorPalette={"teal"}
            >
                {heading}
            </Heading>
            
            {subheading && subheading.length > 0 &&
                <Text fontSize="lg" mt={0} mb={3} style={{whiteSpace:"pre-line"}}>
                    {subheading}
                </Text>
            }
        </>
    );
}

export default SectionHeading;