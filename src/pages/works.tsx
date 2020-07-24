import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {PostsList} from '../components/postsList';
import styled from 'styled-components';
import {addRemToProperty} from '../styles';

const Title =  styled.h1`
  font-size: ${props => props.theme.fontSizes.xLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`;
const Description =  styled.p`
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.thin};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.la};
  font-weight: ${props => props.theme.fontWeights.regular};
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
        <description>Things I do and write about</description>
        {/*<Search/>*/}
        {/*<Tags/>  redirect to tags with the tag selected*/}
        <SectionTitle>Latest posts</SectionTitle>
        <button>All posts</button>
        <PostsList posts={posts} />
        <h4>Projects</h4>
        <p>List of projects</p>
        <PostsList posts={posts} />
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
