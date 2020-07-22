import React, {useMemo} from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Content from '../components/Content';
import Stars from '../components/Stars';
import {PostsList} from '../components/postsList';

import {getSimplifiedPosts} from '../utils/posts';
import Search from '../components/Search';

interface BlogProps {
  readonly data: PageQueryData;
  readonly location: Location;
  readonly navigate: void;
}

interface SimplifiedPost {
  id: string;
  date: string;
  slug: string;
  tags: string[];
  title: string;
  thumbnail: string;
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

const Blog: React.FC<BlogProps> = ({data, location, navigate}) => {
  console.log(navigate);
  const siteTitle = data.site.siteMetadata.title;
  const posts: Post[] = data.allMarkdownRemark.edges;
  const simplifiedPosts: SimplifiedPost[] = useMemo(
    () => getSimplifiedPosts(posts),
    [posts]
  );

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
        <h1>Blog</h1>
        <h4>Things I do and write about to be useful to others</h4>
        <Search
          posts={simplifiedPosts}
          location={location}
          navigate={navigate}
        />
        <p>Tags</p>
        {/*<Search/>*/}
        {/*<Tags/>  redirect to tags with the tag selected*/}
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
            date(formatString: "YYYY")
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;

export default Blog;
