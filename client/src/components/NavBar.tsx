import { useState, useEffect } from 'react';
import { Box, Flex, HStack, IconButton, Stack, useDisclosure, Link } from '@chakra-ui/react';
import { TECH_LINKS, PHOTOGRAPHY_LINKS } from '../data/navigation';

// icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { ColorModeButton, useColorModeValue } from '../components/ui/color-mode';

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



const NavLink = (props:LinkProps) => {
  const { link, text } = props.navlink;

  return (
    <Link
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
    </Link>
  )
}

function NavBar(props:NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();

  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    if(props.view === "tech") setLinks(TECH_LINKS);
    else if(props.view === "photography")  setLinks(PHOTOGRAPHY_LINKS);
  }, [props.view]);


  return (
    <div id="navbar-section">

      <Box bg={useColorModeValue('light.400', 'dark.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <HStack gap={8} alignItems={'center'}>
            <Box>MG</Box>  {/* replace with graphic */}
            <HStack as={'nav'} gap={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.keyword} navlink={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeButton />
          </Flex>
        </Flex>

        {open ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} gap={4}>
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