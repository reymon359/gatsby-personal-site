import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';

type ItemContainerProps = {
  hasLink?: boolean;
};

const ItemContainer = styled.article<ItemContainerProps>`
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.colors.light + '40'};
  }
`;

const ItemHeader = styled.div``;
const ItemDate = styled.p`
  padding-bottom: 0.2rem;
  color: ${props => props.theme.colors.mediumLight};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const ItemTitle = styled.h3`
  color: ${props => props.theme.colors.lightest};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
const ItemTags = styled.div`
  padding: 0.2rem 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.3rem;
`;
const Tag = styled.div`
  padding: 0.4rem 0.6rem;
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: 3rem;
  margin: 0.2rem;
  text-decoration: none;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
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
          <ItemDate>{node.frontmatter.date}</ItemDate>
          <ItemTitle>{title}</ItemTitle>
          <ItemTags>
            {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </ItemTags>
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
