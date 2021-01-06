import {createGlobalStyle} from 'styled-components'
import {theme} from './theme'

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
`

const styles = () => `
html, body {
  height: 100%;
  font-size: 14px;
}

body {
  background: ${theme.colors.primaryDark};
  color: ${theme.colors.lightest};
  font-family: ${theme.fontFamilies.primary};
  backface-visibility: hidden;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  line-height: inherit;
}

h2 {
  display: inline-block;
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.4rem 0;
}

h3 {
  display: inline-block;
  font-size: 1.5rem;
  margin-top: .7rem;
  margin-bottom: .7rem;
}

p {
  font-size: ${theme.fontSizes.medium};
  margin: 1.5rem 0;
  vertical-align: baseline;
}

strong {
  font-weight: ${theme.fontWeights.bold};
}

ul, ol {
  font-size: 1.2rem;
  padding: 1rem;
  margin-left: 1rem;
}

ul {
  list-style-type: circle;
}

ol {
  list-style-type: decimal;
}

li {
  padding: 0.2rem;
  
  p {
    margin: 0;
  }
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: color ease-in .2s;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.lightest};
  border-bottom: 1px dashed ${theme.colors.lightest};

  &:hover {
    border-bottom: 1px solid ${theme.colors.lightest};
  }
}

button:focus {
  outline:0;
}

* {
  box-sizing: border-box;
  line-height: 1.4em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}

blockquote{
  box-shadow: inset 3px 0 0 0 ${theme.colors.lighter};
  padding-left: 23px;
  font-style: italic;
}

img[src$=".gif"] {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 600px;
}

video {
  max-height: 500px;
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0.5rem auto;
}

figcaption {
  text-align: center;
  font-size: ${theme.fontSizes.normal};
  font-style: italic;
  margin: 2rem 0;
}

em {
  font-style: italic;
}

::selection {
  color: ${theme.colors.secondary};
  background: transparent;
}

.autolink-headers, .gatsby-resp-image-link {
  border-bottom: none;
  &:hover {
    border-bottom: none;
  }
}

table {
  font-size: ${theme.fontSizes.medium};
  margin: auto;
  width: 100%;
  max-width: 600px;
  overflow: auto;
}

table, tr, th, td {
  border: 1px solid ${theme.colors.mediumDark};
  padding: .5rem;
}

`

export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
`
