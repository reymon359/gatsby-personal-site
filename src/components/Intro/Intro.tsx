import React from 'react'
import styled, {css} from 'styled-components'
import {addRemToProperty} from '../../styles'

interface WrapperProps {
  fixed: boolean
}

const Wrapper = styled.div<WrapperProps>`
  pointer-events: none;
  font-size: ${props => props.theme.fontSizes.large};
  max-width: 36rem;
  line-height: 1.3em;
  ${props => props.theme.media.max.md`
    max-width: 32rem;
  `}
  ${props => props.theme.media.max.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${props => props.theme.media.max.xs`
    font-size: 1.35rem;
  `}

  ${props =>
    props.fixed
      ? css`
          ${addRemToProperty('padding')};
          position: absolute;
          top: 0;
          right: 0;
          text-align: right;
          ${props => props.theme.media.max.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
        `
      : css`
          text-align: left;
        `}
`

const Title = styled.h1`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
  font-family: inherit;
  font-size: inherit;
  span {
    color: ${props => props.theme.colors.secondary};
    text-decoration: line-through;
  }
`

interface IntroProps {
  fixed: boolean
  title: string
}

const Intro: React.FC<IntroProps> = ({fixed, title}) => {
  return (
    <Wrapper fixed={fixed}>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Intro
