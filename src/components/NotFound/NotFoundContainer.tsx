import React from 'react'
import NotFound from './NotFound'
import {components} from '../../data'

const NotFoundContainer: React.FC = () => {
  const {
    notFound: {notFoundImageSrc}
  } = components
  return <NotFound notFoundImageSrc={notFoundImageSrc} />
}

export default NotFoundContainer
