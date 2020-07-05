import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

interface Props {
  readonly data: PageQueryData;
}

export default class NotFoundPage extends React.Component<Props> {
  render() {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <Head title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

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
