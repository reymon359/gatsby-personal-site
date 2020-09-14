import React from 'react';
import Projects from './Projects';
import {Work} from '../../types';

interface ProjectsContainerProps {
  projects: Work[];
}

const ProjectsContainer: React.FC<ProjectsContainerProps> = ({projects}) => {
  return <Projects projects={projects} />;
};

export default ProjectsContainer;
