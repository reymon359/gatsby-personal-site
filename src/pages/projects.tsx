import React from 'react'
import {graphql} from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import Content from '../components/Content'
import Projects from '../components/Projects'
import {TitlePageQueryData} from '../types'

interface ProjectsPageProps {
  readonly data: TitlePageQueryData
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head
        title="Projects"
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
        <Projects />
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

export default ProjectsPage
