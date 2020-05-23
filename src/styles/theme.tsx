import {css, createGlobalStyle} from 'styled-components';

export const colors = {
  blue900: '#1e2733',
  gray500: '#94989E',
  gray700: '#656a73',
  yellow500: '#EBC86E',
  yellow700: '#6b6349',
  grayBlue: '#1b242f',
  white: '#ffffff'

  // black: '#000000',
  // background: '#fffff8',
  // contrast: '#111',
  // contrastLightest: '#dad9d9',
  // accent: 'red',
  // white: '#ffffff'
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
/* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
const reset = () => `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

*[hidden] {
    display: none;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

const styles = () => `
@font-face {
  font-family: stack-mono;
  src: local(".SFNSText-Light");
}

@font-face {
  font-family: stack-sans;
  src: local(".SFNSText-Light");
}

html, body {
  height: 100%;
  font-size: 14px;
}

body {
  background: ${colors.blue900};
  color: #fff;
  font-family: ${fonts.sansSerif};
  backface-visibility: hidden;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  line-height: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color ease-in .2s;

  &:hover {
    color: #fff;
  }
}

* {
  box-sizing: border-box;
  line-height: 1.4em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}

::selection {
  color: ${colors.yellow500};
  background: transparent;
}
`;

export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
`;
