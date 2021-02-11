import {css} from 'styled-components'

export const theme = {
  colors: {
    // Palette
    primary: '#255799',
    primaryLight: '#5b98e8',
    primaryDark: '#090f17',
    secondary: '#ebc86e',
    secondaryLight: '#f6dea5',
    secondaryDark: '#6b6349',

    info: '#0284fe',
    warning: '#d6ae3e',
    danger: '#D93025',
    dangerLight: '#ff9089',
    success: '#0ba063',
    successLight: '#72d5ac',

    // Monochrome
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumLight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumDark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    black: '#000000'

    // border: 'rgba(0,0,0,.1)',
    // boxShadowsmall: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    // boxShadowmedium: '0 1px 2px 0 rgba(0, 0, 0, 0.6)',
    // boxShadowlarge: '0 1px 2px 0 rgba(0, 0, 0, 0.6)',
  },
  fontFamilies: {
    primary:
      '"Roboto", stack-sans, "Open Sans", "Lato", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    mono: "'Roboto Mono', stack-mono, monospace"
  },
  fontWeights: {
    thin: 200,
    regular: 400,
    bold: 600,
    extraBold: 800
  },
  fontSizes: {
    small: '.8rem',
    normal: '1rem',
    medium: '1.25rem',
    mediumLarge: '1.5rem',
    large: '1.7rem',
    xLarge: '2rem',
    xxLarge: '36px',
    xxxLarge: '48px',
    xxxxLarge: '72px'
  },
  buttons: {
    primary: {color: '#ffffff', bg: '#0284fe', light: '#cce6ff'},
    secondary: {color: '#ffffff', bg: '#fe7c02', light: '#ffe5cc'},
    terciary: {color: '#ffffff', bg: '#666666', light: '#eeeeee'}
  },
  spaces: {
    p500: '5rem',
    p400: '4rem',
    p300: '3rem',
    p200: '2rem',
    p100: '1rem',
    p50: '.5rem',
    p25: '.25rem'
  },
  mq: {
    xs: '22em',
    sm: '40em',
    md: '54em',
    lg: '78em',
    xl: '125em'
  },
  media: {
    max: {
      xs: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.xs}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      sm: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.sm}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      md: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.md}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      lg: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.lg}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      xl: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.xl}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      hover: (...args: TemplateStringsArray[]) => css`
        @media not all and (hover: none) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `
    },
    min: {
      xs: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.xs}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      sm: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.sm}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      md: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.md}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      lg: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.lg}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      xl: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.xl}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      hover: (...args: TemplateStringsArray[]) => css`
        @media not all and (hover: none) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `
    }
  }
}
