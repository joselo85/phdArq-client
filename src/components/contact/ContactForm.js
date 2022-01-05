import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

export default function ContactForm() {
  return (
    <Flex bg='gray.100' align='center' justify='center' id='contact'>
      <Box
        borderRadius='lg'
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 15 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize='46px'
              textAlign='center'
              fontFamily='Arial'
              borderBottom='1px solid rgba(22,24,25,0.2)'
            >
              Contactanos!
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius='lg'
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow='base'
              >
                <form action='https://formspree.io/f/mvodbbad' method='POST'>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type='text'
                          name='nombre'
                          placeholder='Tu nombre'
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type='email'
                          name='email'
                          placeholder='Tu Email'
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Mensaje</FormLabel>

                      <Textarea
                        name='mensaje'
                        placeholder='Tu mensaje'
                        rows={6}
                        resize='none'
                      />
                    </FormControl>

                    <Button
                      colorScheme='blue'
                      bg='blue.400'
                      color='white'
                      _hover={{
                        bg: 'blue.500',
                      }}
                      isFullWidth
                      type='submit'
                    >
                      Enviar Mensaje
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
