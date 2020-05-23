import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';
import {addRemToProperty} from '../../styles/shared';
import {colors, fonts, media} from '../../styles/theme';

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${addRemToProperty('padding')};

  ul:last-child li {
    text-align: right;

    a {
      transition: color 0.4s ease;
      will-change: color;
      position: relative;

      &::before {
        position: absolute;
        left: -1.1rem;
        top: 50%;
        background: ${colors.yellow500};
        border-radius: 100%;
        content: '';
        display: block;
        height: 0.3rem;
        width: 0.3rem;
        transition: transform 0.3s cubic-bezier(0.45, 0, 0.1, 1),
          opacity 0.1s ease;
        will-change: transform, opacity;
      }

      &:not(.active)::before {
        opacity: 0;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: ${colors.white}!important;

        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }

  ${media.md`
    position: static;
    padding: 0;
  `}
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`;

type NavItemProps = {
  highlight?: boolean;
};

const NavItem = styled.li<NavItemProps>`
  list-style: none;
  padding: 0.5rem 0;
  line-height: 1em;

  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: 0.9rem;
    font-family: ${fonts.mono};
    pointer-events: all;
    transition: color 0.1s ease;
    line-height: 1em;
    ${props =>
      props.highlight
        ? css`
            color: ${colors.yellow500};

            &:hover::before {
              display: none !important;
            }
          `
        : css`
            color: ${colors.gray500};
          `}
  }
`;

const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  &.active {
    color: ${colors.white};

    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`;

const Menu = () => (
  <MenuWrapper>
    <Nav>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/ramon-morcillo/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Linkedin
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/reymon359"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://codepen.io/reymon359"
          rel="noopener noreferrer"
          target="_blank"
        >
          Codepen
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://twitter.com/reymon359"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to="/">Index</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/works">Works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/profile">Profile</NavLink>
      </NavItem>
      <NavItem highlight>
        <a rel="noopener" href="mailto:hey@ramonmorcillo.com">
          Contact
        </a>
      </NavItem>
    </Nav>
  </MenuWrapper>
);

export default Menu;
