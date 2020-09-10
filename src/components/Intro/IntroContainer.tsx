import React from 'react';
import Intro from './Intro';
import {components} from '../../data';

type IntroContainerProps = {
  fixed: boolean;
};

export const IntroContainer: React.FC<IntroContainerProps> = ({
  fixed = true
}) => {
  const {
    intro: {title}
  } = components;

  return <Intro fixed={fixed} title={title} />;
};
