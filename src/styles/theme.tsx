import styled, {css, createGlobalStyle} from 'styled-components';

export {css, styled};

export const theme = {
  colors: {
    blue900: '#1e2733',
    gray500: '#94989E',
    gray700: '#656a73',
    yellow500: '#EBC86E',
    yellow700: '#6b6349'
    // black: '#000000',
    // background: '#fffff8',
    // contrast: '#111',
    // contrastLightest: '#dad9d9',
    // accent: 'red',
    // white: '#ffffff'
  }
};

const reset = () => `
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0 !important;
  padding: 0;
}

::selection {
  background-color: ${theme.colors.contrastLightest};
  color: rgba(0, 0, 0, 0.70);
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

figure {
  a.gatsby-resp-image-link {
    background: none;
  }

  span.gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
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
  font-size: 16px;
  ${media.xl`
    font-size: 14px;
  `}
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
