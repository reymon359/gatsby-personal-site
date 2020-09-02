import React from 'react';
import {graphql} from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import {AboutContainer} from '../components/About';

interface AboutProps {
  readonly data: PageQueryData;
}

const About: React.FC<AboutProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Head
        title="About"
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
        <AboutContainer />
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

export default About;
