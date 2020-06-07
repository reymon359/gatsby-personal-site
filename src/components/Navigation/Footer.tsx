import React from 'react';
import styled, {css} from 'styled-components';
import {addRemToProperty} from '../../styles/shared';

const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  top: 50%;
  ${(props) => props.theme.media.md`
    position: static;
    padding-top: 1.5rem;
  `}
`;

type ItemProps = {
  position: string;
};

const Item = styled.div<ItemProps>`
  position: absolute;
  font-family: ${(props) => props.theme.fonts.mono};
  color: ${(props) => props.theme.colors.mediumDart};
  font-size: 0.85rem;
  line-height: 1em;
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

  ${(props) => props.theme.media.md`
    position: static;
    transform: rotate(0) translateX(0);
    transform-origin: 0;
    padding: .5rem 0 0;
    text-align: center;
    font-size: .8rem;
  `}
`;

const Footer = () => (
  <FooterWrapper>
    <Item position="left">
      Made with 💚 &&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.gatsbyjs.org/"
      >
        Gatsby
      </a>
    </Item>
    <Item position="right">
      <span>Ramón Morcillo - {new Date().getFullYear()}</span>
    </Item>
  </FooterWrapper>
);

export default Footer;
