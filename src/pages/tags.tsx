import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stars from '../components/Stars'
import Content from '../components/Content'
import Tags from '../components/Tags'
import {TitlePageQueryData} from '../types'

interface TagsPageProps {
  readonly data: TitlePageQueryData
}

const TagsPage: React.FC<TagsPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head
        title="All tags"
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
        <Tags />
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
export default TagsPage
