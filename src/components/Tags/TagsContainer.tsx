import React from 'react';
import Tags from './Tags';
import {Tag} from '../../types';

interface TagsContainerProps {
  tags: Tag[];
}

const TagsContainer: React.FC<TagsContainerProps> = ({tags}) => {
  return <Tags tags={tags} />;
};

export default TagsContainer;
