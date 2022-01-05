import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const ProjectCard = ({ _id, src, title, text, ...props }) => (
  <Center py={6} {...props} key={_id}>
    <Box
      columns={{ base: 1, md: 4 }}
      spacing={5}
      maxW='270px'
      w='full'
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow='sm'
      rounded='md'
      overflow='hidden'
    >
      <Image h='120px' w='full' src={src} objectFit='cover' />

      <Box p={6}>
        <Stack spacing={1} align='left' mb={5}>
          <Text textStyle='subtitle'>
            {title.length > 20 ? title.substring(0, 19) : title}
          </Text>
          <Text textStyle='text'>
            {text.length > 140 ? text.substring(0, 137) + '...' : text}
          </Text>
        </Stack>
        <Button
          as={ReactRouterLink}
          to={`/proyectos/${_id}`}
          mt={5}
          w={'full'}
          bg={useColorModeValue('#6c757d', 'gray.900')}
          color={'white'}
          justifyContent={'center'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'md',
            bg: '#5c636a',
          }}
        >
          Leer +
        </Button>
      </Box>
    </Box>
  </Center>
)

ProjectCard.propTypes = {
  _id: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default ProjectCard
