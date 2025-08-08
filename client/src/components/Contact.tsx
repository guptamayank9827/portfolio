import { useState } from 'react';
import { Container, Box, Icon, List, Link } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';
import { useColorModeValue } from '../components/ui/color-mode';
import { SOCIAL_LINKS } from '../data/social';
import SectionHeading from './SectionHeading';


type SocialLinkType = {
  keyword: string,
  title: string,
  link: string,
  icon: any
};

interface SocialProps {
  socialLink: SocialLinkType
};

interface ContactProps {
  view: string,
  updateComponentView?: Function
};


const IconLink = (props:SocialProps) => {
  const { link, icon } = props.socialLink;
  return (
    <Link
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      style={{margin:"auto"}}
      href={link}
      target='_blank'
    >
      <Icon as={icon} boxSize={8} />
    </Link>
  )
}

function Contact(props:ContactProps) {
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    if(props.updateComponentView) props.updateComponentView(isIntersecting ? "contact" : "");
  }

  return (
    <Container ref={ref} className="section" id="contact" minHeight={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <SectionHeading
          heading="Reach Out To Me!"
          subheading={
            `Do you want to work together?
            Maybe you just want to say Hi!`
          }
        />

        <List.Root mt={8} style={{display:"inline"}} marginX={"auto"} width={{ base:"100%", md:"50%", lg:"40%" }}>
          {SOCIAL_LINKS.filter((link) => link.view === props.view || link.view === "all").map((link) => (
            <IconLink key={link.keyword} socialLink={link} />
          ))}
        </List.Root>
        
      </Box>
    </Container>
  );
}

export default Contact;