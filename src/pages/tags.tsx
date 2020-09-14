import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {Tag} from '../types';
import Tags from '../components/Tags';

interface TagsPageProps {
  readonly data: PageQueryData;
}

const TagsPage: React.FC<TagsPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const tags: Tag[] =
    data.allMarkdownRemark &&
    data.allMarkdownRemark.group.sort((a, b) => b.totalCount - a.totalCount);

  return (
    <Layout title={siteTitle}>
      <Head
        title="All tags"
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
        <Tags tags={tags} />
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

export default TagsPage;
