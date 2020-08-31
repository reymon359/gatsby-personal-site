import React from 'react';
import {useDeviceDetect} from '../../hooks';
import styled from 'styled-components';
import {components} from '../../data';

interface HelpMessageContainerProps {
  transparent: boolean;
}

const HelpMessageContainer = styled.div<HelpMessageContainerProps>`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fontFamilies.code};
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0;
  // Todo: Hide help message on big screen 
  // display: none;
  // ${props => !props.transparent && props.theme.media.md`
  //   opacity: block;
  // `}

  ${props => props.theme.media.sm`
    margin-bottom: -0.3rem;
    max-width: 70%;
  `}
  ${props => !props.transparent && `display: none;`}
  animation: fade 10s;

  @keyframes fade {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

interface HelpMessageProps {
  readonly transparent: boolean;
}

const HelpMessage: React.FC<HelpMessageProps> = ({transparent = false}) => {
  const {isMobile} = useDeviceDetect();
  const {
    navigation: {
      helpMessage: {mobile, desktop}
    }
  } = components;

  const helpMessageText = isMobile ? mobile : desktop;

  return (
    <HelpMessageContainer transparent={transparent}>
      {helpMessageText}
    </HelpMessageContainer>
  );
};

export default HelpMessage;