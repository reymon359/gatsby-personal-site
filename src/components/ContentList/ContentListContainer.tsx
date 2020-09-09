import React from 'react';
import {ContentList} from './ContentList';
import {Work} from '../../types';



interface ContentListProps {
  readonly type?: boolean;
  readonly content: Work[];
}

export const ContentListContainer: React.FC<ContentListProps> = ({
  type,
  content
}) => {
  return (
    <>
      {content.map(({node}) => (
        <ContentList key={node.fields.slug} type={type} node={node} />
      ))}
    </>
  );
};
