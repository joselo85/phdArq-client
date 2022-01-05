import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Proyectos',
    href: 'proyectos',
  },
  {
    label: 'Contacto',
    href: 'contacto',
  },
]

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box pos='fixed' w='100%' zIndex={4}>
      <Flex
        bg={useColorModeValue('#6c757d', 'gray.800')}
        color={useColorModeValue('white')}
        minH='60px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor='#6c757d'
        align='center'
      >
        <Flex
          flex={{ base: 0, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex
          minWidth='85px'
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Link to='/'>
            <Image h='40px' src='/images/logo.png' objectFit='cover' mt='4px' />
          </Link>
          <Link to='/'>
            <Text fontFamily={'Montserrat'} fontSize={'20px'} pr='5px' pt='4px'>
              phd Arq & Diseño
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  )
}

export default Navbar
