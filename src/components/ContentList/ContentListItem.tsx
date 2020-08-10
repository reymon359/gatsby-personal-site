import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Tooltip} from 'react-tippy';
import Img from 'gatsby-image';
import {ItemTags, Tag} from '../../styles';

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

const ItemDescription = styled.div`
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.medium};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const ItemDate = styled(Link)`
  max-width: 30%;
  padding-top: 1rem;
  padding-bottom: 0.4rem;
  color: ${props => props.theme.colors.mediumLight};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.regular};

  &:hover {
    font-weight: ${props => props.theme.fontWeights.regular};
  }

  ${props => props.theme.media.md`
    padding-top: 0;
    max-width: 100%;
  `}
`;

const TypeTag = styled(Tag)`
  color: ${props => props.theme.colors.darkest};
  background-color: ${props => props.theme.colors.light};
  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
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
    description: string;
    featuredImage: any;
    tags: string[];
    type: string;
    url: string;
  };
}

interface ContentListItemProps {
  readonly type?: boolean;
  readonly node: Node;
}

export const ContentListItem: React.FC<ContentListItemProps> = ({
  type = false,
  node
}) => {
  const title = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;
  const workType = node.frontmatter.type;
  console.log(node.frontmatter);
  // const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    // <Tooltip
    //   position="top"
    //   followCursor={true}
    //   html={
    //     <div style={{width: '20rem'}}>
    //       <Img fluid={featuredImgFluid} />
    //     </div>
    //   }
    // >
    <ItemContainer>
      <ItemHeader>
        <ItemTitle to={node.fields.slug}>{title}</ItemTitle>
        <ItemDescription>{node.frontmatter.description}</ItemDescription>
        <ItemTags>
          {type && (
            <TypeTag
              to={`/${workType === 'project' ? 'projects' : 'blog'}`}
              key={workType}
            >
              {workType}
            </TypeTag>
          )}
          {tags &&
            tags.sort().map(tag => (
              <Tag to={`/tags/${tag}/`} key={tag}>
                {tag}
              </Tag>
            ))}
        </ItemTags>
      </ItemHeader>
      <ItemDate to={node.fields.slug}>{node.frontmatter.date}</ItemDate>
    </ItemContainer>
    // </Tooltip>
  );
};