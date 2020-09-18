import React from 'react'
import {NavigationContainer} from './Navigation'
import {ThemeProvider} from 'styled-components'
import {theme, GlobalStyle} from '../styles/'

type LayoutProps = {
  readonly title?: string
  readonly children: React.ReactNode
  readonly transparentNavigation?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  transparentNavigation = false
}) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main role="main">{children}</main>
      <NavigationContainer transparentNavigation={transparentNavigation} />
    </ThemeProvider>
  </>
)

export default Layout
