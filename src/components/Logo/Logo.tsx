import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {addRemToProperty} from '../../styles/shared'
import Circle from './Circle'

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: ${props => props.theme.colors.lightest + '10'};
  height: 100%;
  width: 100%;
  border-radius: 100%;
  pointer-events: none;
  opacity: 1;
  will-change: transform;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 18rem;
  ${addRemToProperty('padding')}
  ${props => props.theme.media.max.md`
    position: static;
    padding: 0;
  `}

  a,
  svg {
    pointer-events: all;
    display: block;
  }

  a {
    width: 1.65rem;
    border-bottom: none;
    &:hover {
      border-bottom: none;
    }
    ${props => props.theme.media.max.lg`
      width: 1.45rem;
    `}
  }

  svg {
    width: 100%;
    height: auto;
  }

  a:hover + ${Background} {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(0.45, 0, 0.1, 1), opacity 0.8s ease;
  }
`

const RelativeWrapper = styled.div`
  position: relative;
`

interface LogoProps {
  fillColor: string
  link?: string
}

const Logo: React.FC<LogoProps> = ({link = '/', fillColor = '#ffffff'}) => {
  return (
    <Wrapper>
      <RelativeWrapper>
        <Link to={link}>
          <Circle fill={fillColor} />
        </Link>
        <Background />
      </RelativeWrapper>
    </Wrapper>
  )
}

export default Logo
