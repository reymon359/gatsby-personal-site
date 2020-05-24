import React from 'react';
import Navigation from './Navigation';
import {GlobalStyle} from '../styles/theme';

type LayoutProps = {
  readonly title?: string;
  readonly children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => (
  <>
    <GlobalStyle />
    <main role="main">{children}</main>
    <Navigation></Navigation>
  </>
);

export default Layout;
