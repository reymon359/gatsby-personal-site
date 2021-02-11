import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Stars from '../components/Stars'
import Content from '../components/Content'
import {Header, Title, Description, ItemTags, Tag} from '../styles'
import Comments from '../components/Comments'

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    previous?: any
    next?: any
  }
}

const OtherPostsLinks = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;

  li {
    text-align: left;
    padding: 1rem;
    width: 50%;
    ${props => props.theme.media.max.md`
      width: 100%;
      text-align: center;
  `}
  }

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }

  li:nth-child(2) {
    text-align: right;
    ${props => props.theme.media.max.md`
      text-align: center;
  `}
  }

  a {
    border-bottom: none;
  }
`

const Date = styled.div`
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.thin};
  padding: 1rem 0 2rem 0;
`
const PostTemplate: React.FC<Props> = ({data, pageContext}) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const {previous, next} = pageContext
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const featuredImgFixed = post.frontmatter.featuredImage.childImageSharp.fixed
  return (
    <Layout title={siteTitle}>
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={featuredImgFixed.src}
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
            <Title>{post.frontmatter.title}</Title>
            <Description>{post.frontmatter.description}</Description>
            <ItemTags>
              {post.frontmatter.tags &&
                post.frontmatter.tags.sort().map(tag => (
                  <Tag to={`/tags/${tag}/`} key={tag}>
                    {tag}
                  </Tag>
                ))}
            </ItemTags>
            <Date>{post.frontmatter.date}</Date>
            <div style={{width: '100%', height: 'auto'}}>
              <Img fluid={featuredImgFluid} />
            </div>
          </Header>

          <div>
            <div
              style={{paddingLeft: '1rem', lineHeight: 1.6}}
              dangerouslySetInnerHTML={{__html: post.html}}
            />
            <Comments commentsUrl={post.frontmatter.commentsUrl} />
            <h2>Other posts</h2>
            <OtherPostsLinks>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </OtherPostsLinks>
          </div>
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
  markdownRemark: {
    id?: string
    excerpt?: string
    html: string
    frontmatter: {
      title: string
      description: string
      date: string
      tags: [string]
      commentsUrl: string
      featuredImage: any
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 2500)
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        commentsUrl
        featuredImage {
          childImageSharp {
            fixed {
              src
            }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
