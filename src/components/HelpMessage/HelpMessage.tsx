import React from 'react'
import styled from 'styled-components'

interface WrapperProps {
  show: boolean
}

const Wrapper = styled.div<WrapperProps>`
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fontFamilies.code};
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0;

  ${props =>
    props.show &&
    props.theme.media.min.md`
    position: relative;
    top: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

interface HelpMessageProps {
  readonly show: boolean
  readonly text: string
}

const HelpMessage: React.FC<HelpMessageProps> = ({
  show = false,
  text = 'Move around the screen or scroll it'
}) => <Wrapper show={show}>{text}</Wrapper>

export default HelpMessage
