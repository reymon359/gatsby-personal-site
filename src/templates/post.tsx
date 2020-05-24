import React from 'react';
import {Link, graphql} from 'gatsby';
import {styled} from '../styles/theme';

import Layout from '../components/layout';
import Head from '../components/head';

interface Props {
  readonly data: PageQueryData;
  readonly pageContext: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    previous?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const PostTemplate: React.FC<Props> = ({data, pageContext}) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const {previous, next} = pageContext;

  return (
    <Layout title={siteTitle}>
      <Head title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
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
      date: string;
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default PostTemplate;
