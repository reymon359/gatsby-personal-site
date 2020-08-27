import React from 'react';
import {useDeviceDetect} from '../../hooks';
import styled from 'styled-components';

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

  const helpMessageText = isMobile
    ? 'Swipe around the screen or zoom it'
    : 'Move around the screen or scroll it';

  return (
    <HelpMessageContainer transparent={transparent}>
      {helpMessageText}
    </HelpMessageContainer>
  );
};

export default HelpMessage;
