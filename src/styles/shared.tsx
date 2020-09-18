import styled, {css} from 'styled-components'
import {theme} from './theme'
import {Link} from 'gatsby'

export const ContentWrapper = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  ${theme.media.max.lg`
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}

  ${theme.media.max.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}

  ${theme.media.max.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${theme.colors.mediumDark};
  padding: 0.3rem 0;
  line-height: 1.6em;
`

const rule = (property: string, value: string): TemplateStringsArray =>
  // @ts-expect-error needed
  `${property}: ${value};`

export const addRemToProperty = (property: string) =>
  css`
    ${rule(property, '5rem')}
    ${theme.media.max.lg`
      ${rule(property, '3rem')}
    `}
    ${theme.media.max.md`
      ${rule(property, '3rem')}
    `}
    ${theme.media.max.sm`
      ${rule(property, '2rem')}
    `}
  `

export const Header = styled.div`
  padding-left: 1rem;
  margin-bottom: 1.5rem;
`
export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`
export const Description = styled.div`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.thin};
  letter-spacing: 0.1rem;
  padding: 1rem 0;
`

export const Section = styled.div`
  padding: 1rem 0;
`

export const SectionBody = styled.div`
  padding: 0.2rem 0;
`
export const ItemTags = styled.div`
  padding: 0.6rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.3rem;
  align-content: center;
`

export const Tag = styled(Link)`
  padding: 0.4rem 0.6rem;
  height: 1.5rem;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: 3rem;
  margin: 0.2rem;
  text-decoration: none;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  transition: 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
  }
`
