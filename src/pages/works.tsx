import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {PostsList} from '../components/postsList';

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
        <h1>Work</h1>
        <h4>Things I do and write about</h4>
        {/*<Search/>*/}
        {/*<Tags/>  redirect to tags with the tag selected*/}
        <h4>Latest posts</h4>
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
