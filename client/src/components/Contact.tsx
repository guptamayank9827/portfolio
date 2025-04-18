import { useState } from 'react';
import { Container, Box, Heading, Text, Icon, List, useColorModeValue } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

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


const SOCIAL_LINKS = [
  {
    keyword: "github",
    title: "GitHub",
    link: "https://github.com/guptamayank9827",
    view: "tech",
    icon: GitHubIcon
  },
  {
    keyword: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mayank-gupta-099301161/",
    view: "tech",
    icon: LinkedInIcon
  },
  {
    keyword: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/mayankgupta9827/",
    view: "photography",
    icon: InstagramIcon
  },
  {
    keyword: "email",
    title: "Email",
    link: "mailto:mayankgupta9827usa@gmail.com",
    view: "all",
    icon: EmailIcon
  }
];


const IconLink = (props:SocialProps) => {
  const { link, icon } = props.socialLink;
  return (
    <Box
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
    </Box>
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
    <Container ref={ref} className="section" id="contact" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <Heading
          display="inline-block"
          as="h4"
          size="xl"
          bgColor="teal"
          backgroundClip="text"
        >
          Reach Out To Me!
        </Heading>

        <Text fontSize="lg" mt={2} mb={2}>
          Do you want to work together?
          <br />
          Maybe you just want to say Hi!
        </Text>

        <List mt={8} style={{display:"flex"}} mx={"auto"} width={{ base:"100%", md:"50%", lg:"40%" }}>
          {SOCIAL_LINKS.filter((link) => link.view === props.view || link.view === "all").map((link) => (
            <IconLink key={link.keyword} socialLink={link} />
          ))}
        </List>
        
      </Box>
    </Container>
  );
}

export default Contact;