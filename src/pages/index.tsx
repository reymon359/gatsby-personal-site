import React from 'react'
import {graphql} from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import Home from '../components/Home'
import {TitlePageQueryData} from '../types'

interface IndexPageProps {
  readonly data: TitlePageQueryData
}

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
  const siteTitle: string = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} transparentNavigation={true}>
      <Stars />
      <Head
        title="Home"
        image="/images/main_site.jpg"
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
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...SiteTitle
    }
  }
`

export default IndexPage
