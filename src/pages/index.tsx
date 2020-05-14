import React from 'react';
import Intro from '../components/Intro';
import Head from '../components/Head';
import { META } from '../utils/constants';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      {/* TODO: refactor this part of code, all config in one site like gatsby
      config and get it with query */}
      <Head
        title={META.index.title}
        description={META.index.description}
        image={META.common.image}
      />
      <Intro fixed={true} />
    </section>
  </Layout>
);

export default IndexPage;
