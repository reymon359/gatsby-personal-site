import React from 'react'
import HelpMessage from './HelpMessage'
import {components} from '../../data'
import {useDeviceDetect} from '../../hooks/useDeviceDetect'

interface HelpMessageContainerProps {
  readonly show: boolean
}

const HelpMessageContainer: React.FC<HelpMessageContainerProps> = ({
  show = false
}) => {
  const {isMobile} = useDeviceDetect()
  const {
    navigation: {
      helpMessage: {mobile, desktop}
    }
  } = components

  const text = isMobile ? mobile : desktop

  return <HelpMessage show={show} text={text} />
}

export default HelpMessageContainer
