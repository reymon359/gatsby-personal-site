import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {addRemToProperty} from '../../styles/shared'

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${addRemToProperty('padding')};

  ul:last-child li {
    text-align: right;

    a {
      transition: color 0.4s ease;
      will-change: color;
      position: relative;
      border-bottom: none;

      &::before {
        position: absolute;
        left: -1.1rem;
        top: 50%;
        background: ${props => props.theme.colors.lightest};
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
        color: ${props => props.theme.colors.lightest};

        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }

  ${props => props.theme.media.max.md`
    position: static;
    padding: 0;
  `}
`

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`

const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  line-height: 1em;

  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: ${props => props.theme.fontSizes.normal};
    font-family: ${props => props.theme.fontFamilies.primary};
    color: ${props => props.theme.colors.medium};
    font-weight: ${props => props.theme.fontWeights.regular};
    pointer-events: all;
    transition: color 0.1s ease;
    line-height: 1em;
    border-bottom: none;

    &:hover {
      color: ${props => props.theme.colors.lightest};
      font-weight: ${props => props.theme.fontWeights.bold};
      border-bottom: none;
    }
  }
`

const NavLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  font-weight: ${props => props.theme.fontWeights.normal};

  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.colors.lightest};
    font-weight: ${props => props.theme.fontWeights.bold};
  }

  &.active {
    color: ${props => props.theme.colors.lightest};
    font-weight: ${props => props.theme.fontWeights.bold};
    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`

interface SocialLink {
  name: string
  socialUrl: string
}

interface StaticQueryData {
  site: {
    siteMetadata: {
      social: SocialLink[]
    }
  }
}

export const Menu: React.FC = () => {
  const pages = [`works`, `about`]
  const {site}: StaticQueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              name
              socialUrl
            }
          }
        }
      }
    `
  )

  return (
    <MenuWrapper>
      <Nav>
        {site.siteMetadata.social.map((socialLink: SocialLink) => (
          <NavItem key={socialLink.name}>
            <a
              href={socialLink.socialUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {socialLink.name}
            </a>
          </NavItem>
        ))}
      </Nav>
      <Nav>
        <NavItem>
          <NavLink to="/">Index</NavLink>
        </NavItem>
        {pages.map(page => (
          <NavItem key={page}>
            <NavLink to={`/${page}`}>{page}</NavLink>
          </NavItem>
        ))}
        <NavItem>
          <a
            rel="noopener"
            href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!"
          >
            Contact
          </a>
        </NavItem>
      </Nav>
    </MenuWrapper>
  )
}
export default Menu
