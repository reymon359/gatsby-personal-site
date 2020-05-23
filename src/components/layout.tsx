import React from 'react';
import Navigation from './Navigation';
import {GlobalStyle} from '../styles/theme';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => (
  <>
    <GlobalStyle />
    {children}
    <Navigation location={location}></Navigation>
  </>
);

export default Layout;
