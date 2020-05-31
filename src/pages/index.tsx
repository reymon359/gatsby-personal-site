import React from 'react';
import {graphql} from 'gatsby';
import Intro from '../components/Intro';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';

interface IndexProps {
  readonly data: PageQueryData;
}

const Index: React.FC<IndexProps> = ({data}) => {
  const siteTitle: string = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Stars />
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
