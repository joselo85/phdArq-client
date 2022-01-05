import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { HStack, Image } from '@chakra-ui/react'

const Slider = ({ imgs, ...rest }) => (
  <Carousel
    autoFocus={true}
    infiniteLoop={true}
    useKeyboardArrows={true}
    autoPlay={true}
    showThumbs={false}
    showStatus={false}
    showArrows={true}
    {...rest}
  >
    {imgs.map((imgUrl) => (
      <HStack key={imgUrl}>
        <Image
          src={imgUrl}
          maxH={{ base: 120, md: 240, lg: 'full' }}
          objectFit='cover'
        />
      </HStack>
    ))}
  </Carousel>
)

Slider.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Slider
