import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stars from '../components/Stars'
import Content from '../components/Content'
import {ContentListContainer} from '../components/ContentList'
import {Header, Title, Section, SectionBody} from '../styles'
import {Work} from '../types'

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    tag: string
  }
}

const TagTemplate: React.FC<Props> = ({data, pageContext}) => {
  const {tag} = pageContext
  const siteTitle = data.site.siteMetadata.title
  const works: Work[] = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Head
        title={`Posts tagged "${tag}"`}
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
        <article>
          <Header>
            <Title>Works tagged {tag}</Title>
          </Header>
          <Section>
            <SectionBody>
              <ContentListContainer type={true} content={works} />
            </SectionBody>
          </Section>
        </article>
      </Content>
    </Layout>
  )
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          description: string
          tags: string[]
          type: string
          url: string
          featuredImage: any
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {tags: {in: [$tag]}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
            type
            url
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default TagTemplate
