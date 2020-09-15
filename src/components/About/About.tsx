import React from 'react'
import styled from 'styled-components'
import AboutMe from './AboutMe'
import Image from './Image'
import Intro from '../Intro'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${props => props.theme.media.max.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`

export const Information = styled.header`
  grid-row: 2 / 4;
  grid-column: 1 / 6;
  z-index: 3;
  ${props => props.theme.media.max.md`
    grid-column: 1 / 7;
  `}
  ${props => props.theme.media.max.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`

const About: React.FC = () => {
  return (
    <Wrapper>
      <Information>
        <Intro fixed={false} />
        <AboutMe />
      </Information>
      <Image />
    </Wrapper>
  )
}

export default About
