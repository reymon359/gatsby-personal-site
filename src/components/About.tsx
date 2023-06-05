import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'


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
        Committed to continuous growth and improvement, both personally and professionally. I am passionate about creating captivating software experiences that bring joy to people's lives. I strive to optimize my work and life in pursuit of crafting exceptional and memorable moments for users.
      </p>
      <p>
        Apart from working with various companies and individuals, I am proud to be the co-founder of <a href="https://www.mapmelon.com" target="_blank" rel="noopener noreferrer">Mapmelon</a>.
      </p>
      <p>
        This website serves as a platform for sharing my knowledge and achievements. You can find my resume <a href="/resume"  >here</a>.
      </p>
      <p>
        Occasionally, I&nbsp;
        <a href="https://twitter.com/reymon359" target="_blank" rel="noopener noreferrer">share insights</a>
        &nbsp;and post&nbsp;
        <a href="https://www.instagram.com/ramon.mor/" target="_blank" rel="noopener noreferrer">moments</a>
        &nbsp;or&nbsp;
        <a href="https://www.instagram.com/ramon.mor.photos/" target="_blank" rel="noopener noreferrer">captivating images</a>
        &nbsp;on Instagram.
      </p>

      <p>
        Feel free to connect with me through these platforms or by sending an email to&nbsp;
        <a href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!" rel="noopener">hey@ramonmorcillo.com</a>.
      </p>
    </Content>
  )
}


const Image = styled.img`
max-height: 300px;
margin: auto;
`

const About: React.FC = () => {
  return (
    <>
      <Intro fixed={false} />
      <AboutMe />
      <Image src="../../../images/ramon_morcillo_meta_image.jpg" />
    </>
  )
}

export default About
