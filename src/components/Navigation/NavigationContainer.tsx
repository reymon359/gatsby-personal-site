import React from 'react'
import {Navigation} from './Navigation'

type NavigationContainerProps = {
  transparentNavigation: boolean
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
  transparentNavigation = false
}) => {
  return <Navigation transparent={transparentNavigation} />
}
