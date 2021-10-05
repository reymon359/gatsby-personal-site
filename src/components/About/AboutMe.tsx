import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        I enjoy life and have fun going on adventures, doing software
        development, meeting new people, helping others, learning new things,
        improving myself, trying new foods, visiting new places, opening my
        mind, achieving my goals, and doing sports (running, hiking, and
        boardsports mainly).
      </p>

      <p>
        I built this website with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React,&nbsp;
        </a>
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby,
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp;among other technologies. I use it as a place to share what I
        learn and do. I believe in an open source world and&nbsp;
        <a
          href="https://github.com/reymon359/gatsby-personal-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          you can find this site code on GitHub.
        </a>
      </p>
      <p>
        <a
          href="../../../files/ramon-morcillo-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p>
      <p> Sometimes I&nbsp;
        <a
          href="https://twitter.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet
        </a>
        &nbsp;and share&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments
        </a>
        &nbsp;or&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor.photos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pictures
        </a>
        &nbsp;on Instagram. You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!"
        >
          hey@ramonmorcillo.com
        </a>
      </p>
    </Content>
  )
}

export default AboutMe
