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
        Maker. Problem solver. 🍉 Fruit Fanatic. 🏄‍♂️ Nomad Surfer.
      </p>

      <p>
        Constantly creating to improve myself and those around me.
      </p>
      <p>
        I use this website as a place to share what I
        learn and do.
      </p>
      {/* <p>
        <a
          href="../../../files/ramon-morcillo-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p> */}
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
        &nbsp;on Instagram.
      </p>
      <p>
        You can contact me through them or sending an email to&nbsp;
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
