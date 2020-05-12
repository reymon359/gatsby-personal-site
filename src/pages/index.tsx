import React from 'react';
import Intro from '../components/Intro';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <Intro fixed={true} />
    </section>
  </Layout>
);

export default IndexPage;
