import React from 'react';
import Blog from './Blog';
import {Work} from '../../types';

interface BlogContainerProps {
  posts: Work[];
}

const BlogContainer: React.FC<BlogContainerProps> = ({posts}) => {
  return <Blog posts={posts} />;
};

export default BlogContainer;
