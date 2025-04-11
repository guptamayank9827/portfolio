import { useState } from 'react';
import { Container, Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, List, ListItem } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';

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

interface ExperienceComponentProps {
  updateComponentView: Function
}

interface ExperienceProps {
  experience: ExperienceType
}

const COMPANIES = {
  utd: {
    name: "The University of Texas at Dallas",
    location: "Richardson, TX, USA",
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
    role: "Computer Science Grader",
    type: "part",
    company: COMPANIES["utd"],
    startDate: "January 2024",
    endDate: "Present",
    works: [
      "Evaluated and designed assignment questions and comprehensive solutions for CS courses Discrete Mathematics, and Design and Analysis of Algorithms, ensuring alignment with course objectives and learning outcomes",
      "Resolved students’ academic queries, providing clear explanations to strengthen conceptual understanding"
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
      "Architected 2 microservices in Node.js, Express.js & MongoDB, containerized using Docker, decoupling critical functionalities from a monolithic server, reducing system latency by 20% for related API endpoints",
      "Led the Captable project from concept to deployment, enabling funds to forecast portfolios and investment returns, driving 1.4x customer growth for the product line.",
      "Planned and led 18 agile technical sprints, backlog grooming, and code reviews, ensuring adherence to clean code practices and on-time high-quality feature delivery"
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
      "Spearheaded the development of a Captable management tool using the MERN stack (MongoDB, Express.js, React.js, Node.js), empowering funds track equity ownership, contributing to 12% of the company’s ARR",
      "Engineered 35 custom Excel functions using Office JavaScript API, enabling clients to generate real-time customizable reports, reducing manual reporting effort by 90%",
      "Designed, published, and maintained 8 reusable UI components using TypeScript, React.js, and Lit -html, seamlessly integrating into 5 internal products through CI/CD pipelines using Git workflows.",
      "Released and documented 24 RESTful OpenAPI endpoints using Typescript and YAML, published on Swagger, providing clients with efficient access to high-demand portfolio data"
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
      "Built a full-featured Dealflow dashboard using the MERN stack to streamline investment evaluation workflows, significantly enhancing decision-making efficiency for fund managers",
      "Enhanced the website’s UI/UX using HTML, CSS, JS, and optimized the asset pipeline with Gulp tasks, reducing overall website size by 35% and improving page load speed by 25%",
      "Conceived a Gmail add-on using Google Apps Script to integrate users’ email inboxes with the Dealflow product",
      "Boosted website discoverability by improving SEO performance, driving the company’s website into the top 3 Google search results for 70% of targeted keywords, increasing inbound traffic and product discovery"
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
      "Deployed an automated web scraper using Selenium and BeautifulSoup to extract quarterly financial data for 500+ companies listed on the Bombay Stock Exchange",
      "Cleaned and analyzed over 10,000 data points using pandas and matplotlib to generate visual insights and forecast company performance trends"
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

function Experience(props:ExperienceComponentProps) {
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    props.updateComponentView(isIntersecting ? "experience" : "");
  }

  return (
    <Container ref={ref} className="section" id="experience" height={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
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