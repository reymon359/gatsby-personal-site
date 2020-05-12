import React from 'react';
import Intro from '../components/Intro';
import Head from '../components/Head';
import { META } from '../utils/constants';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <Head {...META.index} image={META.common.image} />
      <Intro fixed={true} />
    </section>
  </Layout>
);

export default IndexPage;
