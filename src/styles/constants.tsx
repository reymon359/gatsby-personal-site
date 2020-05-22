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
  xs: (...args: string[]) => css`
    @media (max-width: ${mq.xs}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  sm: (...args: string[]) => css`
    @media (max-width: ${mq.sm}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  md: (...args: string[]) => css`
    @media (max-width: ${mq.md}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  lg: (...args: string[]) => css`
    @media (max-width: ${mq.lg}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  xl: (...args: string[]) => css`
    @media (max-width: ${mq.xl}) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  hover: (...args: string[]) => css`
    @media not all and (hover: none) {
      // @ts-ignore
      ${css(...args)}
    }
  `
};

const rule = (d, v) => `${d}: ${v};`;

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `;
