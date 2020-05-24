import React from 'react';
import {graphql} from 'gatsby';
import Intro from '../components/Intro';
import Head from '../components/Head';
import Layout from '../components/Layout';

interface IndexProps {
  readonly data: PageQueryData;
}

const Index: React.FC<IndexProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Head
        title="Home"
        keywords={[
          `blog`,
          `gatsby`,
          `typescript`,
          `javascript`,
          `portfolio`,
          `react`
        ]}
      />
      <section>
        <Intro fixed={true} />
      </section>
    </Layout>
  );
};

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Index;
