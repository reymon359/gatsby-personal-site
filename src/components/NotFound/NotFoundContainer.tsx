import React from 'react';
import {NotFound} from './NotFound';
import {components} from '../../data';

export const NotFoundContainer: React.FC = () => {
  const {
    notFound: {notFoundImageSrc}
  } = components;
  return <NotFound notFoundImageSrc={notFoundImageSrc} />;
};
