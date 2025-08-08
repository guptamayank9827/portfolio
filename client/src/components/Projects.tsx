import { useState } from 'react';
import { Container, Box, Flex, SimpleGrid, Text, Spacer, Icon, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../data/projects';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';


type ProjectType = {
  keyword: string,
  name: string,
  description: string,
  details?: string,
  link: string,
  startDate: string,
  endDate?: string
};

interface ProjectComponentProps {
  updateComponentView: Function
}

interface ProjectProps {
  project: ProjectType
};


const ProjectCard = (props:ProjectProps) => {
  const { name, link, description } = props.project;
  

  return(
    <Box as="span" flex="1" textAlign="left" border={"1px solid teal"} borderRadius={10} p={2}>

      <Flex mb={2} height={{md:16}}>
        <Box>
          <Text fontSize={"md"} display={"block"} color={"teal"}>
            {name}
          </Text>
        </Box>
        {link ?
          <>
            <Spacer />
            <LinkBox as={"span"}>
              <LinkOverlay href={link} target='_blank'>
                <Icon as={GitHubIcon} boxSize={6} ml={2} />
              </LinkOverlay>
            </LinkBox>
          </>
          :
          null
        }
      </Flex>

      <Text fontSize={"sm"} display={"block"} style={{height:"calc(100% - var(--chakra-sizes-16))"}}>
        {description}
      </Text>
      
    </Box>
  );
}

function Projects(props:ProjectComponentProps) {
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);
  
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    props.updateComponentView(isIntersecting ? "projects" : "");
  }

  return (
    <Container ref={ref} className="section" id="projects" minHeight={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <SectionHeading
          heading="Projects"
        />

        <SimpleGrid columns={{ base:1, sm:2, md:3 }} gap={8} mt={20} alignItems={"stretch"}>
          {PROJECTS.map(project => (
            <ProjectCard project={project} key={project.keyword} />
          ))}
        </SimpleGrid>

      </Box>
    </Container>
  );
}

export default Projects;