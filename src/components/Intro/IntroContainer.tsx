import React from 'react'
import Intro from './Intro'
import {components} from '../../data'

interface IntroContainerProps {
  fixed: boolean
}

const IntroContainer: React.FC<IntroContainerProps> = ({fixed = true}) => {
  const {
    intro: {title}
  } = components

  return <Intro fixed={fixed} title={title} />
}

export default IntroContainer
