import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';


type WrapperProps = {
  hasLink?: boolean;
};

const Wrapper = styled.article<WrapperProps>`
  padding: 1.3rem 0;
  border-bottom: 1px dotted #2f3743;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  > header {
    transform: translateX(0);
    transition: transform .5s cubic-bezier(.5, .1, 0, 1.15);
    backface-visibility: hidden;
    will-change: transform;
  }

  &:last-child {
    border-bottom: 0;
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

  ${props => props.hasLink && css`
    ${props => props.theme.media.hover`
      &:hover {
        > header {
          transform: translateX(-.75rem);
        }
      }
    `}
  `}
`;

const WorkTitle = styled.h3`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 400;
`;

const WorkInfos = styled.div`
  margin-top: .5rem;
  font-family: ${props => props.theme.mono};
  font-size: .9rem;
  color: ${props => props.theme.mediumDark};
`;

const WorkYear = styled.span`
  color: #fff;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 1px;
    width: 1rem;
    background: ${props => props.theme.secondary};
    margin-right: .5rem;
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
  };
}

interface PostsListItemProps {
  readonly node: Node;
}

export const PostsListItem: React.FC<PostsListItemProps> = ({node}) => {
  const title = node.frontmatter.title || node.fields.slug;

  return (
    // <>
    //
    //
    //     return (
    //       <div key={node.fields.slug}>
    //         <h3>
    //           <Link to={node.fields.slug}>{title}</Link>
    //         </h3>
    //         <small>{node.frontmatter.date}</small>
    //         <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
    //       </div>
    //     );
    //   })}
    // </>
    <Wrapper hasLink={node.fields.slug !== null}>
      <header>
        <WorkTitle>{title}</WorkTitle>
        <WorkInfos>
          {/*<span>{node.frontmatter.title}</span>*/}
          {/*{collaborators && <span> w/ {collaborators.map(c => c).join(', ')}</span>}*/}
        </WorkInfos>
      </header>
      <WorkInfos>
        <WorkYear>{node.frontmatter.date}</WorkYear>
      </WorkInfos>
      {/*{url && <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>}*/}
    </Wrapper>
  );
};
