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
        Over the last years, I have been working, discovering, and having fun on
        both backend and frontend software development. I deeply enjoy&nbsp;
        <a
          href="https://github.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          learning, reading, creating
        </a>
        , and trying new things.
      </p>

      <p>
        I built this website with&nbsp;
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp;among other technologies and use it as a place to share what I
        learn and do. I believe in an open source world,&nbsp;
        <a
          href="https://github.com/reymon359/gatsby-personal-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          here is the one from this site.
        </a>
      </p>
      <p>
        I am always improving myself and helping others if I have the chance to.
        &nbsp;
        <a
          href="../../../files/ramon-morcillo-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p>
      <p>
        Sometimes&nbsp;
        <a
          href="https://twitter.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          I tweet
        </a>
        &nbsp;and share photos on&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        . You can contact me through them or send me an email to&nbsp;
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
