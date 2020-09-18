import React, {useContext} from 'react'
import Logo from './Logo'
import {ThemeContext} from 'styled-components'

const LogoContainer: React.FC = () => {
  const {
    colors: {lightest}
  } = useContext(ThemeContext)

  return <Logo fillColor={lightest} />
}

export default LogoContainer
