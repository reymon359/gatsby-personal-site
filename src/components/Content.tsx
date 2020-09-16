import React from 'react'
import styled from 'styled-components'

type WrapperProps = {
  fullHeight: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${props => (props.fullHeight ? '100%' : 'auto')};

  ${props => props.theme.media.max.lg`
    width: 1.45rem;
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}

  ${props => props.theme.media.max.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${props => props.theme.media.max.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`

const BottomHeight = styled.div`
  height: 10rem;
`

interface ContentProps {
  readonly children: React.ReactNode
  readonly fullHeight?: boolean
}

const Content: React.FC<ContentProps> = ({children, fullHeight = true}) => (
  <Wrapper fullHeight={fullHeight}>
    {children}
    <BottomHeight />
  </Wrapper>
)

export default Content
