import React from 'react';
import styled from 'styled-components';
import {PostsListItem} from './PostsListItem';

const PostsListContainer = styled.section`
  max-width: 80%;
  margin: 8rem auto 0;
  ${props => props.theme.media.lg`
    max-width: 100%;
  `}
  ${props => props.theme.media.sm`
    margin: 4rem auto 0;
  `}
`;

interface Post {
  node: {
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
    };
  };
}

interface PostsListProps {
  readonly posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({posts}) => {
  return (
    <PostsListContainer>
      {posts.map(({node}) => (
        <PostsListItem key={node.fields.slug} node={node} />
      ))}
    </PostsListContainer>
  );
};
