import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import classes from './Header.module.css'

const Header = () => (
  <>
    <HStack
      justifyContent='center'
      w='100%'
      bg='linear-gradient(90deg, rgba(58,66,72,1) 0%, rgba(22,24,25,1) 57%)'
    >
      <Image
        src='https://cdn.pixabay.com/photo/2017/01/01/11/19/interior-1944348_960_720.jpg'
        alt='Fondo Header'
        maxH={{ base: 200, md: 400, lg: 500 }}
        pt='63px'
        objectFit='cover'
      />
      <div className={classes.textBox}>
        <h1>Diseñando Espacios</h1>
        <p>para tu vida</p>
      </div>
    </HStack>
  </>
)

export default Header
