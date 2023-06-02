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
    Innovative problem solver and experienced maker with a passion for excellence.
  </p>
  <p>
    Committed to continuous growth and improvement, both personally and professionally.
  </p>
  <p>
    This website serves as a platform for sharing my knowledge and achievements.
  </p>
 <p>
    <a
      href="../../../files/ramon-morcillo-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Here is my resume
    </a>
    &nbsp;for further details.
  </p> 
  <p> Occasionally, I&nbsp;
    <a
      href="https://twitter.com/reymon359"
      target="_blank"
      rel="noopener noreferrer"
    >
      share insights
    </a>
    &nbsp;and post&nbsp;
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
      captivating images
    </a>
    &nbsp;on Instagram.
  </p>
  <p>
    Feel free to connect with me through these platforms or by sending an email to&nbsp;
    <a
      rel="noopener"
      href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!"
    >
      hey@ramonmorcillo.com
    </a>.
  </p>

    </Content>
  )
}

export default AboutMe
