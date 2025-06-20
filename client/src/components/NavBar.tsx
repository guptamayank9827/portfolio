import { useState, useEffect } from 'react';
import { Box, Flex, HStack, Button, IconButton, Stack, useDisclosure, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

type LinkType = {
  keyword: string,
  text: string,
  link: string
};

interface LinkProps {
  navlink: LinkType
};

interface NavbarProps {
  view: string
};

const TECH_LINKS = [
  {
    keyword: "projects",
    text: "Projects",
    link: "/tech/#projects"
  },
  {
    keyword: "skills",
    text: "Skills",
    link: "/tech/#skills"
  },
  {
    keyword: "alternate",
    text: "Alter Ego",
    link: "/photography"
  }
];

const PHOTOGRAPHY_LINKS = [
  {
    keyword: "alternate",
    text: "Alter Ego",
    link: "/tech"
  }
];

const NavLink = (props:LinkProps) => {
  const { link, text } = props.navlink;

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
      href={link}
    >
      {text}
    </Box>
  )
}

function NavBar(props:NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    if(props.view === "tech") setLinks(TECH_LINKS);
    else if(props.view === "photography")  setLinks(PHOTOGRAPHY_LINKS);
  }, [props.view]);


  return (
    <div id="navbar-section">

      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>MG</Box>  {/* replace with graphic */}
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.keyword} navlink={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.keyword} navlink={link} />
              ))}
            </Stack>
          </Box>
          )
          :
          null
        }
      </Box>

    </div>
  );
}

export default NavBar;