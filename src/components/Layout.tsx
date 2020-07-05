import React from 'react';
import {NavigationContainer} from './Navigation';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles/';

type LayoutProps = {
  readonly title?: string;
  readonly children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main role="main">{children}</main>
      <NavigationContainer />
    </ThemeProvider>
  </>
);

export default Layout;
