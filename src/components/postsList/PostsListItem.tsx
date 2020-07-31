import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';

type ItemContainerProps = {
  hasLink?: boolean;
};

const ItemContainer = styled.article<ItemContainerProps>`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

 

  //&:last-child {
  //  border-bottom: 0;
  //}
  
   &:hover {
      background-color: ${props => props.theme.colors.light + '40'};
    }
  
  > a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    line-height: 0;
  }

  // ${props =>
  //   props.hasLink &&
  //   css`
  //     ${props => props.theme.media.hover`
  //     &:hover {
  //       > header {
  //         transform: translateX(-.75rem);
  //       }
  //     }
    `}
    `}
`;

const ItemHeader = styled.div`
`;
const ItemTitle = styled.h3`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 400;
`;

const ItemInfo = styled.div`
  margin-top: 0.5rem;
  font-family: ${props => props.theme.mono};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.mediumDark};
`;

const ItemYear = styled.span`
  color: #fff;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 1px;
    width: 1rem;
    background: ${props => props.theme.secondary};
    margin-right: 0.5rem;
  }
`;

interface Node {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    tags: string[];
  };
}

interface PostsListItemProps {
  readonly node: Node;
}

export const PostsListItem: React.FC<PostsListItemProps> = ({node}) => {
  const title = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <Link to={node.fields.slug}>
      <ItemContainer hasLink={node.fields.slug !== null}>
        <ItemHeader>
          <ItemTitle>{title}</ItemTitle>
          <ItemInfo>
            {tags && <span> {tags.map(tag => tag).join(', ')}</span>}
          </ItemInfo>
        </ItemHeader>
        <ItemInfo>
          <ItemYear>{node.frontmatter.date}</ItemYear>
        </ItemInfo>
      </ItemContainer>
    </Link>
  );
};
