import React from 'react';
import Navigation from './Navigation';
import {GlobalStyle} from '../styles/global';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => (
  <main>
    <GlobalStyle />
    {children}
    <Navigation location={location}></Navigation>
  </main>
);

export default Layout;
