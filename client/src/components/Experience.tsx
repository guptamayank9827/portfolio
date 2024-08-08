// import React from 'react';
import { Container, Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListItem } from '@chakra-ui/react';

//icons
import UTD from '../icons/utd.png';
import Fundwave from '../icons/fundwave.png';
import Pingal from '../icons/pingal.svg';


type CompanyType = {
  name: string,
  location: string,
  logo: any
};

type ExperienceType = {
  keyword: string,
  role: string,
  type: string,
  company: CompanyType,
  startDate: string,
  endDate?: string,
  works: string[]
};

interface ExperienceProps {
  experience: ExperienceType
}

const COMPANIES = {
  utd: {
    name: "The University of Texas at Dallas",
    location: "Dallas, USA",
    logo: UTD
  },
  fundwave: {
    name: "Fundwave Technologies",
    location: "New Delhi, India",
    logo: Fundwave
  },
  pingal: {
    name: "Pingal Technologies",
    location: "Mumbai, India",
    logo: Pingal
  }
};

const EXPERIENCES = [
  {
    keyword: "grader",
    role: "CS Grader",
    type: "full",
    company: COMPANIES["utd"],
    startDate: "January 2024",
    endDate: "May 2024",
    works: [
      "Designed homework assignments' questions and answers for the course Discrete Maths Applications.",
      "Graded student's homework assignments.",
      "Helped students in solving doubts and learning coursework."
    ]
  },
  {
    keyword: "staff",
    role: "Staff Engineer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "July 2022",
    endDate: "June 2023",
    works: [
      "Proposed and released several new features for Sales and Customer Success teams as weekly sprints.",
      "Led the Captable project with a team of 4, focused on helping funds manage capitalization tables of their portfolio companies and forecast their proceeds.",
      "Successfully conducted hiring processes in several colleges - including IITs and NITs."
    ]
  },
  {
    keyword: "senior",
    role: "Senior Engineer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "January 2021",
    endDate: "June 2022",
    works: [
      "Created custom functions on Excel, for clients to easily generate reports.",
      "Worked on a new Captable project to view & manage capitalization of portfolio companies.",
      "Published several common components to our private repository, to be used across our applications.",
      "Devised OpenAPI endpoints for clients to easily retrieve their data.",
      "Onboarded several interns and new joinees."
    ]
  },
  {
    keyword: "full",
    role: "Full Stack Developer",
    type: "full",
    company: COMPANIES["fundwave"],
    startDate: "July 2019",
    endDate: "December 2020",
    works: [
      "Augmented website's look and feel, and improved SEO rankings.",
      "Developed a new tool Dealflow in a 2 member team, to help funds make faster and better decisions for their upcoming investments."
    ]
  },
  {
    keyword: "analyst",
    role: "Data Analyst Intern",
    type: "intern",
    company: COMPANIES["pingal"],
    startDate: "May 2018",
    endDate: "July 2018",
    works: [
      "Designed an automated web scraper to fetch financials of companies listed on Bombay Stock Exchange.",
      "Cleaned and analyzed collected data via visualization to gain insights and forecast the behavior of these companies."
    ]
  }
];

const ExperienceCard = (props:ExperienceProps) => {
  const { role, company, startDate, endDate, works } = props.experience;

  return(
    <AccordionItem borderRadius={16} borderWidth={2} my={4}>

      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          <Text fontSize={"lg"} display={"block"} bgColor="teal" backgroundClip="text">
            {role}
          </Text>
          <Text fontSize={"md"} display={"block"}>
            {startDate} - {endDate || "Present"}
          </Text>
          <Text fontSize={"md"} display={"block"}>
            {company.name}, {company.location}
          </Text>

        </Box>

        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pl={4}>
        <Box as="span" flex="1" textAlign="left">
          <List spacing={0}>
            {works.map((work,i) => (
              <ListItem key={"work"+i}>
                <Text fontSize={"sm"}>
                  - {work}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </AccordionPanel>

    </AccordionItem>
  );
}

function Experience() {
  return (
    <Container className="section" id="experience" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <Heading
          display="inline-block"
          as="h4"
          size="xl"
          bgColor="teal"
          backgroundClip="text"
        >
          Experience
        </Heading>

        <Text fontSize="lg" my={2}>
          Over 4 years of Work Experience
        </Text>

        <Accordion defaultIndex={[]} allowMultiple mt={6}>
          {EXPERIENCES.map(experience => (
            <ExperienceCard experience={experience} key={experience.keyword} />
          ))}
        </Accordion>

      </Box>
    </Container>
  );
}

export default Experience;