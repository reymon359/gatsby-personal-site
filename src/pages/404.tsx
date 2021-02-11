import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stars from '../components/Stars'
import Content from '../components/Content'
import NotFound from '../components/NotFound'
import {TitlePageQueryData} from '../types'

interface NotFoundPageProps {
  readonly data: TitlePageQueryData
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head
        title="404: Not Found"
        image="/images/sup_seal.gif"
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
      <Content fullHeight={false}>
        <NotFound />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...SiteTitle
    }
  }
`

export default NotFoundPage
