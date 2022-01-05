import React from 'react'
import PropTypes from 'prop-types'
import {
  Link as ReactRouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'

import { Link, useColorModeValue } from '@chakra-ui/react'

const DesktopNavItem = ({ href, label }) => {
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true })

  const linkColor = useColorModeValue('white', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.300', 'white')

  return (
    <Link
      key={label}
      as={ReactRouterLink}
      to={href}
      p={2}
      borderBottom={match ? 'solid 2px var(--chakra-colors-brand-rouge)' : null}
      fontSize='md'
      fontFamily='Arial'
      fontWeight={'200'}
      color={linkColor}
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}
    >
      {label}
    </Link>
  )
}

DesktopNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
export default DesktopNavItem
