import React from 'react';
import styled from 'styled-components';
import {ContentListItem} from './ContentListItem';
import {Work} from '../../interfaces';

const ContentListWrapper = styled.section`
  margin: 1.5rem auto 0;
`;

interface ContentListProps {
  readonly type?: boolean;
  readonly content: Work[];
}

export const ContentListContainer: React.FC<ContentListProps> = ({
  type,
  content
}) => {
  return (
    <ContentListWrapper>
      {content.map(({node}) => (
        <ContentListItem key={node.fields.slug} type={type} node={node} />
      ))}
    </ContentListWrapper>
  );
};
