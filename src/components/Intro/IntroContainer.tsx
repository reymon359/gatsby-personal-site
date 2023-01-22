import React from 'react'
import Intro from './Intro'

interface IntroContainerProps {
  fixed: boolean
}

const IntroContainer: React.FC<IntroContainerProps> = ({fixed = true}) => {

  return <Intro fixed={fixed} />
}

export default IntroContainer
