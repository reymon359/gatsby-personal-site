import React from 'react'
import {graphql} from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import Content from '../components/Content'
import Blog from '../components/Blog'
import {TitlePageQueryData} from '../types'

interface BlogPageProps {
  readonly data: TitlePageQueryData
}

const BlogPage: React.FC<BlogPageProps> = ({data}) => {
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
        <Blog />
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

export default BlogPage
