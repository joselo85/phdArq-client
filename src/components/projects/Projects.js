import React, { useState, useEffect } from 'react'
import { Container, Box, SimpleGrid, Heading, Flex } from '@chakra-ui/react'
import { getAllProjects } from '../../services/projectsService'

import ProjectCard from './ProjectCard'
import SpinnerComp from '../spinner/SpinnerComp'

const ListActivities = () => {
  const [allProjects, setAllProjects] = useState([])
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    try {
      setLoading(true)
      const loadedProjects = await getAllProjects()
      setAllProjects(loadedProjects.data)
      if (loadedProjects) {
        setLoading(false)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  // run on load
  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Flex bg='gray.100'>
        <Container maxW='container.lg' mt='5' id='proyectos'>
          <Box p={0}>
            <Box p='40px 0'>
              <Heading
                fontSize='46px'
                textAlign='center'
                fontFamily='Arial'
                borderBottom='1px solid rgba(22,24,25,0.2)'
              >
                Proyectos
              </Heading>
            </Box>
            {loading ? (
              <SpinnerComp />
            ) : (
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={6}
                justifyContent={'space-between'}
                alignItems='flex-start'
              >
                {allProjects
                  .map((project) => (
                    <ProjectCard {...project} key={project._id} />
                  ))
                  .reverse()}
              </SimpleGrid>
            )}
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default ListActivities
