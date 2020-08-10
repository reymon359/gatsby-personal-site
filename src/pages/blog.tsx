import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {ContentListContainer} from '../components/ContentList';
import {Header, Title, Description, Section, SectionBody} from '../styles';
import {Work} from '../interfaces';

interface BlogProps {
  readonly data: PageQueryData;
}

const Blog: React.FC<BlogProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts: Work[] = data.allMarkdownRemark.edges.filter(
    work => work.node.frontmatter.type === 'post'
  );

  // const tags =[... new Set([].concat(...posts.map(post => post.node.frontmatter.tags)))]

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
        <Header>
          <Title>Blog</Title>
          <Description>Stuff I write about</Description>
        </Header>
        <Section>
          <SectionBody>
            <ContentListContainer content={posts} />
          </SectionBody>
        </Section>
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
          description: string;
          tags: string[];
          type: string;
          url: string;
          featuredImage: any;
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
            description
            tags
            type
            url
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

export default Blog;
