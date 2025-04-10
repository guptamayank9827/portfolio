// import React from 'react';
import { Container, Box, Flex, SimpleGrid, Heading, Text, Spacer, Icon } from '@chakra-ui/react';
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

interface ProjectProps {
  project: ProjectType
};

const PROJECTS = [
  {
    keyword: "compiler_construction",
    name: "Semantic Compiler Construction in Java",
    description: "To develop a compiler with syntax and semantic analysis using CUP and JFlex, for a Java similar language.",
    link: "https://github.com/guptamayank9827/compiler",
    startDate: "January 2024",
    endDate: "April 2024"
  },
  {
    keyword: "partition_tolerance",
    name: "Partition Tolerant Distributed System in Java",
    description: "To create a distributed system to ensure total communication ordering among computers for network failure.",
    link: "https://github.com/caleb-hoang/adv-os-proj3",
    startDate: "January 2024",
    endDate: "April 2024"
  },
  {
    keyword: "ai_pacman",
    name: "AI-powered Pacman Game",
    description: "Implemented search algorithms like Breadth First Search, Depth First Search, A* Search, and Reinforcement Learning to optimize food collection and ghost avoidance in the Pacman game.",
    link: "https://github.com/vanguard07/pacman",
    startDate: "January 2024",
    endDate: "April 2024"
  },
  // {
  //   keyword: "chatgpt_tool",
  //   name: "Effect of a ChatGPT-Driven Code Review Tool on Developer Effciency",
  //   description: "To study the effect of a VSCode extension (ChatGPT-tool) on improving developer effciency via code reviews.",
  //   link: "",
  //   startDate: "September 2023",
  //   endDate: "December 2023"
  // },
  // {
  //   keyword: "deadlock_detection",
  //   name: "Comparison of Deadlock Detection Algorithms",
  //   description: "To compare the performance of 7 deadlock detection & prevention algorithms in a distributed relational DBMS.",
  //   link: "",
  //   startDate: "September 2023",
  //   endDate: "December 2023"
  // },
  // {
  //   keyword: "phishing_detection",
  //   name: "Effcient Spear Phishing Threat Detection",
  //   description: "To detect and alert users on any incoming mail that could be a spear phishing threat attack.",
  //   link: "",
  //   startDate: "January 2019",
  //   endDate: "May 2019"
  // },
  // {
  //   keyword: "image_compression",
  //   name: "Image Compression & Encryption using Deep Learning & AES",
  //   description: "To encrypt compressed images for secure transmission over the internet, saving time and storage.",
  //   link: "",
  //   startDate: "July 2018",
  //   endDate: "December 2018"
  // }
];

const ProjectCard = (props:ProjectProps) => {
  const { name, link, description } = props.project;
  return(
    <Box as="span" flex="1" textAlign="left" borderWidth={1} borderRadius={10} p={2}>

      <Flex mb={2} height={{md:16}}>
        <Box>
          <Text fontSize={"md"} display={"block"} bgColor="teal" backgroundClip="text">
            {name}
          </Text>
        </Box>
        {link ?
          <>
            <Spacer />
            <Box as="a" href={link} target='_blank'>
              <Icon as={GitHubIcon} boxSize={6} ml={2} />
            </Box>
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

function Projects() {
  return (
    <Container className="section" id="projects" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>
        
        <Heading
          display="inline-block"
          as="h4"
          size="xl"
          bgColor="teal"
          backgroundClip="text"
        >
          Projects
        </Heading>

        <SimpleGrid columns={{ base:1, sm:2, md:3 }} gap={6} mt={4} alignItems={"stretch"}>
          {PROJECTS.map(project => (
            <ProjectCard project={project} key={project.keyword} />
          ))}
        </SimpleGrid>

      </Box>
    </Container>
  );
}

export default Projects;