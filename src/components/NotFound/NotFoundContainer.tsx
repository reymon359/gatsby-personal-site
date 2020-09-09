import React from 'react';
import {NotFound} from './NotFound';

export const NotFoundContainer: React.FC = () => {
  const imageSrc = '../../../images/sup_seal.gif';
  return <NotFound notFoundImageSrc={imageSrc} />;
};
