import React from 'react'
import Blog from './Blog'
import {Work} from '../../types'
import {graphql, useStaticQuery} from 'gatsby'

const BlogContainer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        filter: {frontmatter: {published: {ne: false}}}
        sort: {fields: [frontmatter___date], order: DESC}
      ) {
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
  `)

  const posts: Work[] = data.allMarkdownRemark.edges.filter(
    (work: Work) => work.node.frontmatter.type === 'post'
  )

  return <Blog posts={posts} />
}

export default BlogContainer
