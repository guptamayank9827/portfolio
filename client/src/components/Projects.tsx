import React from 'react';
import { Box, Flex, Grid, Heading, Text, Spacer, Icon } from '@chakra-ui/react';
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
    link: "",
    startDate: "January 2024",
    endDate: "April 2024"
  },
  {
    keyword: "partition_tolerance",
    name: "Partition Tolerant Distributed System in Java",
    description: "To create a distributed system to ensure total communication ordering among computers for network failure.",
    link: "",
    startDate: "January 2024",
    endDate: "April 2024"
  },
  {
    keyword: "chatgpt_tool",
    name: "Effect of a ChatGPT-Driven Code Review Tool on Developer Effciency",
    description: "To study the effect of a VSCode extension (ChatGPT-tool) on improving developer effciency via code reviews.",
    link: "",
    startDate: "September 2023",
    endDate: "December 2023"
  },
  {
    keyword: "deadlock_detection",
    name: "Comparison of Deadlock Detection Algorithms",
    description: "To compare the performance of 7 deadlock detection & prevention algorithms in a distributed relational DBMS.",
    link: "",
    startDate: "September 2023",
    endDate: "December 2023"
  },
  {
    keyword: "phishing_detection",
    name: "Effcient Spear Phishing Threat Detection",
    description: "To detect and alert users on any incoming mail that could be a spear phishing threat attack.",
    link: "",
    startDate: "January 2019",
    endDate: "May 2019"
  },
  {
    keyword: "image_compression",
    name: "Image Compression & Encryption using Deep Learning & AES",
    description: "To encrypt compressed images for secure transmission over the internet, saving time and storage.",
    link: "",
    startDate: "July 2018",
    endDate: "December 2018"
  }
];

const ProjectCard = (props:ProjectProps) => {
  const { name, link, description } = props.project;
  return(
    <Box as="span" flex="1" textAlign="left" borderWidth={1} borderRadius={10} p={2}>

      <Flex mb={2} minHeight={12}>
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

      <Text fontSize={"sm"} display={"block"}>
        {description}
      </Text>
      
    </Box>
  );
}

function Projects() {
  return (
    <div className="section" id="projects">
      <Box className="section-div" width={"80%"} px={20}>
        
        <Heading
          display="inline-block"
          as="h4"
          size="xl"
          bgColor="teal"
          backgroundClip="text"
        >
          Projects
        </Heading>

        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={4}>
          {PROJECTS.map(project => (
            <ProjectCard project={project} key={project.keyword} />
          ))}
        </Grid>

      </Box>
    </div>
  );
}

export default Projects;