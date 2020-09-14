import React from 'react';
import Works from './Works';
import {Work} from '../../types';

interface WorksContainerProps {
  works: Work[];
}

const WorksContainer: React.FC<WorksContainerProps> = ({works}) => {
  const posts = works
    .filter(work => work.node.frontmatter.type === 'post')
    .slice(0, 3);

  const projects = works
    .filter(work => work.node.frontmatter.type === 'project')
    .slice(0, 3);

  return <Works posts={posts} projects={projects} />;
};

export default WorksContainer;
