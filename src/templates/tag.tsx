import React from 'react';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/head';

interface Props {
  readonly data: PageQueryData;
  readonly pageContext: {
    tag: string;
  };
}

const TagTemplate: React.FC<Props> = ({data, pageContext}) => {
  const {tag} = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title={siteTitle}>
      <Head
        title={`Posts tagged "${tag}"`}
        keywords={[`blog`, `gatsby`, `javascript`, `react`, tag]}
      />
      <article>
        <header>
          <h1>Posts tagged {tag}</h1>
        </header>
        <div className={`page-content`}>
          {posts.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
              </div>
            );
          })}
        </div>
      </article>
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
    totalCount: number;
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
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 2500)
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;

export default TagTemplate;
