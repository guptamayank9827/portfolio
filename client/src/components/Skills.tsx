// import React from 'react';
import { Box, Heading, Text, Tag, TagLabel, HStack, Image } from '@chakra-ui/react';

//icons
import HTML from '../icons/html.svg';
import CSS from '../icons/css.svg';
import JS from '../icons/javascript.svg';
import TS from '../icons/typescript.svg';
import BitBucket from '../icons/bitbucket.svg';
import GitHub from '../icons/github.svg';
import MongoDB from '../icons/mongodb.svg';
import MySQL from '../icons/mysql.svg';
import Python from '../icons/python.svg';
import R from '../icons/r.svg';
import React from '../icons/react.svg';
import Bootstrap from '../icons/bootstrap.svg';
import Docker from '../icons/docker.svg';
import ExpressJS from '../icons/express.svg';
import Firebase from '../icons/firebase.svg';
import Gitlab from '../icons/gitlab.svg';
import Heroku from '../icons/heroku.svg';
import Java from '../icons/java.svg';
import NodeJS from '../icons/node-js.svg';
import Git from '../icons/git.svg';
import Selenium from '../icons/selenium.svg';
//GAS, PHP


type BadgeType = {
  keyword: string,
  title: string,
  categories: string[],
  icon: any
};

interface BadgeProps {
  skill: BadgeType
};

/*const CATEGORIES = [
  {
    keyword: "web-lang",
    title: "Web Languages"
  },
  {
    keyword: "framework",
    title: "Web Frameworks"
  },
  {
    keyword: "database",
    title: "Database"
  },
  {
    keyword: "language",
    title: "Programming Languages"
  },
  {
    keyword: "project",
    title: "Project Management"
  },
  {
    keyword: "hosting",
    title: "Hosting Platforms"
  }
];*/

const SKILLS = [
  {
    keyword: "html",
    title: "HTML",
    categories: ["web-lang"],
    icon: HTML
  },
  {
    keyword: "css",
    title: "CSS",
    categories: ["web-lang"],
    icon: CSS
  },
  {
    keyword: "bootstrap",
    title: "Bootstrap",
    categories: ["web-lang"],
    icon: Bootstrap
  },
  {
    keyword: "js",
    title: "JavaScript",
    categories: ["web-lang"],
    icon: JS
  },
  {
    keyword: "ts",
    title: "TypeScript",
    categories: ["web-lang"],
    icon: TS
  },
  {
    keyword: "mysql",
    title: "MySQL",
    categories: ["database"],
    icon: MySQL
  },
  {
    keyword: "mongo",
    title: "MongoDB",
    categories: ["database"],
    icon: MongoDB
  },
  {
    keyword: "git",
    title: "Git",
    categories: ["project"],
    icon: Git
  },
  {
    keyword: "github",
    title: "GitHub",
    categories: ["project"],
    icon: GitHub
  },
  {
    keyword: "bitbucket",
    title: "BitBucket",
    categories: ["project"],
    icon: BitBucket
  },
  {
    keyword: "gitlab",
    title: "Gitlab",
    categories: ["project"],
    icon: Gitlab
  },
  {
    keyword: "docker",
    title: "Docker",
    categories: ["hosting"],
    icon: Docker
  },
  {
    keyword: "firebase",
    title: "Firebase",
    categories: ["hosting"],
    icon: Firebase
  },
  {
    keyword: "heroku",
    title: "Heroku",
    categories: ["hosting"],
    icon: Heroku
  },
  {
    keyword: "python",
    title: "Python",
    categories: ["language"],
    icon: Python
  },
  {
    keyword: "java",
    title: "Java",
    categories: ["language"],
    icon: Java
  },
  {
    keyword: "r",
    title: "R",
    categories: ["language"],
    icon: R
  },
  {
    keyword: "selenium",
    title: "Selenium",
    categories: ["language"],
    icon: Selenium
  },
  {
    keyword: "react",
    title: "ReactJS",
    categories: ["framework"],
    icon: React
  },
  {
    keyword: "nodejs",
    title: "NodeJS",
    categories: ["framework"],
    icon: NodeJS
  },
  {
    keyword: "express",
    title: "ExpressJS",
    categories: ["framework"],
    icon: ExpressJS
  }
];


const Badge = (props:BadgeProps) => {
  const {title, icon, keyword} = props.skill;
  return (
    <Tag size="lg" key={keyword} variant='subtle' colorScheme='teal' m={2}>
      <Image src={icon} alt={keyword} height={10} width={10} py={2} px={0} />
      <TagLabel>{title}</TagLabel>
    </Tag>
  );
}

function Skills() {
  return (
    <div className="section" id="skills">
      <Box className="section-div">

        <Heading
          display="inline-block"
          as="h4"
          size="xl"
          bgColor="teal"
          backgroundClip="text"
        >
          Skills
        </Heading>

        <Text fontSize="lg" my={2}>
          Explore my diverse set of skills as a Full-Stack Developer
        </Text>

        <HStack my={2} py={4} px={16} display={"block"}>
          {SKILLS.map((skill) => (
            <Badge key={skill.keyword} skill={skill} />
          ))}
        </HStack>

      </Box>
    </div>
  );
}

export default Skills;