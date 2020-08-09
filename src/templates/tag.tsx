import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {PostsList} from '../components/postsList';
import {Header, Title, Section, SectionBody} from '../styles';
interface Props {
  readonly data: PageQueryData;
  readonly pageContext: {
    tag: string;
  };
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
      tags: string[];
      featuredImage: any;
    };
  };
}
const TagTemplate: React.FC<Props> = ({data, pageContext}) => {
  const {tag} = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts: Post[] = data.allMarkdownRemark.edges;

  return (
    <Layout title={siteTitle}>
      <Head
        title={`Posts tagged "${tag}"`}
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
            <Title>Stuff tagged {tag}</Title>
          </Header>
          <Section>
            <SectionBody>
              <PostsList posts={posts} />
            </SectionBody>
          </Section>
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
        id: string;
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          tags: string[];
          featuredImage: any;
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
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
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
    }
  }
`;

export default TagTemplate;
