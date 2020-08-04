import React from 'react';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Stars from '../components/Stars';
import Content from '../components/Content';

interface Props {
  readonly data: PageQueryData;
  readonly pageContext: {
    previous?: any;
    next?: any;
  };
}

const StyledUl = styled('ul')`
  list-style-type: none;

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }
`;

const Header = styled.div`
  padding-left: 1rem;
`;
const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`;
const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.thin};
  letter-spacing: 0.1rem;
  padding: 1rem 0;
`;

const ItemTags = styled.div`
  padding: 0.6rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.3rem;
  align-content: center;
`;

const Tag = styled(Link)`
  padding: 0.4rem 0.6rem;
  height: 1.5rem;
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
const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.thin};
  padding: 1rem 0 2rem 0;
`;
const PostTemplate: React.FC<Props> = ({data, pageContext}) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const {previous, next} = pageContext;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <Layout title={siteTitle}>
      <Head
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={[
          `blog`,
          `gatsby`,
          `typescript`,
          `javascript`,
          `portfolio`,
          `react`
        ]}
      />
      <Stars
        normalVelocity={0.0001}
        containerOpacity={0.3}
        addEventListeners={false}
      />
      <Content>
        <article>
          <Header>
            <Title>{post.frontmatter.title}</Title>
            <Description>{post.frontmatter.description}</Description>
            <ItemTags>
              {post.frontmatter.tags &&
                post.frontmatter.tags.sort().map(tag => (
                  <Tag to={`/tags/${tag}/`} key={tag}>
                    {tag}
                  </Tag>
                ))}
            </ItemTags>
            <Date>{post.frontmatter.date}</Date>
            <div style={{width: '100%', height: 'auto'}}>
              <Img fluid={featuredImgFluid} />
            </div>
          </Header>

          <div className={`page-content`}>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <StyledUl>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </StyledUl>
          </div>
        </article>
      </Content>
    </Layout>
  );
};

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id?: string;
    excerpt?: string;
    html: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: [string];
      featuredImage: any;
    };
  };
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 2500)
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
