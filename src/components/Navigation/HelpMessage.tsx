import React from 'react';
import {useDeviceDetect} from '../../hooks';
import styled from 'styled-components';
import {components} from '../../data';

interface HelpMessageContainerProps {
  show: boolean;
}

const HelpMessageContainer = styled.div<HelpMessageContainerProps>`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fontFamilies.code};
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0;

 ${props => props.theme.media.min.md`
    position: absolute;
    bottom: 2rem;
    left: 35%;
   `}

   ${props => props.theme.media.max.md`
   margin-bottom: 0;
   padding-top: 0;
   `}

  ${props => props.theme.media.max.sm`
    margin-bottom: -0.3rem;
    max-width: 70%;
  `}
  ${props => !props.show && `display: none;`}
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
  readonly show: boolean;
}

const HelpMessage: React.FC<HelpMessageProps> = ({show = false}) => {
  const {isMobile} = useDeviceDetect();
  const {
    navigation: {
      helpMessage: {mobile, desktop}
    }
  } = components;

  const helpMessageText = isMobile ? mobile : desktop;

  return (
    <HelpMessageContainer show={show}>{helpMessageText}</HelpMessageContainer>
  );
};

export default HelpMessage;
