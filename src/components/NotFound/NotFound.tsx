import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

export const Wrapper = styled.div`
  padding-top: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 50%;
`

export const Image = styled.img`
  border-radius: 20px;
  max-width: 250px !important;
`

export const Title = styled.h1`
  padding: 2rem 0 1rem;
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.large};
`

export const Text = styled.p`
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  line-height: 1.8rem;
`
interface NotFoundProps {
  readonly notFoundImageSrc?: string
}

const NotFound: React.FC<NotFoundProps> = ({notFoundImageSrc}) => {
  return (
    <Wrapper>
      <Content>
        <Image src={notFoundImageSrc} />
        <Title>Hi there!</Title>
        <Text>
          I think you are a bit lost, no worries, let me show you&nbsp;
          <Link to="/">the way to get out of here</Link>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default NotFound
