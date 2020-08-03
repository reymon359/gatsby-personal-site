import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Tooltip} from 'react-tippy';
import Img from 'gatsby-image';

const ItemContainer = styled.article`
  transition: 0.2s ease;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  ${props => props.theme.media.md`
     flex-direction:  column-reverse;
  `}

  &:hover {
    background-color: ${props => props.theme.colors.light + '40'};
  }
`;

const ItemHeader = styled.div`
  max-width: 70%;
  ${props => props.theme.media.md`
    max-width: 100%;
  `}
`;

const ItemTitle = styled(Link)`
  color: ${props => props.theme.colors.lightest};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
const ItemTags = styled.div`
  padding: 0.6rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.3rem;
`;

const Tag = styled(Link)`
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
  transition: 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
  }
`;
const ItemDate = styled(Link)`
  max-width: 30%;
  padding-bottom: 0.4rem;
  color: ${props => props.theme.colors.mediumLight};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.regular};

  &:hover {
    font-weight: ${props => props.theme.fontWeights.regular};
  }

  ${props => props.theme.media.md`
    max-width: 100%;
  `}
`;

interface Node {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    title: string;
    featuredImage: any;
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
    <Tooltip
      // options
      title="Welcome to React"
      position="bottom"
      followCursor={true}
      html={
        <div style={{width: '200px'}}>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          {/*<img*/}
          {/*  src={node.frontmatter.featuredImage.childImageSharp.fluid}*/}
          {/*  alt={title}*/}
          {/*  width="500"*/}
          {/*  height="600"*/}
          {/*></img>*/}
        </div>
      }
    >
      <ItemContainer>
        <ItemHeader>
          <ItemTitle to={node.fields.slug}>{title}</ItemTitle>
          <ItemTags>
            {tags &&
              tags.sort().map(tag => (
                <Tag to={`/tags/${tag}/`} key={tag}>
                  {tag}
                </Tag>
              ))}
          </ItemTags>
        </ItemHeader>
        <ItemDate to={node.fields.slug}>{node.frontmatter.date}</ItemDate>
      </ItemContainer>{' '}
    </Tooltip>
  );
};
