import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Text, VStack, Flex, Heading } from '@chakra-ui/react'
import { getProjectById } from '../services/projectsService'
import Slider from '../components/slider/Slider'

export default function ProjectDetails() {
  const { id } = useParams()

  const [projectData, setProjectData] = useState({
    imgs: [],
    title: '',
    text: '',
  })

  const loadData = async () => {
    try {
      const loadedProject = await getProjectById(id)
      setProjectData(loadedProject.data)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    if (id) {
      loadData()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Flex bg='gray.100'>
        <Container maxW='container.lg' mt='5'>
          <VStack
            paddingTop='40px'
            paddingBottom='40px'
            spacing='2'
            alignItems='flex-start'
            w='full'
            justifyContent='space-around'
          >
            <Slider
              w='full'
              h='full'
              imgs={projectData.imgs}
              objectFit='cover'
              objectPosition='center -100px'
            />
            <Flex w='full'>
              <Heading
                size='lg'
                maxW='100%'
                flexGrow='1'
                borderBottom='1px'
                borderColor='#E6E6E6'
                pt='15px'
              >
                {projectData.title}
              </Heading>
            </Flex>
            <Text as='p' fontSize='lg' paddingBottom='20px' paddingTop='10px'>
              {projectData.text}
            </Text>
          </VStack>
        </Container>
      </Flex>
    </>
  )
}
