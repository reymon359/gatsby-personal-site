import React from 'react';
import {graphql, Link} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {PostsList} from '../components/postsList';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`;
const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.thin};
  padding: 1rem 0 2rem 0;
`;

const Section = styled.div`
  margin: 0.2rem 0;
`;
const SectionHeader = styled.div`
  display: flex;
  align-items: center;
`;
const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`;
const MoreLink = styled(Link)`
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.light + '40'};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  padding: .4rem .6rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  margin: .2rem 0 .2rem 1rem;
  transition: 0.4s ease;
  
  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${(props) => props.theme.colors.light};
  }
`;
const SectionBody = styled.div`

`;

interface WorksProps {
  readonly data: PageQueryData;
}

interface Post {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      title: string;
      thumbnail: string;
      tags: string[];
    };
  };
}

const Works: React.FC<WorksProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts: Post[] = data.allMarkdownRemark.edges;

  return (
    <Layout title={siteTitle}>
      <Head
        title="Blog"
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
        <Title>Works</Title>
        <Description>Things I do and write about</Description>
        {/*<Search/>*/}
        {/*<Tags/>  redirect to tags with the tag selected*/}
        <Section>
          <SectionHeader>
            <SectionTitle>Latest posts</SectionTitle>
            <MoreLink to='/blog'>All posts</MoreLink>
          </SectionHeader>
          <SectionBody>
            <PostsList posts={posts}/>
          </SectionBody>
        </Section>
        <h4>Projects</h4>
        <p>List of projects</p>
        <PostsList posts={posts}/>
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
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          thumbnail: string;
          tags: string[];
        };
      };
    }[];
  };
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: {frontmatter: {published: {ne: false}}}
            sort: {fields: [frontmatter___date], order: DESC}
        ) {
            edges {
                node {
                    id
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMM DD, YYYY")
                        title
                        thumbnail
                        tags
                    }
                }
            }
        }
    }
`;

export default Works;
