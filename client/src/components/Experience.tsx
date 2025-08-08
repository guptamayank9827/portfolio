import { useState } from 'react';
import { Container, Box, Text, Stack, Timeline, Accordion } from '@chakra-ui/react';
import { useIntersectionObserver } from 'usehooks-ts';
import SectionHeading from './SectionHeading';
import { EXPERIENCES } from '../data/experience';


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
  works: string[],
  summary: string
};

interface ExperienceComponentProps {
  updateComponentView: Function
}

interface ExperienceProps {
  experience: ExperienceType,
  index: number
}


const getExperienceConnector = (company:CompanyType) => {
  return (
    <Timeline.Connector>
      <Timeline.Separator borderColor={"teal"} borderWidth="2px" />
      <Timeline.Indicator outlineWidth="0px">
        {/* <Icon as={company.logo} /> */}
      </Timeline.Indicator>
    </Timeline.Connector>
  );
}

const getExperienceDate = (props:ExperienceProps) => {
  const {startDate, endDate} = props.experience;

  return (
    <Timeline.Content alignItems="end">
      <Timeline.Title whiteSpace="nowrap" width="auto" fontSize={"md"}>{startDate} - {endDate || "Present"}</Timeline.Title>
    </Timeline.Content>
  );
}

const ExperienceItem = (props:ExperienceProps) => {
  const { role, company, summary } = props.experience;
  const textAlignment = "start";

  return (
    <Timeline.Item>

      {getExperienceDate(props)}
      {getExperienceConnector(company)}

      <Timeline.Content alignItems={textAlignment}>
        <Timeline.Title fontSize={"lg"}>{role}</Timeline.Title>
        <Timeline.Description fontSize={"sm"} textAlign={textAlignment}>{company.name} &nbsp; | &nbsp; {company.location}</Timeline.Description>
        <Text textStyle={"md"} textAlign={textAlignment} mb={2}>
          {summary}
        </Text>
      </Timeline.Content>

    </Timeline.Item>
  );
}

const ExperienceCard = (props:ExperienceProps) => {
  const { keyword, role, company, startDate, endDate, summary } = props.experience;

  return(
    <Accordion.Item value={keyword} style={{marginTop:"20px"}}>

      <Accordion.ItemTrigger>
        <Box as="span" flex="1" textAlign="left">
          <Text fontSize={"xl"} display={"block"} color={"teal"} colorPalette={"teal"}>
            {role}
          </Text>
          <Text fontSize={"md"} display={"block"}>
            {startDate} - {endDate || "Present"}
          </Text>
          <Text fontSize={"sm"} display={"block"}>
            {company.name}, {company.location}
          </Text>
        </Box>
  
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>

      <Accordion.ItemContent>
        <Accordion.ItemBody textAlign={"left"} fontSize="md" pl={4}>
          {summary}
        </Accordion.ItemBody>
      </Accordion.ItemContent>

    </Accordion.Item>
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
    <Container ref={ref} className="section" id="experience" minHeight={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxW={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <SectionHeading
          heading="Experience"
          subheading="Over 4 years of Work Experience"
        />

        <Stack gap={8}>
          <Timeline.Root size={"lg"} colorPalette="teal" display={{base:"none", lg:"block"}}>
            {EXPERIENCES.map((experience,index) => (
              <ExperienceItem experience={experience} key={experience.keyword} index={index} />
            ))}
          </Timeline.Root>

          <Accordion.Root display={{base:"block", lg:"none"}} variant={"outline"} colorPalette={"teal"} defaultValue={[]} multiple={false} collapsible={true} mt={6}>
            {EXPERIENCES.map((experience,index) => (
              <ExperienceCard experience={experience} key={experience.keyword} index={index} />
            ))}
          </Accordion.Root>

        </Stack>

      </Box>
    </Container>
  );
}

export default Experience;