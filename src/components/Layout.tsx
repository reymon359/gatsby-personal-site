import React from 'react';
import {NavigationContainer} from './Navigation';
import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from '../styles/';

type LayoutProps = {
  readonly title?: string;
  readonly children: React.ReactNode;
  readonly location?: Location | any;
};

const Layout: React.FC<LayoutProps> = ({children, location}) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main role="main">{children}</main>
      <NavigationContainer location={location || {}} />
    </ThemeProvider>
  </>
);

export default Layout;
