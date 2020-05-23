import {css} from 'styled-components';

// #011638
export const colors = {
  blue900: '#1e2733',
  gray500: '#94989E',
  gray700: '#656a73',
  yellow500: '#EBC86E',
  yellow700: '#6b6349'
};

export const fonts = {
  sansSerif: "'Roboto', stack-sans, sans-serif",
  mono: "'Roboto Mono', stack-mono, monospace"
};

export const spaces = {
  p500: '5rem',
  p400: '4rem',
  p300: '3rem',
  p200: '2rem',
  p100: '1rem',
  p50: '.5rem',
  p25: '.25rem'
};

export const mq = {
  xs: '22em',
  sm: '40em',
  md: '54em',
  lg: '78em',
  xl: '125em'
};

export const media = {
  xs: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${mq.xs}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  sm: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${mq.sm}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  md: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${mq.md}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  lg: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${mq.lg}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  xl: (...args: TemplateStringsArray[]) => css`
    @media (max-width: ${mq.xl}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  hover: (...args: TemplateStringsArray[]) => css`
    @media not all and (hover: none) {
      // @ts-ignore
      ${css(...args)}
    }
  `
};

const rule = (
  property: TemplateStringsArray,
  value: string
): TemplateStringsArray =>
  // @ts-ignore
  `${property}: ${value};`;

export const addRemToProperty = (property: TemplateStringsArray) =>
  css`
    ${rule(property, '5rem')}
    ${media.lg`
      ${rule(property, '3rem')}
    `}
    ${media.md`
      ${rule(property, '3rem')}
    `}
    ${media.sm`
      ${rule(property, '2rem')}
    `}
  `;
