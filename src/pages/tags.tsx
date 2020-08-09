import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {Description, Header, ItemTags, Tag, Title} from '../styles';

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
          <Title>All tags</Title>
          <Description>Stuff tags</Description>
        </Header>
        <article>
          <ItemTags>
            {group &&
              group.map(
                tag =>
                  tag && (
                    <Tag key={tag.fieldValue} to={`/tags/${tag.fieldValue}/`}>
                      {tag.fieldValue} -&nbsp;
                      <small>
                        {tag.totalCount} post
                        {tag.totalCount === 1 ? '' : 's'}
                      </small>
                    </Tag>
                  )
              )}
          </ItemTags>
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
