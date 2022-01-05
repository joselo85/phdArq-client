import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const SpinnerComp = () => {
  return (
    <>
      <Box p='40px' justifyContent={'center'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          marginLeft='50%'
        />
      </Box>
    </>
  )
}

export default SpinnerComp
