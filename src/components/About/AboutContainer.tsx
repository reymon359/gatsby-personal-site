import React from 'react';
import styled from 'styled-components';
import Intro from '../Intro';
import {AboutMe} from './AboutMe';
import {Image} from './Image';

const Information = styled.div``;

export const NavigationContainer: React.FC = () => {
  return (
    <>
      <Information>
        <Intro fixed={false} />
        <AboutMe />
      </Information>
      <Image />
    </>
  );
};
