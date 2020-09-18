import React from 'react'
import styled, {css} from 'styled-components'
import {addRemToProperty} from '../../styles/shared'

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 50%;
  ${props => props.theme.media.max.md`
    position: static;
    padding-top: 1.5rem;
  `}
`

type ItemProps = {
  position: string
}

const Item = styled.div<ItemProps>`
  position: absolute;
  font-family: ${props => props.theme.fontFamilies.primary};
  letter-spacing: 0.1rem;
  color: ${props => props.theme.colors.lightest};
  font-size: 0.85rem;
  line-height: 1em;
  pointer-events: all;
  a {
    border-bottom: none;
  }

  ${props =>
    props.position === 'left'
      ? css`
          transform: rotate(-90deg) translateX(-50%);
          transform-origin: left;
          ${addRemToProperty(`left`)}
        `
      : css`
          transform: rotate(90deg) translateX(50%);
          transform-origin: right;
          ${addRemToProperty('right')}
        `}

  ${props => props.theme.media.max.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
  
  small {
    font-size: 70% !important;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Item position="left">
      <span>Ramón Morcillo - {new Date().getFullYear()} - </span>{' '}
      <a
        href="https://github.com/reymon359/gatsby-personal-site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        source
      </a>
    </Item>
    <Item position="right">
      Made with love & time&nbsp;
      <small
        style={{
          fontSize: '70%'
        }}
      >
        (a lot of it)
      </small>
    </Item>
  </FooterWrapper>
)

export default Footer
