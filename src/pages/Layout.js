import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

export default function Layout() {
  return (
    <Stack name='layout-stack' minHeight='100vh'>
      <Navbar />
      <Header />
      <Box name='layout-oulet' flexGrow={1} style={{ margin: 0 }}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  )
}
