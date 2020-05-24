import React from 'react';
import {Link, graphql} from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

interface Props {
  readonly data: PageQueryData;
}

const Tags: React.FC<Props> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const group = data.allMarkdownRemark && data.allMarkdownRemark.group;

  return (
    <Layout title={siteTitle}>
      <Head
        title="All tags"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <article>
        <h1>All tags</h1>
        <div className={`page-content`}>
          {group &&
            group.map(
              tag =>
                tag && (
                  <div key={tag.fieldValue}>
                    <h3>
                      <Link to={`/tags/${tag.fieldValue}/`}>
                        {tag.fieldValue}
                      </Link>
                    </h3>
                    <small>
                      {tag.totalCount} post
                      {tag.totalCount === 1 ? '' : 's'}
                    </small>
                  </div>
                )
            )}
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
    group: {
      fieldValue: string;
      totalCount: number;
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
    allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
