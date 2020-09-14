import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Home from '../components/Home';

interface IndexPageProps {
  readonly data: PageQueryData;
}

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
  const siteTitle: string = data.site.siteMetadata.title;
  return (
    <Layout title={siteTitle} transparentNavigation={true}>
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
        <Home />
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

export default IndexPage;
