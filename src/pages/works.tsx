import React from 'react'
import {graphql} from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import Content from '../components/Content'
import Works from '../components/Works'
import {TitlePageQueryData} from '../types'

interface WorksPageProps {
  readonly data: TitlePageQueryData
}

const WorksPage: React.FC<WorksPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head
        title="Blog"
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
        <Works />
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

export default WorksPage
