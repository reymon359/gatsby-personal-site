import React from 'react';
import styled from 'styled-components';
import {PostsListItem} from './PostsListItem';

const PostsListContainer = styled.section`
  margin: 1.5rem auto 0;
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
      tags: string[];
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
