import React from 'react';
import {graphql, Link} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {PostsList} from '../components/postsList';
import styled from 'styled-components';

const Header = styled.div`
  padding-left: 1rem;
`;
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
  padding: 1rem 0;
`;
const SectionHeader = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;
const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.mediumLarge};
  font-weight: ${props => props.theme.fontWeights.regular};
`;
const MoreLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  padding: 0.4rem 0.6rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  margin: 0.2rem 0 0.2rem 1rem;
  transition: 0.4s ease;

  &:hover {
    color: ${props => props.theme.colors.darkest};
    background-color: ${props => props.theme.colors.light};
  }
`;
const SectionBody = styled.div`
  padding: 0.2rem 0;
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
        <Header>
          <Title>Works</Title>
          <Description>Stuff I do and write about</Description>
        </Header>
        <Section>
          <SectionHeader>
            <SectionTitle>Latest posts</SectionTitle>
            <MoreLink to="/blog">All posts</MoreLink>
          </SectionHeader>
          <SectionBody>
            <PostsList posts={posts} />
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <SectionTitle>Latest projects</SectionTitle>
            <MoreLink to="/blog">All projects</MoreLink>
          </SectionHeader>
          <SectionBody>
            <PostsList posts={posts} />
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
      limit: 3
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
            tags
          }
        }
      }
    }
  }
`;

export default Works;
