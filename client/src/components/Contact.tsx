import React from 'react';
import { Box, Heading, Text, Icon, List, useColorModeValue } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


type SocialLinkType = {
  keyword: string,
  title: string,
  link: string,
  icon: React.ReactNode
};

interface SocialProps {
  socialLink: SocialLinkType
};

const SOCIAL_LINKS = [
  {
    keyword: "github",
    title: "GitHub",
    link: "https://github.com/guptamayank9827",
    icon: <Icon as={GitHubIcon} boxSize={8} />
  },
  {
    keyword: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mayank-gupta-099301161/",
    icon: <Icon as={LinkedInIcon} boxSize={8} />
  },
  {
    keyword: "email",
    title: "Email",
    link: "mailto:mayankgupta9827usa@gmail.com",
    icon: <Icon as={EmailIcon} boxSize={8} />
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
      {icon}
    </Box>
  )
}

function Contact() {
  return (
    <div className="section" id="contact">
      <Box className="section-div">
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
          Maybe you just want to say Hey!
        </Text>

        <List mt={2} pt={4} style={{display:"flex"}}>
          {SOCIAL_LINKS.map((link) => (
            <IconLink key={link.keyword} socialLink={link} />
          ))}
        </List>
        
      </Box>
    </div>
  );
}

export default Contact;