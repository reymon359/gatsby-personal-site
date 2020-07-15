import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Content from '../components/Content';
import Stars from '../components/Stars';
import {PostsList} from '../components/postsList';

interface BlogProps {
  readonly data: PageQueryData;
}

const Blog: React.FC<BlogProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

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
        containerOpacity={0.15}
        addEventListeners={false}
      />
      <Content>
        <article>
          <div className={`page-content`}>
            <h1>Things I do and write about to be useful to others</h1>
            <p>Search</p>
            <p>Tags</p>
            {/*<Search/>*/}
            {/*<Tags/>  redirect to tags with the tag selected*/}
            <PostsList posts={posts}/>
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
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default Blog;
