import React from 'react';
import Navigation from './Navigation';
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
    <Navigation />
    </ThemeProvider>
  </>
);

export default Layout;
