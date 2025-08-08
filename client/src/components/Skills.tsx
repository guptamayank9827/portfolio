import { useState, useEffect } from 'react';
import { Container, Box, Text, HStack, Image, Badge } from '@chakra-ui/react';

import { useIntersectionObserver } from 'usehooks-ts';
import SectionHeading from './SectionHeading';
import { CATEGORIES, SKILLS} from '../data/skills';


type CategoryType = {
  keyword: string,
  title: string
};

type SkillType = {
  keyword: string,
  title: string,
  categories: string[],
  icon: any
};

interface CategoryProps {
  category: CategoryType,
  index: number,
  selectedCategory: string,
  updateCategory: (categoryString: string) => void
};

interface SkillProps {
  skill: SkillType
};

interface SkillsComponentProps {
  updateComponentView: Function
}

const CategoryItem = (props:CategoryProps) => {
  const {keyword, title} = props.category;
  const selected = props.selectedCategory === keyword;

  return (
    <Badge
      key={keyword}
      variant={selected ? "solid" : "surface"}
      colorPalette={"teal"}
      size={{base:"md", lg:"lg"}}
      margin={2}
      padding={2}
      borderRadius={2}
      style={{cursor: "pointer"}}
      onClick={() => props.updateCategory(keyword)}
    >
      <Text textStyle={{base:"sm", lg:"lg"}} pr={2}>{title}</Text>
    </Badge>
  );
}

const SkillItem = (props:SkillProps) => {
  const {title, icon, keyword} = props.skill;

  return (
    <Badge variant={"outline"} colorPalette={"teal"} size={{base:"sm", lg:"lg"}} margin={2} borderRadius={8}>
      <Image src={icon} alt={keyword} height={{base:6, lg:10}} my={2} mx={2} />
      <Text textStyle={{base:"sm", lg:"lg"}} pr={2}>{title}</Text>
    </Badge>
  );
}

function Skills(props:SkillsComponentProps) {
  const DEFAULT_CATEGORY = "language";
  const [ intersecting, setIntersecting ] = useState<Boolean>(false);
  const [ selectedCategory, setSelectedCategory ] = useState<string>(DEFAULT_CATEGORY);

  const SKILLS_FILTERED = SKILLS.filter(skill =>
    selectedCategory === "all" ||
    skill.categories.includes(selectedCategory)
  );

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  if(isIntersecting !== intersecting) {
    setIntersecting(isIntersecting);
    props.updateComponentView(isIntersecting ? "skills" : "");
  }

  useEffect(() => {
    if (!CATEGORIES.map(category => category.keyword).includes(selectedCategory))
      setSelectedCategory(DEFAULT_CATEGORY);

  }, [selectedCategory]);

  return (
    <Container ref={ref} className="section" id="skills" minHeight={{ base:"fit-content", lg:"100vh" }} my={{ base:24, lg:0 }} maxWidth={{ lg:"container.md", xl:"container.lg" }}>
      <Box className="section-div" textAlign={"center"}>

        <SectionHeading
          heading="Skills"
          subheading="Explore my diverse set of skills as a Full-Stack Developer"
        />

        <HStack mt={6} display={"block"}>
          {CATEGORIES.map((category,index) => (
            <CategoryItem
              key={category.keyword}
              category={category}
              index={index}
              selectedCategory={selectedCategory}
              updateCategory={(newCategory: string) => setSelectedCategory(newCategory)}
            />
          ))}
        </HStack>

        <HStack mt={12} display={"block"}>
          {SKILLS_FILTERED.map((skill) => (
            <SkillItem
              key={skill.keyword}
              skill={skill}
            />
          ))}
        </HStack>

      </Box>
    </Container>
  );
}

export default Skills;